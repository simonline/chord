<template>
  <v-app>
    <v-navigation-drawer
        color="#766bf5"
        width="350px"
        permanent
        absolute
    >
      <Controls
        :objects.sync="objects"
      />
    </v-navigation-drawer>
    <v-main
      class="main"
    >
      <Chart
        :objects="activeObjects"
        :correlations="correlations"
        :key="activeObjects.length"
      />
    </v-main>
  </v-app>
</template>

<style>
.v-application {
  background-color: var(--v-background-base) !important;
}
.main {
  padding-left: 400px !important;
}
</style>

<script>
import Controls from './components/Controls';
import Chart from './components/Chart';
import * as XLSX from "xlsx";
import * as input_file from "../data/input.xlsx";

const getObjects = (data) => {
  return data.map((o) => {
    o.active = true;
    return o;
  })
}

const workbook = XLSX.read(input_file);
const objectsData = XLSX.utils.sheet_to_json(workbook.Sheets["Objekte"]);
const correlationsData = XLSX.utils.sheet_to_json(workbook.Sheets["Korrelationen"]);
const objects = getObjects(objectsData);

export default {
  name: 'App',

  components: {
    Controls,
    Chart,
  },

  data: () => {
    return {
      objects,
    }
  },

  computed: {
    activeObjects: function () {
      return this.objects.filter((o) => o.active);
    },
    correlations: function () {
      const correlations = [];
      for (const [i, object] of this.activeObjects.entries()) {
        if (correlationsData.length <= object.ID) continue;
        for (const [j, relation] of this.activeObjects.entries()) {
          const quantity = correlationsData[object.ID][relation.ID];
          if (typeof quantity !== "number") continue;
          correlations.push({
            from: i,
            to: j,
            quantity
          });
        }
      }
      return correlations;
    }
  },
};
</script>

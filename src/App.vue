<template>
  <v-app>
    <v-navigation-drawer
        color="#766bf5"
        width="350px"
        permanent
        absolute
    >
      <Controls
        :objects="objects"
      />
    </v-navigation-drawer>
    <v-main
      class="main"
    >
      <Chart
        :objects="objects"
        :correlations="correlations"
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

const getCorrelations = (data, objects) => {
  const correlations = [];
  for (const object of objects) {
    for (const relation of objects) {
      if (data.length <= object.ID) continue;
      const quantity = data[object.ID][relation.ID];
      if (typeof quantity !== "number") continue;
      correlations.push({
        from: object.ID,
        to: relation.ID,
        quantity
      })
    }
  }
  console.log(correlations);
  return correlations;
}

export default {
  name: 'App',

  components: {
    Controls,
    Chart,
  },

  data: () => {
    var workbook = XLSX.read(input_file);
    var objects = XLSX.utils.sheet_to_json(workbook.Sheets["Objekte"]);
    var correlationsData = XLSX.utils.sheet_to_json(workbook.Sheets["Korrelationen"]);
    return {
      objects,
      correlations: getCorrelations(correlationsData, objects),
    };
  },
};
</script>

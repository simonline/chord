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

const getCorrelations = (data) => {
  const correlations = [];
  for (const row of data) {
    for (const [i, quantity] in Object.entries(row)) {
      if (typeof quantity !== "number") continue;
      correlations.push({
        from: row.__EMPTY,
        to: i + 1,
        quantity
      })
    }
  }
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
      correlations: getCorrelations(correlationsData),
    };
  },
};
</script>

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
        :showGroup.sync="showGroup"
        :highlightItem.sync="highlightItem"
        :indirect.sync="indirect"
        v-on:update:file="loadFile"
        v-on:update:url="loadURL"
        :key="generateKey()"
      />
    </v-navigation-drawer>
    <v-main
      class="main"
    >
      <Chart
        :objects="activeObjects"
        :correlations="correlations"
        :highlightItem.sync="highlightItem"
        :indirect="indirect"
        :key="generateKey()"
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

const getObjects = (data) => {
  return data.map((o) => {
    o.active = true;
    return o;
  })
}

export default {
  name: 'App',

  components: {
    Controls,
    Chart,
  },

  data: () => {
    return {
      objectsData: {},
      objects: [],
      correlationsData: {},
      showGroup: "",
      highlightItem: null,
      indirect: false,
    }
  },

  mounted() {
    if (window.location.hash) {
      this.loadURL(decodeURIComponent(window.location.hash.slice(1)));
    }
  },

  computed: {
    activeObjects: function () {
      return this.objects.filter((o) => o.active);
    },
    correlations: function () {
      const correlations = [];
      for (const [i, object] of this.activeObjects.entries()) {
        if (this.correlationsData.length <= object.ID) continue;
        for (const [j, relation] of this.activeObjects.entries()) {
          const quantity = this.correlationsData[object.ID][relation.ID];
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

  methods: {
    generateKey() {
      const colors = this.activeObjects.map((o) => o.Farbe).join("");
      return `${this.activeObjects.length}-${colors}-${this.indirect}`;
    },

    loadFile(data, url) {
      const workbook = XLSX.read(data);
      this.objectsData = XLSX.utils.sheet_to_json(workbook.Sheets["Objekte"]);
      this.correlationsData = XLSX.utils.sheet_to_json(workbook.Sheets["Korrelationen"]);
      this.objects = getObjects(this.objectsData);
      window.location.hash = url ? encodeURIComponent(url) : "";
    },

    loadURL(url) {
      fetch(url)
        .then(r => r.arrayBuffer())
        .then((file) => this.loadFile(file, url));
    },
  }
};
</script>

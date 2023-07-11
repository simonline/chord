<template>
  <v-container class="my-5">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          light
          v-bind="attrs"
          v-on="on"
          class="mb-4"
        >
          Öffnen
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          key="file"
        >
          <v-list-item-title @click="$refs.file.click()" class="file-input">
            Datei hochladen
            <input type="file" ref="file" @change="updateFile" style="display: none">
          </v-list-item-title>
        </v-list-item>
        <v-list-item
          key="url"
        >
          <v-list-item-title>
            <OpenUrlModal
              url.sync="url"
              v-on:update:url="updateURL"
            />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <ControlGroup
      :name="group"
      :items.sync="groups[group]"
      :showItems="showGroup === group"
      :highlightItem.sync="controlsHighlightItem"
      v-on:update:items="updateObjects(groups[group])"
      v-on:update:showItems="updateShowGroup(group)"
      v-on:update:highlightItem="updateHighlightItem(controlsHighlightItem)"
      v-for="group in Object.keys(groups)" :key="group"
    />
    <div class="bottom">
      <v-switch
        class="indirect"
        v-bind:input-value="indirect"
        :label="`${indirect ? 'Indirekte Verbindungen (2 Hops)' : 'Direkte Verbindungen (1 Hop)'}`"
        v-on:change="updateIndirect"
        v-if="!!objects.length"
      ></v-switch>
      <div class="d-flex flex-row">
        <v-sheet class="d-flex flex-row" style="background: transparent">
          <v-sheet style="background: transparent">
            <a class="mt-3" rel="license" href="http://creativecommons.org/licenses/by/3.0/de/" target="_blank">
              <img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by/3.0/de/88x31.png" />
            </a>
          </v-sheet>
          <v-sheet class="mx-2" style="background: transparent; line-height: .9em;">
            <small>
              Prof. Dr. Peter Dürr<br>& Simon Liedtke
            </small>
          </v-sheet>
        </v-sheet>
        <v-chip
          class="version mb-2"
        >
          Version {{ this.$store.state.packageVersion }}
        </v-chip>
      </div>
    </div>
  </v-container>
</template>

<style>
.bottom {
  position: fixed !important;
  bottom: 20px;
  left: 20px;
}
.file-input {
  cursor: pointer;
}
</style>

<script>
import ControlGroup from "./ControlGroup";
import OpenUrlModal from "./OpenUrlModal";

const groupObjects = (objects, groupBy) => {
  return objects.reduce(function (r, o) {
    r[o[groupBy]] = r[o[groupBy]] || [];
    r[o[groupBy]].push(o);
    return r;
  }, Object.create(null));
}

export default {
  props: ["objects", "showGroup", "highlightItem", "indirect", "file", "url"],

  components: {
    ControlGroup,
    OpenUrlModal,
  },

  data: function () {
    return {
      groups: groupObjects(this.objects, "Familie"),
      controlsHighlightItem: this.highlightItem,
    }
  },

  methods: {
    updateObjects(objects) {
      const newObjects = objects.reduce((a, o) => Object.assign(a, { [o.ID]: o }), {});
      this.$emit("update:objects", this.objects.map((o) => o.ID in newObjects ? newObjects[o.ID] : o));
    },
    updateShowGroup(group) {
      this.$emit("update:showGroup", group !== this.showGroup ? group : "");
    },
    updateHighlightItem(itemId) {
      this.$emit("update:highlightItem", itemId);
    },
    updateIndirect(indirect) {
      this.$emit("update:indirect", !!indirect);
    },
    updateFile() {
      const files = this.$refs.file.files;
      if (files.length === 0) return;
      let reader = new FileReader();
      reader.readAsArrayBuffer(files[0]);
      reader.onload = () => this.$emit("update:file", reader.result);
    },
    updateURL(url) {
      this.$emit("update:url", url);
    },
  },
}
</script>

<template>
  <v-container class="my-5">
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
      ></v-switch>
      <v-chip
        class="version"
      >
        Version {{ this.$store.state.packageVersion }}
      </v-chip>
    </div>
  </v-container>
</template>

<style>
.bottom {
  position: fixed !important;
  bottom: 20px;
  left: 20px;
}
</style>

<script>
import ControlGroup from "./ControlGroup";

const groupObjects = (objects, groupBy) => {
  return objects.reduce(function (r, o) {
    r[o[groupBy]] = r[o[groupBy]] || [];
    r[o[groupBy]].push(o);
    return r;
  }, Object.create(null));
}

export default {
  props: ["objects", "showGroup", "highlightItem", "indirect"],

  components: {
    ControlGroup,
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
  },
}
</script>

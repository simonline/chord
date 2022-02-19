<template>
  <v-container class="my-5">
    <ControlGroup
        :name="group"
        :items.sync="groups[group]"
        v-on:update:items="updateObjects(groups[group])"
        v-for="group in Object.keys(groups)" :key="group"
    />
  </v-container>
</template>

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
  props: ["objects"],

  components: {
    ControlGroup,
  },

  data: function () {
    return {
      groups: groupObjects(this.objects, "Familie")
    }
  },

  methods: {
    updateObjects(objects) {
      const newObjects = objects.reduce((a, o) => Object.assign(a, { [o.ID]: o }), {});
      this.$emit("update:objects", this.objects.map((o) => o.ID in newObjects ? newObjects[o.ID] : o));
    }
  },
}
</script>

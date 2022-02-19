<template>
  <v-container class="my-5">
    <ControlGroup
        :name="family"
        :items="items"
        v-for="(items, family) in groups" :key="family"
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

  data() {
    return {
      groups: groupObjects(this.objects, "Familie"),
    }
  },
}
</script>

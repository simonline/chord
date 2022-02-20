<template>
  <v-container>
    <v-row class="mb-1 item">
      <v-btn
          icon
          class="button"
          v-ripple="{ class: 'ripple' }"
          @click="toggleShowItems"
      >
        <v-icon>
          {{ showItems ? "mdi-minus-box" : "mdi-plus-box" }}
        </v-icon>
      </v-btn>
      <v-checkbox
          class="checkbox"
          :input-value="items.every((i) => i.active)"
          @change="setActiveItems($event)"
      />
      <UpdateItemModal
          :items.sync="coloredItems"
          v-on:update:items="updateItems(coloredItems)"
      />
      <label class="ml-2">
        {{ name }}
      </label>
    </v-row>
    <v-container
        v-if="showItems"
        class="pl-6"
    >
      <v-row
        v-for="item in items"
        :key="item.ID"
        class="item"
      >
        <v-checkbox
            v-model="item.active"
            class="checkbox"
            :input-value="item.active"
            @change="setActiveItem(item.ID, $event)"
        />
        <UpdateItemModal
            :item.sync="item"
            v-on:update:item="updateItem(item)"
        />
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <label
                v-bind="attrs"
                v-on="on"
                class="ml-2"
            >
              {{ item.Name }}
            </label>
          </template>
          <span>{{ item.Beschreibung }}</span>
        </v-tooltip>
      </v-row>
    </v-container>
  </v-container>
</template>

<style>
.button {
  width: 24px !important;
  height: 24px !important;
}
.checkbox {
  padding: 0 !important;
  margin: 0 !important;
  height: 24px;
  width: 24px;
}
.checkbox .v-input--selection-controls__ripple {
  height: 28px;
  width: 28px;
  top: calc(50% - 20px);
  left: -10px;
}
.ripple {
  opacity: 0.2;
  color: currentColor;
  width: 28px;
  height: 28px;
  position: absolute;
}
.item {

}
.item:hover label {
  font-weight: bold;
}

</style>


<script>
  import UpdateItemModal from "./UpdateItemModal";

  export default {
    props: ["name", "items"],

    components: {
      UpdateItemModal,
    },

    data() {
      return {
        showItems: false,
        coloredItems: [...this.items],
      }
    },

    methods: {
      toggleShowItems() {
        this.showItems = !this.showItems;
      },
      setActiveItems(value) {
        this.$emit("update:items", this.items.map((i) => {
          i.active = value;
          return i;
        }))
      },
      setActiveItem(item, value) {
        this.$emit("update:items", this.items.map((i) => {
          if (i.ID === item.ID) {
            item.active = value;
          }
          return i;
        }))
      },
      updateItems(items) {
        console.log("Group update items");

        this.$emit("update:items", items);
      },
      updateItem(item) {
        this.$emit("update:items", this.items.map((i) => {
          return i.ID === item.ID ? item : i;
        }));
      }
    }
  }
</script>

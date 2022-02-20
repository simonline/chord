<template>
  <v-dialog
      v-model="dialog"
      persistent
      width="400px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          icon
          class="button"
          v-bind="attrs"
          v-on="on"
      >
        <v-icon
          :color="color"
        >
          mdi-pencil-box-outline
        </v-icon>
      </v-btn>
    </template>
    <v-card
        color="#766bf5"
    >
      <v-card-title>
        <span class="text-h5">Bearbeiten</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-color-picker
                  v-model="color"
                  dot-size="25"
                  swatches-max-height="200"
                  mode="hexa"
                  light
              ></v-color-picker>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text
            @click="dialog = false"
        >
          Schließen
        </v-btn>
        <v-btn
            text
            @click="setColor()"
        >
          Speichern
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
.button {
  width: 24px !important;
  height: 24px !important;
}
</style>

<script>
  export default {
    props: ["item", "items"],

    data() {
      return {
        dialog: false,
        color: this.item ? this.item.Farbe : this.items[0].Farbe,
      }
    },

    methods: {
      setColor() {
        this.dialog = false;
        console.log(this.color);
        if (this.item) {
          const coloredItem = {...this.item, Farbe: this.color};
          this.$emit("update:item", coloredItem);
        } else {
          this.$emit("update:items", this.items.map((i) => {
            i.Farbe = this.color;
            return i;
          }));
        }
      },
    }
  }
</script>

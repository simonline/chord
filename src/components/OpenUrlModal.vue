<template>
  <v-dialog
    v-model="dialog"
    persistent
    width="400px"
  >
    <template v-slot:activator="{ on, attrs }">
      <div
        v-bind="attrs"
        v-on="on"
      >
        URL öffnen
      </div>
    </template>
    <v-card
      color="#766bf5"
    >
      <v-card-title>
        <span class="text-h5">URL öffnen</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="URL"
                placeholder="https://www.dropbox.com/s/1234567890abcde/input.xlsx?dl=0"
                v-model="newUrl"
              />
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
          @click="updateURL(newUrl)"
        >
          Öffnen
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
</style>

<script>
  export default {
    props: ["url"],

    data() {
      return {
        dialog: false,
        newUrl: this.url,
      }
    },

    methods: {
      updateURL(url) {
        this.$emit("update:url", url);
        this.dialog = false;
      },
    }
  }
</script>

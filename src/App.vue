<template>
  <v-app>
    <v-main>
      <SimpleTable />
      <!-- <Table /> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SimpleTable from "./components/SimpleTable.vue"
import NoSticky from "./components/NoSticky.vue"

export default Vue.extend({
  name: "App",
  components: {
    SimpleTable,
  },

  data: () => ({
    //
  }),
});
</script>

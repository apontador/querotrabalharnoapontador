<template>
    <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp" min-height="82px" class="pt-2">
        <v-img src="@/assets/logo_apontador.png" alt="Apontador" contain max-height="25px" position="left"></v-img>
        <v-text-field
            v-model="searchTerm"
            flat
            outlined
            hide-details
            placeholder="Buscar"
            style="border-radius: 0"
        >
        </v-text-field>
        <v-btn dark color="primary" depressed tile height="56px" @click="search">
            <v-icon dark>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn v-show="showAddButton" to="/new-location" color="#b620e0" outlined>
            Cadastre um local
        </v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    computed: {
      showAddButton() {
        return this.$route.path !== "/new-location"
      }
    },
    data: () => ({
      searchTerm: ""
    }),
    methods: {
      async search() {
        await this.$store.dispatch("changeSearchTerm", this.searchTerm)
        this.searchTerm = ""
      }
    }
  }
</script>
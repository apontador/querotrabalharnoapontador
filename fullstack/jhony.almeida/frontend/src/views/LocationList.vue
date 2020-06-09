<template>
  <v-container>
    <v-row v-for="location in locations" :key="location.id" justify="center">
      <v-col cols="6">
        <location-card :location="location" />
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-10">
      <paginator
        route="/locations"
        :currentPage="currentPage"
        :pageCount="pageCount"
      />
    </v-row>
  </v-container>
</template>

<script>
import LocationCard from "@/components/LocationCard"
import Paginator from "@/components/Paginator"
import api from "@/api"

const FIRST_PAGE = 1;

export default {
  name: "LocationList",
  components: {
    LocationCard,
    Paginator
  },
  props: {
    page: {
      type: [Number, String],
      default: FIRST_PAGE
    }
  },
  data: () => ({
    currentPage: FIRST_PAGE,
    pageCount: 1,
    locations: []
  }),
  async created() {
    this.loadPage(this.page, this.$store.state.searchTerm)
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "changeSearchTerm") {
        this.loadPage(FIRST_PAGE, state.searchTerm)
      }
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    async loadPage(pageNumber = 1, searchTerm = null) {
      const page = typeof pageNumber === "string" ? parseInt(pageNumber) : pageNumber
      const response = await api.getLocations(page, searchTerm)
      this.currentPage = response.page
      this.locations = response.items
      this.pageCount = response.pageCount
    }
  },
  watch: {
    page: function (newValue) {
      this.loadPage(newValue, this.$store.state.searchTerm)
    }
  }
}
</script>

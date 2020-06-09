<template>
    <section id="paginator" class="box row">
        <ul v-show="pageCount > 1" class="row flex-box">
            <li>
                <router-link v-if="hasPreviousPage" :to="`${route}/${previousPage}`">
                    &lt; Anterior
                </router-link>
            </li>
            <li v-for="pageNumber in pageCount" :key="pageNumber">
                <router-link v-if="pageNumber !== currentPage" :to="`${route}/${pageNumber}`">
                    {{ pageNumber }}
                </router-link>
                <strong v-else>
                    <router-link :to="`${route}/${pageNumber}`">
                        {{ pageNumber }}
                    </router-link>
                </strong>
            </li>
            <li>
                <router-link v-if="hasNextPage" :to="`${route}/${nextPage}`">
                    Próximo &gt;
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  name: "Paginator",
  props: {
    route: {
        type: String,
        default: ""
    },
    currentPage: {
        type: Number,
        default: 1
    },
    pageCount: {
        type: Number,
        default: 1
    }
  },
  computed: {
    hasPreviousPage() {
      return this.currentPage > 1
    },
    previousPage() {
      return this.currentPage - 1
    },
    hasNextPage() {
      return this.currentPage < this.pageCount
    },
    nextPage() {
      return this.currentPage + 1
    }
  }
}
</script>

<style scoped>
ul {
    justify-content: center;
}

li {
    display: inline;
    margin-left: 15px;
}

li:first-child {
    margin-right: 30px;
}

li:last-child {
    margin-left: 45px;
}

li a {
    color: #636363;
}

a:link{
    text-decoration: none;
}
</style>
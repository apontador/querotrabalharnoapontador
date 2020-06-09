<template>
    <v-card class="mt-5">
        <v-card-title>{{ location.name }}</v-card-title>
        <v-card-subtitle>{{ location.address }}</v-card-subtitle>
        <v-card-text>
            <strong>Telefone: {{ location.phone }}</strong>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "LocationCard",
  props: {
    location: Object
  }
}
</script>
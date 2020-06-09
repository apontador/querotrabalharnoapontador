<template>
  <v-container fill-height>
    <v-row
      align="center"
      justify="center"
    >
      <v-card>
        <v-container>
          <v-row class="mx-2">
            <v-col cols="12">
              <v-text-field v-model="name" placeholder="Nome do local"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="phone" type="tel" placeholder="Telefone"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="address" placeholder="Endereço"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn to="/locations/1">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit">Cadastrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api"

export default {
  data: () => ({
    name: "",
    phone: "",
    address: ""
  }),
  methods: {
    async submit() {
      const location = {
        name: this.name,
        phone: this.phone,
        address: this.address
      }
      await api.createLocation(location)
      this.$router.push("/locations/1")
    }
  }
}
</script>

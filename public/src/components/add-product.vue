<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <v-text-field v-model="name" counter label="Name" required></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field v-model="price" counter label="Price" required></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field v-model="img" label="image" required></v-text-field>
          </v-flex>
          <v-flex xs12 md4>
            <v-btn
              color="green"
              id="addProductButton"
              v-on:click="addProduct({name:name,price:price,img:img})"
            >add product</v-btn>
     
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>



<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["addProduct","fetchProducts"])
  }
};
</script>

<style>
#styled-input {
  transform-origin: left;
  transform: scale(0.75);
}
</style>

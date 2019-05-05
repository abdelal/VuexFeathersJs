<template>
<div>
    <v-form >
        <v-container>
            <v-layout>
                <v-flex xs12 md4>
                    <v-text-field clearable v-model="name" counter label="Name" required></v-text-field>
                </v-flex>

                <v-flex xs12 md4>
                    <v-text-field clearable v-model="price" counter label="Price" required></v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field clearable v-model="img" label="image" required></v-text-field>
                </v-flex>
                <v-flex xs12 md4>
                    <v-btn color="green" id="addProductButton" v-on:click="addProductWrapper({name:name,price:price,img:img})">add product</v-btn>

                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import {
    mapGetters
} from "vuex";
export default {

    data() {
        return {
            name: '',
            price: '',
            img: ''
        }
    },
    methods: {
        ...mapActions(["addProduct", "fetchProducts"]),
        addProductWrapper(payload){
           this.$store.dispatch("addProduct",payload);
         console.log(this.name);
           this.name='';
           this.price='';
           this.img='';
        }
    }
};
</script>

<style>
#styled-input {
    transform-origin: left;
    transform: scale(0.75);
}
</style>

<template>
<dev id="product-list">
    <v-layout>
        <v-flex xs12 md5 offset-sm3>
            <v-card>
                <v-card-actions>
                    <add-product></add-product>
                </v-card-actions>
                <v-container v-bind="{ [`grid-list-md`]: true }" fluid fill-height>
                    <v-layout row wrap>
                        <v-flex v-for="(product,index) in getProducts" :key="product._id" xs4>
                            <v-card>
                                <v-img :src="product.img" height="160px">
                                    <v-layout white--text right>
                                        <v-icon id="closeIcon" dark large v-on:click="removeProduct({_id: product._id , index:index})">close</v-icon>
                                    </v-layout>
                                    <v-layout pa-1>
                                        <v-chip>{{product.name }}</v-chip>
                                    </v-layout>
                                </v-img>
                            </v-card>
                            <v-card selected=false id="priceTag">
                                <v-flex id="priceFlex" right fluid fill-height>
                                    {{product.price}}
                                    <v-icon small>euro_symbol</v-icon>
                                </v-flex>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</dev>
</template>

<script>
import {
    mapActions
} from "vuex";
import {
    mapGetters
} from "vuex";
import addProduct from "./add-product.vue";

export default {
    components: {
        "add-product": addProduct
    },
    created: function () {
      this.$store.dispatch("fetchProducts")
     },

    computed: {
        products() {
            return this.$store.state.products;
        },
        ...mapGetters(["sale", "getProducts"])
    },

    methods: {
        ...mapActions(["reducePrice", "removeProduct", "fetchProducts"]),

    }

};
</script>

<style scoped>
#closeIcon {
    padding: 10px 10px;
    border-radius: 50%;
}

#productName {
    color: rgb(255, 7, 7);
}

#priceTag {
    padding: 4px 1px;
    height: 30px;
    background: rgb(160, 155, 160);
}

#closeIcon:hover {
    color: red;
}

#closeIcon {
    color: black;
}
</style>

import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex';
import feathersClient from '../feathers-client';

const { FeathersVuex } = feathersVuex(feathersClient, { idField: '_id' });

Vue.use(Vuex);
Vue.use(FeathersVuex);
const productsService = feathersClient.service('products');


export const store = new Vuex.Store({
    strict: true,
    state: {
        products: []

    },
    getters: {
        getProducts: state => {
            return state.products;
        },
        sale: state => {
            var sale = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2,
                    img: product.img
                }
            })
            return sale;
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            });

        },
        addProduct: (state, payload) => {
            console.log("product with id " + payload._id + " was added ")
            state.products.push(payload);

        },
        fetchProducts: (state, payload) => {
            console.log("fetching products from the server...")
            state.products = payload.data;
        },
        removeProduct: (state, payload) => {
            console.log("product with id " + payload._id + " was added ")
            state.products.splice(payload.index, 1);
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(() => {
                context.commit('reducePrice', payload);
            }, 2000);
        },
        addProduct: (context, payload) => {
            if (!payload.name == "" && !payload.price == "" && !isNaN(payload.price) && !context.state.products.includes(payload)) {
                productsService.create(payload).then(data => {
                    context.commit('addProduct', data);
                })
            }
        },
        fetchProducts: (context, payload) => {
            productsService.find({}).then(data => {
                context.commit('fetchProducts', data);
            })
        },

        removeProduct: (context, payload) => {
            productsService.remove(payload._id).then(data => {
                context.commit('removeProduct', payload);
            })
        },
    }
})
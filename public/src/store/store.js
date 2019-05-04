import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex'
import feathersClient from '../feathers-client'

const { FeathersVuex } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex);
Vue.use(FeathersVuex)
const productsService = feathersClient.service('products')


export const store = new Vuex.Store({
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

            if (!payload.name == "" && !payload.price == "" && !isNaN(payload.price) && !state.products.includes(payload)) {
                productsService.create(payload).then(data => {
                    state.products.push(data)

                })
            }
        },
        fetchProducts: (state, payload) => {
            productsService.find({}).then(data => {
                state.products = data.data;
            })
        },
        removeProduct: (state, payload) => {
            productsService.remove(payload._id).then(data => {
                state.products.splice(payload.index, 1)

            })
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(() => {
                context.commit('reducePrice', payload);
            }, 2000);
        },
        addProduct: (context, payload) => {
            context.commit('addProduct', payload);
        },
        fetchProducts: (context, payload) => {
            context.commit('fetchProducts', payload);
        },
        removeProduct: (context, payload) => {
            context.commit('removeProduct', payload);
        },
    }
})
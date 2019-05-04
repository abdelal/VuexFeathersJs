<template>
<div id="app">
    <product-list>
    </product-list>
</div>
</template>

<script>
import ProductList from './components/product-list.vue';
export default {
    components: {
        'product-list': ProductList,
    },
    name: 'app',
    data() {
        return {
        }
    }
}
</script>

<style>
body {
    font-family: Ubuntu;
    color: #555
}

#app {}
</style>

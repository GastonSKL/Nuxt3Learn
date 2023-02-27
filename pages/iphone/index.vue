<script setup>
const products = ref([]);
const productId = useIdProducto();

const getProducts = async (url) => {
  const response = await useFetch(url);
  products.value = response.data.value;
};

const url = "https://fakestoreapi.com/products";

onMounted(() => {
  getProducts(url);
});
useHead({
  title: "Nuxt3 - Iphones",
});

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="flex flex-wrap w-full justify-around gap-10 mt-16 ">
    <nuxt-link :to="`/iphone/product-${product.id}`" 
      class="max-w-sm rounded overflow-hidden shadow-sm container hover:shadow-lg"
      v-for="product in products"
      @click="productId = product.id"
    >
      <div class="img-container">
        <img
          class="w-full max-h-full"
          :src="`${product.image}`"
          alt="Sunset in the mountains"
        />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-sm mb-2">{{product.title}}</div>
        <p class="text-gray-700 text-base">
          {{ product.price }} $
        </p>
      </div>
     
    </nuxt-link>
  </div>
</template>

<style scoped>
.container{
  height: 28em;
  width: 20em;
}
.img-container{
  
  height: 20em;
  padding: 2em;
}
</style>
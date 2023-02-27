<template>
  <main>
    <div class="flex container rounded shadow-md">
      <div class="img-container">
        <img :src="`/images/iphone${name}.jpg`" />
      </div>
      <div class="description-container">
        <h3>Iphone {{ name }}</h3>
        <button @click="addCart()" class="bg-purple-900 text-white rounded">
          <span v-if="!buyed">Buy now</span>
          <span v-else>Remove</span>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-content: center;
  height: 90vh;
}
.description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2em;
  padding: 1em;
}
.container {
  max-width: 30em;
  height: 25em;
  background-color: white;
}
.description-container h3 {
  margin-bottom: 1em;
}

.description-container button {
  border: 2px solid black;
  width: 8em;
}
.description-container button:hover {
  border: 2px solid rgba(0, 0, 0, 0.8);
}
.img-container {
  width: 65%;
  padding: 1em;
  border-radius: 0.4em;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.img-container img {
  border-radius: 0.4em;
}
</style>

<script setup>
const route = useRoute();
const cart = useCart();
const buyed = ref(false);
const name = computed(() => {
  return route.params.name;
});

const addCart = () => {
  const found = cart.value.find((e) => e.name === name.value);
  if (!found && buyed.value == false) {
    cart.value.push({
      name: `${name.value}`,
    });
    buyed.value = true;
  } else {
    cart.value = cart.value.filter((e) => e.name !== name.value);
    buyed.value = false;
  }
  console.log(cart.value);
  console.log(cart.value.length);
};

useHead({
  title: `Iphone  ${name.value}`,
});

definePageMeta({
  middleware: ["auth"],
});
</script>

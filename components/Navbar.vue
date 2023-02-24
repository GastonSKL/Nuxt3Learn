<template>
  <nav class="bg-purple-900 text-white shadow-lg p-3 flex justify-evenly">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/iphone">Iphone</NuxtLink>
    <NuxtLink to="/profile">Profile</NuxtLink>
    <p>Cart({{ cart.length }})</p>
  </nav>
</template>

<script setup>
 const cart = useCart();
 console.log(cart.value.length)
</script>
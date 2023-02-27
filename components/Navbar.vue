<template>
  <nav class="text-black p-3 flex justify-between">
    <div class="flex gap-8">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/iphone" v-if="auth.isAuthenticated">Products</NuxtLink>
      <NuxtLink to="/profile" v-if="auth.isAuthenticated">Profile</NuxtLink>
    </div>
    <div class="flex gap-8">
      <p v-if="auth.isAuthenticated">Cart({{ cart.length }})</p>
      <NuxtLink to="/login" v-if="!auth.isAuthenticated">Login</NuxtLink>
      <NuxtLink to="/login" v-if="auth.isAuthenticated" @click="logout"
        >Logout</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup>
const cart = useCart();
const auth = useAuth();
const logout = () => {
  return (auth.value.isAuthenticated = false);
};
</script>

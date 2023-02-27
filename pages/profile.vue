<template>
  <div>
    <h1>Profile</h1>
  </div>
</template>

<script setup>
useHead({
  title: `Profile`,
});

definePageMeta({
  middleware: ["auth"],
});
</script>

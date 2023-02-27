<template>
  <ProfileCard/>
</template>

<script setup>

useHead({
  title: `Profile`,
});

definePageMeta({
  middleware: ["auth"],
});
</script>

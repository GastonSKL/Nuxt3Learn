<script setup>
useHead({
  title: "Nuxt3 - Iphones",
});

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="m-5">
    <div class="grid grid-cols-4 gap-4">
      <nuxt-link
        to="/iphone/iphone-12"
        class="shadow-lg text-center border rounded-lg"
      >
        <h1>Iphone 12</h1>
        <div class="flex justify-center">
          <img src="/images/iphone12.jpg" alt="" />
        </div>
      </nuxt-link>
      <nuxt-link
        to="/iphone/iphone-13"
        class="shadow-lg text-center border rounded-lg"
      >
        <h1>Iphone 13</h1>
        <div class="flex justify-center">
          <img src="/images/iphone13.jpg" alt="" />
        </div>
      </nuxt-link>
      <nuxt-link
        to="/iphone/iphone-14"
        class="shadow-lg text-center border rounded-lg"
      >
        <h1>Iphone 14</h1>
        <div class="flex justify-center">
          <img src="/images/iphone14.jpg" alt="" />
        </div>
      </nuxt-link>
      <nuxt-link
        to="/iphone/iphone-14pro"
        class="shadow-lg text-center border rounded-lg"
      >
        <h1>Iphone 14 pro</h1>
        <div class="flex justify-center">
          <img src="/images/iphone14pro.jpg" alt="" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

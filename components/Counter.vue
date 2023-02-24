<script setup>
const count = shallowRef(0);
const Increment = () =>{
    count.value++;
}
const Decrement = () =>{
    count.value--;
}
</script>

<template>
  
  <div >
      <button @click="Increment">Increment</button>
      <p>{{ count }}</p>
      <button @click="Decrement">Decrement</button>
  </div>
</template>

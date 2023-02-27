<template>
  
     
     <div class="text_container flex flex-col">
         <h1 class="text-6xl text-center">Welcome to the Nuxt 3 product store!</h1>
         <p class="text-l text-center">This site was made by using Nuxt js as a personal proyect, showcasing the capabilities of the framework in conjunction with some Api calls, Auth procedures, Global states, Persistence and various routings</p>
         <p class="text-xs text-center info">The following APIs where used in the construction of this proyect: <br>
        <a href="https://fakestoreapi.com/">Fake store API</a> <br>
        <a href="https://reqres.in/">Reqres API</a></p>
     </div>
  
</template>

<script setup>


useHead({
        title: `Home`
    })
</script>

<style>
.text_container{
    height: 50vh;
    justify-content: space-around;
    margin-top: 10em;
    color: rgba(0, 0, 0, 0.68);
}
.text_container p{
    width: 50%;
    margin: auto;
    letter-spacing: .2em;
    color: rgba(0, 0, 0, 0.582);
}

</style>

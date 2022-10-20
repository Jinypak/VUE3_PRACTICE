<template>
  <div class="about">
    <div
        v-if="state.pokemon"
        class="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center py-4"
    >
      <h3 class="text-2xl text-green-900 uppercase">{{ state.pokemon.name }}</h3>
      <div class="flex justify-center">
        <img class="w-48" :src="state.pokemon.sprites.front_shiny" alt="" />
        <img class="w-48" :src="state.pokemon.sprites.back_shiny" alt="" />
      </div>
      <h3  class="text-yellow-400">Types</h3>
      <div class="flex justify-evenly w-full">
      <div v-for="(type, index) in state.pokemon.types" :key="index" class="">
        <h5 class="text-blue-900">{{type.type.name}}</h5>
      </div></div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { reactive } from "vue";

const route = useRoute();
const state = reactive({
  pokemon: null
})

const fetchPokemon = ()=>{
  fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}`).then(res=> res.json()).then(data=> {
        state.pokemon = data;
        console.log(state.pokemon);
      }
  )
}

fetchPokemon()


</script>

<style scoped>

</style>
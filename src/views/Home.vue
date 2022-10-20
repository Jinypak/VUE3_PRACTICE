<template>
  <div class="home">
    <div class="w-full flex justify-center">
      <input type="text" placeholder="Enter Pokemon here" class="mt-10 p-2 border-blue-500 border-2"
        v-model="state.text"
      >
    </div>
    <div class="mt-10 p-4 flex flex-wrap justify-center">
      <div class="ml-4 text-2xl text-blue-200" v-for="(pokemon, index) in state.searchedPokemon" :key="index">
        <router-link :to="`/about/${state.urlId[pokemon.name]}`">
        {{ pokemon.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, computed } from "vue";

const state = reactive({
  pokemons: [],
  urlId: {},
  text: "",
  searchedPokemon: computed(()=> updatePokemon()),
})


const fetchPokemons = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(res => res.json()).then(data => {
        state.pokemons = data.results;
        state.urlId = data.results.reduce((acc, cur, index)=>
            acc = {...acc, [cur.name]:index+1}
            , {});
      }
  )
}
fetchPokemons()

const updatePokemon = () =>{
  if(!state.text){
    return []
  }
  return state.pokemons.filter(pokemon => pokemon.name.includes(state.text))
}


</script>

<style scoped>

</style>
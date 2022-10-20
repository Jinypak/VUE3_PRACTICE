<template>
  <div class="home">
    <header class="flex justify-center items-center">
      <img :src="`${logo}`" alt="pinia_logo" class="w-10">
      <h1 class="mx-5">Pinia Tasks</h1>
    </header>
    <div class="new-task-form">
      <task-form></task-form>
    </div>
    <nav class="flex mx-auto w-1/2 justify-evenly">
      <div class="border-2 w-40 my-5 rounded cursor-pointer" @click="filter = 'all'">All</div>
      <div class="border-2 w-40 my-5 rounded cursor-pointer" @click="filter = 'important'">Important</div>
    </nav>
    <div v-if="taskStore.loading === true">Loading...</div>
    <div v-else>
      <div class="mx-auto w-3/4" v-if="filter === 'all'">
        <h2>모든 일거리 {{ taskStore.totalCount }}개</h2>
        <div v-for="task in taskStore.tasks" :key="task.id">
          <task-details :task="task"></task-details>
        </div>
      </div>
      <div class="mx-auto w-3/4" v-if="filter === 'important'">
        <h2>중요한 일거리 {{ taskStore.imporsCount }}개</h2>
        <div v-for="task in taskStore.impos" :key="task.id">
          <task-details :task="task"></task-details>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import logo from '../assets/logo.svg'
import { useTaskStore } from '../store/taskStore.js';
import TaskDetails from '../components/TaskDetails'
import TaskForm from '../components/TaskForm'

const taskStore = useTaskStore();
const filter = ref('all');

taskStore.getTasks();

</script>

<style scoped>

</style>
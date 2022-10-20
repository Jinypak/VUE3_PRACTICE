<template>
  <div class="flex justify-between mx-auto w-1/2 p-2 px-6 border-2 my-2 items-center rounded task" >
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" :class="{ active: task.isImpo }" @click="handleImpo(task.id)">favorite</i>
      <i class="material-icons" @click="handleDelete(task.id)">delete</i>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useTaskStore } from '../store/taskStore';

const props = defineProps({
  task: Object
})
const taskStore = useTaskStore();
const handleDelete = (id) => {
  taskStore.deleteTask(id)
}

const handleImpo = (id)=>{
  taskStore.toggleImpo(id)
}

</script>

<style scoped>

</style>
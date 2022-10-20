<template>
  <form @submit.prevent="handleSubmit" style="margin-top: 20px;">
    <input type="text" placeholder="할 일을 적자" v-model="newTask">
    <button>추가하기</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../store/taskStore'
const taskStore = useTaskStore()
const newTask = ref('');
const handleSubmit = () => {
  if(newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isImpo: false,
      id: Math.floor(Math.random() * 10000),
    })
    newTask.value = '';
  }
}
</script>

<style scoped>

</style>
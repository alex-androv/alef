<template>
    <div class="max-w-2xl mx-auto">
      <h2 class="text-base font-medium mb-6">Персональные данные</h2>
      
      <div class="mb-8">
        <h3 class="text-base font-bold mb-4">
          {{ userData.name }}{{ userData.age ? `, ${userData.age} лет` : '' }}
        </h3>
      </div>
  
      <div v-if="userData.children && userData.children.length > 0">
        <h3 class="text-base font-medium mb-4">Дети</h3>
        <div class="space-y-2">
          <div
            v-for="(child, index) in userData.children"
            :key="index"
            class="bg-gray-100 px-4 py-2 rounded text-base font-bold w-fit"
          >
            {{ child.name }}{{ child.age ? `, ${child.age} лет` : '' }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '../stores/userStore';
  import { storeToRefs } from 'pinia';
  
  const userStore = useUserStore();
  const { userData } = storeToRefs(userStore);
  </script>
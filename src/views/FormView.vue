<template>
    <div class="max-w-2xl mx-auto">
      <h2 class="text-base font-medium mb-6">Персональные данные</h2>
      
      <div class="mb-12">
        <div class="mb-4">
          <input
            v-model="formData.name"
            type="text"
            class="w-full p-2 border rounded"
            :class="{ 'border-red-500': showErrors && !formData.name }"
            placeholder="Имя"
          >
          <span v-if="showErrors && !formData.name" class="text-red-500 text-sm mt-1">
            Обязательное поле
          </span>
        </div>
        
        <div class="mb-4">
          <input
            v-model="formData.age"
            type="number"
            class="w-full p-2 border rounded"
            :class="{ 'border-red-500': showErrors && !formData.age }"
            placeholder="Возраст"
          >
          <span v-if="showErrors && !formData.age" class="text-red-500 text-sm mt-1">
            Обязательное поле
          </span>
        </div>
      </div>
  
      <div class="mb-8">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-base font-medium">Дети (макс. 5)</h3>
          <button
            v-if="formData.children.length < 5"
            @click="addChild"
            class="flex items-center text-blue-400 hover:text-blue-700 border-2 border-blue-400 hover:border-blue-700 rounded-3xl py-2 px-4 transition"
          >
            + Добавить ребенка
          </button>
        </div>
  
        <div v-for="(child, index) in formData.children" :key="index" class="mb-4"
             :class="{ 'border-red-500': showErrors && (!child.name || !child.age) }">
          <div class="flex justify-between mb-4">
            <div class="flex-1 mr-4">
              <input
                v-model="child.name"
                type="text"
                class="w-full p-2 border rounded"
                :class="{ 'border-red-500': showErrors && !child.name }"
                placeholder="Имя"
              >
              <span v-if="showErrors && !child.name" class="text-red-500 text-sm mt-1">
                Обязательное поле
              </span>
            </div>
            <div class="flex-1">
              <input
                v-model="child.age"
                type="number"
                class="w-full p-2 border rounded"
                :class="{ 'border-red-500': showErrors && !child.age }"
                placeholder="Возраст"
              >
              <span v-if="showErrors && !child.age" class="text-red-500 text-sm mt-1">
                Обязательное поле
              </span>
            </div>
            <button
              @click="removeChild(index)"
              class="ml-4 text-blue-400 hover:text-blue-700 transition"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
  
      <button
        @click="saveData"
        class="bg-blue-400 text-white px-6 py-2 rounded-3xl hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Сохранить
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '../stores/userStore';
  
  const router = useRouter();
  const userStore = useUserStore();
  
  const formData = ref({
    name: '',
    age: '',
    children: []
  });
  
  const showErrors = ref(false);
  
  function validateForm() {
    if (!formData.value.name || !formData.value.age) {
      return false;
    }
  
    for (const child of formData.value.children) {
      if (!child.name || !child.age) {
        return false;
      }
    }
  
    return true;
  }
  
  function addChild() {
    if (formData.value.children.length < 5) {
      formData.value.children.push({
        name: '',
        age: ''
      });
    }
  }
  
  function removeChild(index) {
    formData.value.children.splice(index, 1);
  }
  
  function saveData() {
    showErrors.value = true;
    
    if (!validateForm()) {
      return;
    }
  
    userStore.setUserData({
      name: formData.value.name,
      age: formData.value.age,
      children: [...formData.value.children]
    });
    
    router.push('/preview');
  }
  </script>
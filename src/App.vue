<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <header class="mb-20">
      <nav class="flex space-x-4 justify-center">
        <router-link to="/" class="text-sm font-normal text-gray-400 hover:text-blue-700 transition">Форма</router-link>
        <router-link to="/preview" class="text-sm font-normal text-gray-400 hover:text-blue-700 transition">Превью</router-link>
      </nav>
    </header>
    <RouterView />
  </div>
</template>



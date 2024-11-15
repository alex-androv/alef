import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const userData = ref({
    name: '',
    age: '',
    children: []
  });

  function setUserData(data) {
    userData.value = data;
  }

  return {
    userData,
    setUserData
  };
});

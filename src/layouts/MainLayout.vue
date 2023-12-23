<template>
  <q-layout view="lHh Lpr lFf" class="bg" :style="{ backgroundColor: isActive ? '#000' : '#040d12' }">
    <q-header class="q-pa-sm q-py-sm menu-bar" :style="{ backgroundColor: isActive ? '#000' : '#040d12' }">
      <div class="row justify-center">
        <q-btn :ripple="false" flat class="q-pa-sm menu-item" to="/">Home</q-btn>
        <q-btn :ripple="false" flat class="q-pa-sm menu-item" to="/about">About Me</q-btn>
        <div class="q-pa-sm menu-item">Blog</div>
        <q-btn :ripple="false" flat class="q-pa-sm menu-item" to="/contact">Contact</q-btn>
        <q-icon size="20px" class="icn absolute-right q-pa-md amo" name="fa-solid fa-moon" @click="toggleClass()" />
      </div>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClass: function () {
      this.isActive = !this.isActive;
    }
  },

})
</script>

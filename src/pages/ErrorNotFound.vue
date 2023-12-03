<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center bg">
    <div>
      <div class="q-pa-md" style="font-size: 90px;font-family:'Rubik Mono One';">
        404
      </div>

      <div class="hmmm" style="opacity:.4">
        Lost in Code, Not Forever.
      </div>

      <q-btn class="q-mt-xl menu-item" unelevated to="/" label="Home" no-caps />
      <q-btn class="q-mt-xl menu-item" unelevated to="/about" label="About" no-caps />
      <div class="flex flex-center q-py-sm">
        <q-icon size="15px" class="icn q-pa-sm" name="fa-brands fa-x-twitter" />
        <q-icon size="15px" class="icn q-pa-sm" name="fa-brands fa-reddit-alien" />
        <q-icon size="15px" class="icn q-pa-sm" name="fa-brands fa-instagram" />
        <q-icon size="15px" class="icn q-pa-sm" name="fa-brands fa-github-alt" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>

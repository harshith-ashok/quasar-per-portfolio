<template>
  <div class="flex flex-center">
    <div style="text-align: center" class="q-pa-md">
      <h1 class="page-header1"> Contact</h1>
      <h1 class="page-header2"> Contact</h1>
    </div>

  </div>
  <div class="flex flex-center column q-ma-xl">
    <q-input outlined v-model="text" label="Email" type="email" class="contact_inp q-ma-sm" />
    <q-input outlined v-model="text" label="Message" type="textarea" class="contact_inp q-ma-sm" />
    <q-btn type="submit" class="submit_btn">Submit</q-btn>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactPage',

})
</script>

<template>
  <v-container 
    class="d-flex align-center justify-center"
    style="height: 100vh">
    <v-flex class="d-flex flex-column pa-3">
      <v-textarea 
        style="width: 60vw; max-width: 600px"
        label="Cookie from Instagram"
        v-model="cookie"
      ></v-textarea>
      <v-btn
        class="align-self-center"
        color="primary"
        style="width: 15vw; max-width: 150px"
        @click="submitCookie"
        >Submit</v-btn>
    </v-flex>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const cookie = ref("");

const submitCookie = () => {
    console.log(cookie.value);
}
</script>

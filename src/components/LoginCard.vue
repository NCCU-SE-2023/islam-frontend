<template>
  <v-form @submit.prevent="submitForm">
    <v-text-field v-model="name" label="Name" required></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
      :rules="[passwordRules]"
    ></v-text-field>
    <v-btn type="submit" color="primary">Submit</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const password = ref("");

const passwordRules = [
  (v) => (v && v.length >= 8) || "Password must be greater than 8 characters",
];

const submitForm = () => {
  console.log(name.value);
  console.log(password.value);
};
</script>

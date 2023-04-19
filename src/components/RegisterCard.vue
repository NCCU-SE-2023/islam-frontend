<template>
  <v-form @submit.prevent="submitForm">
    <v-col class="pl-5 pr-5 pb-0">
      <v-text-field
        v-model="name"
        label="Name"
        variant="underlined"
        required
      ></v-text-field>
    </v-col>
    <v-col class="pl-5 pr-5 pb-0">
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        variant="underlined"
        required
      ></v-text-field>
    </v-col>
    <v-col class="pl-5 pr-5 pb-0">
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        variant="underlined"
        required
        :rules="[passwordRules]"
      ></v-text-field>
    </v-col>
    <v-col class="d-flex justify-center pb-3">
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-col>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");

const passwordRules = {
  password: (v: string) =>
    (v && v.length >= 8) || "Password must be greater than 8 characters",
};

const submitForm = () => {
  console.log(name.value);
  console.log(email.value);
  console.log(password.value);
};
</script>

<template>
  <v-container class="d-flex align-center justify-center" style="height: 100vh">
    <v-flex class="d-flex flex-column pa-3">
      <v-col>
        <h3>To start using our service:</h3>
      </v-col>
      <v-col>
        <v-form @submit.prevent="submitAccount">
          <v-text-field
            v-model="ig_account"
            label="IG account"
            type="email"
            variant="underlined"
            required
          ></v-text-field>
          <v-text-field
            v-model="ig_password"
            label="IG password"
            type="password"
            variant="underlined"
            required
          ></v-text-field>
          <v-col class="d-flex justify-center">
            <v-btn
              class="align-self-center"
              color="primary"
              style="width: 15vw; max-width: 150px"
              type="submit"
              >Submit</v-btn
            >
          </v-col>
        </v-form>
      </v-col>
      <v-col>
        <h3>OR</h3>
      </v-col>
      <v-col class="d-flex flex-column justify-center">
        <v-textarea
          v-model="cookie"
          style="width: 60vw; max-width: 600px"
          label="Cookie from Instagram"
        ></v-textarea>
        <v-btn
          class="align-self-center"
          color="primary"
          style="width: 15vw; max-width: 150px"
          @click="submitCookie"
          >Submit</v-btn
        >
      </v-col>
    </v-flex>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const ig_account = ref("");
const ig_password = ref("");
const cookie = ref("");

const submitCookie = () => {
  console.log(cookie.value);
};

const submitAccount = () => {
  console.log(ig_account.value);
  console.log(ig_password.value);
};
</script>

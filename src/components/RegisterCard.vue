<template>
  <v-form validate-on="submit" @submit.prevent="submitForm">
    <v-col class="pl-5 pr-5 pb-0">
      <v-text-field
        v-model="account_"
        label="Account"
        type="email"
        variant="underlined"
        required
      ></v-text-field>
    </v-col>
    <v-col class="pl-5 pr-5 pb-0">
      <v-text-field
        v-model="password_"
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
  <v-snackbar v-model="snackbar" vertical>
    <div class="text-subtitle-1 pb-2">System alert</div>
    <p>Register successfully</p>
    <template v-slot:actions>
      <v-btn color="indigo" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/user";

const user = useUserStore();
const { register } = user;
const { account, userId } = storeToRefs(user);
const account_ = ref("");
const password_ = ref("");
const snackbar = ref(false);

const passwordRules = {
  password: (v: string) =>
    (v && v.length >= 8) || "Password must be greater than 8 characters",
};

const submitForm = async () => {
  console.log(account_.value);
  console.log(password_.value);
  if(password_.value.length >= 8) {
  await register(account_.value, password_.value).then((result) => {
    console.log(userId);
    snackbar.value = true;
  });
  }
};
</script>

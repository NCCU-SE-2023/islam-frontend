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
        :rules="[passwordRules.password]"
      ></v-text-field>
    </v-col>
    <v-col class="d-flex justify-center pb-3">
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-col>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/user";
import { useRoute, useRouter } from "vue-router";

const user = useUserStore();
const { login } = user;
const { account, userId } = storeToRefs(user);
const account_ = ref("");
const password_ = ref("");
const router = useRouter();
const route = useRoute();

const passwordRules = {
  password: (v: string) =>
    (v && v.length >= 8) || "Password must be greater than 8 characters",
};

const submitForm = async () => {
  /* console.log(account_.value); */
  /* console.log(password_.value); */
  if (password_.value.length >= 8) {
    await login(account_.value, password_.value).then((result) => {
      console.log(account, userId);
      router.push("/ig");
    });
  }
};
</script>

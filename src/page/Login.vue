<template>
  <v-layout>
    <v-main style="height: 100dvh">
      <v-container class="h-100 w-100 d-flex align-center justify-center">
        <v-card>
          <v-tabs v-model="tab" fixed-tabs bg-color="primary">
            <v-tab value="login"> Login </v-tab>
            <v-tab value="register"> Register </v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="login">
              <LoginCard />
            </v-window-item>
            <v-window-item value="register">
              <RegisterCard />
            </v-window-item>
          </v-window>
        </v-card>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import RegisterCard from "../components/RegisterCard.vue";
import LoginCard from "../components/LoginCard.vue";

const tab = ref(null);
</script>

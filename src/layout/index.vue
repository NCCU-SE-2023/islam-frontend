<template>
  <v-layout>
    <v-app-Bar>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-app-bar-title>ISLAM</v-app-bar-title>
      <ThemeButton />
    </v-app-Bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          :title="account"
          :subtitle="account"
        ></v-list-item>
      </v-list>
      <v-divider />
      <v-list nav>
        <v-list-item value="IG" active-color="primary-darken-1" @click="router.push('/ig')">
          <v-list-item-icon>
            <v-icon>mdi-instagram</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <div>IG</div>
          </v-list-item-content>
        </v-list-item>

        <v-list-item value="TASK" active-color="primary-darken-1" @click="router.push('/task')">
          <v-list-item-icon>
            <v-icon>mdi-google-analytics</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <div>Task</div>
          </v-list-item-content>
        </v-list-item>

        <v-list-item value="QUERY" active-color="primary-darken-1" @click="router.push('/query')">
          <v-list-item-icon>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <div>Query</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="min-height: 300px">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import { storeToRefs } from "pinia";
import ThemeButton from "../components/ThemeButton.vue";
import { useUserStore } from "../store/user";
import { useRouter, useRoute } from "vue-router";

const { mobile } = useDisplay();
const user = useUserStore();
const { account, userId } = storeToRefs(user);
const drawer = ref(!mobile.value);
const router = useRouter();
const route = useRoute();
</script>

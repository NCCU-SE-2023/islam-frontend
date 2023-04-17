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
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>
      <v-divider />
      <v-list nav>
        <v-list-item value="item" active-color="primary-darken-1" title="123" />
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
import ThemeButton from "../components/ThemeButton.vue";

const { mobile } = useDisplay();
const drawer = ref(!mobile.value);
</script>

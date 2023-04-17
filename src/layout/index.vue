<template>
  <v-layout>
    <v-app-bar title="Application bar">
      <ThemeButton />
    </v-app-bar>
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="min-height: 300px">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import ThemeButton from '../components/ThemeButton.vue';
</script>

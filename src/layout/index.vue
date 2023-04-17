<template>
  <v-layout>
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="min-height: 300px">
      <RouterView />
      123
    </v-main>
  </v-layout>
</template>

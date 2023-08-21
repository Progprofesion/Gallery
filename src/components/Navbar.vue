<template>
  <v-container fluid>
    <v-app-bar color="primary" density="compact">
      <v-spacer />
      <v-btn outl class="ml-3" color="orange">
        <router-link to="/">Главная</router-link>
      </v-btn>
      <v-btn color="orange">
        <router-link to="/photo">Фотографии</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<style scoped></style>

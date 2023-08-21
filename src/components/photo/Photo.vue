<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title>
        {{ photo.title }}
        <v-card-text>
          <v-img width="200" height="200" :src="photo.url"> </v-img>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      requared: true,
    },
  },
  methods: {
    openPhoto() {
      this.$emit("openPhoto", this.photo);
    },
  },
};
</script>

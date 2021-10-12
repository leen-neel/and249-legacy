<template>
  <q-card class="my-card">
    <q-img
      :src="`images/projects/${img}`"
      :ratio="1 / 1"
      spinner-color="white"
      spinner-size="82px"
    />
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>
    <q-card-section class="about-text">
      <strong>Tech Stack:</strong> {{ stack }}

      <q-btn color="white" label="Learn more" flat />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    title: String,
    stack: String,
    url: String,
    img: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.q-card {
  background-color: #389787;
}

.body--light {
  .q-card {
    background-color: #5dbdad;
  }
}
</style>

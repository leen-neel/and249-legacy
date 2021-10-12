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

      <div>
        <q-btn color="white" label="Learn more" flat @click="learn = true" />
      </div>
    </q-card-section>
  </q-card>

  <q-dialog v-model="learn">
    <q-card>
      <q-card-section>
        <q-img
          :src="`images/projects/${img}`"
          :ratio="1 / 1"
          spinner-color="white"
          spinner-size="82px"
        />
      </q-card-section>

      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>
      <q-card-section class="about-text">
        <strong>Tech Stack:</strong> {{ stack }}
      </q-card-section>

      <q-card-section v-if="forClient">
        <div class="text-h6 text-bold">
          <div class="text-center">"{{ testimonial }}"</div>

          <div class="flex flex-center q-my-sm">
            <q-avatar size="100px">
              <img
                :src="`images/projects/clients/${clientImg}`"
                :alt="clientName"
              />
            </q-avatar>
          </div>
          <div class="flex flex-center">
            {{ clientName }} - {{ clientTitle }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    title: String,
    stack: String,
    url: String,
    img: String,
    testimonial: String,
    clientName: String,
    clientImg: String,
    clientTitle: String,
    forClient: Boolean,
  },
  setup() {
    const learn = ref(false);

    return {
      learn,
    };
  },
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

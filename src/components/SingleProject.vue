<template>
  <q-card class="bg-dark">
    <q-img
      :src="`images/projects/${img}`"
      :ratio="1 / 1"
      spinner-color="white"
      spinner-size="82px"
    >
      <q-chip
        :icon="forClient ? 'fas fa-user-tag' : 'fas fa-project-diagram'"
        :label="forClient ? 'Client Project' : 'Personal project'"
        class="q-ml-sm q-mt-sm"
        color="primary"
        :ripple="false"
      />
    </q-img>
    <q-card-section>
      <div class="text-h6">
        {{ title }}
      </div>
    </q-card-section>
    <q-card-section class="about-text">
      <strong>Tech Stack:</strong> {{ stack }}

      <div>
        <q-btn
          color="primary"
          icon-right="arrow_forward"
          label="Learn more"
          class="q-mt-sm"
          @click="learn = true"
        />
      </div>
    </q-card-section>
  </q-card>

  <!-- Dialog containing more info -->
  <q-dialog v-model="learn">
    <q-card>
      <q-bar dark class="bg-primary text-white">
        <q-space />
        <q-btn
          color="white"
          class="float-right"
          flat
          round
          dense
          icon="close"
          v-close-popup
        />
      </q-bar>
      <q-card-section>
        <q-img
          :src="`images/projects/${img}`"
          :ratio="1 / 1"
          spinner-color="white"
          spinner-size="82px"
        />
      </q-card-section>

      <q-card-section>
        <div class="text-h6">
          <a target="_blank" :href="url">{{ title }}</a>
        </div>
      </q-card-section>
      <q-card-section class="about-text">
        <strong>Tech Stack:</strong> {{ stack }}
      </q-card-section>

      <q-card-section v-if="!forClient">
        <div class="text-h6 text-bold">
          <div class="text-center">{{ description }}</div>
        </div>
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
          <div class="flex flex-center text-center">
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
    description: String,
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

<template>
  <q-page class="q-pa-md">
    <HeroSection />

    <q-card class="q-mt-lg q-pa-sm">
      <q-card-section>
        <div class="q-mt-xl allign-left text-bold text-h3">About me</div>
      </q-card-section>
      <q-card-section class="about-text">
        Hey there! I am
        <span class="archDau text-bold"> Anindo Neel Dutta! </span> I am a
        project manager at Norian Games Pvt. Ltd. I make web apps with the
        <strong>MEVN</strong> stack. I love creating web apps and websites.
      </q-card-section>
    </q-card>

    <q-card class="q-mt-lg">
      <q-tabs v-model="tab" dense align="justify">
        <q-tab name="mails" label="Mails" />
        <q-tab name="alarms" label="Alarms" />
        <q-tab name="movies" label="Movies" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails">
          <div class="text-h6">Mails</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

import HeroSection from "components/HeroSection.vue";

export default defineComponent({
  name: "PageIndex",

  components: {
    HeroSection,
  },

  setup() {
    const tab = ref("mails");

    return {
      tab,
    };
  },
});
</script>

<style lang="scss" scoped>
.hero-card {
  border-radius: 16px;
}

.avatar-card {
  border-radius: 16px;
}
</style>

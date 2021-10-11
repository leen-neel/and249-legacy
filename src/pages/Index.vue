<template>
  <q-page class="q-pa-md">
    <HeroSection />

    <AboutMe />

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
import AboutMe from "components/AboutMe";

export default defineComponent({
  name: "PageIndex",

  components: {
    HeroSection,
    AboutMe,
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

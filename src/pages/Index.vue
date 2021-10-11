<template>
  <q-page class="q-pa-md">
    <HeroSection />

    <AboutMe />

    <MoreAboutMe />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import HeroSection from "components/HeroSection.vue";
import AboutMe from "components/AboutMe";
import MoreAboutMe from "components/MoreAboutMe";

export default defineComponent({
  name: "PageIndex",

  components: {
    HeroSection,
    AboutMe,
    MoreAboutMe,
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

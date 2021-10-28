<template>
  <q-page class="q-pa-md">
    <HeroSection />

    <AboutMe />

    <MoreAboutMe />

    <Projects />

    <div id="hire"></div>

    <HireMe />

    <Footer />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import HeroSection from "components/HeroSection.vue";
import AboutMe from "components/AboutMe";
import Projects from "components/Projects.vue";
import MoreAboutMe from "components/MoreAboutMe";
import HireMe from "components/HireMe";
import Footer from "components/Footer";

export default defineComponent({
  name: "PageIndex",

  components: {
    HeroSection,
    AboutMe,
    Projects,
    MoreAboutMe,
    HireMe,
    Footer,
  },
});
</script>

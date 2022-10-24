<template>
  <q-page>
    <HeroSection />

    <main :class="{ content: !$q.screen.lt.md }">
      <AboutMe />
      <MoreAboutMe />
      <Projects />
      <div id="hire"></div>
      <HireMe />
    </main>

    <Footer />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useMeta } from "quasar";

import HeroSection from "components/Sections/HeroSection.vue";
import AboutMe from "components/Sections/AboutMe";
import Projects from "components/Sections/Projects.vue";
import MoreAboutMe from "components/Sections/MoreAboutMe";
import HireMe from "components/Sections/HireMe";
import Footer from "components/Sections/Footer";

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

  setup() {
    // Meta info
    useMeta(() => {
      return {
        title: "Anindo Neel Dutta | Full-Stack Web Developer",
        meta: {
          description: {
            name: "description",
            content:
              "Hey there! I am Anindo Neel Dutta! I hail from India. I'm a full-stack web developer who makes web apps with the MEVN stack",
          },
          keywords: {
            name: "keywords",
            content:
              "anindo neel dutta, and249, and_249, web devs in kolkata, fullstack web dev services, neel, web design services, web dev, freelancers for making my website",
          },
          title: {
            name: "title",
            content: "Anindo Neel Dutta | Full-Stack Web Developer",
          },
          themeColor: { name: "theme-color", content: "#53e6cc" },
          ogDescripton: {
            name: "og:description",
            content:
              "Hey there! I am Anindo Neel Dutta! I hail from India. I'm a full-stack web developer who makes web apps with the MEVN stack",
          },
          ogTitle: {
            name: "og:title",
            content: "Anindo Neel Dutta | Full-Stack Web Developer",
          },
          ogImage: {
            name: "og:image",
            content: "https://and249.codes/images/Myself.jpeg",
          },
          ogURL: {
            name: "og:url",
            content: "https://and249.codes/",
          },
          twitterDesc: {
            name: "twitter:description",
            content:
              "Hey there! I am Anindo Neel Dutta! I hail from India. I'm a full-stack web developer who makes web apps with the MEVN stack",
          },
          twitterTitle: {
            name: "twitter:title",
            content: "Anindo Neel Dutta | Full-Stack Web Developer",
          },
          twitterImage: {
            name: "twitter:image",
            content: "https://and249.codes/images/Myself.jpeg",
          },
          twitterURL: {
            name: "twitter:url",
            content: "https://and249.codes/",
          },
        },
      };
    });
  },
});
</script>

<style lang="scss" scoped>
.content {
  padding: 0 10vw;
}
</style>

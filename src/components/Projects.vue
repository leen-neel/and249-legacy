<template>
  <q-card class="q-mt-lg">
    <q-card-section>
      <div class="oswald allign-left text-bold text-h3">Projects</div>
    </q-card-section>

    <q-card-section class="row">
      <div
        v-for="project in projects"
        :key="project.title"
        class="col-xs-12 col-sm-6 col-md-4 q-pa-sm"
      >
        <Project
          :title="project.title"
          :img="project.img"
          :stack="project.stack"
          :url="project.url"
          :clientName="project.clientName"
          :clientTitle="project.clientTitle"
          :clientImg="project.clientImg"
          :testimonial="project.testimonial"
          :forClient="project.forClient"
        />
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 q-pa-sm">
        <q-card class="contactMe">
          <q-card-section class="text-h6 text-bold">
            Want your own website or web app?
          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              class="text-bold q-px-xl q-py-xs"
              type="a"
              color="primary"
              href="#contact"
              size="22px"
              label="Contact Me"
            />
          </q-card-actions>
        </q-card>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";

import Project from "./Project.vue";

export default defineComponent({
  components: {
    Project,
  },
  setup() {
    const projects = ref([
      {
        title: "Norian Games",
        stack: "WordPress Along with Elementor",
        url: "http://noriangames.com/",
        img: "norian.jpg",
        forClient: true,
        testimonial:
          "Anindo Neel Dutta did an impeccable job of creating our website. He is dedicated, committed and above all zealous in the tasks that he is assigned to. He has an excellent eye for details and is willing to spend a lot of his time and energy into making sure that he does his job with utmost sincerity. I would highly recommend Neel to anyone who wishes to procure his services and I would definitely approach him anytime I would need his services.",
        clientName: "Jake Koshy",
        clientImg: "jake.jpg",
        clientTitle: "CEO, Norian Games",
      },
      {
        title: "Katie Jo Pockat",
        stack: "WordPress Along with Elementor",
        url: "https://katiejopockat.com/",
        img: "katiejo.jpg",
        forClient: true,
        testimonial:
          "I hired Neel to create my official artist website. He built the whole site and it was up and running in two weeks. He involved me in the process, asking which color schemes I preferred and asked me all I'd like included on my site. Then he taught me how to make my own additions in the way of blog posts and song lyrics. As the webiste grew, he made all the necessary changes and updates whenever needed in a timely matter and is always available when I need him.",
        clientName: "Katie Jo Pockat",
        clientImg: "katie.jpg",
        clientTitle: "Singer/Songwriter",
      },
    ]);

    return {
      projects,
    };
  },
});
</script>

<style lang="scss" scoped>
.contactMe {
  background-color: #389787;
}

.body--light {
  .contactMe {
    background-color: #5dbdad;
  }
}
</style>

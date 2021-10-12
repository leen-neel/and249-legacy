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
        title: "Katie Jo Pockat",
        stack: "WordPress Along with Elementor",
        url: "https://katiejopockat.com/",
        img: "katiejo.jpg",
        forClient: true,
        testimonial: "TEST TEST TEST TEST TEST",
        clientName: "Katie Jo Pockat",
        clientImg: "katie.jpg",
        clientTitle: "Singer/Songwriter",
      },
      {
        title: "Norian Games",
        stack: "WordPress Along with Elementor",
        url: "http://noriangames.com/",
        img: "norian.jpg",
        forClient: true,
        testimonial: "TEST TEST TEST TEST TEST",
        clientName: "Jake Koshy",
        clientImg: "katie.jpg",
        clientTitle: "CEO, Norian Games",
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

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
        forClient: false,
        testimonial: "TEST TEST TEST TEST TEST",
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

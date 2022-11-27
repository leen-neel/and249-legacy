<template>
  <div class="q-mt-lg">
    <q-card-section>
      <div class="oswald allign-left text-bold text-h3">Projects</div>
    </q-card-section>

    <!-- Projects -->
    <q-card-section v-if="!isLoading && !isError" class="row">
      <div
        v-for="project in projects"
        :key="project._id"
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
          :description="project.description"
        />
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 q-pa-sm">
        <q-card class="contactMe">
          <q-card-section class="text-h6 text-bold">
            Want your own website or web app?
          </q-card-section>

          <div class="flex flex-center q-py-md">
            <q-btn
              class="text-bold q-px-xl q-py-xs"
              color="primary"
              size="22px"
              label="Hire Me"
              @click="scrollToHire"
            />
          </div>
        </q-card>
      </div>
    </q-card-section>

    <!-- In case there's an error -->
    <q-card-section v-if="!isLoading && isError">
      <div class="text-h6 flex flex-center q-ma-lg text-bold">
        Something went wrong while getting the projects from API 😔
      </div>
    </q-card-section>

    <!-- Loading -->
    <q-card-section v-if="isLoading">
      <div class="text-h4 flex flex-center q-ma-lg text-bold">
        <q-spinner-dots color="white" size="5rem" :thickness="5" />
      </div>
    </q-card-section>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent, ref, onMounted } from "vue";
import { scrollToHire } from "boot/utils";

import Project from "components/Project.vue";

export default defineComponent({
  components: {
    Project,
  },
  setup() {
    const isLoading = ref(true);
    const isError = ref(false);
    const projects = ref([
      {
        _id: String,
        title: String,
        stack: String,
        url: String,
        img: String,
        forClient: String,
        testimonial: String,
        clientName: String,
        clientImg: String,
        clientTitle: String,
        description: String,
      },
    ]);

    onMounted(async () => {
      try {
        const allPrj = await axios({
          url: "https://and249-api.cyclic.app/api/projects",
          method: "get",
        });

        projects.value = allPrj.data;
        isLoading.value = false;
        isError.value = false;
      } catch (error) {
        isLoading.value = false;
        isError.value = true;
      }
    });

    return {
      projects,
      isLoading,
      isError,
      scrollToHire,
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

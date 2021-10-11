<template>
  <q-card class="q-mt-lg">
    <q-tabs :dense="$q.screen.lt.md" v-model="tab" align="justify">
      <q-tab icon="school" name="edu" label="Education" />
      <q-tab icon="developer_mode" name="skills" label="Skills" />
      <q-tab icon="auto_awesome" name="hobbies" label="Hobbies" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="edu">
        <div class="text-h4 text-bold">Education</div>
        <p class="about-text q-mt-md">I am currently a high school student.</p>
      </q-tab-panel>

      <q-tab-panel name="skills">
        <div class="text-h4 text-bold">Skills</div>
        <p class="about-text q-mt-md">
          <strong>Language skills:</strong> HTML, CSS, JavaScript
        </p>

        <p class="about-text q-mt-md">
          <strong>Framework:</strong> Vue.JS, Quasar Framework, Node JS
        </p>

        <p class="about-text q-mt-md">
          <strong>Database:</strong> Firebase, MongoDB
        </p>
      </q-tab-panel>

      <q-tab-panel name="hobbies">
        <div class="text-h4 text-bold">Hobbies</div>
        <p class="about-text q-mt-md">
          My hobbies include listening to music, programming and hanging out
          with my friends. I also like making level designs for fun. You can
          find some of them on
          <a href="http://instagram.com/and_249">my Instagram</a>
        </p>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const tab = ref("edu");

    return {
      tab,
    };
  },
};
</script>

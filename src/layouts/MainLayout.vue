<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="flex justify-end">
        <q-toolbar-title class="archDau">
          <a @click="scrollToTop" class="header-title">Anindo Neel Dutta</a>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { scrollToTop } from "boot/utils";

export default defineComponent({
  name: "MainLayout",
  setup() {
    return {
      scrollToTop,
    };
  },
});
</script>

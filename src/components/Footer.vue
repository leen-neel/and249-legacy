<template>
  <q-card class="q-mt-lg">
    <q-card-section class="flex flex-center justify-end">
      <div class="text-weight-bolder">Made with 💙 by Anindo Neel Dutta</div>

      <q-space />

      <div v-for="social in socials" :key="social.id">
        <q-btn
          type="a"
          :href="social.href"
          target="_blank"
          color="white"
          :icon="social.icon"
          class="q-mx-sm"
          flat
          round
          :dense="$q.screen.lt.md"
        >
          <q-tooltip> {{ social.tooltip }} </q-tooltip>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const socials = ref([
      {
        href: "https://github.com/leen-neel/",
        icon: "fab fa-github",
        tooltip: "GitHub",
        id: 0,
      },
      {
        href: "https://instagram.com/and_249/",
        icon: "fab fa-instagram",
        tooltip: "Instagram",
        id: 1,
      },
      {
        href: "https://www.linkedin.com/in/anindo-neel-dutta-2a8050199/",
        icon: "fab fa-linkedin",
        tooltip: "LinkedIn",
        id: 2,
      },
      {
        href: "https://open.spotify.com/playlist/6hJBXl2LTwxuciQLlcse51/",
        icon: "fab fa-spotify",
        tooltip: "My Spotify Playlist",
        id: 3,
      },
    ]);

    return {
      socials,
    };
  },
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="flex justify-end">
        <q-toolbar-title class="archDau">
          <a href="#top" class="header-title">Anindo Neel Dutta</a>
        </q-toolbar-title>

        <q-btn
          flat
          round
          dense
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          @click="$q.dark.toggle()"
        />

        <q-separator spaced inset vertical />

        <q-btn
          type="a"
          href="https://github.com/leen-neel/"
          target="_blank"
          color="white"
          icon="fab fa-github"
          flat
          round
        >
          <q-tooltip> GitHub </q-tooltip>
        </q-btn>
        <q-btn
          type="a"
          href="https://instagram.com/and_249/"
          target="_blank"
          color="white"
          icon="fab fa-instagram"
          flat
          round
        >
          <q-tooltip> Instagram </q-tooltip>
        </q-btn>

        <q-btn
          type="a"
          href="https://www.linkedin.com/in/anindo-neel-dutta-2a8050199/"
          target="_blank"
          color="white"
          icon="fab fa-linkedin"
          flat
          round
        >
          <q-tooltip> LinkedIn </q-tooltip>
        </q-btn>

        <q-btn
          type="a"
          href="https://open.spotify.com/playlist/6hJBXl2LTwxuciQLlcse51"
          target="_blank"
          color="white"
          icon="fab fa-spotify"
          flat
          round
        >
          <q-tooltip> My Spotify Playlist </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useMeta } from "quasar";

export default defineComponent({
  name: "MainLayout",

  setup() {
    useMeta(() => {
      return {
        title: "Anindo Neel Dutta | Full-Stack Web Developer",
        meta: {
          desicription: {
            name: "description",
            content:
              "Hey there! I am Anindo Neel Dutta! I hail from India. I am a project manager at Norian Games Pvt. Ltd. I make web apps with the MEVN stack.",
          },
          ogTitle: {
            name: "og:title",
            content: "Anindo Neel Dutta | Full-Stack Web Developer",
          },
          ogDescription: {
            name: "og:description",
            content:
              "Hey there! I am Anindo Neel Dutta! I hail from India. I am a project manager at Norian Games Pvt. Ltd. I make web apps with the MEVN stack.",
          },
          ogImage: {
            name: "og:image",
            content:
              "https://cdn.discordapp.com/attachments/828659419277426728/897032272023281694/08c57f8e-611d-44e3-b2f1-46470ba293f4-1.jpg",
          },
          themeColor: {
            name: "theme-color",
            content: "#53e6cc",
          },
        },
      };
    });
  },
});
</script>

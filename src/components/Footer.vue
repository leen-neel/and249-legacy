<template>
  <q-card class="q-mt-lg">
    <q-card-section class="flex flex-center justify-end">
      <div class="text-weight-bolder">Made with 💙 by Anindo Neel Dutta</div>

      <q-space />

      <div>
        <q-btn
          type="a"
          href="https://github.com/leen-neel/"
          target="_blank"
          color="white"
          icon="fab fa-github"
          flat
          round
          :dense="$q.screen.lt.md"
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
          :dense="$q.screen.lt.md"
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
          :dense="$q.screen.lt.md"
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
          :dense="$q.screen.lt.md"
        >
          <q-tooltip> My Spotify Playlist </q-tooltip>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

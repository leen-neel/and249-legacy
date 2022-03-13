<template>
  <div class="bg-dark q-mt-lg">
    <q-card-section
      class="row flex-center"
      :class="{ column: $q.screen.lt.md }"
    >
      <div
        class="text-weight-bolder text-center"
        :class="{ 'q-mb-sm': $q.screen.lt.md }"
      >
        Made with 💙 by Anindo Neel Dutta
      </div>

      <q-space v-if="!$q.screen.lt.md" />

      <div>
        <q-btn
          type="a"
          href="https://github.com/leen-neel/"
          target="_blank"
          color="white"
          icon="fab fa-github"
          class="q-mx-sm"
          flat
          round
          :dense="$q.screen.lt.md"
        >
          <q-tooltip class="text-bold bg-primary"> GitHub </q-tooltip>
        </q-btn>
        <q-btn
          type="a"
          href="https://instagram.com/and_249/"
          target="_blank"
          color="white"
          icon="fab fa-instagram"
          class="q-mx-sm"
          flat
          round
          :dense="$q.screen.lt.md"
        >
          <q-tooltip class="text-bold bg-primary"> Instagram </q-tooltip>
        </q-btn>
        <q-btn
          type="a"
          href="https://www.linkedin.com/in/anindo-neel-dutta-2a8050199/"
          target="_blank"
          color="white"
          icon="fab fa-linkedin"
          class="q-mx-sm"
          flat
          round
          :dense="$q.screen.lt.md"
        >
          <q-tooltip class="text-bold bg-primary"> LinkedIn </q-tooltip>
        </q-btn>
        <q-btn
          type="a"
          href="https://t.me/and_249"
          target="_blank"
          color="white"
          icon="fab fa-telegram"
          class="q-mx-sm"
          flat
          round
          :dense="$q.screen.lt.md"
        >
          <q-tooltip class="text-bold bg-primary"> Telegram </q-tooltip>
        </q-btn>
        <q-btn
          type="a"
          href="https://open.spotify.com/playlist/6hJBXl2LTwxuciQLlcse51/"
          target="_blank"
          color="white"
          icon="fab fa-spotify"
          class="q-mx-sm"
          flat
          round
          :dense="$q.screen.lt.md"
        >
          <q-tooltip class="text-bold bg-primary"> My playlist </q-tooltip>
        </q-btn>
      </div>
    </q-card-section>
  </div>
</template>

<script></script>

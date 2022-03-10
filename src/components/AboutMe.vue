<template>
  <div class="q-mt-lg q-pa-sm">
    <q-card-section>
      <div class="allign-left oswald text-bold text-h3">About me</div>
    </q-card-section>
    <q-card-section class="about-text">
      <p>
        Hey there! I am
        <span class="archDau text-bold"> Anindo Neel Dutta! </span> I hail from
        🇮🇳. I am a project manager at Norian Games Pvt. Ltd. I make web apps
        with the
        <strong>
          <abbr title="MongoDB + Express + Vue.JS + NodeJS">MEVN</abbr>
        </strong>
        stack.
      </p>

      <p>
        I've been coding since the age of 6. Programming has been an essential
        part of my life. Learning about new technology and building apps that
        find solutions to make life easier has always been a passion of mine.
      </p>

      <q-btn
        class="text-bold q-px-xl q-py-xs"
        @click="scrollToHire"
        size="22px"
        label="Hire Me"
        color="primary"
      />
    </q-card-section>
  </div>
</template>

<script>
import { scrollToHire } from "boot/utils";
export default {
  setup() {
    return {
      scrollToHire,
    };
  },
};
</script>

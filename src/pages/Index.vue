<template>
  <q-page class="q-pa-md">
    <!-- Hero section -->
    <q-card class="hero-card q-pa-lg">
      <div class="row items-end justify-evenly">
        <div
          :class="{
            'text-h1': $q.screen.gt.sm,
            'text-h4': $q.screen.lt.md,
            'q-pa-md': $q.screen.lt.md,
          }"
        >
          Hi, I am <strong class="archDau">Neel</strong>
        </div>

        <div>
          <q-avatar size="250px" :class="{ 'avatar-card': $q.screen.lt.md }">
            <img src="images/avatar_neel.png" />
          </q-avatar>
        </div>
      </div>
    </q-card>

    <q-card class="q-mt-lg">
      <q-card-section>
        <div class="q-mt-xl allign-left text-bold text-h3">About me</div>
      </q-card-section>
      <q-card-section class="about-text">
        Hey there! I am <span class="archDau"> Anindo Neel Dutta! </span> I am a
        web app developer working on the <strong>MEVN</strong> stack. I love
        creating web apps and websites.
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>

<style lang="scss" scoped>
.hero-card {
  border-radius: 16px;
}

.avatar-card {
  border-radius: 16px;
}
</style>

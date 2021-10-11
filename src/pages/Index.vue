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
          Hi, I am <strong>Neel</strong>
        </div>

        <div>
          <q-avatar size="250px" :class="{ 'avatar-card': $q.screen.lt.md }">
            <img src="images/neel.jpg" />
          </q-avatar>
        </div>
      </div>
    </q-card>

    <div class="q-mt-xl text-center text-bold text-h3">What I do</div>
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

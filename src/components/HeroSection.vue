<template>
  <!-- Hero section -->
  <q-card class="q-pa-lg">
    <div class="row items-center justify-evenly">
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
        <q-avatar size="250px" class="avatar-card">
          <q-img
            src="images/avatar_neel.png"
            :ratio="1 / 1"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-avatar>
      </div>
    </div>
  </q-card>
</template>

<script></script>

<style lang="scss" scoped>
.avatar-card {
  border-radius: 16px;
}
</style>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex column flex-center" padding>
        <img src="/images/AppIcon.png" alt="" />

        <div class="column q-gutter-md socials">
          <q-btn
            type="a"
            href="https://github.com/leen-neel/"
            target="_blank"
            label="GitHub"
            color="primary"
            icon="fab fa-github"
          />
          <q-btn
            target="_blank"
            label="Discord"
            color="primary"
            icon="fab fa-discord"
            @click="copyDiscord"
          />
          <q-btn
            type="a"
            href="https://www.instagram.com/and_249/"
            target="_blank"
            label="Instagram"
            color="primary"
            icon="fab fa-instagram"
          />
          <q-btn
            type="a"
            href="https://t.me/and_249/"
            target="_blank"
            label="Telegram"
            color="primary"
            icon="fab fa-telegram"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const $q = useQuasar();

    const copyDiscord = () => {
      navigator.clipboard.writeText("and249#0249");

      $q.notify({
        message: "Username copied to clipboard!",
        color: "primary",
        timeout: 2000,
        progress: true,
      });
    };

    return {
      copyDiscord,
    };
  },
});
</script>

<style lang="scss" scoped>
img {
  width: 100px;
}

.socials {
  margin-top: 50px;

  .q-btn {
    width: 300px;
    padding: 20px 50px;
  }
}
</style>

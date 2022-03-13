<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="background flex column flex-center" padding>
        <img src="/images/AppIcon.png" alt="" />

        <div class="column q-gutter-md socials">
          <q-btn
            target="_blank"
            label="Discord"
            color="primary"
            icon="fab fa-discord"
            @click="copyDiscord"
          />

          <q-btn
            type="a"
            href="https://t.me/and_249/"
            target="_blank"
            label="Telegram"
            color="primary"
            icon="fab fa-telegram"
          />
          <q-btn
            type="a"
            href="https://github.com/leen-neel/"
            target="_blank"
            label="GitHub"
            color="primary"
            icon="fab fa-github"
          />

          <q-btn
            type="a"
            href="https://www.instagram.com/and_249/"
            target="_blank"
            label="Instagram"
            color="primary"
            icon="fab fa-instagram"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar, useMeta } from "quasar";

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

    // Meta info
    useMeta(() => {
      return {
        title: "Socials | Anindo Neel Dutta",
        meta: {
          description: {
            name: "description",
            content:
              "Hey there! I am Anindo Neel Dutta! I hail from India. I am a project manager at Norian Games Pvt. Ltd. I make web apps with the MEVN stack",
          },
          title: {
            name: "title",
            content: "Socials | Anindo Neel Dutta",
          },
          themeColor: { name: "theme-color", content: "#53e6cc" },
          ogDescripton: {
            name: "og:description",
            content:
              "Hey there! I am Anindo Neel Dutta! I hail from India. I am a project manager at Norian Games Pvt. Ltd. I make web apps with the MEVN stack",
          },
          ogTitle: {
            name: "og:title",
            content: "Socials | Anindo Neel Dutta",
          },
          ogImage: {
            name: "og:image",
            content: "https://and249.codes/images/Myself.jpeg",
          },
          ogURL: {
            name: "og:url",
            content: "https://and249.codes/",
          },
          twitterDesc: {
            name: "twitter:description",
            content:
              "Hey there! I am Anindo Neel Dutta! I hail from India. I am a project manager at Norian Games Pvt. Ltd. I make web apps with the MEVN stack",
          },
          twitterTitle: {
            name: "twitter:title",
            content: "Socials | Anindo Neel Dutta",
          },
          twitterImage: {
            name: "twitter:image",
            content: "https://and249.codes/images/Myself.jpeg",
          },
          twitterURL: {
            name: "twitter:url",
            content: "https://and249.codes/",
          },
        },
      };
    });

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

.background {
  background-image: url("/images/socialsBG.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.socials {
  margin-top: 50px;

  .q-btn {
    width: 300px;
    padding: 20px 50px;
  }
}
</style>

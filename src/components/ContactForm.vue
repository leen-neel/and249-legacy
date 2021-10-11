<template>
  <q-card class="q-mt-lg">
    <q-card-section>
      <div class="allign-left text-bold text-h3">Contact me</div>
    </q-card-section>
    <q-card-section class="about-text">
      Wanna hire me or just talk to me? Shoot me a message!
    </q-card-section>
    <q-card-section>
      <div
        v-if="messageSent"
        class="text-h4 flex flex-center q-ma-lg text-bold"
      >
        Your message was sent! 🥳
      </div>

      <q-form v-if="!messageSent">
        <q-input v-model="name" type="text" label="Name" filled color="white" />
        <q-input
          class="q-mt-sm"
          v-model="email"
          type="email"
          label="Email"
          filled
          color="white"
        />

        <q-input
          v-model="subject"
          class="q-mt-sm"
          color="white"
          label="Subject"
          filled
        />

        <q-input
          class="q-mt-sm"
          v-model="message"
          type="textarea"
          color="white"
          placeholder="Message..."
          filled
        />
      </q-form>

      <q-btn
        class="q-mt-sm"
        color="primary"
        icon="send"
        label="Send"
        @click="sendMessage"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const quasar = useQuasar();

    const name = ref("");
    const email = ref("");
    const message = ref("");
    const subject = ref("");

    const messageSent = ref(false);

    const sendMessage = () => {
      if (name.value && email.value && message.value && subject.value) {
        messageSent.value = true;
        quasar.notify({
          message: "Your message was sent!",
          color: "primary",
          position: "top-right",
          progress: true,
          timeout: 1500,
        });
      } else {
        quasar.notify({
          message: "Please enter all of the fields!",
          color: "red-10",
          position: "top-right",
          progress: true,
          timeout: 1500,
        });
      }
    };

    return {
      name,
      email,
      message,
      subject,
      sendMessage,
      messageSent,
    };
  },
};
</script>

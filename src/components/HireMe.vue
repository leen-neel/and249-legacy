<template>
  <q-card class="q-mt-lg">
    <q-card-section>
      <div class="oswald allign-left text-bold text-h3">Hire me</div>
    </q-card-section>
    <q-card-section class="about-text">
      If you would like to get in contact with me for business or casual
      inquiries, send me a message!
    </q-card-section>
    <q-card-section>
      <div
        v-if="messageSent"
        class="text-h4 flex flex-center q-ma-lg text-bold text-center"
      >
        Your message was sent! 🥳
      </div>

      <div
        v-if="messageFailed"
        class="text-h4 flex flex-center q-ma-lg text-bold text-center"
      >
        No worries! Send me an email at

        <q-badge color="primary" class="q-ml-sm text-h6">
          <a
            target="_blank"
            :href="`mailto:and24903@gmail.com?subject=${subject}&body=${message}`"
          >
            {{ emailID }}
          </a>
        </q-badge>
      </div>

      <q-form v-if="!messageSent && !messageFailed">
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
          label="Message..."
          filled
        />
      </q-form>

      <q-btn
        v-if="!messageSent && !messageFailed"
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
import { sendMail } from "boot/sendMail";

export default {
  setup() {
    const quasar = useQuasar();

    const name = ref("");
    const email = ref("");
    const message = ref("");
    const subject = ref("");
    const emailID = ref("and24903@gmail.com");

    const messageSent = ref(false);
    const messageFailed = ref(false);

    const sendMessage = () => {
      if (name.value && email.value && message.value && subject.value) {
        sendMail({
          name: name.value,
          sender: email.value,
          subject: subject.value,
          body: message.value,
        })
          .then(() => {
            quasar.notify({
              message: "Your message was sent!",
              color: "primary",
              position: "top-right",
              progress: true,
              timeout: 1500,
            });
            messageSent.value = true;
          })
          .catch(() => {
            messageFailed.value = true;
            quasar.notify({
              message: "Something went wrong 😔",
              color: "red-10",
              position: "top-right",
              progress: true,
              timeout: 1500,
            });
            return;
          });
      } else {
        quasar.notify({
          message: "Please enter all of the fields 🤦",
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
      messageFailed,
      emailID,
    };
  },
};
</script>

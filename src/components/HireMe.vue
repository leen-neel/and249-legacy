<template>
  <div class="q-mt-lg">
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
        <q-input
          v-model="name"
          type="text"
          label="Name"
          filled
          color="white"
          :loading="messageSending"
          :readonly="messageSending"
        />
        <q-input
          class="q-mt-sm"
          v-model="email"
          type="email"
          label="Email"
          filled
          color="white"
          :loading="messageSending"
          :readonly="messageSending"
        />

        <q-input
          v-model="subject"
          class="q-mt-sm"
          color="white"
          label="Subject"
          filled
          :loading="messageSending"
          :readonly="messageSending"
        />

        <q-input
          class="q-mt-sm"
          v-model="message"
          type="textarea"
          color="white"
          label="Message..."
          filled
          :loading="messageSending"
          :readonly="messageSending"
        />
      </q-form>

      <q-btn
        v-if="!messageSent && !messageFailed"
        class="q-mt-sm"
        color="primary"
        icon="send"
        label="Send"
        @click="sendMessage"
        :disable="!canSend"
      />
    </q-card-section>
  </div>
</template>

<script>
import { ref, computed } from "vue";
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
    const messageSending = ref(false);

    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const canSend = computed(() => {
      return (
        name.value &&
        email.value &&
        regex.test(email.value) &&
        subject.value &&
        message.value &&
        !messageSending.value
      );
    });

    const sendMessage = () => {
      if (name.value && email.value && message.value && subject.value) {
        messageSending.value = true;
        sendMail({
          name: name.value,
          sender: email.value,
          subject: subject.value,
          body: message.value,
        })
          .then(() => {
            messageSending.value = false;
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
      canSend,
      messageSending,
    };
  },
};
</script>

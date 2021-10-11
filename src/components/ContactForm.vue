<template>
  <q-card class="q-mt-lg">
    <q-card-section>
      <div class="allign-left text-bold text-h3">Contact me</div>
    </q-card-section>
    <q-card-section>
      <q-form>
        <q-input v-model="name" type="text" label="Name" filled color="white" />
        <q-input
          class="q-mt-sm"
          v-model="email"
          type="text"
          label="Email"
          filled
          color="white"
        />

        <q-select
          v-model="subject"
          :options="options"
          class="q-mt-sm"
          color="white"
          label="Subject of your message"
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
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const subject = ref("");
    const options = ["Inquiry about app development", "Just a message"];

    return {
      name,
      email,
      message,
      subject,
      options,
    };
  },
};
</script>

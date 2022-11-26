<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "App",

  setup() {
    const quasar = useQuasar();
    quasar.dark.set(true);
  },
});
</script>

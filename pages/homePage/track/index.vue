<template>
  <div class="container"></div>
</template>

<script>
import clock from "~/components/utils/clock.vue";
export default {
  name: "Track",
  components: { clock },
  async created() {},
  data: function () {
    return {
      user: null,
      username: "",
      password: "",
    };
  },
  methods: {},
};
</script>

<style>
</style>
<template>
  <div class="container"></div>
</template>


<script>
import clock from "~/components/utils/clock.vue";
export default {
  name: "HomePage",
  components: { clock },
  async created() {
    this.user = await this.$api.users.getUser(1);
  },
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
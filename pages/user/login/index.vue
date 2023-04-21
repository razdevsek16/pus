<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="username">Insert username or email</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="username"
            placeholder="Enter user credetials"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Insert password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            placeholder="Enter password"
            required
          />
        </div>
        <div style="text-align: center">
          <button @click="loginUser()" class="btn btn-primary my-4 w-20">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clock from "~/components/utils/clock.vue";
export default {
  name: "LoginUser",
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
  methods: {
    loginUser() {
      let formData = new FormData();
      formData.append("username", this.username);
      formData.append("password", this.password);
      let data = { username: this.username, password: this.password };
      this.user = this.$api.users.loginUser(formData);
    },
  },
};
</script>

<style>
</style>
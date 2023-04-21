<template>
  <div class="container">
    <div class="form-group">
      <label for="firstName">First name</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        v-model="firstName"
        placeholder="Enter first name"
        required
      />
    </div>
    <div class="form-group">
      <label for="lastName">Last name</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        v-model="lastName"
        placeholder="Enter last name"
        required
      />
    </div>
    <div class="form-group">
      <label for="userName">Username</label>
      <input
        type="text"
        class="form-control"
        id="userName"
        v-model="username"
        placeholder="Enter username"
        required
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        required
      />
      <small id="emailHelp" class="form-text text-muted"
        >We will send you your confirmation on entered email.</small
      >
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
        placeholder="Enter password"
        required
      />
    </div>
    <div class="form-group">
      <label for="password2">Repeat password</label>
      <input
        type="password"
        class="form-control"
        id="password2"
        v-model="rePassword"
        placeholder="Repeat password"
        required
      />
    </div>
    <button @click="registerUser()" class="btn btn-primary my-2">
      Register
    </button>
    <notifications />
  </div>
</template>

<script>
import notification from "@kyvg/vue3-notification";
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
  name: "RegisterUser",
  components: ["CustomInput", "Notifications"],
  async created() {
    this.user = await this.$api.users.getUser(1);
  },
  data: function () {
    return {
      user: null,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      rePassword: "",
    };
  },
  async mounted() {},
  methods: {
    async registerUser() {
      if (this.password != this.rePassword)
        toast("Repeted password is not equal as password!");
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        name: this.firstName + " " + this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
      };
      console.log(user);
      this.user = await this.$api.users.registerUser(user);
      console.log(this.user);
    },
  },
};
</script>

<style>
</style>
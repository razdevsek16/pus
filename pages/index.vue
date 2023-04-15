<template>
  <div class="px-20">
    <div style="padding-top: 20px">
      <b-row align-v="center">
        <b-col style="text-align: left">
          <lable>Company name </lable>
          <label>Magistrat International d.o.o </label>
        </b-col>
        <b-col>
          <lable> </lable>
        </b-col>
        <b-col style="text-align: right">
          <label style="font-size: medium">Current time: </label>
          <label style="font-size: large">
            <clock />
          </label>
        </b-col>
      </b-row>
      <b-row> </b-row>
    </div>
  </div>
</template>

<script>
import clock from "~/components/utils/clock.vue";
export default {
  components: { clock },
  async created() {
    this.user = await this.$api.users.getUser(2);
    //console.log(this.user);
  },
  data: function () {},
};
</script>

<style></style>
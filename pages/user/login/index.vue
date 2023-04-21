<template>
  <div>
    <section>
      <div class="row p-20">
        <div class="col-md-12 d-flex align-items-center text-light">
          <div class="row py-1">
            <div class="col-6" style="text-align: right">
              <label>Ime</label>
            </div>
            <div class="col-6">
              <input />
            </div>
          </div>
        </div>
      </div>
    </section>
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
    };
  },
};
</script>

<style>
</style>
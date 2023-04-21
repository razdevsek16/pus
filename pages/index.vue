<template>
  <div>
    <section>
      <div class="row p-2">
        <div class="col-md-6">
          <div>
            <h4 class="tp-text-uppercase-sm my-3">
              Registrator delovnega časa
            </h4>
            <h1 class="tp-text-uppercase-xl mt-0">TrackUser</h1>
            <h5 class="tp-text-uppercase-xs">
              je produkt za evidentiranje dela, planov prostih dni, bolniških
              staležev in ostale poslovne logike.
            </h5>
            <h5 class="tp-text-uppercase-xs py-4">
              Sistem je neodvisen od podatkovne baze, tako, da se lahko migrira
              v katerokoli okolje in je tako lahko tudi samo del internega
              poslovnega modela.
            </h5>

            <div class="mt-6">
              <NuxtLink to="/user/register" class="btn btn-outline-light">
                Registriranje uporabnika
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-end"></div>
      </div>
      <div class="row px-4 pt-6 pb-2">
        <div class="col text-light" style="text-align: right"></div>
      </div>
    </section>
  </div>
</template>

<script>
import clock from "~/components/utils/clock.vue";
export default {
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
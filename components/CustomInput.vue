<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row py-1">
        <div class="col-6" style="text-align: right">
          <label>{{ label }}</label>
        </div>
        <div class="col-6">
          <input
            :type="type"
            :v-model="value"
            style="color: black"
            class="form-control px-1 sm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: ["value", "type", "label"],
};
</script>

<style>
</style>
<template>
  <div>
  <h1>Ime</h1>
  </div>
</template>


<script>
export default {
  async created() {
    let data = await this.$api.users.getUser(2);
    console.log(data)
  },
  data: function(){

  },

}
</script>

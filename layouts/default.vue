<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto py-5 px-20 flex justify-between">
        <NuxtLink to="/" class="font-bold">TrackUser</NuxtLink>
        <ul class="flex gap-5">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/user/login" class="btnLogin">Login</NuxtLink></li>
          <li>
            <NuxtLink to="/user/register" class="btnRegister"
              >Register</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto py-4 px-20" style>
      <slot></slot>
    </div>

    <footer class="shadow-sm bg-white"></footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>
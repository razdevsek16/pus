<template>
  <div>
    <header class="shadow-sm bg-dark fixed-top" style="opacity: 0.7">
      <nav class="container mx-auto py-2 px-10 flex justify-between">
        <NuxtLink to="/" class="btn btn-outline-light">TrackUser</NuxtLink>
        <ul class="flex gap-5">
          <li>
            <NuxtLink to="/" class="btn btn-outline-light font-bold"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/user/login" class="btn btn-outline-light font-bold"
              >Login</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/user/register"
              class="btn btn-outline-light font-bold"
              >Register</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <div class="hero-image">
      <div class="shadow-sm" style="min-height: 550px">
        <div class="row p-20" style="padding-top: 6rem">
          <div class="col align-items-center text-light">
            <slot></slot>
          </div>
        </div>
      </div>

      <footer>
        <div class="text-secondary bg-dark py-3" style="opacity: 0.7">
          <div class="container justify-center">
            <div class="row mx-2">
              <div class="col-md-4" style="text-align: center">
                <h5>Razvoj</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="https://fastapi.tiangolo.com/"
                      >BackEnd - FastApi</a
                    >
                  </li>
                  <li>
                    <a href="https://nuxt.com/">FrontEnd - Nuxt 3</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4" style="text-align: center">
                <h5>Projekti</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="https://github.com/razdevsek16">Repozitorij</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4" style="text-align: center">
                <h5>Profil</h5>
                <ul class="list-unstyled">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/alja%C5%BE-razdev%C5%A1ek-723026135/"
                      >LinkedIn</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <hr />

            <div class="d-md-flex justify-content-center">
              <div class="text-center small">
                copyright © 2023-2025 Aljaž Razdevšek. All right reserved.
                <a href="/legal">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-exact-active {
  color: green;
}
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/assets/img/sandClock.jpg");
  height: auto;
  max-width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  zoom: -2;
}
</style>
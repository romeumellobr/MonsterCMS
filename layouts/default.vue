<template>
  <div class="">
    <adminMenu/>
    <section class="hero is-dark">
      <div class="hero-body">
        <p class="title">
          Olá!
        </p>
        <p class="subtitle">
          Vamos configurar seu <strong>CMS</strong>
        </p>
      </div>
    </section>
    <!-- Make sure to add the <nuxt/> component when creating a layout to display the page component. -->
    <!-- https://nuxtjs.org/guide/views#layouts -->

    <nuxt/>
    <footer/>
  </div>
</template>

<script>
import adminMenu from '~/components/admin_menu.vue'
import footer from '~/components/footer.vue'

export default {
  components: {
    adminMenu,
    footer
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>

<template>
  <div>
    <nav class="navbar is-dark" role="navigation" aria-label="dropdown navigation">
      <a class="navbar-item">
        <img src="~/assets/img/logo.png" class="is-dark" alt="MonsterCMS" width="112" height="28">
      </a>
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable is-dark">
          <a class="navbar-link" style="color:white;">
            Docs
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Overview
            </a>
            <a class="navbar-item">
              Elements
            </a>
            <a class="navbar-item">
              Components
            </a>
            <hr class="navbar-divider">
            <div class="navbar-item">
              Version 0.7.0
            </div>
          </div>
        </div>
  </div>


      <div class="navbar-end">
        <a class="navbar-item" @click="isComponentModalActive = true">
          login
        </a>
        <a class="navbar-item" @click="isComponentModalActive = true">
          <img src="~/assets/img/profile.png" alt="profile" width="28" height="28">
        </a>
      <b-modal :active.sync="isComponentModalActive" has-modal-card>
          <modal-form v-bind="formProps"></modal-form>
      </b-modal>

      </div>
    </nav>
  </div>

</template>
<script>
import loginForm from '~/components/login.vue'

    export default {
        components: {
            loginForm
        },
        data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                }
            }
        }
    }
</script>

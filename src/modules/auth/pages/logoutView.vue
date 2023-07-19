<template>
    <div class="logout">
      <div v-if="loading">
        <i-icon icon="eos-icons:bubble-loading" width="60px" />
        <h6 class="">Logging out</h6>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        loading: false,
      };
    },
    methods: {
      ...mapActions("auth", ["logout"]),
      showLoadingAnimation() {
        this.loading =  true
        // Code to show the loading animation
      },
      hideLoadingAnimation() {
        this.loading = false
        // Code to hide the loading animation
      },
      loadContent() {
        this.showLoadingAnimation();
        setTimeout(() => {
          // Code to load content using AJAX
          this.logout();
        }, 3000);
      },
    },
    created(){
      this.loadContent()
    }
  };
  </script>
  
  <style>
.logout {
    height: 100vh;
    display: grid;
    display: -moz-grid;
    display: -ms-grid;
    place-items: center;
}
</style>
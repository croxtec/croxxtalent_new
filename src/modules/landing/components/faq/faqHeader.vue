<template>
  <div class="faq_page">
    <div class="container text-center">
      <h4>How can we help you</h4>
      <div>
        <div class="faq--filter">
          <i class="isax isax-search-normal text-white"></i>
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media only screen and (max-width:572px) {
  .faq--filter {
    width: 100%;
  }
  .container > h4 {
    display: flex;
    justify-content: left !important;
    font-size: 15px;
  }
  .faq_page {
    height: 200px;
  }
}
</style>
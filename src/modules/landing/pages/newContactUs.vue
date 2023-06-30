<template>
  <div>
    <div class="text-center my-5">
        <img src="@/assets/img/contact-page.png" class="contact-img" alt="">
    </div>
    <div>
        <h3 class="mx-auto text-center" style="font-weight: 600">We are always excited to hear from you</h3>
        <contact-us-form class="mt-4"/>
    </div>
  </div>
</template>

<script>
import contactUsForm from '@/components/forms/contactUsForm.vue'
export default {
  components: { contactUsForm },

}
</script>

<style scoped>
    .contact-img {
        border-radius: 80px;
    }
    h3 {
            width: 30%;
        }

    @media (max-width:990px) {

        h3 {
            width: 100%;
        }
        .contact-img {
            width: 80%;
            border-radius: 30px;
        }
    }
</style>
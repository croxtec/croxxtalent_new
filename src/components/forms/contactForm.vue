<template>
  <div class="contact--us_section">
    <div class="container">
      <div class="contact--us_form">
        <div class="text-center">
          <h5 class="header--text mb-1">Contact Us</h5>
          <p class="small">
            For further questions, including partnership opportunities, please
            email hello@croxxtalent.com or contact using our contact form.
          </p>
        </div>
        <div class="mt-3">
          <form action="">
            <div class="d-flex w-100" style="gap: 20px">
              <div class="mb-3 w-100">
                <label for="">Full Name</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div class="mb-3 w-100">
                <label for="">Email</label>
                <input type="email" placeholder="hello@creative-tim.com" />
              </div>
            </div>

            <div class="mb-4">
              <label for="">How can we help you?</label>
              <textarea
                rows="8"
                placeholder="Describe your problem in at least 250 characters"
              ></textarea>
            </div>

            <div class="text-center">
              <cx-button> <slot>Send</slot> </cx-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cxButton from "../buttons/cxButton.vue";
export default {
  components: { cxButton },
};
</script>

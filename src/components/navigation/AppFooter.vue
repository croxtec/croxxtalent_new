<template>
  <div>
    <div class="container">
      <footer class="footer mt-4">
        <div class="py-3">
          <div class="footer--top">
            <div class="row">
              <!-- <div class="col-md mb-3">
                <router-link to="/"
                  ><img src="@/assets/img/logo.png" width="250" alt=""
                /></router-link>
              </div> -->

              <div class="col-md">
                <h4 class="footer--header">Company</h4>
                <ul class="list-unstlyed">
                  <li><router-link to="/about-us">About Us</router-link></li>
                  <li>
                    <router-link to="/contact-us"> Contact Us</router-link>
                  </li>

                  <li><router-link to="/careers">Careers</router-link></li>
                  <li><router-link to="/pricing">Pricing</router-link></li>
                </ul>
              </div>

              <div class="col-md">
                <h4 class="footer--header">Resources</h4>
                <ul class="list-unstlyed">
                  <li>
                    <router-link to="/partnerships"> Partnerships</router-link>
                  </li>
                  <li>
                    <router-link to="/build-cv">Build CV</router-link>
                  </li>
                  <li><router-link to="/affiliate">Affiliate</router-link></li>
                  <li>
                    <router-link to="/frequently-asked-questions"
                      >FAQ</router-link
                    >
                  </li>
                </ul>
              </div>

              <div class="col-md">
                <h4 class="footer--header">Learn</h4>
                <ul class="list-unstlyed">
                  <li>
                    <router-link to="/case-studies">Case Studies</router-link>
                  </li>
                  <li><router-link to="/blog">Blog</router-link></li>
                  <li>
                    <router-link to="/how-it-works">How it Works</router-link>
                  </li>
                </ul>
              </div>

              <!-- <div class="col-md">
                <h4>Learn</h4>
                <div class="mt-4">
                  <div class="d-flex align-items-center mt-2" style="gap: 10px">
                    <a target="_blank" href="https://croxxtalent.io">
                      <i
                        class="fa fa-facebook text-primary"
                        style="font-size: 25px"
                        aria-hidden="true"
                      ></i>
                    </a>

                    <a
                      target="_blank"
                      href="https://croxxtalent.io"
                      style="font-size: 25px"
                    >
                      <i
                        class="fa fa-linkedin-square text-primary"
                        aria-hidden="true"
                      ></i>
                    </a>

                    <a target="_blank" href="https://croxxtalent.io">
                      <i
                        class="fa fa-twitter text-info"
                        style="font-size: 25px"
                        aria-hidden="true"
                      ></i>
                    </a>

                    <a target="_blank" href="https://croxxtalent.io">
                      <i
                        class="fa fa-google text-danger"
                        aria-hidden="true"
                        style="font-size: 25px"
                      ></i>
                    </a>
                  </div>
                </div>
              </div> -->

              <div class="col-md">
                <h4 class="footer--header">Legal</h4>
                <ul class="list-unstlyed">
                  <li>
                    <router-link to="/privacy-policy">
                      Privacy Policy</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/privacy-policy">Terms of Use</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer--copyright">
            <hr class="bg-secondary" />
            <p class="text-center small">
              Copyright {{ thisYear }} © CroxxTalent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    thisYear() {
      let yearToday = new Date().getFullYear();
      return yearToday;
    },
  },
};
</script>

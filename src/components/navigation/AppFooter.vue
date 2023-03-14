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

              <div class="col-6 col-md-3">
                <h4 class="footer--header">CroxxTalent</h4>
                <p class="mt-2">
                  The Ultimate Talent Management and <br />
                  Competence Vetting Platform
                </p>
                <!-- <ul class="list-unstlyed">
                  <li><router-link to="/about-us">About Us</router-link></li>
                  <li>
                    <router-link to="/contact-us"> Contact Us</router-link>
                  </li>

                  <li><router-link to="/careers">Careers</router-link></li>
                  <li><router-link to="/pricing">Pricing</router-link></li>
                </ul> -->
              </div>

              <div class="col-6 col-md-3">
                <h4 class="footer--header">Company</h4>
                <ul class="list-unstlyed">
                  <li>
                    <router-link to="/contact"> Contact Us</router-link>
                  </li>
                  <li><router-link to="/about-us">About Us</router-link></li>
                  <!-- <li>
                    <router-link to="/partnerships"> Partnerships</router-link>
                  </li> -->
                  <li>
                    <router-link to="/frequently-asked-questions"
                      >FAQ</router-link
                    >
                  </li>
                </ul>
              </div>

              <div class="col-6 col-md-3">
                <h4 class="footer--header">Learn</h4>
                <ul class="list-unstlyed">
                  <li>
                    <router-link to="/build-cv">Build a CV</router-link>
                  </li>
                  <li><router-link to="/affiliate">Affiliate</router-link></li>
                  <!-- <li>
                    <router-link to="/case-studies">Case Studies</router-link>
                  </li>
                  <li><router-link to="/blog">Blog</router-link></li>
                  <li>
                    <router-link to="/how-it-works">How it Works</router-link>
                  </li> -->
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

              <div class="col-6 col-md-3">
                <h4 class="footer--header">Legal</h4>
                <ul class="list-unstlyed">
                  <li>
                    <router-link to="/privacy-policy">
                      Privacy Policy</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/terms-of-use">Terms of Use</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer--copyright">
            <hr class="bg-secondary" />
            <div class="footer-links">
              <p class="text-center small">
                Copyright {{ thisYear }} © CroxxTalent. All rights reserved.
              </p>
              <a href="mailto:recruitment@croxxtalent.io" class="recruitment"
                >recruitment@croxxtalent.io
              </a>
              <div class="d-flex align-items-center" style="gap: 14px">
                <a href="https://www.linkedin.com/company/croxxtalent-io/">
                  <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100087462910677">
                  <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/croxxtalent/">
                  <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/croxxtalent/">
                  <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
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

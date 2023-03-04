<template>
  <div class="container my-5">
    <h3>Our Values</h3>
    <div class="our-values-cards mt-4">
      <div class="container mb-4">
        <div class="row">
          <div class="col-sm">
            <div class="our-values-card">
              <div class="values--icon">
                <img src="@/assets/img/innovation.svg" alt="" class="img-fluid"/>
              </div>
              <div>
                <h5>Innovation</h5>
                <p class="body--text">
                  At CroxxTalent, we think outside the box to develop unique 
                  for our employees, clients, and the organization. We take calculated 
                  risks and strive for unusual and uncommon results.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="our-values-card">
              <div class="values--icon">
                <img src="@/assets/img/teamwork.svg" alt="" class="img-fluid"/>
              </div>
              <div>
                <h5>Integrity</h5>
                <p class="body--text">
                  Workplace integrity means doing the right thing when nobody's watching. 
                  It fosters teamwork and collaboration, which leads to increased 
                  productivity and success. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="our-values-card">
              <div class="values--icon">
                <img src="@/assets/img/excellence.svg" alt="" class="img-fluid"/>
              </div>
              <div>
                <h5>Data-Driven Decision-Making</h5>
                <p class="body--text"> 
                   We believe in the power of data to drive better decision-making, 
                   and we use cutting-edge technology to provide both employers and 
                   job seekers with the insights they need to succeed.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="our-values-card">
              <div class="values--icon">
                <img src="@/assets/img/reponsibility.svg" alt="" class="img-fluid"/>
              </div>
              <div>
                <h5>Customer Satisfaction</h5>
                <p class="body--text">
                   As a “People-first” company, client satisfaction is our top priority. 
                   We're dedicated to exceeding expectations and providing top-notch solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body--text {
  font-size: 1vw;
}
@media only screen and (max-width:572px) {
  .body--text {
    font-size: 2.5vw;
  }
  .col-sm {
    margin-top: 20px;
  }
}
</style>
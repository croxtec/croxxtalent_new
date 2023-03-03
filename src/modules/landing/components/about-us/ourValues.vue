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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  laudantium officia maimenda quia laborum inventore expedita,
                  iusto eveniet amet ducimus similique?
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
                <h5>Team Work</h5>
                <p class="body--text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  laudantium officia maimenda quia laborum inventore expedita,
                  iusto eveniet amet ducimus similique?
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
                <h5>Excellence</h5>
                <p class="body--text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  laudantium officia maimenda quia laborum inventore expedita,
                  iusto eveniet amet ducimus similique?
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
                <h5>Responsibility</h5>
                <p class="body--text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  laudantium officia maimenda quia laborum inventore expedita,
                  iusto eveniet amet ducimus similique?
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
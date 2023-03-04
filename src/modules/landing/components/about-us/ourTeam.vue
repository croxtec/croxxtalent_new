<template>
  <div class="container" style="margin-top: 8rem">
    <h3 class="">Our Team</h3>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm text-center">
          <div class="core-values-div">
      <div class="core-values-content">
        <div class="core-values">
          <div class="flip-card">
            <div class="card-front">
              <div class="card-data d-flex flex-column justify-content-between">
                <div class="text-center">
                  <img
                    src="@/assets/img/talent1.png"
                    style="border-radius: 50px"
                    width="90%"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div>
                  <h6 class="text-center">John Moyes</h6>
                  <h6 class="text-center small" style="font-weight: 300">
                    Chief Executive Officer
                  </h6>
                </div>
              </div>
            </div>
            <div class="card-back">
              <div
                class="card-data h-100 d-flex flex-column justify-content-between"
                style="gap: 20px"
              >
                <p class="">
                  Leadership gives direction. We believe that effective
                  transformational leadership with knowledge-driven protocols is
                  the elixir to our nation-building enterprise.
                </p>
                <div>
                  <h6 class="text-center">John Moyes</h6>
                  <h6 class="text-center small" style="font-weight: 300">
                    Chief Executive Officer
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div class="col-sm">
          <div class="core-values-div">
      <div class="core-values-content">
        <div class="core-values">
          <div class="flip-card">
            <div class="card-front">
              <div class="card-data d-flex flex-column justify-content-between">
                <div class="text-center">
                  <img
                    src="@/assets/img/talent1.png"
                    style="border-radius: 50px"
                    width="90%"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div>
                  <h6 class="text-center">John Moyes</h6>
                  <h6 class="text-center small" style="font-weight: 300">
                    Chief Executive Officer
                  </h6>
                </div>
              </div>
            </div>
            <div class="card-back">
              <div
                class="card-data h-100 d-flex flex-column justify-content-between"
                style="gap: 20px"
              >
                <p class="">
                  Leadership gives direction. We believe that effective
                  transformational leadership with knowledge-driven protocols is
                  the elixir to our nation-building enterprise.
                </p>
                <div>
                  <h6 class="text-center">John Moyes</h6>
                  <h6 class="text-center small" style="font-weight: 300">
                    Chief Executive Officer
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div class="col-sm">
          <div class="core-values-div">
      <div class="core-values-content">
        <div class="core-values">
          <div class="flip-card">
            <div class="card-front">
              <div class="card-data d-flex flex-column justify-content-between">
                <div class="text-center">
                  <img
                    src="@/assets/img/talent1.png"
                    style="border-radius: 50px"
                    width="90%"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div>
                  <h6 class="text-center">John Moyes</h6>
                  <h6 class="text-center small" style="font-weight: 300">
                    Chief Executive Officer
                  </h6>
                </div>
              </div>
            </div>
            <div class="card-back">
              <div
                class="card-data h-100 d-flex flex-column justify-content-between"
                style="gap: 20px"
              >
                <p class="">
                  Leadership gives direction. We believe that effective
                  transformational leadership with knowledge-driven protocols is
                  the elixir to our nation-building enterprise.
                </p>
                <div>
                  <h6 class="text-center">John Moyes</h6>
                  <h6 class="text-center small" style="font-weight: 300">
                    Chief Executive Officer
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div class="col-sm">
          <div class="core-values-div">
      <div class="core-values-content">
        <div class="core-values">
          <div class="flip-card">
            <div class="card-front">
              <div class="card-data d-flex flex-column justify-content-between">
                <div class="text-center">
                  <img
                    src="@/assets/img/talent1.png"
                    style="border-radius: 50px"
                    width="90%"
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div>
                  <h6 class="text-center">John Moyes</h6>
                  <h6 class="text-center small" style="font-weight: 300">
                    Chief Executive Officer
                  </h6>
                </div>
              </div>
            </div>
            <div class="card-back">
              <div
                class="card-data h-100 d-flex flex-column justify-content-between"
                style="gap: 20px"
              >
                <p class="">
                  Leadership gives direction. We believe that effective
                  transformational leadership with knowledge-driven protocols is
                  the elixir to our nation-building enterprise.
                </p>
                <div>
                  <h6 class="text-center">John Moyes</h6>
                  <h6 class="text-center small" style="font-weight: 300">
                    Chief Executive Officer
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 200px;
}
.flip-card {
  transform-style: preserve-3d;
  transition: 0.5s 0.3s;
}
.core-values {
  perspective: 1000px;
}
.core-values:hover .flip-card,
.core-values:focus-within .flip-card {
  transform: rotateY(180deg);
}
.card-front,
.card-back {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 290px;
  backface-visibility: hidden;
}
.card-front {
  transform: rotateY(0deg);
  z-index: 2;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.125);
  border-radius: 10px;
  height: 500px;
}
/* .card-back */
.card-back {
  transform: rotateY(180deg);
  z-index: 1;
  background-color: var(--primary-color);
  border-radius: 10px;
}

/* .card-data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
} */

.card-back p,
.card-back h6 {
  color: #fff;
}

.core-values-div {
  margin: 2rem 0 2rem 0;
}

.core-values-text {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin: 0 0 2rem 0;
}

.core-values-content {
  color: #ffffff;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
}

.core-values div {
  padding: 20px;
  height: 350px;
}

.core-values-green {
  background-color: #06191d;
}

.core-values-blue {
  background-color: #00a54f;
}
</style>

<template>
  <div>
    <div class="accordion" id="accordionExample">
  <div class="card cardless">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0 d-flex">
        <button class="btn btn-block text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Cheveron-Petroleum Engineer
        </button>
        <small>&or;</small>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <div class="row my-3">
        <div class="card col-sm m-3 rounded" style="width: 18rem">
          <div class="card-body">
            <div class="d-flex mb-3 justify-content-between">
                <h6 class="card-title">Surface cementing</h6>
                <img src="@/assets/img/warn.png" alt="" />
              </div>
            <div
              class="bg-percent my-4 mb-5 px-3 py-2 rounded-pill text-center"
            >
              <span>25% complete</span>
              <progress value="25" max="100"></progress>
            </div>
            <div class="d-flex">
              <span class="btn btn-primary rounded-pill mr-2">Complete task</span>
            </div>
          </div>
        </div>
        <div class="card col-sm m-3 rounded" style="width: 18rem">
          <div class="card-body">
            <div class="d-flex mb-3 justify-content-between">
                <h6 class="card-title">Drilling</h6>
                <img src="@/assets/img/warn.png" alt="" />
              </div>
            <div
              class="bg-percent my-4 mb-5 px-3 py-2 rounded-pill text-center"
            >
              <span>25% complete</span>
              <progress value="25" max="100"></progress>
            </div>
            <div class="d-flex">
              <span class="btn btn-primary rounded-pill mr-2">Complete task</span>
            </div>
          </div>
        </div>
        <div class="card col-sm m-3 rounded" style="width: 18rem">
          <div class="card-body">
            <div class="d-flex mb-3 justify-content-between">
                <h6 class="card-title">Surface cementing</h6>
                <img src="@/assets/img/warn.png" alt="" />
              </div>
            <div
              class="bg-percent my-4 mb-5 px-3 py-2 rounded-pill text-center"
            >
              <span>25% complete</span>
              <progress value="25" max="100"></progress>
            </div>
            <div class="d-flex">
              <span class="btn btn-primary rounded-pill mr-2">Complete task</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="card cardless">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0 d-flex">
        <button class="btn btn-block text-left collapsed font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Rainoil-Chemical Engineer
        </button>
        <small>&or;</small>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        <div class="row my-3">
        <div class="card col-sm m-3 rounded" style="width: 18rem">
          <div class="card-body">
            <div class="d-flex mb-3 justify-content-between">
                <h6 class="card-title">Hydrology</h6>
                <img src="@/assets/img/warn.png" alt="" />
              </div>
            <div
              class="bg-percent my-4 mb-5 px-3 py-2 rounded-pill text-center"
            >
              <span>25% complete</span>
              <progress value="25" max="100"></progress>
            </div>
            <div class="d-flex">
              <span class="btn btn-primary rounded-pill mr-2">Complete task</span>
            </div>
          </div>
        </div>
        <div class="card col-sm m-3 rounded" style="width: 18rem">
          <div class="card-body">
            <div class="d-flex mb-3 justify-content-between">
                <h6 class="card-title">Production cementing</h6>
                <img src="@/assets/img/warn.png" alt="" />
              </div>
            <div
              class="bg-percent my-4 mb-5 px-3 py-2 rounded-pill text-center"
            >
              <span>25% complete</span>
              <progress value="25" max="100"></progress>
            </div>
            <div class="d-flex">
              <span class="btn btn-primary rounded-pill mr-2">Complete task</span>
            </div>
          </div>
        </div>
        <div class="card col-sm m-3 rounded" style="width: 18rem">
          <div class="card-body">
            <div class="d-flex mb-3 justify-content-between">
                <h6 class="card-title">Surface cementing</h6>
                <img src="@/assets/img/warn.png" alt="" />
              </div>
            <div
              class="bg-percent my-4 mb-5 px-3 py-2 rounded-pill text-center"
            >
              <span>25% complete</span>
              <progress value="25" max="100"></progress>
            </div>
            <div class="d-flex">
              <span class="btn btn-primary rounded-pill mr-2">Complete task</span>
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

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
.btn:focus{
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
.cardless{
  border: none !important;
}
.bg-percent {
  background-color: #ebf3ff;
}
.card {
  border-radius: 30px !important
}
.btn-primary {
  background-color: #0040A1 !important;
}
.text-primary {
  color: #0040A1 !important;
}
</style>
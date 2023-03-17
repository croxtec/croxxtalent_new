<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between">
        <div
          class="rounded-pill border-secondary border d-flex justify-content-around pt-1 option"
        >
          <router-link to="competencies">Skills</router-link>
          <router-link to="experience">Experience</router-link>
        </div>
        <div
          class="bg-dark rounded-pill btn text-white"
          v-show="$route.name == 'competencies'"
          @click="addCompetenceModal"
        >
          + Add competence
        </div>
      </div>
      <hr class="border mt-4" />
      <!-- modal -->
      <div class="CompetenceModal" v-if="CompetenceModal === true">
        <!-- modal-content -->
        <div class="insideModal">
          <span class="close m-4" @click="CompetenceModal = false"
            >&times;</span
          >
          <header class="text-center p-4">
            <h5 class="font-weight-bold">Add competence</h5>
          </header>
          <hr />
          <div class="search text-center d-flex justify-content-center">
            <img src="@/assets/img/search-normal.png" alt="" />
            <input
              type="text"
              class="search-input ml-3"
              placeholder="Search domain, core, skills"
            />
          </div>
          <form class="p-4" @click.prevent="addCompetence">
            <div class="form-group px-5">
              <label for="exampleFormControlSelect1">Domain</label>
              <select
                class="form-control rounded-pill border border-info text-black-50"
                id="exampleFormControlSelect1"
              >
                <option>Domain</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group px-5">
              <label for="exampleFormControlSelect1">Core</label>
              <select
                class="form-control rounded-pill border border-info text-black-50"
                id="exampleFormControlSelect1"
              >
                <option>Core</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group px-5">
              <label for="exampleFormControlSelect1">Skills</label>
              <select
                class="form-control rounded-pill border border-info text-black-50"
                id="exampleFormControlSelect1"
              >
                <option>Skills</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group px-5">
              <label for="exampleFormControlSelect1">Level</label>
              <select
                class="form-control rounded-pill border border-info text-black-50"
                id="exampleFormControlSelect1"
              >
                <option>Level</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="text-center my-5">
              <button class="btn btn-primary rounded-pill text-center">
                Add Competence
              </button>
            </div>
          </form>
        </div>
      </div>
      <div v-show="$route.name == 'competencies'">
        <h4 class="pl-2">Well service</h4>
        <div
          class="d-flex justify-content-around rounded-pill border-secondary border py-2 mt-3"
        >
          <small
            class="pt-2"
            v-for="wellService in wellServices"
            :key="wellService.id"
            >{{ wellService.name }}</small
          >
          <div>
            <small class="btn bg-dark rounded-circle mx-3 text-white">
              &lt;
            </small>
            <small class="btn bg-dark rounded-circle text-white">></small>
          </div>
        </div>
        <div class="row my-3">
          <div class="card col-sm m-3 rounded" style="width: 18rem">
            <div class="card-body">
              <div class="d-flex mb-3 justify-content-between">
                <h6 class="card-title">Surface cementing</h6>
                <img src="@/assets/img/warn.png" alt="" />
              </div>
              <span
                class="px-3 py-1 text-primary border border-primary rounded-pill"
                >Intermediate</span
              >
              <div
                class="bg-percent my-4 mb-5 px-3 py-2 rounded-pill text-center"
              >
                <span>0% complete</span> <br />
                <progress value="0" max="100"></progress>
              </div>
              <div class="d-flex">
                <span class="btn btn-primary rounded-pill mr-2" @click.prevent="assessment()">Take Test</span>
                <span
                  class="btn border border-primary text-primary rounded-pill"
                  >Preview</span
                >
              </div>
            </div>
          </div>
          <div class="card col-sm m-3 rounded" style="width: 18rem">
            <div class="card-body">
              <h6 class="card-title mb-3">Production cementing</h6>
              <span
                class="px-3 py-1 text-primary border border-primary rounded-pill"
                >Basic</span
              >
              <div
                class="bg-percent my-4 mb-5 px-3 py-2 rounded-pill text-center"
              >
                <span>25% complete</span><br />
                <progress value="25" max="100"></progress>
              </div>
              <div class="d-flex">
                <span class="btn btn-primary rounded-pill mr-2" @click.prevent="assessment()">Take Test</span>
                <span
                  class="btn border border-primary text-primary rounded-pill"
                  >Interview</span
                >
              </div>
            </div>
          </div>
          <div class="card col-sm m-3 rounded" style="width: 18rem">
            <div class="card-body">
              <div class="d-flex mb-3 justify-content-between">
                <h6 class="card-title">Surface cementing</h6>
                <img src="@/assets/img/warn.png" alt="" />
              </div>
              <span
                class="px-3 py-1 text-primary border border-primary rounded-pill"
                >Expert</span
              >
              <div class="my-4">
                <img
                  src="@/assets/img/Croxx Badge.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="d-flex">
                <span class="btn btn-primary rounded-pill mr-2" @click.prevent="assessment()">Take Test</span>
                <span
                  class="btn border border-primary text-primary rounded-pill"
                  >Interview</span
                >
              </div>
            </div>
          </div>
        </div>
        <hr class="border mt-4" />
        <h4 class="pl-2">Rig operations</h4>
        <div
          class="d-flex justify-content-around rounded-pill border-secondary border py-2 mt-3"
        >
          <small
            class="pt-2"
            v-for="rigOperation in rigOperations"
            :key="rigOperation.id"
            >{{ rigOperation.name }}</small
          >
          <div>
            <small class="btn bg-dark rounded-circle mx-3 text-white"
              >&lt;</small
            >
            <small class="btn bg-dark rounded-circle text-white">></small>
          </div>
        </div>
        <div class="row my-3">
          <div class="card col-sm m-3 rounded" style="width: 18rem">
            <div class="card-body">
              <h6 class="card-title mb-3 font-weight-bold">Drill a Stand</h6>
              <div class="my-4 d-flex justify-content-between">
                <img
                  src="@/assets/img/Croxx Badge.png"
                  alt=""
                  class="img-fluid"
                />
                <div
                  class="bg-percent my-4 px-3 py-1 rounded-pill text-center d-flex"
                >
                  <img src="@/assets/img/alarm.png" class="img-fluid" alt="" />
                  <small>Expiring soon</small>
                </div>
              </div>
              <div class="d-flex">
                <span class="btn btn-primary rounded-pill mr-2">DownLoad</span>
              </div>
            </div>
          </div>
          <div class="card col-sm m-3 rounded" style="width: 18rem">
            <div class="card-body">
              <h6 class="card-title mb-3 font-weight-bold">BHA Handling</h6>
              <div
                class="bg-percent my-4 mb-5 px-3 py-2 rounded-pill text-center d-flex"
              >
                <img src="@/assets/img/refresh.png" class="mr-2" alt="" />
                <small class="text-primary font-weight-bold"
                  >Pending Review</small
                >
              </div>
              <div class="d-flex">
                <span class="btn btn-primary rounded-pill mr-2" @click.prevent="assessment()">Take Test</span>
                <span
                  class="btn border border-primary text-primary rounded-pill"
                  >Interview</span
                >
              </div>
            </div>
          </div>
          <div class="card col-sm m-3 rounded" style="width: 18rem">
            <div class="card-body">
              <h6 class="card-title mb-3 font-weight-bold">Coring rig</h6>
              <div class="my-4 d-flex">
                <img
                  src="@/assets/img/Croxx Badge.png"
                  alt=""
                  class="img-fluid"
                />
                <div
                  class="bg-danger my-4 px-3 py-2 ml-2 rounded-pill text-center"
                >
                  <img src="@/assets/img/danger.png" alt="" />
                  <small class="font-weight-bold text-white ml-2"
                    >Expired</small
                  >
                </div>
              </div>
              <div class="d-flex">
                <span class="btn btn-primary rounded-pill mr-2">Renew</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CompetenceModal: false,
      wellServices: [
        {
          name: "cementing jobs",
          id: 1,
        },
        {
          name: "Stimulation equipment",
          id: 2,
        },
        {
          name: "Auxiliary equipment",
          id: 3,
        },
        {
          name: "Cementing equipment",
          id: 4,
        },
        {
          name: "Down-holes tools",
          id: 5,
        },
        {
          name: "Pressure jobs",
          id: 6,
        },
      ],
      rigOperations: [
        {
          name: "Drill hole section",
          id: 1,
        },
        {
          name: "Tripping",
          id: 2,
        },
        {
          name: "Run casting/liner",
          id: 3,
        },
        {
          name: "well evaluation",
          id: 4,
        },
        {
          name: "cement hole section",
          id: 5,
        },
        {
          name: "Special operations",
          id: 6,
        },
        {
          name: "Drill fluid management",
          id: 7,
        },
      ],
    };
  },
  methods: {
    assessment () {
      this.$router.push("/assessment")
    },
    addCompetenceModal() {
      this.CompetenceModal = true;
    },
    addCompetence() {
      console.log("addCompetence");
    },
  },
};
</script>

<style scoped>
.search-input {
  outline: 0;
  border-width: 0 0 2px;
}
.search-input::placeholder {
  color: gray;
  font-size: 10px;
}
.CompetenceModal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.insideModal {
  background-color: white;
  margin: 50px auto;
  width: 40%;
  border-radius: 30px;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
.option {
  width: 220px;
}
small {
  cursor: pointer;
}
progress::-webkit-progress-value {
  background: #ffc2c2 !important;
}
progress::before {
  background: red;
}
.bg-percent {
  background-color: #ebf3ff;
}
.option > .router-link-exact-active {
  background-color: #ebf3ff;
  border-radius: 10px;
  padding: 4px 6px;
}
.card {
  border-radius: 30px !important;
}
.btn-primary {
  background-color: #0040a1 !important;
}
.text-primary {
  color: #0040a1 !important;
}
</style>

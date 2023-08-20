<template>
  <div>
    <div class="d-flex flex-column" style="gap: 15px">
      <div v-for="item in dataSet" :key="item.id">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <div>
              <h5 class="cv-data-header">
                {{ item.domain_name }}
              </h5>
              <h5 class="cv-data-header">
                {{ item.core_name }}
              </h5>
              <h5 class="cv-data-header">
                {{ item.skill_name }}
              </h5>
              <h6
                class="text-secondary text-capitalize mt-1"
                style="font-weight: 400; font-size: 13px"
              >
                {{ item.level }}
              </h6>
            </div>
          </div>
          <div class="d-flex" style="gap: 10px">
            <div class="edit-icon" role="button" @click="edit(item)">
              <span> <i-icon icon="material-symbols:edit-outline" /> </span>
            </div>
            <div
              v-if="item.id === editing"
              class="edit-icon bg-danger"
              role="button"
              @click="deleteRecord(item.id)"
            >
              <span> <i-icon icon="fluent:delete-12-regular" /> </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-details mt-4" v-if="show_form || editing">
      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Domain <span class="text-danger">*</span></label>
          <select
            type="text"
            v-model="form.domain_id"
            placeholder="Enter your first name"
          >
            <option value="" disabled selected class="font-weight-light">
              Select Domain
            </option>
            <option v-for="item in domains" :key="item.id" :value="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>

        <div class="mb-3 w-100">
          <label for="">Core <span class="text-danger">*</span></label>
          <select
            type="text"
            v-model="form.core_id"
            placeholder="Enter your first name"
          >
            <option value="" disabled selected class="font-weight-light">
              Select Core
            </option>
            <option v-for="item in cores" :key="item.id" :value="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Skill <span class="text-danger">*</span></label>
          <select
            type="text"
            v-model="form.skill_id"
            placeholder="Enter your first name"
          >
            <option value="" disabled selected class="font-weight-light">
              Select Skill
            </option>
            <option v-for="item in skills" :key="item.id" :value="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="mb-3 w-100">
          <label for="">Level <span class="text-danger">*</span></label>
          <div class="levels">
            <div
              role="button"
              class="level-select"
              v-for="(item, index) in levels"
              :key="index"
              @click="selectLevel(index, item)"
            >
              <i-icon
                :icon="
                  activeEl === index
                    ? 'material-symbols:check-circle-rounded'
                    : 'ic:sharp-radio-button-unchecked'
                "
                :color="
                  activeEl === index
                    ? 'var(--primary-color)'
                    : 'var(--gray-150)'
                "
              />
              <span class="font-weight-light" style="font-size: 11.5px">
                {{ item.title }}
              </span>
              <div class="d-flex align-items-center">
                <i-icon
                  icon="ic:baseline-star-rate"
                  v-for="item in index + 1"
                  :key="item"
                  :color="
                    activeEl === index
                      ? 'var(--primary-color)'
                      : 'var(--gray-150)'
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button class="primary--button" @click="handleSubmit">Save</button>
      </div>
    </div>

    <div v-if="!editing">
      <hr />
      <button class="add-item-button" @click="add_competency = !add_competency">
        <span> <i-icon icon="clarity:plus-line" /> </span>
        <span>Add Competency</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => {
    return {
      activeEl: 0,
      levels: [
        {
          id: 1,
          title: "beginner",
        },
        {
          id: 2,
          title: "intermediate",
        },
        {
          id: 3,
          title: "advanced",
        },
        {
          id: 4,
          title: "expert",
        },
      ],
      editing: null,
      show_form: false,
      singleData: {},
      form: {
        domain_id: "",
        core_id: "",
        skill_id: "",
        level: "",
      },
    };
  },

  methods: {
    ...mapActions("config", ["getDomains", "getCore", "getSkills"]),
    ...mapActions("cvCompetency", [
      "list",
      "create",
      "update",
      "deleteCompetency",
    ]),

    selectLevel(value, e) {
      this.activeEl = value;
      this.form.level = e.title;
    },

    updateCompetency() {
      this.update({ id: this.singleData.id, payload: this.form }).then(() => {
        this.list();
        this.editing = this.editing === null ? this.singleData.id : null;
      });
    },

    deleteRecord(value) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.deleteCompetency(value).then(() => {
              this.$swal.fire(
                "Deleted!",
                "Competency deleted succesfully.",
                "success"
              );
              this.list();
              this.editing = false;
            });
          }
        });
    },

    createCompetency() {
      this.create(this.form).then(() => {
        this.list();
        this.show_form = false;
      });
    },

    handleSubmit() {
      if (this.editing !== null) {
        this.updateLanguages();
      } else {
        this.createCompetency();
      }
    },

    edit(value) {
      if (this.editing !== null) {
        this.editing = this.editing === null ? value.id : null;
        this.singleData = {};
      } else {
        this.singleData = value;
        this.editing = this.editing === null ? value.id : null;
      }
    },
  },

  beforeMount() {
    this.getDomains();
    this.list();
  },

  computed: {
    ...mapState("config", {
      domains: (state) => state.domains,
      cores: (state) => state.cores,
      skills: (state) => state.skills,
    }),

    ...mapState("cvCompetency", {
      dataSet: (state) => state.dataSet,
    }),
  },

  watch: {
    singleData: function (newValue) {
      if (newValue) {
        this.form = {
          domain_id: newValue.domain_id,
          core_id: newValue.core_id,
          skill_id: newValue.skill_id,
          level: newValue.level,
        };
      }
    },
    "form.domain_id": {
      handler(val) {
        this.getCore(val);
      },
      deep: true,
    },
    "form.core_id": {
      handler(val) {
        this.getSkills(val);
      },
      deep: true,
    },
  },
};
</script>

<style></style>

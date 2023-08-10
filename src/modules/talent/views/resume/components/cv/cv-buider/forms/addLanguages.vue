<template>
  <div>
    <div class="d-flex flex-column" style="gap: 15px">
      <div v-for="item in dataSet" :key="item.id">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h5 class="cv-data-header">
              {{ item.language_name }}
            </h5>
            <h6
              class="text-secondary text-capitalize mt-1"
              style="font-weight: 400; font-size: 13px"
            >
              {{ item.level }}
            </h6>
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

    <div v-if="show_form || editing">
      <form class="form-details mt-4" @submit.prevent="handleSubmit()">
        <div class="d-flex" style="gap: 20px">
          <div class="mb-3 w-100">
            <label for="">Language <span class="text-danger">*</span></label>
            <select
              type="text"
              v-model="form.language_id"
              placeholder="Enter your first name"
            >
              <option value="" disabled selected class="font-weight-light">
                Language
              </option>
              <option v-for="item in languages" :key="item.id" :value="item.id">
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
                @click="selectLevel(item, index)"
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
          <button class="primary--button">
            {{ editing ? "Edit" : "Save" }}
          </button>
        </div>
      </form>
    </div>
    
    <div v-if="!editing">
      <hr />
      <button class="add-item-button" @click="show_form = !show_form">
        <span> <i-icon icon="clarity:plus-line" /> </span>
        <span>Add Language</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => {
    return {
      activeEl: 1,
      levels: [
        {
          id: 1,
          title: "basic",
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
      form: {
        language_id: "",
        level: "",
      },
      editing: null,
      show_form: false,
      singleData: {},
    };
  },

  methods: {
    ...mapActions("config", ["getLanguages"]),
    ...mapActions("cvLanguages", [
      "list",
      "create",
      "update",
      "deleteLanguage",
    ]),

    selectLevel(e, value) {
      this.activeEl = value;
      this.form.level = e.title;
    },

    updateLanguages() {
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
            this.deleteLanguage(value).then(() => {
              this.$swal.fire(
                "Deleted!",
                "Language deleted succesfully.",
                "success"
              );
              this.list();
              this.editing = false;
            });
          }
        });
    },

    handleSubmit() {
      this.create(this.form);
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
    this.getLanguages();
    this.list();
  },

  computed: {
    ...mapState("config", {
      languages: (state) => state.languages,
    }),
    ...mapState("cvLanguages", {
      dataSet: (state) => state.dataSet,
    }),
  },

  watch: {
    singleData: function (newValue) {
      if (newValue) {
        this.form = {
          language_id: newValue.language_id,
          level: newValue.level,
        };
      }
    },
  },
};
</script>

<style></style>

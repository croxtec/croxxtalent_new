<template>
  <div>
    <div class="d-flex flex-column" style="gap: 15px">
      <div v-for="item in dataSet" :key="item.id">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h5 class="cv-data-header">
              {{ item.title }}
            </h5>
            <h6
              class="text-secondary text-capitalize mt-1"
              style="font-weight: 400; font-size: 13px"
            >
              {{ item.organization }}
            </h6>
            <h6
              class="text-secondary text-capitalize mt-1"
              style="font-weight: 400; font-size: 13px"
            >
              {{ item.date }}
            </h6>
            <h6
              class="text-secondary text-capitalize mt-1"
              style="font-weight: 400; font-size: 13px"
            >
              {{ item.description }}
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

    <div class="form-details mt-4" v-if="show_form || editing">
      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Title <span class="text-danger">*</span></label>
          <input
            type="text"
            v-model="form.title"
            placeholder="Input Award Title"
          />
        </div>

        <div class="w-100">
          <label for="">Date Received<span class="text-danger">*</span></label>
          <input type="date" name="" v-model="form.date" id="" />
        </div>
      </div>

      <div class="mb-3">
        <label for=""
          >Award Organization<span class="text-danger">*</span></label
        >
        <input
          type="text"
          name=""
          v-model="form.organization"
          placeholder="Organization Name"
          id=""
        />
      </div>

      <div class="mb-3">
        <label for="">Decription <span class="text-danger">*</span></label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Description"
          v-model="form.description"
        ></textarea>
      </div>

      <div class="text-center">
        <button class="primary--button" @click="handleSubmit">Save</button>
      </div>
    </div>

    <div v-if="!editing">
      <hr />
      <button class="add-item-button" @click="show_form = !show_form">
        <span> <i-icon icon="clarity:plus-line" /> </span>
        <span>Add Honours/Awards</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        title: "",
        organization: "",
        date: "",
        description: "",
      },
      singleData: {},
      editing: null,
      show_form: false,
    };
  },

  methods: {
    ...mapActions("cvAwards", ["list", "create", "update", "deleteAward"]),

    updateAwards() {
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
            this.deleteAward(value).then(() => {
              this.$swal.fire(
                "Deleted!",
                "Award deleted succesfully.",
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
    this.getAwards();
    this.list();
  },

  computed: {
    ...mapState("config", {
      languages: (state) => state.languages,
    }),
    ...mapState("cvAwards", {
      dataSet: (state) => state.dataSet,
    }),
  },

  watch: {
    singleData: function (newValue) {
      if (newValue) {
        this.form = {
          title: newValue.title,
          organization: newValue.organization,
          date: newValue.date,
          description: newValue.description,
        };
      }
    },
  },
};
</script>

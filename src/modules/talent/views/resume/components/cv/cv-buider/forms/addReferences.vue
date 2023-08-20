<template>
  <div>
    <div class="d-flex flex-column" style="gap: 15px">
      <div v-for="item in dataSet" :key="item.id" >
      <div class="d-flex justify-content-between align-items-start">
        <div class="d-flex flex-column" style="gap: 5px">
          <h5 class="cv-data-header">
            {{ item.name }}
          </h5>
          <h6 class="cv-data-subheader">
            {{ item.company }}
          </h6>
          <h6 class="cv-date-range">
            {{ item.position }}
          </h6>
          <h6 class="cv-date-range font-weight-light">
            {{ item.email }}
          </h6>
        </div>
        <div class="d-flex" style="gap: 10px">
          <div class="edit-icon" role="button" @click="edit(item)">
            <span> <i-icon icon="material-symbols:edit-outline" /> </span>
          </div>
          <div
            v-if="editing == item.id"
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
    <div class="form-details mt-4"  v-if="show_form || editing">
      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">First Name <span class="text-danger">*</span></label>
          <input
            type="text"
            v-model="nameObj.first_name"
            placeholder="Enter your First Name"
          />
        </div>
        <div class="mb-3 w-100">
          <label for="">Last Name <span class="text-danger">*</span></label>
          <input
            type="text"
            v-model="nameObj.last_name"
            placeholder="Enter your Last Name"
          />
        </div>
      </div>

      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Company <span class="text-danger">*</span></label>
          <input
            type="text"
            v-model="form.company"
            placeholder="Company Name"
          />
        </div>
        <div class="mb-3 w-100">
          <label for="">Position <span class="text-danger">*</span></label>
          <input
            type="text"
            v-model="form.position"
            placeholder="Position in Company"
          />
        </div>
      </div>

      <div class="d-flex" style="gap: 20px">
        <div class="mb-3 w-100">
          <label for="">Email Address <span class="text-danger">*</span></label>
          <input
            type="text"
            v-model="form.email"
            placeholder="Enter your last name"
          />
        </div>
        <div class="mb-3 w-100">
          <label for="">Phone Number <span class="text-danger">*</span></label>
          <vue-tel-input
            v-model="form.phone"
            autocomplete="off"
          ></vue-tel-input>
        </div>
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
        <button class="primary--button" @click="handleSubmit()">Save</button>
      </div>
    </div>
    <div>
      <hr />
      <button class="add-item-button" @click="show_form = !show_form">
        <span> <i-icon icon="clarity:plus-line" /> </span>
        <span>Add References</span>
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
        name: "",
        company: "",
        position: "",
        email: "",
        phone: "",
        description: "",
      },
      nameObj: {
        first_name: "",
        last_name: "",
      },
      editing: null,
      show_form: false,
      singleData: {}
    };
  },

  methods: {
    ...mapActions("cvReferences", [
      "list",
      "create",
      "update",
      "deleteReference",
    ]),

    updateReference() {
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
            this.deleteReference(value).then(() => {
              this.$swal.fire(
                "Deleted!",
                "Reference deleted succesfully.",
                "success"
              );
              this.list();
              this.editing = false;
            });
          }
        });
    },

    createReference() {
      this.create(this.form).then(() => {
        this.list();
        this.show_form = false;
      });
    },

    handleSubmit() {
      if (this.editing !== null) {
        this.updateReference();
      } else {
        this.createReference();
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
    this.list();
  },

  computed: {
    ...mapState("cvReferences", {
      dataSet: (state) => state.dataSet,
    }),
  },

  watch: {
    nameObj: {
      handler: function (val) {
        this.form.name = `${val.first_name} ${val.last_name}`;
      },
      deep: true,
      immediate: true,
    },
    singleData: function (val) {
      if (val) {
        const name = val.name.split(' ')
        this.form = {
          company: val.company,
          position: val.position,
          email: val.email,
          phone: val.phone,
          description: val.description,
        },
        this.nameObj = {
          first_name: name[0],
          last_name: name[1],
        }
      }
    },
  },
};
</script>

<style></style>

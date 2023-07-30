<template>
  <div>
    <div class="d-flex flex-column" style="gap: 15px">
      <div v-for="item in dataSet" :key="item.id">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="cv-data-header">
            {{ item.name }}
          </h5>
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
        <div class="mb-3">
          <label for="">Hobbies <span class="text-danger">*</span></label>
          <input
            type="text"
            v-model="form.name"
            placeholder="Enter Hobby name"
          />
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
        <span>Add Hobbies</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => {
    return {
      form: {
        name: "",
      },
      editing: null,
      show_form: false,
      singleData: {},
    };
  },

  methods: {
    ...mapActions("cvHobby", ["list", "create", "update", "deleteHobbies"]),

    getHobbies() {
      this.list();
    },

    createHobbies() {
      this.create(this.form);
      this.list().then(() => {
        this.show_form = false;
      });
    },

    updateHobbies() {
      this.update({ id: this.singleData.id, payload: this.form }).then(() => {
        this.list();
        this.editing = this.editing === null ? value.id : null ;
      });
    },

    handleSubmit() {
      if (this.editing !== null) {
        this.updateHobbies();
      } else {
        this.createHobbies();
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
            this.deleteHobbies(value).then(() => {
              this.$swal.fire(
                "Deleted!",
                "Your work experience has been deleted.",
                "success"
              );
              this.list();
              this.editing = false;
            });
          }
        });
    },
  },

  beforeMount() {
    this.getHobbies();
  },

  computed: {
    ...mapState("cvHobby", {
      dataSet: (state) => state.dataSet,
    }),
  },

  watch: {
    singleData: function (newValue) {
      if (newValue) {
        this.form = {
          name: newValue.name,
        };
      }
    },
  },
};
</script>

<style></style>

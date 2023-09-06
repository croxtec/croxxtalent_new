<template>
  <div class="upload_container">
    <label class="upload" for="upload_file"
      ><p class="">Drag and Drop file or <span class="underline">Browse</span> CV</p>
      <p class="">max 10MB each.</p>
      <UploadIcon class="mx-auto mt-4" />
    </label>
    <input type="file" hidden id="upload_file" />
  </div>
</template>
<script>
import UploadIcon from "../../UploadIcon.vue";
export default {
  components: {
    UploadIcon,
  },

  data: () => {
    return {};
  },

  methods: {},
};
</script>
<style scoped>
.upload {
  border: 1.5px solid var(--primary-color);
  border-style: dashed;
  cursor: pointer;
  padding: 20px;
  width: 60%;
  margin: 100px auto;
  border-radius: 20px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.upload_container {
  display: flex;
  align-items: center;
}
</style>

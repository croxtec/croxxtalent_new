<template>
  <div class="upload_container">
    <label class="upload" for="upload_file"
      ><p class="">Drag and Drop file or <span class="underline">Browse</span> CV</p>
      <p class="">max 5MB each.</p>
      <UploadIcon class="mx-auto mt-4" />

      <div class="uploaded-files">
        <p v-for="(fileName, index) in uploadedFileNames" :key="index">{{ fileName }}</p>
      </div>
    </label>
    <input
      type="file"
      multiple
      accept=".pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      hidden
      id="upload_file"
      @change="handleFiles($event.target.files)"
    />
    <button class="primary--button">Upload</button>
  </div>
</template>
<script>
import UploadIcon from "../../UploadIcon.vue";
export default {
  data() {
    return {
      imageUrls: [], // Store image URLs here
      uploadedFileNames: [], // Store uploaded file names here
    };
  },
  components: {
    UploadIcon,
  },

  methods: {
    handleFiles(files) {
      Array.from(files).forEach((file) => {
        this.uploadedFileNames.push(file.name); // Store the uploaded file names
        this.previewFile(file);
        this.uploadFile(file);
      });
    },
    previewFile(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.imageUrls.push(reader.result); // Push the image URL directly
      };
    },

    uploadFile(file) {
      const formData = new FormData();
      formData.append("file", file);
    },
  },
};
</script>
<style scoped>
.upload {
  border: 1.5px solid var(--primary-color);
  border-style: dashed;
  cursor: pointer;
  padding: 20px;
  width: 60%;
  margin: 10px auto;
  margin-top: 100px;
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
  flex-direction: column;
  align-items: center;
}
.image_container {
  width: 60%;
}
</style>

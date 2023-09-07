<template>
  <div class="upload_container">
    <label class="upload" for="upload_file"
      ><p class="">Drag and Drop file or <span class="underline">Browse</span> CV</p>
      <p class="">max 5MB each.</p>
      <UploadIcon class="mx-auto mt-4" />
      <img
        v-for="(imageUrl, index) in imageUrls"
        :key="index"
        :src="imageUrl"
        alt="Uploaded Image"
        class="image_container"
      />
    </label>
    <input
      type="file"
      multiple
      accept="image/*"
      hidden
      id="upload_file"
      @change="handleFiles($event.target.files)"
    />
  </div>
</template>
<script>
import UploadIcon from "../../UploadIcon.vue";
export default {
  data() {
    return {
      imageUrls: [], // Store image URLs here
    };
  },
  components: {
    UploadIcon,
  },

  methods: {
    handleFiles(files) {
      Array.from(files).forEach((file) => {
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
.image_container {
  width: 60%;
}
</style>

<template>
  <div class="upload_container">
    <p class="heading_text">Upload your current resume</p>
    <label
      :class="uploadedFileNames.length ? 'isUploaded' : ''"
      class="upload"
      for="upload_file"
    >
      <UploadIcon class="mx-auto my-4" />
      <p v-if="!uploadedFileNames.length" class="instruction">
        Drag and Drop file or <span class="">Browse</span> files
      </p>
      <div v-if="uploadedFileNames.length" class="uploaded-files">
        <p v-for="(fileName, index) in uploadedFileNames" :key="index">
          Uploaded file: {{ fileName }}
        </p>
      </div>

      <p class="">You can upload DOC, DOCX, PDF, HTML, RTF, or TXT files max 5MB each.</p>
    </label>
    <!-- <div v-if="uploadedFileContents.length" class="uploaded-files">
      <div
        v-for="(fileContent, index) in uploadedFileContents"
        :key="index"
        class="file-content"
      >
        <div class="file-pdf-content" v-if="fileContent.type === 'pdf'">
          <embed
            :src="fileContent.content"
            type="application/pdf"
            width="100%"
            height="600px"
          />
        </div>
        <div v-else-if="fileContent.type === 'docx'">
          <p v-html="fileContent.content"></p>
        </div>
        <div>
          <iframe
            width="100%"
            height="600px"
            :src="generateEmbedUrl(fileContent.content)"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div> -->

    <input
      type="file"
      multiple
      accept=".pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      hidden
      id="upload_file"
      @change="handleFiles($event.target.files)"
    />
    <div class="button_section">
      <button class="primary--button_border">Back</button>
      <button :disabled="!uploadedFileNames.length" class="primary--button">
        Continue
      </button>
    </div>
  </div>
</template>
<script>
import UploadIcon from "../../UploadIcon.vue";
import * as mammoth from "mammoth";
import pdfjs from "pdfjs-dist";

export default {
  data() {
    return {
      imageUrls: [], // Store image URLs here
      uploadedFileNames: [], // Store uploaded file names here
      uploadedFileContents: [], // Store uploaded file contents here
    };
  },
  components: {
    UploadIcon,
  },

  methods: {
    // Generate the embed URL for the Microsoft Word Online viewer
    generateEmbedUrl(docxUrl) {
      // Use the URL of the DOCX file
      // Example: https://example.com/path/to/your/docx/file.docx
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        docxUrl
      )}`;
    },

    handleFiles(files) {
      Array.from(files).forEach((file) => {
        this.uploadedFileNames.push(file.name); // Store the uploaded file names
        // this.previewFile(file);
        if (file.type === "application/pdf") {
          this.readPdfContent(file);
        } else {
          // this.uploadedFileContents.push("Loading..."); // Display loading message
          this.readDocxContent(file);
        }
        this.uploadFile(file);
      });
    },
    readPdfContent(file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedFileContents.push({
          type: "pdf",
          content: reader.result,
        });
      };
      reader.readAsDataURL(file);
    },

    readDocxContent(file) {
      const reader = new FileReader();
      reader.onload = () => {
        mammoth
          .extractRawText({ arrayBuffer: reader.result })
          .then((result) => {
            const content = result.value || "No content found";
            this.uploadedFileContents.pop(); // Remove loading message
            this.uploadedFileContents.push({
              type: "docx", // Store the type as 'docx'
              content: content,
            });
          })
          .catch((error) => {
            console.error("Error reading DOCX file:", error);
            this.uploadedFileContents.pop(); // Remove loading message
            this.uploadedFileContents.push({
              type: "docx", // Store the type as 'docx'
              content: "Error loading file",
            });
          });
      };
      reader.readAsArrayBuffer(file);
    },
    // previewFile(file) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onloadend = () => {
    //     this.imageUrls.push(reader.result); // Push the image URL directly
    //   };
    // },

    uploadFile(file) {
      const formData = new FormData();
      formData.append("file", file);
    },
  },
};
</script>
<style scoped>
.primary--button_border {
  padding: 19px 57px !important;
}
.button_section {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.instruction {
  color: #282929;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 35.2px */
}
.instruction span {
  color: #06e594;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  text-decoration-line: underline !important;
}
.doc_type {
  color: #282929;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
}
.heading_text {
  color: #282929;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  margin-top: 80px !important;
}
.file-pdf-content embed {
  width: 100%;
}
.file-pdf-content {
  width: 100%;
  display: flex;
}
.uploaded-files {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  color: #282929;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
}
.file-content {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.isUploaded {
  background-color: #ebf3ff;
}
.upload {
  border: 4px solid #c2dbff;
  border-style: dashed;
  cursor: pointer;
  padding: 60px 20px;
  width: 60%;
  margin: 10px auto;
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
@media (max-width: 990px) {
  .upload {
    width: 1000%;
  }
}
</style>

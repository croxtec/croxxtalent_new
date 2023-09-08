<template>
  <div class="upload_container">
    <label v-if="!uploadedFileContents.length" class="upload" for="upload_file"
      ><p class="">Drag and Drop file or <span class="underline">Browse</span> CV</p>
      <p class="">max 5MB each.</p>
      <UploadIcon class="mx-auto mt-4" />
    </label>
    <div v-if="uploadedFileContents.length" class="uploaded-files">
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
          <!-- Embed the DOCX file using Microsoft Word Online viewer -->
          <iframe
            width="100%"
            height="600px"
            :src="generateEmbedUrl(fileContent.content)"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- <div class="uploaded-files">
      <p v-for="(fileName, index) in uploadedFileNames" :key="index">{{ fileName }}</p>
    </div> -->

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

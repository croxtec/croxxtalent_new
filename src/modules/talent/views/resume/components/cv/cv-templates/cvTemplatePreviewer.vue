<template>
  <div>
    <!-- <div v-html="link"></div> -->
    <div class="cv-template-preview">
      <div>
        <div id="cv1" v-if="template === 'template-1'">
          <cv-template-1 />
        </div>
        <div id="cv2" v-else>Template 2</div>
      </div>
      <resume-options @download="download" @switchTemplate="switchTemplate($event)"/>
    </div>
  </div>
</template>

<script>
import ResumeOptions from "../../resumeOptions.vue";
import CvTemplate1 from './cvTemplate1.vue';
import html2canvas from "html2canvas";
import html2pdf from 'html2pdf.js';
export default {
  components: {
    ResumeOptions,
    CvTemplate1,
  },

  data(){
    return {
      template: 'template-2',
      link: "",
      pdf_link: ""
    }
  },

  methods: {
    switchTemplate(e) {
      this.template = e.name
    },

    download(data) {
      data === 'image' ? this.downloadAsImage() : this.downloadAsPDF()
    },

    async downloadAsImage(){
      const template = document.querySelector(this.template === 'template-2' ? "#cv2" : "#cv1"); // Get the template element

      const canvas = await html2canvas(template); // Convert the template to a canvas
      const image = canvas.toDataURL("image/png"); // Convert the canvas to a data URL

      // Create a downloadable link for the image
      const link = document.createElement("a");
      link.href = image;
      link.download = "croxxtalent_template1.png";
      link.click()
    },

    async downloadAsPDF(){
      const element = document.getElementById(this.template === 'template-2' ? 'cv2' : 'cv1'); // Get the specific element to download

      // Define options for the PDF generation
      const options = {
        margin: [10, 10, 10, 10], // Top, Right, Bottom, Left margins
        filename: 'croxxtalent-template1.pdf', // File name when downloaded
        image: { type: 'jpg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      // Generate PDF from the element's HTML content
      const pdf = await html2pdf().set(options).from(element).save();
      // const pdf = await html2pdf().from(element).set(options).outputPdf();

      // Initiate the download of the generated PDF
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = options.filename;
    },


  },
};
</script>

<style>
.cv-template-preview {
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  grid-template-columns: 1fr 35%;
  height: 70vh;
  overflow-y: auto;
}
</style>

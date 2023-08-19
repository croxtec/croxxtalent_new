<template>
    <div>
      <!-- CV Preview Output -->
      <b-container style="">
        <b-overlay
          :show="cvPreviewLoading"
          spinner-variant="secondary"
          spinner-type="grow"
          spinner-small
          rounded="sm"
          style="" 
          bg-color="#D0D9E4"
          opacity="0.3"
        >
          <template v-slot:overlay>
            <div class="d-flex align-items-center">
              <b-spinner
                variant="secondary"
                type="grow"
                label="Loading..."
                style="width: 4rem; height: 4rem;"
              ></b-spinner>
              <!-- We add an SR only text for screen readers -->
              <span class="sr-only">Please wait...</span>
            </div>
          </template>
          <img
            v-if="cvPreviewOutput"
            :src="cvPreviewOutput"
            class="img-fluid rounded"
            style="max-width: 100%;"
          />
          <div v-if="!cvPreviewOutput" style="width: 45vw; height: 80vh;"></div>
        </b-overlay>
      </b-container>
      <!-- CV Preview Source -->
      <div style="opacity:0; max-height: 0px; max-width:0px; overflow:hidden;">
        <b-container ref="cvPreviewer" class="cv-container" style="width: 850px;">
            <!-- Page 1 -->
          <b-row no-gutters class="cv-cover mb-3">
            <b-col cols="3" class="cv-left">
              <b-row v-if="cvData.profile" class="cv-pad-pos profile-image">
                <b-avatar
                  :text="cvData.profile.name_initials"
                  :src="cvData.profile.photo_url"
                  variant="secondary"
                  size="10rem"
                  class="shadow-md block img"
                ></b-avatar>
                <!-- <img :src="cvData.profile.photo_url"
                 
                  class="img-fluid rounded-circle mx-auto d-block"
                  style="width: 10rem; max-height: 10rem;"
                  crossOrigin="*"
                  alt=""
                /> -->
              </b-row>
              <div class="about-me cv-pad-pos">
                <h4 class="pb-2" style="font-weight: bold !important">Personal Info</h4>
                <div>  
                  <p v-if="cvData.profile.date_of_birth" class="text-left">
                    <span class="personal-detail">Birth Date</span>
                    <br />
                    <span style="font-weight: 400">{{ cvData.profile.date_of_birth | moment("DD MMM YYYY") }}</span>
                  </p>
                  <p v-if="cvData.profile.country" class="text-left">
                    <span class="personal-detail">Nationality</span>
                    <br />
                    <span style="font-weight: 400">{{ cvData.profile.country }}</span>
                  </p>
                  <p  class="text-left">
                    <span class="personal-detail">Years of Experience</span>
                    <br />
                   <span style="font-weight: 400" v-if="cvData.profile.experience_years">
                     {{ cvData.profile.experience_years }} {{ (cvData.profile.experience_years > 1) ? 'Years': 'Year' }}
                   </span> 
                  </p>
                </div>
              </div>
              
              <div class="contact cv-pad-pos">
                <h4>Contact Info</h4>
                <div class="row">
                  <div class="col-12">
                    <p v-if="cvData.profile.email" class="text-left bold">
                      <i class="bx bx-mail-send"></i>
                      <br />
                      {{ cvData.profile.email }}
                    </p>
                    <p v-if="cvData.profile.phone" class="text-left bold">
                      <i class="bx bxs-phone"></i>
                      <br /> 
                      {{ cvData.profile.phone }}
                    </p>
                    <p
                      v-if="
                        cvData.profile.city ||
                          cvData.profile.state ||
                          cvData.profile.country
                      "
                      class="text-left bold"
                    >
                      <i class="bx bxs-map-pin"></i>
                      <br />
                      {{ cvData.profile.city }}, {{ cvData.profile.state }},
                      {{ cvData.profile.country }}
                    </p>
                  </div>
                </div>
              </div>
              
              <div v-if="cvData.topSkill" class="skills cv-pad-pos">
                  <h4>COMPETENCY</h4> 
                 <div class="text-left">  
                    <p class="h5 personal-detail">Domain </p>  
                    <p class="personal-description" style="font-size: 17px;  font-weight: 600">{{cvData.topSkill.skill_name}}</p>
                     
                    <p class="h5 personal-detail">Core</p> 
                    <p class="personal-description" style="font-size: 17px;  font-weight: 600" v-if="cvData.topSkill.secondary">{{cvData.topSkill.secondary.name}} </p>  
                    <ul class=" text-left" v-if="cvData.skill_groups">  
                        <li  v-for="(groups, index) in Object.values(cvData.skill_groups)[0]"
                            class="py-1" :key="index">   
                            <div >     
                              <span class="personal-detail text-dash">{{ groups.tertiary.name }} {{ index}}  </span>
                              <vs-progress class="croxx_progressbar" :height="12" :percent="groups.level_progress"  color="#002060"></vs-progress>
                            </div> 
                        </li>
                    </ul> 
                   
                </div>
              </div>
              
              <div v-if="cvData.languages.length" class="hobbies cv-pad-pos">
                <h4>LANGUAGES</h4>
                <div class="row">
                 <ul class="col-12 text-left">
                    <li
                      v-for="(language, index) in cvData.languages"
                      :key="index">
                        <span></span> {{ language.language_name }}
                        <vs-progress class="croxx_progressbar" :height="12" :percent="language.level_progress" color="primary"></vs-progress>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div v-if="cvData.hobbies.length" class="hobbies cv-pad-pos pb-2" style="height: 100%;">
                <h4>HOBBIES</h4>
                <div class="">
                  <ul class="row">
                    <li class="col-4 text-left" v-for="(hobby, index) in cvData.hobbies" :key="index">
                        {{ hobby.name }}
                         <!-- <span v-if="index != cvData.hobbies.length - 1">, </span> -->
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>   
            <b-col cols="9" class="cv-preview-right">
              <!-- <div class="watermark">
                 <img src="~/assets/img/logo.png"   alt="" />
              </div> -->
              <div class="contact-info">
                <div class="row">
                  <h1 class="pl-3 text-uppercase">
                    {{ cvData.profile?.first_name }}
                    {{ cvData.profile?.last_name }}
                  </h1>
                </div>
                <div v-if="cvData.profile.job_title_name" class="row job-title">
                  <div class="col-4">
                    <h6 class="text-uppercase">
                      {{ cvData.profile.job_title_name }}
                    </h6>
                  </div>
                  <div class="col-8">
                    <div class="underline"></div>
                  </div>
                </div>
                <div v-else class="row job-title">
                    <div class="underline"></div>
                </div>
              </div>
              <div v-if="cvData.profile.career_summary" class="career">
                <div class="row">
                  <h4 class="pl-3">CAREER SUMMARY</h4>
                  <vs-divider color="primary" class="career-divider mt-0"></vs-divider>
                </div>
                <div class="row">
                  <p class="pl-3 text-left text-dark text-justify carrer-detail font-abaad">
                    {{ cvData.profile.career_summary }}
                  </p>
                </div> 
              </div>
              <div
                v-if="cvData.workExperiences.length"
                class="career work-experience"
              >
                <div class="row">
                  <h4 class="pl-3">WORK EXPERIENCE</h4>
                  <vs-divider color="primary" class="career-divider mt-0"></vs-divider>
                </div>
                <div class="row text-left ">
                  <ul class="pl-3">
                    <li
                      v-for="(workExperience, index) in cvData.workExperiences"
                      :key="index"
                      class="mb-2 row mr-0"
                    >
                      <div class="col-8">
                        <strong class="carrer-detail">
                          {{ workExperience.job_title_name }} at
                          {{ workExperience.employer }},
                          {{ workExperience.city }}
                        </strong>
                        <p v-if="workExperience.description" class="pt-2 pl-3">
                          {{ workExperience.description }}
                        </p>
                      </div>
                      <div class="col-4">
                        <div class="ml-2 d-flex">
                          <vs-icon class="mt-1 mr-1" color="#DADADA" icon="fiber_manual_record"></vs-icon>
                          <i class="text-primary">
                            {{ workExperience.start_date | moment("MMM YYYY") }}
                            &#8212;
                            <span v-if="!workExperience.is_current">
                              {{ workExperience.end_date | moment("MMM YYYY") }}
                            </span> 
                            <span v-else>Present</span>
                          </i>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> 
              </div>
              <div v-if="cvData.educations.length" class="career">
                <div class="row">
                  <h4 class="pl-3">EDUCATION</h4>
                  <vs-divider color="primary" class="career-divider mt-0"></vs-divider>
                </div>
                <div class="row text-left">
                  <ul class="pl-3">
                    <li
                      v-for="(education, index) in cvData.educations"
                      :key="index"
                      class="mb-2 row mr-0"
                    >
                    <div class="col-8">
                      <strong class="carrer-detail">
                        {{ education.degree_name }}
                        {{ education.course_of_study_name }},
                        {{ education.school }}, {{ education.city }}
                      </strong>
                      <p v-if="education.description" class="pt-2 pl-3">
                        {{ education.description }}
                      </p>
                    </div>
                    <div class="col-4">
                      <div class="ml-2 d-flex" v-if="education"> 
                         <vs-icon class="mt-1 mr-1" color="#DADADA" icon="fiber_manual_record"></vs-icon>
                          <i class="text-primary">
                          {{ education.start_date | moment("MMM YYYY") }}
                          &#8212;
                          <span v-if="!education.is_current">
                            {{ education.end_date | moment("MMM YYYY") }}
                          </span>
                          <span v-else>Present</span>
                        </i>
                      </div>
                    </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="cvData.certifications.length" class="career">
                <div class="row">
                  <h4 class="pl-3">CERTIFICATIONS</h4>
                  <vs-divider color="primary" class="career-divider mt-0"></vs-divider>
                </div>
                <div class="row text-left">
                  <ul class="col-12 pl-3">
                    <li
                      v-for="(certification, index) in cvData.certifications"
                      :key="index"
                      class="mb-2 row mr-0"
                    >
                    <div class="col-8">
                      <strong class="carrer-detail">
                        {{ certification.certification_course_name }} at
                        {{ certification.institution }}
                      </strong>
                      <p v-if="certification.description" class="pt-2 pl-3">
                        {{ certification.description }}
                      </p>
                    </div>
                    <div class="col-4">
                      <div class="ml-2 d-flex">
                          <vs-icon class="mt-1 mr-1" color="#DADADA" icon="fiber_manual_record"></vs-icon>
                          <i class="text-primary">
                            {{ certification.start_date | moment("MMM YYYY") }}
                            &#8212;
                            <span v-if="!certification.is_current">
                              {{ certification.end_date | moment("MMM YYYY") }}
                            </span>
                            <span v-else>Present</span>
                          </i>
                      </div>
                    </div>
                    </li>
                  </ul> 
                </div>
              </div>
              <div v-if="cvData.awards.length" class="career">
                <div class="row">
                  <h4 class="pl-3">HONOURS & AWARDS</h4>
                  <vs-divider color="primary" class="career-divider mt-0"></vs-divider>
                </div>
                <div class="row text-left"> 
                  <ul class="col-12 pl-3">
                    <li
                      v-for="(award, index) in cvData.awards"
                      :key="index"
                      class="mb-2 row mr-0"
                    >  
                      <div class="col-8">
                        <strong class="carrer-detail">
                          {{ award.title }} at {{ award.organization }}
                        </strong> 
                        <p v-if="award.description" class="pt-2 pl-3">
                          {{ award.description }}
                        </p>
                      </div> 
                     <div class="col-4">
                        <div class="ml-2 d-flex">
                            <vs-icon class="mt-1 mr-1" color="#DADADA" icon="fiber_manual_record"></vs-icon>
                          <i class="text-primary">
                            {{ award.date | moment("MMM YYYY") }}
                            &middot;
                          </i>
                        </div>
                     </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="career">
                <div class="row">
                  <h4 class="pl-3">REFERENCES</h4>
                  <vs-divider color="primary" class="career-divider mt-0"></vs-divider>
                </div> 
                <div v-if="cvData.references.length" class="row text-left">
                  <ul class="row mr-0">
                    <li
                      v-for="(reference, index) in cvData.references"
                      :key="index" class="mb-2 col-6 font-abaad" 
                    > 
                    <div class="pl-3" :class="{'reference-right': index % 2 === 1 }">
                      <strong>{{ reference.name }}</strong>
                      <br />
                      {{ reference.position }}, {{ reference.company }}
                      <br />
                      <a :href="'mailto:'+reference.email">{{ reference.email }}</a>
                      <br /> 
                      {{ reference.phone }}
                    </div>
                    </li>
                  </ul>
                </div>
                <div v-else>References available upon request.</div>
              </div>
            </b-col>
          </b-row>  
            <!-- Page 2 -->
          <b-row no-gutters class="cv-cover" v-if="cvData.skills.length">
            <b-col cols="3" class="cv-left">
              <b-row v-if="cvData.profile" class="cv-pad-pos profile-image">
                <b-avatar
                  :text="cvData.profile.name_initials"
                  :src="cvData.profile.photo_url"
                  variant="secondary"
                  size="10rem"
                  class="shadow-md block img"
                ></b-avatar>
                <!-- <img
                  :src="cvData.profile.photo_url"
                  class="img-fluid rounded-circle mx-auto d-block"
                  style="width: 10rem; max-height: 10rem;"
                  crossOrigin="*"
                  alt=""
                /> -->
              </b-row>
              <div class="about-me cv-pad-pos">
                <h4>Personal Info</h4>
                <div>
                  <p v-if="cvData.profile.date_of_birth" class="text-left">
                    <span class="personal-detail">Birth Date</span>
                    <br />
                    <span class="font-normal">{{ cvData.profile.date_of_birth | moment("DD MMM YYYY") }}</span>
                  </p>
                  <p v-if="cvData.profile.country" class="text-left">
                    <span class="personal-detail">Nationality</span>
                    <br />
                    <span class="font-normal"> {{ cvData.profile.country }} </span> 
                  </p>
                  <p  class="text-left">
                    <span class="personal-detail">Years of Experience</span>
                    <br />
                   <span class="" v-if="cvData.profile.experience_years">
                      {{ cvData.profile.experience_years }} {{ (cvData.profile.experience_years > 1) ? 'Years': 'Year' }}
                    </span> 
                  </p>
                </div>
              </div>
              
              <div class="contact cv-pad-pos">
                <h4>Contact Info</h4>
                <div class="row">
                  <div class="col-12">
                    <p v-if="cvData.profile.email" class="text-left bold">
                      <i class="bx bx-mail-send"></i>
                      <br />
                      {{ cvData.profile.email }}
                    </p>
                    <p v-if="cvData.profile.phone" class="text-left bold">
                      <i class="bx bxs-phone"></i>
                      <br />
                      {{ cvData.profile.phone }}
                    </p>
                    <p
                      v-if="
                        cvData.profile.city ||
                          cvData.profile.state ||
                          cvData.profile.country
                      "
                      class="text-left bold"
                    >
                      <i class="bx bxs-map-pin"></i>
                      <br />
                      {{ cvData.profile.city }}, 
                      {{ cvData.profile.country }}
                    </p>
                  </div>
                </div>
              </div>
              
              <div v-if="cvData.topSkill" class="skills cv-pad-pos">
                  <h4>COMPETENCY</h4>
                  <div class="text-left"> 
                    <p class="h5 personal-detail">Domain </p>  
                    <p class="personal-description" style="font-size: 17px;  font-weight: 600">{{cvData.topSkill.skill_name}}</p>
                    
                    <p class="h5 personal-detail">Core</p> 
                    <!-- <p class="personal-description" style="font-size: 17px;  font-weight: 600" v-if="cvData.topSkill.secondary">{{cvData.topSkill.secondary.name}} </p>   -->
                     <ul class=" text-left" v-if="cvData.skill_groups">  
                        <li  v-for="(groups, index) in Object.values(cvData.skill_groups)[0]"
                            class="py-1" :key="index">   
                            <div >     
                              <span class="personal-detail text-dash">{{ groups.tertiary.name }} {{ index}}  </span>
                              <vs-progress class="croxx_progressbar" :height="12" :percent="groups.level_progress"  color="#002060"></vs-progress>
                            </div> 
                        </li>
                    </ul> 
                  </div>
              </div>
              
              <div v-if="cvData.languages.length" class="hobbies cv-pad-pos">
                <h4>LANGUAGES</h4>
                <div class="row">
                 <ul class="col-12 text-left">
                    <li
                      v-for="(language, index) in cvData.languages"
                      :key="index">
                        {{ language.language_name }}
                        <vs-progress class="croxx_progressbar" :height="12" :percent="language.level_progress" color="primary"></vs-progress>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div v-if="cvData.hobbies.length" class="hobbies cv-pad-pos pb-2" style="height: 100%;">
                <h4>HOBBIES</h4>
                <div class="">
                  <ul class="row">
                    <li class="col-4 text-left" v-for="(hobby, index) in cvData.hobbies" :key="index">
                        {{ hobby.name }}
                         <!-- <span v-if="index != cvData.hobbies.length - 1">, </span> -->
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>    
            <b-col cols="9" v-if="cvData.skills.length" class="cv-preview-right">
  
              <!-- <div class="watermark">
                 <img src="~@/assets/images/logo.png"   alt="" />
              </div> -->
              <div class="contact-info">
                <div class="row">
                <h1 class="pl-3 text-uppercase"> 
                    {{ cvData.profile.first_name }}
                    {{ cvData.profile.last_name }}
                  </h1>
                </div>
                <div v-if="cvData.profile.job_title_name" class="row job-title">
                  <div class="col-4">
                    <h6 class="text-uppercase">
                      {{ cvData.profile.job_title_name }}
                    </h6>
                  </div>
                  <div class="col-8">
                    <div class="underline"></div>
                  </div>
                </div>
                <div v-else class="row job-title">
                    <div class="underline"></div>
                </div>
              </div>
              <div
                v-if="cvData.skills.length"
                class="career "
              >
                <div class="row">
                  <h4 class="pl-3">DETAILED COMPETENCY SUMMARY</h4>
                  <vs-divider color="primary" class="career-divider mt-0"></vs-divider>
                </div>
                <div class=" text-left">
                  <ul class="skill-detail">
                    <li
                      v-for="(groups, index) in cvData.skill_groups"
                      :key="index"
                      class="mb-3 row mr-0"
                    > 
                      <div class="col-11">
                          <div class="domain">
                            {{groups[0].skill_name}} - {{groups[0].secondary.name}} 
                          </div> 
                      </div>
                      <div class="col-11"  v-for="(skill, index2) in groups" :key="index2">
                        <div class="">
                            <div class="ml-5 core">
                              <span class="text-uppercase">{{skill.tertiary.name}} <br>
                                <vs-icon size="25px" v-for="i in 3" :key="i" color="#0040a1" icon="fiber_manual_record"></vs-icon>
                                <vs-icon size="25px" v-for="j in 3" :key="j" :color="(skill.level == 'intermediate' || skill.level == 'advanced') ? '#0040a1':'gray'"  icon="fiber_manual_record"></vs-icon>
                                <vs-icon size="25px" v-for="k in 3" :key="k" :color="(skill.level == 'advanced') ? '#0040a1':'gray'"  icon="fiber_manual_record"></vs-icon>
                              </span>
                            </div> 
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </template>
  

 
 <script>
  import { mapState } from "vuex";
  // Import html2canvas
  import html2canvas from "html2canvas";
  
  export default {
    data() {
      return {
        cvPreviewLoading: true,
        cvPreviewOutput: null,
        cvData: {
          profile: {
            job_title_id: null,
            first_name: null,
            lastname: null,
            gender: null,
            date_of_birth: null,
            email: null,
            phone: null,
            address: null,
            city: null,
            state: null,
            country: null,
            postal_code: null,
            career_summary: null,
            photo_url: null,
            experience_years: null,
            name_initials: this.$store.state.auth.user.name_initials
          },
          workExperiences: [],
          educations: [],
          certifications: [],
          skills: [],
          skill_groups: [],
          hobbies: [],
          awards: [],
          languages: [],
          references: [],
          topSkill: {}
        }
      };
    },
  
    computed: {
      ...mapState("cvs", {
        cvsData: state => state.data
      })
    },
   
    watch: {
      // eslint-disable-next-line
      cvsData: function(newValue, oldValue) {
        if (newValue) { 
          this.cvData.profile = {
            job_title_id: newValue.job_title_id,
            first_name: newValue.first_name,
            last_name: newValue.last_name,
            gender: newValue.gender,
            date_of_birth: newValue.date_of_birth,
            email: newValue.email,
            phone: newValue.phone,
            address: newValue.address,
            city: newValue.city,
            state: newValue.state_name,
            country: newValue.country_name, 
            postal_code: newValue.postal_code,
            career_summary: newValue.career_summary,
            photo_url: newValue.photo_data_url, // newValue.photo_url | newValue.photo_url_cors
            experience_years: newValue.experience_years,
            name_initials: newValue.photo_url ? null : newValue.name_initials
          };
          this.cvData.workExperiences = newValue.work_experiences;
          this.cvData.educations = newValue.educations;
          this.cvData.certifications = newValue.certifications;
          this.cvData.skills = newValue.skills;
          this.cvData.skill_groups = newValue.skill_groups;
          this.cvData.topSkill = newValue.skills[0];
          this.cvData.hobbies = newValue.hobbies;
          this.cvData.awards = newValue.awards;
          this.cvData.languages = newValue.languages;
          this.cvData.references = newValue.references;
          let vm = this;
          // console.log(this.cvData);
          if (newValue.phone || newValue) {
            setTimeout(function() {
              vm.loadCvPreview();
            }, 3 * 1000);
          }
        }
      }
    },
  
    methods: {
      async loadCvPreview() { 
        let vm = this;
        vm.cvPreviewLoading = true;
        const el = vm.$refs.cvPreviewer;
        const options = {
          backgroundColor: null,
          scrollX: 0,
          scrollY: 0, // scrollY: -window.scrollY,
          allowTaint: true,
          useCORS: true,
          proxy: [],
          imageTimeout: 0, // 15000
          logging: false
        };
        return await html2canvas(el, options).then(function(canvas) {
          // Canvas to Image Data URL
          // let url = canvas.toDataURL("image/webp", 1.0);
          // vm.cvPreviewOutput = url;
          // vm.cvPreviewLoading = false;
    
  
          canvas.toBlob(
            function(blob) { 
              let url = URL.createObjectURL(blob);
              vm.cvPreviewOutput = url;
              vm.cvPreviewLoading = false;
            },
            "image/webp", // image/webp | image/jpg | default: image/png
            0.92// 1.0 // 0 to 1 | default: 0.80 for image/jpeg and 0.92 for image/webp
          );
        });
      },
  
      
    }
  };
  </script>
<template>
    <div class="list-job d-flex justify-content-between">
        <!-- Job Thumbnail Section -->
        <div class="d-flex" style="gap: 10px;">
            <img     :src="job.photo_url ? job.photo_url : require('@/assets/img/box.png')"

     alt="company logo" class="img-fluid m-0" :style="{ width: '64px', height: '64px' }"
                @click="redirectToJobDetails(job.id)" role="button" />
            <div>
                <div class="job-content">
                    <div class="job-container">
                         <i class="" role="button" @click="redirectToJobDetails(job.id)">
                            <h5 class="content-header">{{ job.title }}</h5>
                            </i>

                    </div>
                    <div class="location">
                        <span>{{ job.industry_name }}</span> .
                        <span>{{ job.state_name }}, {{ job.country_name }}</span>
                    </div>
                    <div class="options d-flex">
                        <div class="option-tags mt-3">
                            <span class="full-time">{{ job.work_type }}</span>
                            |
                            <span class="off-shore mr-2">Off-shore</span>
                            <span class="design">Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div v-if="showButton" class="d-flex justify-content-between"><button @click="handleAppliedforjobs(job.id)" class="primary--button place-center p-3 px-5  align-items-center mx-auto" style="gap: 10px;"><span>Apply</span></button></div>
            <!-- Options and Progress Section -->
        <div v-if="!showButton" class="left_section justify-content-between">
            <i class="" role="button" @click="showOptionModal(job.id)">
                <MoreIcon class="justify-self-end" />
            </i>
            <div class="option-modal py-2" v-if="optionModal === job.id">
                <span @click="handleAppliedforjobs(job.id)" role="button">Apply</span>
                <hr />
                <span @click="handleSavejobs(job.id)" role="button">Save</span>
                <hr />
                <span>Archive</span>
            </div>

            <div class="option-progress">
                <progress :value="(job.total_applications / job.number_of_positions) * 100" max="100"></progress><br />
                <span>{{ job.total_applications }} applied of {{ job.number_of_positions }} capacity</span>
            </div>
        </div>
    </div>
</template>

<script>
import MoreIcon from "../icons/MoreIcon.vue";

export default {
    name: "JobCard",
    components: {
        MoreIcon,
    },
    props: {
        job: Object, // Prop to pass the job data to the component
        optionModal: null, // Initialize the optionModal prop
        showButton: Boolean, // Initialize the optionModal prop
    },
    methods: {
        redirectToJobDetails(id) {
            this.$router.push({ name: "job-Details", params: { id } });
        },
        showOptionModal(id) {
            this.$emit("option-clicked", id); // Emit an event when an option is clicked
        },
        handleAppliedforjobs(id) {
            this.$emit("apply-clicked", id); // Emit an event when Apply is clicked
        },
        handleSavejobs(id) {
            this.$emit("save-clicked", id); // Emit an event when Save is clicked
        },
    },
};
</script>

<style scoped>
.place-center{
    display: grid;
    place-self: center;
}
.left_section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.justify-self-end {
    justify-items: end;
    display: grid;
}


header h6 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
}


h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
}

.option-modal {
    /* left: 120px; */
    top: 55px;
    text-align: center;
    gap: 10px;
    width: 175px;
    position: absolute;
    background-color: white;
    height: 150px;
    border: 0.5px solid #e0e0e0;
    box-shadow: 0px 79px 128px rgba(192, 192, 192, 0.09),
        0px 28.8363px 46.7221px rgba(192, 192, 192, 0.0598508),
        0px 13.9995px 22.6827px rgba(192, 192, 192, 0.0475723),
        0px 6.86281px 11.1195px rgba(192, 192, 192, 0.0380675),
        0px 2.71357px 4.39666px rgba(192, 192, 192, 0.0270615);
    border-radius: 20px;
    z-index: 50;

}

.option-modal>span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #282929;
    opacity: 0.5;
    cursor: pointer;
}

.option-modal>hr {
    background: #c2dbff;
}



.list-job {
    padding: 24px;
    /* width: 919px; */
    /* height: 149px; */
    background: #ffffff;
    border: 1px solid #cbd7e7;
    border-radius: 40px;
    position: relative;
}

.job-container {
    margin-top: 20px;
    display: flex;
    justify-content: space-between !important;
}

.job-container i h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
}


progress::-moz-progress-bar {
    background: #56cdad;
    height: 5px;
    color: white;
}

progress::-webkit-progress-value {
    background: #56cdad;
    height: 5px;
    color: white;
}

progress {
    background: #56cdad;
    height: 5px;
    color: white;
}

.option-progress span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    color: #646868;
    text-align: center;
    margin-left: 7px;
}

.full-time {
    align-items: center;
    padding: 6px 10px;
    gap: 8px;
    background: rgba(86, 205, 173, 0.1);
    border-radius: 80px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    color: #56cdad;
}

.off-shore {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    color: #ffb836;
    background: #ffffff;
    border: 1px solid #ffb836;
    border-radius: 40px;
    padding: 6px 10px;
}

.design {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    color: #7b61ff;
    background: #ffffff;
    border: 1px solid #7b61ff;
    border-radius: 40px;
    padding: 6px 10px;
}

.location span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #646868;
}

</style>

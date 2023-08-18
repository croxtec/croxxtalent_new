<template>
    <div class="floter">
        <div class="job-card">
            <div>
                <div class="d-flex justify-content-between">
                    <img     :src="job.photo_url ? job.photo_url : require('@/assets/img/box.png')"

     alt="company log" class="img-fluid" :style="{ width: '40px' }"
                        @click="redirectToJobDetails(job.id)" role="button" />

                    <i class="" role="button" @click="showOptionModal(job.id)">
                        <MoreIcon />
                    </i>
                    <div class="option-modal py-2" v-if="optionModal === job.id">
                        <span @click="handleAppliedforjobs(job.id)" role="button">Apply</span>
                        <hr />
                        <span @click="handleSavejobs(job.id)" role="button">Save</span>
                    </div>
                </div>
                <div class="my-3">
                    <i class="" role="button" @click="redirectToJobDetails(job.id)">
                        <h5>{{ job.job_title }}</h5>
                    </i>
                    <span>{{ job.industry_name }}</span> .
                    <span>{{ job.state_name }}, {{ job.country_name }}</span>
                </div>
                <p class="d-block text-truncate content">{{ job.summary }}</p>
            </div>

            <div class="skills">
                <div class="d-flex mt-4 justify-content-between">
                    <span class="drilling">Drilling</span>
                    <span class="Management">Management</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MoreIcon from "../icons/MoreIcon.vue";

export default {
    name: "CompactJobCard",
    components: {
        MoreIcon,
    },
    props: {
        job: Object, // Prop to pass the job data to the component
        optionModal: null, // Initialize the optionModal prop

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
header h6 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
}


.job-card {
    width: auto;
    height: 275px;
    border: 1px solid #c2dbff;
    border-radius: 20px;
    padding: 24px;
    position: relative;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

}


h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
}

.drilling {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #56cdad;
    background: rgba(86, 205, 173, 0.1);
    border-radius: 80px;
    padding: 4px 16px;
    gap: 8px;
}

.Management {
    padding: 4px 16px;
    gap: 8px;
    width: 128px;
    height: 30px;
    background: rgba(0, 64, 161, 0.1);
    border-radius: 80px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #0040a1;
}

.content {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #646868;
}



.option-modal {
    left: 120px;
    top: 55px;
    text-align: center;
    gap: 10px;
    width: 175px;
    position: absolute;
    background-color: white;
    height: auto;
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

</style>

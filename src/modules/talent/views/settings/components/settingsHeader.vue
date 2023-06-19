<template>
    <div>
        <div class="d-flex align-items-center justify-content-between">
            <div class="competences-header-container">
                <span role="button" class="report-header-item" :class="{ 'active-item': activeEl === '' }"
                    >Profile</span>
                    <span class="report-header-item" :class="{ 'active-item': activeEl === '' }" role="button"
                        >Security</span>
                    <span class="report-header-item" :class="{ 'active-item': activeEl === '' }" role="button"
                        >Notifications</span>
                </div>
        </div>

    </div>
</template>

<script>
export default {
    data: () => {
        return {
            activeEl: "competencies",
            competencesModal: false,
        };
    },
    methods: {
        switchSection(value) {
            this.activeEl = value;
            this.$emit("switchData", value);
        },

        gotoCompetences() {
            this.activeEl = 'competencies';
            this.$router.push("/competencies");
        },

        gotoExperience() {
            this.activeEl = 'experience';
            this.$router.push("/experience");
        }
    },
};
</script>

<style></style>

<script>
import settingsHeader from "../components/settingsHeader.vue";

export default {
    components: { settingsHeader },
    data: () => {
        return {
            sectionName: "settings",
        };
    },

    methods: {
        switchData(value) {
            this.sectionName = value;
        },
    },
};
</script>

<style></style>
<template>
    <div>   
         <settingsHeader/>
    settings page</div>
</template>
<style scoped>

</style>
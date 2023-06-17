<script>
import settingsHeader from "../components/settingsHeader.vue";
import profilePage from "./profilePage.vue";

export default {
    components: { settingsHeader, profilePage },
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
         <profilePage/>
    </div>
</template>
<style scoped>

</style>
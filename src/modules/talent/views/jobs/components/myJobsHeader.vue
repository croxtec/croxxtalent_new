<template>
    <div class="my-3">
        <div class="d-flex align-items-center justify-content-between">
        <div class="competences-header-container">
            <span
            role="button"
            class="report-header-item"
            :class="{ 'active-item': activeEl === '1' }"
            >In Progress</span
            >
            <span
            class="report-header-item"
            :class="{ 'active-item': activeEl === '2' }"
            role="button"
            >Saved</span
            >
            <span
            class="report-header-item"
            :class="{ 'active-item': activeEl === '3' }"
            role="button"
            >Applied</span
            >
        </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeEl: "1",
    };
  }

}
</script>
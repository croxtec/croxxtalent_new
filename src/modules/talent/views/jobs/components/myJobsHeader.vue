<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <div class="competences-header-container">
        <span role="button" class="report-header-item" @click="activetab = '1'"
          :class="[activetab === '1' ? 'active-item' : '']">In Progress</span>
        <span class="report-header-item" @click="activetab = '2'" :class="[activetab === '2' ? 'active-item' : '']"
          role="button">Saved</span>
          <span class="report-header-item" @click="activetab = '3'" :class="[activetab === '3' ? 'active-item' : '']"
            role="button">Applied</span>
          <span class="report-header-item" @click="activetab = '4'" :class="[activetab === '4' ? 'active-item' : '']"
            role="button">CroxxTalent Invitations</span>
        </div>
    </div>
    <div>
      <div v-if="activetab === '1'">
        <slot name="view1"></slot>
      </div>
      <div v-if="activetab === '2'">
        <slot name="view2"></slot>
      </div>
        <div v-if="activetab === '3'">
          <slot name="view3"></slot>
        </div>
        <div v-if="activetab === '4'">
          <slot name="view4"></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activetab: "1",
    };
  },
  methods: {
  },
};
</script>

<style></style>
<!--<template>
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
              <span
              class="report-header-item"
              :class="{ 'active-item': activeEl === '4' }"
              role="button"
              >Saved</span
              >
              <span
              class="report-header-item"
              :class="{ 'active-item': activeEl === '5' }"
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
</script>-->
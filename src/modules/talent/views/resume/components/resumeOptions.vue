<template>
  <div id="resume-options">
    <div class="d-flex justify-content-center" style="gap: 8px">
      <button class="primary-btn bg-dark" @click="$router.push('/create-cv')">
        Edit CV
      </button>
      <el-dropdown trigger="click">
        <!-- <span class="el-dropdown-link">
          Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
        </span> -->
        <button
          class="primary-btn bg-dark el-dropdown-link"
        >
          Download CV
          <i class="el-icon-arrow-down el-icon--right"></i>
        </button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >
          <span class="w-100" @click="downloadCV('image')">
            Image
          </span>
          </el-dropdown-item>
          <el-dropdown-item >
          <span class="w-100" @click="downloadCV('pdf')">PDF</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <h5 class="my-3 text-center" style="font-weight: 700">Choose a template</h5>

    <div
      class="d-flex flex-column align-items-center text-center"
      style="gap: 14px"
    >
      <div
        class="template-img-container"
        v-for="(item, index) in options"
        :key="index"
        :class="{ active: item.active }"
        @click="makeActive(item)"
        role="button"
      >
        <div class="triangle"></div>
        <span class="tick">
          <i-icon icon="fa:check" class="text-white" />
        </span>
        <img :src="item.imgUrl" alt="" class="template-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          id: 1,
          imgUrl: require("@/assets/img/resources/croxxtalent-cv-template2.jpg"),
          active: true,
          name: "template-2",
        },
        {
          id: 1,
          imgUrl: require("@/assets/img/resources/croxxtalent-cv-template1.jpg"),
          active: false,
          name: "template-1",
        },
      ],
    };
  },

  methods: {
    makeActive(selectedItem) {
      // Mark the clicked item as active
      this.options.forEach((item) => {
        item.active = item === selectedItem;
      });
      const activeIndex = this.options.findIndex((item) => item.active);
      const activeItem = this.options.splice(activeIndex, 1)[0];
      this.options.unshift(activeItem);
      this.$emit("switchTemplate", selectedItem);
    },

    downloadCV(e) {
      console.log(e, 'ommmo');
      this.$emit('download', e)
    }
  },

  watch: {},
};
</script>

<style>
#resume-options {
  background-color: #fff;
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  padding-top: 90px;
  padding: 120px 40px 40px 40px;
}

.tick {
  display: none;
}

.template-img-container.active .tick {
  display: block;
  position: absolute;
  top: 1px;
  right: 4px;
}

.template-img-container.active .triangle {
  width: 0;
  height: 0;
  border-top: 50px solid #06e594;
  border-left: 50px solid transparent;
  position: absolute;
  border-radius: 0px 8px;
  top: 0;
  right: 0;
}

.template-img-container.active {
  background: #d9d9d9;
  padding: 22px;
  width: 60%;
}

.template-img-container.active img {
  border-radius: 0;
  z-index: 999;
  position: relative;
}

.template-img-container {
  border-radius: 6px;
  padding: 10px;
  background: #fff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.125);
  width: 45%;
  position: relative;
}

.template-img-container img {
  width: 100%;
}

/* .template-img {
 
} */
</style>

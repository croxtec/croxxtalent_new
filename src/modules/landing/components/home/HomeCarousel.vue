<template>
  <div>
    <div class="container">
      <el-carousel indicator-position="outside">
        <el-carousel-item
          v-for="item in carouselData"
          :key="item.id"
          class="p-5"
        >
          <div class="d-flex flex-column w-100" style="gap: 15px">
            <h1 class="title-text" v-text="item.title"></h1>
            <p class="paragraph-text" v-text="item.body_text"></p>
            <button class="primary--button" style="width: max-content">
              Get Started
            </button>
          </div>
          <div
            class="image-bg"
            :style="{ backgroundImage: `url(${item.img_url})` }"
          ></div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselData: [
        {
          id: 1,
          title: "Mobile Competencies",
          body_text:
            "Leverage our extensive data on talent's technical capacity, work preferences and growth potential",
          img_url: require("@/assets/img/mobile-competences-croxxtalent.png"),
        },
        {
          id: 2,
          title: "Validation Mechanism",
          body_text:
            "Leverage our extensive data on talent's technical capacity, work preferences and growth potential",
          img_url: require("@/assets/img/validatin-mechanism-croxxtalent.png"),
        },
        {
          id: 3,
          title: "Self Learning",
          body_text:
            "Leverage our extensive data on talent’s technical capacity, work preferences and growth potential",
          img_url: require("@/assets/img/self-learning-croxxtalent.png"),
        },
        {
          id: 4,
          title: "Hassle free hiring",
          body_text:
            "Leverage our extensive data on talent’s technical capacity, work preferences and growth potential",
          img_url: require("@/assets/img/hassle-free-croxxtalent.png"),
        },
        {
          id: 5,
          title: "Data Driven Decision",
          body_text:
            "Leverage our extensive data on talent’s technical capacity, work preferences and growth potential",
          img_url: require("@/assets/img/data-driven-croxxtalent.png"),
        },
        {
          id: 6,
          title: "Cost Efficient",
          body_text:
            "Leverage our extensive data on talent’s technical capacity, work preferences and growth potential",
          img_url: require("@/assets/img/cost-efficient-croxxtalent.png"),
        },
      ],
    };
  },
};
</script>

<style>
.title-text {
  font-weight: 600;
  width: 60%;
}

.paragraph-text {
  font-size: 14px;
}

.el-carousel__button {
  height: 10px !important;
  width: 10px !important;
  border-radius: 50%;
}

.el-carousel__indicator.is-active .el-carousel__button {
  background: var(--green-200);
}

.image-bg {
  height: 100%;
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  
}

.el-carousel__item {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
}

.el-carousel__container {
  height: 350px;
  border-radius: 30px !important;
}

.el-carousel__item:nth-child(2n) {
  background-color: var(--green-200);
  flex-direction: row-reverse;
}

.el-carousel__item:nth-child(2n) 
.image-bg {
    background-position: left;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: var(--blue-100);
  
}

@media (max-width: 990px) {
  .title-text {
    width: 100%;
  }
  .el-carousel__container {
    height: 500px;
  }
  .el-carousel__item {
    flex-direction: column;
    gap: 20px;
  }

  .el-carousel__item:nth-child(2n + 1) {
    flex-direction: column-reverse;
    gap: 20px;
  }

  .image-bg {
    /* height: 300px; */
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 400px;
  }
}
</style>

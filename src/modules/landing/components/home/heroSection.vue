<template>
  <div class="home--hero_section">
    <div class="container">
      <div class="pivot--text">
        <div class="left--pivot">
          <h1
            class="main--text animate__animated animate__fadeInUp animate__slow"
            v-text="hero.title"
          ></h1>
          <p
            class="desc--text w-100 mb-3 animate__animated animate__fadeInUp animate__slow animate__delay-1s"
            v-text="hero.description"
          ></p>
          <div class="d-flex align-items-center" style="gap: 15px">
            <cx-button>
              <router-link to="/register" style="color: inherit">
                <slot>Find Jobs</slot>
              </router-link>
            </cx-button>

            <cx-border-button>
              <router-link to="/register" style="color: inherit"
                ><slot>Hire Talents</slot>
              </router-link>
            </cx-border-button>
          </div>
        </div>
        <div class="right--side">
          <div class="d-flex" style="gap: 20px">
            <div class="floater2">
              <img
                src="@/assets/img/croxh1.png"
                loading="lazy"
                style="background-color: var(--primary-color)"
                alt=""
              />
            </div>
            <div class="positioned--image mt-4 floater">
              <img
                class=""
                loading="lazy"
                src="@/assets/img/croxh2.png"
                style="background-color: var(--dark-color)"
                alt=""
              />
            </div>
            <div class="floater2">
              <img
                src="@/assets/img/Croxh3.png"
                loading="lazy"
                style="background-color: var(--secondary-color)"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Hero Search Area  -->
      <div class="talent--search">
        <div class="mt-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CxButton from "@/components/buttons/cxButton.vue";
import CxBorderButton from "@/components/buttons/cxBorderButton.vue";
export default {
  components: { CxButton, CxBorderButton },

  data() {
    return {
      heroes: [
        {
          title: "The Ultimate Competence Vetting Platform",
          description:
            "Designed to help talents in the energy sector find their dream job and help employers build efficient teams.",
        },
        {
          title: "Build Efficient Teams Easily",
          description:
            "We help hire top talents that boost productivity in the energy sector.",
        },
        {
          title: "Simplify team management with our tools",
          description:
            "​​Our talent management tools make it easy to manage your team, track performance, and identify areas for improvement. ",
        },
      ],
      hero: {
        title: "Build Efficient Teams Easily",
        description:
          "We help hire top talents that boost productivity in the energy sector.",
      },
    };
  },

  methods: {
    selectRandomHero: function () {
      return (this.hero =
        this.heroes[Math.floor(Math.random() * this.heroes.length)]);
    },
  },

  mounted() {
    this.selectRandomHero();
  },
};
</script>

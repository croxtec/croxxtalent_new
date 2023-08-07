<template>
  <div>
    <div>
      <h5 style="font-size: 18px; font-weight: 600">Competency</h5>
      <p class="small text-muted">Tell us about your skills.</p>
      <div class="mt-2" v-if="add_competency">
        <AddCompetency />
      </div>
      <hr />
      <button class="add-item-button" @click="add_competency = !add_competency">
        <span> <i-icon icon="clarity:plus-line" /> </span>
        <span>Add Competency</span>
      </button>
    </div>

    <div class="mt-5">
      <h5 style="font-size: 18px; font-weight: 600">Honours/Awards</h5>
      <p class="small text-muted">Add all awards and achievements</p>
      <div class="mt-2" v-if="add_honours">
        <AddHonours />
      </div>
      <hr />
      <button class="add-item-button" @click="add_honours = !add_honours">
        <span> <i-icon icon="clarity:plus-line" /> </span>
        <span>Add Honours/Awards</span>
      </button>
    </div>

    <div class="mt-5">
      <h5 style="font-size: 18px; font-weight: 600">Languages</h5>
      <p class="small text-muted">
        Tell us about your language and proficiency.
      </p>
      <div class="mt-2">
        <AddLanguages />
      </div>
    </div>

    <div class="mt-5">
      <h5 style="font-size: 18px; font-weight: 600">Hobbies</h5>
      <p class="small text-muted">Tell us what you do for fun</p>
      <div class="mt-2">
        <AddHobbies />
      </div>
    </div>
  </div>
</template>

<script>
import AddCompetency from "./forms/addCompetency.vue";
import AddHobbies from "./forms/addHobbies.vue";
import AddHonours from "./forms/addHonours.vue";
import AddLanguages from "./forms/addLanguages.vue";
export default {
  components: { AddCompetency, AddHonours, AddLanguages, AddHobbies },
  data: () => {
    return {
      add_competency: false,
      add_honours: false,
      add_languages: false,
      add_hobbies: false,
    };
  },
};
</script>

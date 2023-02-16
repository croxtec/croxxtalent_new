<template>
  <div>
    <div>
      <h5 style="font-size: 18px; font-weight: 600">REFERENCES</h5>
      <p class="small text-muted">
        Provide your references and their contact information
      </p>
      <div class="mt-2" v-if="add_referee">
        <AddReferences />
      </div>

      <hr />
      <button class="add-item-button" @click="add_referee = !add_referee">
        <span> <i-icon icon="clarity:plus-line" /> </span>
        <span>Add References</span>
      </button>
    </div>
  </div>
</template>

<script>
import AddReferences from "./forms/addReferences.vue";
export default {
  components: { AddReferences },
  data: () => {
    return {
      add_referee: false,
    };
  },
};
</script>

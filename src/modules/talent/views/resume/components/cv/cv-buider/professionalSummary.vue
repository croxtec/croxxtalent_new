<template>
  <div>
    <div>
      <h5 style="font-size: 18px; font-weight: 600">REFERENCES</h5>
      <p class="small text-muted">
        Provide your references and their contact information
      </p>
      <div class="mt-2">
        <AddReferences />
      </div>
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

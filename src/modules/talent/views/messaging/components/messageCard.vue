<template>
  <div>
    <div
      v-for="(message, index) in messages"
      :key="message.id"
      role="button"
      @click="$emit('select-message', index)"
      class="message_card"
    >
      <div class="user_profile_container">
        <activeIcon v-if="message" class="active_state_icon" />
        <img
          class="user_profile_image"
          src="@/assets/img/user_message_image.png"
          alt=""
        />
      </div>
      <div class="message_details">
        <div class="sender_name">
          <h3>{{ message.first_name }}</h3>
          <span>{{ message.type }}</span>
        </div>
        ll
        <p class="sender_message">{{ message.company_name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import activeIcon from "@/modules/talent/views/messaging/components/activeIcon";

export default {
  components: { activeIcon },
  props: {
    // messages: Array,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    messages() {
      return this.$store.getters["messagesModule/messages"];
    },
  },
  mounted() {
    this.$store.dispatch("messagesModule/getMessages");
    console.log(this.messages);
  },
};
</script>
<style scoped>
.active_state_icon {
  position: absolute;
  right: 0;
}
.user_profile_container {
  position: relative;
}
.message_card {
  border-bottom: 1.026px solid #282929;
  /* width: 60%; */
  /* margin: 0 auto; */
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.sender_message {
  color: #282929b1;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 12.307px;
  font-style: normal;
  font-weight: 500;
  line-height: 25.639px; /* 208.333% */
}
.sender_name {
  display: flex;
  justify-content: space-between;
}
.message_details {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.message_details h3 {
  color: #282929;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 16.409px;
  font-style: normal;
  font-weight: 700;
  line-height: 25.639px; /* 156.25% */
}
.user_profile_image {
  width: 58.486px;
  height: 58.486px;
  flex-shrink: 0;
  border-radius: 100%;
}
</style>

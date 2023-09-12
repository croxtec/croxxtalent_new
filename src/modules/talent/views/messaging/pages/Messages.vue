<template>
  <div id="notifications">
    <div class="message_container">
      <div class="all_message_section">
        <div class="searchbar_section">
          <searchIcon />
          <input class="search_bar" type="search" placeholder="Search" />
        </div>
        <div class="message_list_section">
          <messageCard v-for="content in message" :key="content.id" :content="content" />
        </div>
      </div>
      <div class="view_message_container">
        <div>
          <div class="chat_header">
            <img
              class="user_profile_image"
              src="@/assets/img/user_message_image.png"
              alt=""
            />
            <div class="chat_header_content">
              <div class="message_details">
                <div class="sender_name">
                  <h3>Liliana tobi</h3>
                </div>

                <p class="last_seen">Online - Last seen, 2.02pm</p>
              </div>
              <div><ThreeDotVertical /></div>
            </div>
          </div>
          <div class="chat_screen"></div>
          <div class="chat_input_section">
            <div class="input_message_section">
              <paperClipIcon />
              <input
                class="search_bar"
                type="text"
                placeholder="Type your message here..."
              /><emojiIcon /><cameraIcon />
            </div>
            <div class="record_message"><micIcon class="mx-auto" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import micIcon from "@/modules/talent/views/messaging/components/micIcon";
import cameraIcon from "@/modules/talent/views/messaging/components/cameraIcon";
import emojiIcon from "@/modules/talent/views/messaging/components/emojiIcon";
import paperClipIcon from "@/modules/talent/views/messaging/components/paperClipIcon";
import ThreeDotVertical from "@/modules/talent/views/messaging/components/three_dot_vertical.vue";
import messageCard from "@/modules/talent/views/messaging/components/messageCard.vue";
import searchIcon from "@/modules/talent/views/messaging/components/searchIcon.vue";
export default {
  components: {
    searchIcon,
    messageCard,
    ThreeDotVertical,
    emojiIcon,
    cameraIcon,
    paperClipIcon,
    micIcon,
  },

  data() {
    return {
      message: [
        {
          id: 1,
          active: true,
          user: "admin",
          status: "now",
          msg: "Amet minimerunt ulla...",
        },
        {
          id: 2,
          active: true,
          user: "Liliana tobi",
          status: "10hr",
          msg: "Amet minimerunt ulla...",
        },
        {
          id: 3,
          active: false,
          user: "Liliana tobi",
          status: "now",
          msg: "Amet minimerunt ulla...",
        },
        {
          id: 4,
          active: false,
          user: "Liliana tobi",
          status: "now",
          msg: "Amet minimerunt ulla...",
        },
        {
          id: 5,
          active: true,
          user: "Liliana tobi",
          status: "10hr",
          msg: "Amet minimerunt ulla...",
        },
        {
          id: 6,
          active: false,
          user: "Liliana tobi",
          status: "now",
          msg: "Amet minimerunt ulla...",
        },
        {
          id: 7,
          active: false,
          user: "Liliana tobi",
          status: "now",
          msg: "Amet minimerunt ulla...",
        },
      ],
    };
  },
};
</script>
<style scoped>
.input_message_section {
  border-radius: 17.27px;
  background: #ebf3ff;
  width: 90%;
  height: 55.98px;
  flex-shrink: 0;
  display: flex;
  padding: 1px 10px;
  align-items: center;
  gap: 8px;
}
.record_message {
  border-radius: 13.816px;
  background: #0040a1;
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 8px;
  width: 20%;
}
.chat_input_section {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
}
.chat_screen {
  height: 50vh;
}
.chat_header_content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.last_seen {
  color: #303030;
  font-family: Poppins;
  font-size: 13.816px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.691px;
}
.chat_header {
  border-bottom: 0.691px solid #b4ababa8;
  display: flex;
  padding: 10px 0;
  gap: 10px;
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
.unread_message {
  width: 100%;
  background: #f5f5f5;
  height: 102.557px;
  flex-shrink: 0;
  padding: 19px;
  display: flex;
  gap: 10px;
}
.read_message {
  width: 100%;
  background: #ffffff;
  height: 102.557px;
  flex-shrink: 0;
  padding: 19px;
  display: flex;
  gap: 10px;
}
.search_bar {
  width: 100%;
  height: 100%;
  padding: 12px 14px;
  font-weight: 400;
  outline: none;
  border: none;
  border-radius: 25px;
  background-color: transparent;
  font-size: 12.7px;
}
.message_container {
  width: 100%;
  display: flex;
  margin: 2.5rem 0;
  gap: 30px;
}
.all_message_section {
  width: 40%;
  display: flex;
  flex-direction: column;

  gap: 30px;
}
.view_message_container {
  width: 60%;
  border-radius: 17.27px;
  background: #fff;
  box-shadow: 0px 2.76319px 10px 1.38159px #c4c4c45b;
  /* height: 100vh; */
  flex-shrink: 0;
  padding: 20px;
}
.searchbar_section {
  border-radius: 17.97px;
  background: #fff;
  box-shadow: 0px 2.76319px 10px 1.38159px #c4c4c45b;
  height: 68px;
  width: 100%;
  display: flex;
  gap: 4px;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  padding: 10px;
  flex-shrink: 0;
}
.message_list_section {
  border-radius: 20.511px;
  background: #fff;
  box-shadow: 0px 2.76319px 10px 1.38159px #c4c4c45b;
  width: 100%;
  overflow-x: auto;
  height: 60vh;
}
</style>

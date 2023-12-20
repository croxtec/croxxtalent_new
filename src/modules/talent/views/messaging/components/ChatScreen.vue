<template>
  <div>
    <div v-if="message">
      <div class="chat_header">
        <div class="chat_header_left">
          <a @click="$emit('go-back')" role="button" href=""
            ><svg
              fill="#000000"
              height="19px"
              width="19px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 476.213 476.213"
              xml:space="preserve"
            >
              <polygon
                points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 
	57.427,253.107 476.213,253.107 "
              />
            </svg>
            <!-- <i class="isax isax-arrow-left-1"></i> -->
          </a>
          <img
            class="user_profile_image"
            src="@/assets/img/user_message_image.png"
            alt=""
          />
        </div>

        <div class="chat_header_content">
          <div class="message_details">
            <div class="sender_name">
              <!-- <h3>{{ message.user }}</h3> -->
            </div>

            <p class="last_seen">Online - Last seen, 2.02pm</p>
          </div>
          <div>
            <ThreeDotVertical />
          </div>
        </div>
      </div>
      <div class="chat_screen">
        <div v-for="chat in message" :key="chat.id">
          {{ chat.message }}
        </div>
      </div>
      <div class="chat_input_section">
        <div class="input_message_section">
          <paperClipIcon />
          <input
            v-model="newMessage"
            class="search_bar"
            type="text"
            placeholder="Type your message here..."
          /><emojiIcon /><cameraIcon />
        </div>
        <div role="button" @click="send" class="record_message">
          <micIcon class="mx-auto" />
        </div>
      </div>
    </div>
    <div v-else class="defult_message_screen">
      <h2>Welcome to the Messaging App</h2>
      <p>Select a message to start chatting.</p>
    </div>
  </div>
</template>
<script>
import micIcon from "@/modules/talent/views/messaging/components/micIcon";
import cameraIcon from "@/modules/talent/views/messaging/components/cameraIcon";
import emojiIcon from "@/modules/talent/views/messaging/components/emojiIcon";
import paperClipIcon from "@/modules/talent/views/messaging/components/paperClipIcon";
import ThreeDotVertical from "@/modules/talent/views/messaging/components/three_dot_vertical.vue";
import searchIcon from "@/modules/talent/views/messaging/components/searchIcon.vue";
import { useChat } from "@/firebase";
// const { messages, sendMessage, displayMessage, allMessages } = useChat();
import { mapActions, mapState } from "vuex";

import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  query,
  limit,
  onSnapshot,
  getDoc,
  doc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

export default {
  props: ["message"],
  data() {
    return {
      newMessage: "",
      // messagesList: messages,
      content: "",
      receiver: "",
    };
  },
  components: {
    searchIcon,
    ThreeDotVertical,
    emojiIcon,
    cameraIcon,
    paperClipIcon,
    micIcon,
  },
  mounted() {
    // displayMessage().then((updatedMessages) => {
    //   this.messagesList = updatedMessages;
    // });
  },

  methods: {
    // send() {
    //   this.$store.dispatch("messagesModule/sendMessage", id);
    //   console.log(this.chats);
    // },
    ...mapActions("messagesModule", ["sendMessage"]),
    send() {
      const receiverId = this.message.length > 0 ? this.message[0].receiver_id : null;
      let formData = new FormData();
      formData.append("content", this.newMessage);
      formData.append("receiver", receiverId);
      // this.sendMessage(formData);
      this.$store.dispatch("messagesModule/sendMessage", formData);
      this.$store.getters["messagesModule/chats"];
      this.newMessage = "";
    },

    // send() {
    //   sendMessage(this.newMessage);
    //   this.newMessage = "";
    //   displayMessage().then((updatedMessages) => {
    //     this.messagesList = updatedMessages;
    //   });
    // },
  },
};
</script>
<style scoped>
.chat_header_left {
  display: flex;
  align-items: center;
  gap: 3px;
}
.defult_message_screen {
  display: grid;
  place-content: center;
  height: 40vh;
}
.defult_message_screen h2 {
  color: #282929;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 25.639px;
  text-align: center;
}
.defult_message_screen p {
  color: #282929;
  font-family: Poppins;
  font-size: 12.307px;
  font-style: normal;
  font-weight: 500;
  line-height: 25.639px;
  opacity: 0.5;
  text-align: center;
}
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
@media only screen and (max-width: 768px) {
  .hidden {
    display: none;
  }
  .all_message_section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .view_message_container {
    width: 100%;
    border-radius: 17.27px;
    background: #fff;
    box-shadow: none;
    /* height: 100vh; */
    flex-shrink: 0;
    padding: 20px;
  }
  .searchbar_section {
    border-radius: 17.97px;
    background: #fff;
    box-shadow: none;
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
}
</style>

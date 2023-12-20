<template>
  <div id="notifications">
    <!-- <div v-if="selectedMessage || isMobile" class="message_container">
      <div class="all_message_section">
        <div class="searchbar_section">
          <searchIcon />
          <input class="search_bar" type="search" placeholder="Search" />
        </div>
        <div class="message_list_section">
          <messageCard :messages="messages" @select-message="selectMessage" />
        </div>
      </div>
      <div class="view_message_container">
        <ChatScreen :message="selectedMessage" @go-back="goBack" />
      </div>
    </div> -->
    <div class="message_container">
      <div class="all_message_section">
        <div class="searchbar_section">
          <searchIcon />
          <input class="search_bar" type="search" placeholder="Search" />
        </div>
        <div class="message_list_section">
          <messageCard @select-message="selectMessage" />
        </div>
      </div>
      <div class="view_message_container">
        <!-- <div v-for="message in chats?.data" :key="message.id">
          {{ message.message }}
        </div>
        <div v-for="message in selectedMessages" :key="message.id">
          {{ message.message }}
        </div> -->
        {{ (selectedMessages, chatsMessages?.data) }}
        <ChatScreen :message="chatsMessages?.data" @go-back="goBack" @send="send" />
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
import ChatScreen from "../components/ChatScreen.vue";

import { useChat } from "@/firebase";
const { messages, sendMessage } = useChat();

export default {
  components: {
    searchIcon,
    messageCard,
    ThreeDotVertical,
    emojiIcon,
    cameraIcon,
    paperClipIcon,
    micIcon,
    ChatScreen,
  },

  data() {
    return {
      user: null,
      newMessage: "",
      messages: [],
      users: [
        {
          id: 1,
          active: true,
          user: "george tobi",
          status: "now",
          msg: "Amet minimerunt ulla...",
        },
      ],
      selectedMessages: [],
      // messages: [
      //   {
      //     id: 1,
      //     active: true,
      //     user: "admin",
      //     status: "now",
      //     msg: "Amet minimerunt ulla...",
      //   },
      //   {
      //     id: 2,
      //     active: true,
      //     user: "Liliana tobi",
      //     status: "10hr",
      //     msg: "Amet minimerunt ulla...",
      //   },
      //   {
      //     id: 3,
      //     active: false,
      //     user: "Ben tobi",
      //     status: "now",
      //     msg: "Amet minimerunt ulla...",
      //   },
      //   {
      //     id: 4,
      //     active: false,
      //     user: "Alex tobi",
      //     status: "now",
      //     msg: "Amet minimerunt ulla...",
      //   },
      //   {
      //     id: 5,
      //     active: true,
      //     user: "Liliana tobi",
      //     status: "10hr",
      //     msg: "Amet minimerunt ulla...",
      //   },
      //   {
      //     id: 6,
      //     active: false,
      //     user: "Codie tobi",
      //     status: "now",
      //     msg: "Hi",
      //   },
      //   {
      //     id: 7,
      //     active: false,
      //     user: "Liliana tobi",
      //     status: "now",
      //     msg: "Amet minimerunt ulla...",
      //   },
      // ],
      // selectedMessage: null,
      isMobile: false, // Add a flag to track if it's mobile view
    };
  },
  watch: {},

  mounted() {
    console.log(this.newMessage);
  },
  computed: {
    chatsMessages() {
      return this.$store.getters["messagesModule/chats"];
    },
  },
  methods: {
    selectMessage(id) {
      this.$store.dispatch("messagesModule/showConversation", id);
      console.log(this.chats);
    },
    goBack() {
      if (this.isMobile) {
        this.selectedMessage = null;
        this.isMobile = false; // Close the chat on mobile
      } else {
        this.selectedMessage = null;
      }
    },
    send() {
      sendMessage(this.newMessage);
      this.newMessage = "";
    },
  },
};
</script>
<style scoped>
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
  padding: 10px;
}
@media only screen and (max-width: 768px) {
  .message_list_section {
    border-radius: none;
    background: none;
    box-shadow: none;
    width: 100%;
    overflow-x: auto;
    height: 50vh;
    padding: 2px;
  }

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
    border-radius: none;
    background: none;
    box-shadow: none;
    /* height: 100vh; */
    flex-shrink: 0;
    padding: 2px;
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
messages mo chat. collection() ch chat. collection ('genera-101') hat shot (()) shnap th
ndMessage (()) sap s hot => { } shapshot.m({ }) ; user: this.user, message: this.message

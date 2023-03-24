<template>
  <div>
    <h1>SocketIO Message</h1>
    <p v-if="lastMessage">{{ lastMessage }}</p>
    <p v-else>Loading message...</p>
    <button v-on:click="sendMessage">Send Message</button>
  </div>
  <div>
</div>
</template>

<script>
import { socket } from "@/socket";
import { state } from "@/socket";

export default {
  name: "MessageHandler",

  computed: {
    lastMessage() {
      return state.messageBuffer[0];
    }
  },
  methods: {
    sendMessage() {
      // Get the current time
      const currentTime = new Date().toLocaleString();

      // Send a message to the server with the current time
      socket.emit('message', {
        message: `Hello from the client!`,
        time: currentTime
      });
    }
  }
}
</script>
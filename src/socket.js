import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  messageBuffer: Array(10) // Max buffer size out so we don't hit a memory leak
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3030";

export const socket = io(URL);
export var rx_message = '';

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

// Adds message to front of array, removes message from end of array
// i.e. [Newest_msg, ..., Oldest_msg]
socket.on("message", (msg) => {
  state.messageBuffer.unshift(msg);
  state.messageBuffer.pop()
});

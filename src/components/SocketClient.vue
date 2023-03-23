<template>
    <div>
      <h1>SocketIO Message</h1>
      <p v-if="message">{{ message }}</p>
        <p v-else>Loading message...</p>
    </div>
  </template>
  
  <script>
  import io from 'socket.io-client';
  
  export default {
    name: 'SocketClient',
    data() {
      return {
        message: '',
      };
    },
    mounted() {
      const socket = io('http://localhost:3030');
      socket.on('message', (msg) => {
        this.message = msg;
      });
    },
  };
  </script>
  
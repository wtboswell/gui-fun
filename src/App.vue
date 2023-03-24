<template>
  <div id="app">
    gui-fun
    <ConnectionState />
    <ConnectionManager />
    <MessageHandler />
  </div>
</template>

<script>
import ConnectionState from './components/ConnectionState.vue';
import ConnectionManager from './components/ConnectionManager.vue';
import MessageHandler from './components/MessageHandler.vue';

export default {
  name: 'App',
  components: {
    ConnectionState,
    ConnectionManager,
    MessageHandler
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

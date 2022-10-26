const { createApp } = Vue

createApp({
  data() {
    return {
      message: "Vue h1 message",
      path: "./img/",
      image: "granma.jpg"
    }
  }

}).mount('#app')
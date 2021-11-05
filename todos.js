/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      todos: [
        {
          userId: 1,
          id: 1,
          title: "Feed Dogs",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "Take out humanoid shaped garbage bags",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "Clean porch",
          completed: false,
        },
      ],
    };
  },
});

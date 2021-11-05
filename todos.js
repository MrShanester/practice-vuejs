/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "You look really far behind!",
      todos: [],
      userId: 0,
      title: "",
      completed: false,
      message2: "",
    };
  },
  methods: {
    loadnames: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
    maketodo: function () {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          userId: this.userId,
          title: this.title,
          completed: false,
        })
        .then((response) => {
          console.log(response);
          this.todos.push(response.data);
          this.message2 = "Task " + response.data.title + " created.";
        })
        .catch(function (error) {
          console.log(error);
        });
      this.userId = 0;
      this.title = "";
    },
  },
});

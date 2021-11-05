/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "JavaScript says 'AAAAAAAAAAAAAAAAAAAGH'",
    };
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "I LIED! AAAAAAAAAAAAAAAAAAAGH",
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "I feel fulfilled.",
  },
  methods: {
    reverseMessage: function () {
      if (this.message === "I feel fulfilled.") {
        this.message = "*Inconsolable Sobbing*";
      } else {
        this.message = "I feel fulfilled.";
      }
    },
  },
});

var button = new Vue({
  el: "#button",
  data: function () {
    return {
      message: "JavaScript Got his Life back Together!",
    };
  },
  methods: {
    changeMessage: function () {
      if (this.message === "JavaScript Got his Life back Together!") {
        this.message = "JavaScript is having an Existential Crisis!";
      } else {
        this.message = "JavaScript Got his Life back Together!";
      }
    },
  },
});

var dynamic = new Vue({
  el: "#dynamic",
  data: function () {},
});

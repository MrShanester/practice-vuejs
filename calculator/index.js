/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Thank you for using S-Calc: Version 3.12.7!",
      num1: 0,
      num2: 0,
      sum: 0,
      product: 0,
      quotient: 0,
      exponent: 0,
      hold: 0,
      showInfo: false,
      numbers: [],
      newNumber: "",
    };
  },
  methods: {
    calculateSum: function () {
      this.sum = parseInt(this.num1) + parseInt(this.num2);
      return this.sum;
    },
    calculateProduct: function () {
      this.product = parseInt(this.num1) * parseInt(this.num2);
      return this.product;
    },
    calculateQuotient: function () {
      this.quotient = parseInt(this.num1) / parseInt(this.num2);
      return this.quotient;
    },
    calculateExponent: function () {
      this.hold = this.num1;
      for (let step = 1; step < parseInt(this.num2); step++) {
        this.hold *= parseInt(this.hold);
      }
      this.exponent = this.hold;
      return this.exponent;
    },
    addNumber: function () {
      this.numbers.push(this.newNumber);
      this.newNumber = "";
    },
  },
});

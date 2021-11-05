/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
      name: "",
      description: "",
      image_url: "",
      price: 0,
      message2: "",
    };
  },
  methods: {
    loadProducts: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    makeProduct: function () {
      axios
        .post("http://localhost:3000/products", {
          name: this.name,
          description: this.description,
          image_url: this.image_url,
          price: this.price,
        })
        .then((response) => {
          console.log(response);
          this.products.push(response.data);
          this.message2 = "Product " + response.data.name + " created.";
        })
        .catch((error) => {
          console.log(error);
        });
      this.name = "";
      this.description = "";
      this.image_url = "";
      this.price = 0;
    },
  },
});

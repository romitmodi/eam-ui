"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
    // handle success
    console.log(response.data);
})
    .catch(function (error) {
    // handle error
    console.error(error);
})
    .finally(function () {
    // always executed
});

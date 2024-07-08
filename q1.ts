// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */

const getUser = (userId: number) => {
  /* Your code here */
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      const user = res.data;
      const fullname = `${user.name}`;
      return fullname;
    })
    .catch((err) => {
      return "INVALID USER ID";
    });
};

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;

const express = require("express");
const routes = const routes = require("./server/routes");
const app = express();
const PORT = process.env.PORT || 8080;

require ('dotenv').config();
console.log(process.env)
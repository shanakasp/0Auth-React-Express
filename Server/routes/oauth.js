const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const { OAuth2Client } = require("google-auth-library");

async function getUserData(access_token) {
  const responce = await fetch(
    `https://www.google.com/oauth2/v3/userinfo?access_token${access_token}`
  );

  const data = await responce.json();
  console.log("data", data);
}

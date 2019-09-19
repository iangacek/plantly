const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const request = require("request"); //Makes http calls
const cheerio = require("cheerio"); //Scraper

// A GET route for scraping the Wikipedia


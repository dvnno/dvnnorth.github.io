'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('projects',
      [
        {
          title: "UtiliFleet",
          img: "img/utilifleet.png",
          description: "UtiliFleet is an enterprise-class fleet management web application built using React, Node/Express, and MySQL/Sequelize.",
          repo_url: "https://github.com/dvnnorth/pixel-forest",
          deployed_url: "https://pixelforest.herokuapp.com/",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          title: "React News Scraper",
          img: "img/nytscraper.png",
          description: "React News Scraper is a full-stack MERN application that scrapes the New York Times front page for headlines and allows the user to collect and annotate them.",
          repo_url: "https://github.com/dvnnorth/RoutePlanner",
          deployed_url: "https://dvnnorth.github.io/RoutePlanner",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          title: "Pixel Forest",
          img: "img/pixelforest.jpg",
          description: "Pixel Forest is a full-stack web application designed to let users quickly and easily upload, host, and share photos. Pixel Forest leverages Google's Firebase platform to create and authenticate users and to host and share photos. The model was developed using Sequelize, the view using Handlebars, and controller using Node and Express.",
          repo_url: "https://github.com/dvnnorth/pixel-forest",
          deployed_url: "https://pixelforest.herokuapp.com/",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          title: "Eat Da Burger",
          img: "img/eatdaburger.jpg",
          description: "This application is a full-stack web application that uses Node.js, Handlebars.js, Express, and MySQL for the server-side logic and Bootstrap for the front-end design.",
          repo_url: "https://github.com/dvnnorth/burger-app",
          deployed_url: "http://burgerapp-dvnnorth.herokuapp.com/",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          title: "bamazon",
          img: "img/bamazon.jpg",
          description: "bamazon is a command line program written in JavaScript using Node.js that simulates a store by interacting with a MySQL database. Through the three files, bamazonCustomer.js, bamazonManager.js, and bamazonSupervisor.js, users are able to interact with the database to \"purchase\" items (decrease the stock_quantity column in the products database), add new items into the \"inventory\" (insert new rows into the products database) and many more functions described below. This project was designed as part of UT Austin's Coding Boot Camp in Houston to demonstrate knowledge of managing databases and running MySQL commands, using Node to interact with a SQL database using the mysql Node module and to further demonstrate knowledge of chaining asynchronous callbacks and use of Node in general.",
          repo_url: "https://github.com/dvnnorth/bamazon",
          deployed_url: null,
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          title: "Friend Finder",
          img: "img/friendfinder.jpg",
          description: "Friend Finder is a web application that serves as a simplified dating or friend-matching app. friend-finder uses Node.js and Express for its server-side code and Materialize for its front-end styling. Server-side storage is acheived by storing data in an object and updating the object to simulate a database",
          repo_url: "https://github.com/dvnnorth/friend-finder",
          deployed_url: "https://friendfinder-dvnnorth.herokuapp.com/",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        }
      ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Projects', null, {});
  }
};

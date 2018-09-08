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
          title: "Pixel Forest",
          img: "img/pixelforest.jpg",
          description: "Pixel Forest is a full-stack web application designed to let users quickly and easily upload, host, and share photos. Pixel Forest leverages Google's Firebase platform to create and authenticate users and to host and share photos. The model was developed using Sequelize, the view using Handlebars, and controller using Node and Express.",
          repo_url: "https://github.com/dvnnorth/pixel-forest",
          deployed_url: "https://pixelforest.herokuapp.com/"
        },
        {
          title: "Route Planner",
          img: "img/routeplanner.jpg",
          description: "Route Planner is a front-end application to plan routes and get fare rates using the Lyft and Uber fare estimate APIs, Google Maps APIs, and Axios.js.",
          repo_url: "https://github.com/dvnnorth/RoutePlanner",
          deployed_url: "https://dvnnorth.github.io/RoutePlanner"
        },
        {
          title: "bamazon",
          img: "img/bamazon.jpg",
          description: "bamazon is a command line program written in JavaScript using Node.js that simulates a store by interacting with a MySQL database. Through the three files, bamazonCustomer.js, bamazonManager.js, and bamazonSupervisor.js, users are able to interact with the database to \"purchase\" items (decrease the stock_quantity column in the products database), add new items into the \"inventory\" (insert new rows into the products database) and many more functions described below. This project was designed as part of UT Austin's Coding Boot Camp in Houston to demonstrate knowledge of managing databases and running MySQL commands, using Node to interact with a SQL database using the mysql Node module and to further demonstrate knowledge of chaining asynchronous callbacks and use of Node in general.",
          repo_url: "https://github.com/dvnnorth/bamazon",
          deployed_url: null
        },
        {
          title: "Eat Da Burger",
          img: "img/eatdaburger.jpg",
          description: "This application is a full-stack web application that uses Node.js, Handlebars.js, Express, and MySQL for the server-side logic and Bootstrap for the front-end design.",
          repo_url: "https://github.com/dvnnorth/burger-app",
          deployed_url: "http://burgerapp-dvnnorth.herokuapp.com/"
        },
        {
          title: "Friend Finder",
          img: "img/friendfinder.jpg",
          description: "Friend Finder is a full-stack web application that serves as a simplified dating or friend-matching app. friend-finder uses Node.js and Express for its server-side code and Materialize for its front-end styling.",
          repo_url: "https://github.com/dvnnorth/friend-finder",
          deployed_url: "https://friendfinder-dvnnorth.herokuapp.com/"
        },
        {
          title: "TrainScheduler",
          img: "img/trainscheduler.jpg",
          description: "An app that generates a table of trains based on information stored on a Google Firebase database.",
          repo_url: "https://github.com/dvnnorth/TrainScheduler",
          deployed_url: "https://dvnnorth.github.io/TrainScheduler/"
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

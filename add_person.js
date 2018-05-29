const settings = require("./settings"); // settings.json
var knex = require('knex')({
  client: 'pg',
  connection: {
  host : settings.hostname,
  user : settings.user,
  password : settings.password,
  database : settings.database
  }
});

const person = process.argv[2];

if (process.argv.length < 5){
  return console.log("enter first, last name and DOB")
} else {
  console.log("Adding: " + person + " to database");
};

knex('famous_people')
.insert({first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]})
.then(function(rows) {
  console.log(rows)
  knex.destroy(); // To close connection
});




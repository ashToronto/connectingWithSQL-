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
console.log("Searching for: " + person);

knex.select("*").from("famous_people")
.where("first_name", '=', person)
.orWhere("last_name", "=", person)
.then((result) => {
//Extract object and print inline
var personInfo = result
    for (var i = 0; i < personInfo.length; i++){
      var data = personInfo[i]; //output: 1
      console.log( i+1 + ':' + data.first_name + ' ' + data.last_name + ', born: ' + data.birthdate.toLocaleDateString())
    }
knex.destroy(); // To close connection
})
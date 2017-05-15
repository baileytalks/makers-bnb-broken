var mapper = require("data-mapper-js");
var pg = require("pg");

var schemaBuilder = mapper.schema();
    schemaBuilder
    .add("users", "userid", "username", "useremail", "userpassword")
        .hasManyWithMany("properties", "propertyid")
        .save()
    .add("properties", "propertyid", "propertyname", "propertydescription", "propertyprice").save();

var db = mapper.init("pg", connString, schemaBuilder.schema);

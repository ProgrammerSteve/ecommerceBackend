//Fixed the date format that were autogenerated when getting seed data
//Date data is now ISO 8601 for the Cart table
//this file was to parse through the text and console log the updated value
//which was then pasted into seedCart.sql

var fs = require("fs");

function readModuleFile(path, callback) {
  try {
    var filename = require.resolve(path);
    fs.readFile(filename, "utf8", callback);
  } catch (e) {
    callback(e);
  }
}

let fileText = readModuleFile("./seedCart.sql", function (err, words) {
  let wordsUpdated = words.split("VALUES");
  let wordsUpdated2 = wordsUpdated[1].split(";");

  let entries = (wordsUpdated2[0] + ",").split("),");

  entriesUpdated = entries
    .map((str) => {
      let entry = str.split("(")[1];
      return entry;
    })
    .filter((str) => str !== undefined)
    .map((str) => {
      return str.split(",");
    });

  isoDates = entriesUpdated
    .map((arr) => arr[1])
    .map((datetxt) => {
      let datetxtfixed = datetxt.split("");
      datetxtfixed.pop();
      datetxtfixed.shift();
      let dateFormatted = datetxtfixed.join("");
      let date = new Date(dateFormatted);
      return date.toISOString();
    });

  entriesUpdated.map((str, ind) => {
    str[1] = `'${isoDates[ind]}'`;
    return str;
  });

  entriesUpdated.forEach((str) => {
    console.log("(" + str + "),");
  });
});
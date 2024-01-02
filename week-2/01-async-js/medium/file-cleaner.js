const fs = require("fs");

const filePath =
  "D:/100x-Cohort/assignments/week-2/01-async-js/medium/temp.txt";

const readFromAFile = (path) => {
  return new Promise(function (resolve) {
    fs.readFile(path, "utf-8", function (err, data) {
      if (err) {
        rejects(err);
      } else {
        resolve(data);
      }
    });
  });
};

const writeToAFile = (path, content) => {
  return new Promise(function (resolve) {
    fs.writeFile(path, content, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const formatString = (str) => str.replace(/\s+/g, " ");

async function main() {
  try {
    const fileContent = await readFromAFile(filePath);

    const formattedContent = formatString(fileContent);

    await writeToAFile(filePath, formattedContent);

    console.log("Updated Successfully !");
  } catch (err) {
    console.error(err);
  }
}

main();

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Type in url :-", name: "URL" }])
  .then((answers) => {
    //console.log(answers);
    const url = answers.URL;
    //console.log(url);
    //turning the url into qr image
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qrimg.png"));

    fs.writeFile("url.text", url, (err) => {
      if (err) throw err;
      console.log("URL saved to url.txt");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

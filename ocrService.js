uuidV4 = require('uuid');
var fs = require('fs')
var { readData } = require('./readData')
var {ktp, passport, sim1, sim2 } = require('./ocrConfig')

  let uuid = uuidV4.v4();
  const originalImage = __dirname + "/original-" + uuid + ".jpg";

  const result = [];

module.exports = {
    prepareFile: (image) => {
        fs.writeFile(originalImage, image, 'base64', function (err) {
            // console.log(err);
        });
    },
    processFile: async (type) => {
        if(type === 'KTP') {
              let i = 0;
              for (const d of ktp) {
                const response = await readData(originalImage, d, uuid, i, "25");
                if (response) {
                  result.push(response);
                } else {
                  result.push("");
                }
                i++;
              }
        } else if(type === 'PASSPORT') {
              let i = 0;
              for (const d of passport) {
                const response = await readData(originalImage, d, uuid, i, 28);
                if (i == 0) {
                  let text = "";
                  if (response && response !== "") {
                    const split = response.split("<");
                    if (split.length > 0) {
                      text = split[0];
                    }
                  }
                  result.push(text);
                } else if (i == 1) {
                  let text = "";
                  if (response && response !== "") {
                    const split = response.split("<");
                    if (split.length > 0) {
                      for (const s of split) {
                        if (s !== "") {
                          text = s;
                        }
                      }
                    }
                  }
                  result.push(text);
                } else {
                  result.push(response);
                }
                i++;
              }
        } else if(type === 'SIM-1') {
            let i = 0;
              for (const d of sim1) {
                const response = await readData(originalImage, d, uuid, i, "25");
                if (response) {
                  result.push(response);
                } else {
                  result.push("");
                }
                i++;
              }
        } else if(type === 'SIM-2') {
            let i = 0;
              for (const d of sim2) {
                const response = await readData(originalImage, d, uuid, i, "30");
                if (response) {
                  result.push(response);
                } else {
                  result.push("");
                }
                i++;
              }
        }
        return result
    }
}
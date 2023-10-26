var gm = require('gm')
var tesseract = require('node-tesseract');
var fs = require('fs');

module.exports = {
    readData: (originalImage, d, uuid, i, threshold) => {
        let grayImage = __dirname + "/gray-" + uuid + "-" + i + ".jpg";
        return new Promise((resolve, reject) => {
          gm(originalImage)
            .crop(d.w, d.h, d.x, d.y)
            .quality(100)
            .colorspace('GRAY')
            .threshold(threshold, 'Threshold-White')
            .write(grayImage, function (_err) {
              //tesseract for OCR
              tesseract.process(grayImage, d.options, function (err, text) {
                if (err) {
                  reject(err);
                } else {
                  console.log("text", text);
                  const stringRes = new String(text);
                  resolve(stringRes.replace("\n", "").replace("\f", ""));
      
                  fs.unlink(grayImage, (err) => {
                    if (err) {
                      console.log("failed to delete processed image:" + err);
                    } else {
                      // console.log('successfully deleted processed image');
                    }
                  });
                }
              });
            });
        });
      }
};
var optionIDNoKTP = {
    l: 'ocr',
    psm: null,
    oem: null,
    binary: 'tesseract',
    config: '-c tessedit_char_whitelist=0123456789'
  };
  var optionsDefault = {
    l: 'ind',
    psm: null,
    oem: null,
    binary: 'tesseract',
    config: null
  };
  var optionsDefaultNumber = {
    l: 'ind',
    psm: null,
    oem: null,
    binary: 'tesseract',
    config: '-c tessedit_char_whitelist=0123456789'
  };
  var optionsPassport = {
    l: 'OCRB',
    psm: null,
    oem: null,
    binary: 'tesseract',
    config: null
  };

module.exports = {
    ktp: [
        {
          w: 950,
          h: 120,
          x: 440,
          y: 200,
          options: optionIDNoKTP,
        },
        {
          w: 950,
          h: 80,
          x: 480,
          y: 300,
          options: optionsDefault,
        },
        {
          w: 966,
          h: 67,
          x: 483,
          y: 375,
          options: optionsDefault,
        }
      ],
    passport: [
        {
          w: 2800,
          h: 120,
          x: 110,
          y: 1800,
          options: optionsPassport,
        },
        {
          w: 2800,
          h: 120,
          x: 110,
          y: 1650,
          options: optionsPassport,
        },
  
      ],
    sim1: [
        {
          w: 500,
          h: 60,
          x: 989,
          y: 798,
          options: optionsDefaultNumber,
        },
        {
          w: 1000,
          h: 75,
          x: 385,
          y: 385,
          options: optionsDefault,
        }
      ],
    sim2: [
        {
          w: 930,
          h: 100,
          x: 1200,
          y: 365,
          options: optionsDefaultNumber,
        },
        {
          w: 1200,
          h: 100,
          x: 685,
          y: 470,
          options: optionsDefault,
        }
      ]
}
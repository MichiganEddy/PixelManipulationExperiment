
async function asyncProcessArray(origArr, sVal) {
  var length = origArr.length / 2;
  console.log('asyncProcessArray - arrayLength = ' + length + '.\n');
  if (length % 4 != 0) length = length - 2;
  var first = origArr.slice(0, length);
  var second = origArr.slice(length);
  var fFinished, sFinished;

  if (first.length > 40000) {
    fFinished = await asyncProcessArray(first, sVal);
    sFinished = await asyncProcessArray(second, sVal);
  } else {
    fFinished = await processArray(first, sVal);
    sFinished = await processArray(second, sVal);
  }
  return fFinshed.concat(sFinished);
}

async function processArray(oArr, sVal) {
    var nArr = new Uint8ClampedArray(oArr.length);

    for (var i = 0; i < oArr.length; i = i + 4) {
      for (var j = 0; j < 4; j++) {
        nArr[i + j] = (oArr[i + j] < 128 )? oArr[i + j] + sVal
          : oArr[i + j] - sVal;
      }
      if ((i > 0 && i % 2500 == 0) || i == 100) {
        if (i == 100) {
          console.log(
            `Array Processing started. Current Values:\n\tr: ${oArr[i]} rP: ${nArr[i]}\n\tg: ${oArr[i + 1]} gP: ${nArr[i + 1]}\n\tb: ${oArr[i + 2]} bP: ${nArr[i + 2]}\n\ta: ${oArr[i + 3]} aP: ${nArr[i + 3]}`);
        }else {
        console.log(
          `ProcessArray - Handled another 2500 - Values:\n\tr: ${oArr[i]} rP: ${nArr[i]}\n\tg: ${oArr[i + 1]} gP: ${nArr[i + 1]}\n\tb: ${oArr[i + 2]} bP: ${nArr[i + 2]}\n\ta: ${oArr[i + 3]} aP: ${nArr[i + 3]}`);
        }
      }
    }
    return (nArr);
}

function main() {
  var canvas_object = document.getElementById('canvas');
  var ctx = canvas_object.getContext('2d');
  var newImage = imageTx(canvas_object);

  var w = canvas_object.width;
  var h = canvas_object.height;
  var newCanvas = document.getElementById('canvas2');
  newCanvas.height = h;
  newCanvas.width = w;
  var newCtx = newCanvas.getContext('2d');

  imageTx(canvas_object).then(function(imData) {
    newCtx.putImageData(imData, 0, 0);
  });
  //   createImageBitmap(canvas_object, 0, 0, w, h).then(function(bMap){

  //     newContext.drawImage(bMap, 0, 0, w, h);
  //   });
}

var c = 0;
setInterval(
  function() {
    var el = $('#arr-length');
    if (c != 0) {
      el.css('background-color', 'WHITE');
      el.css('color', 'BLACK');
      c = 0;
    } else {
      el.css('background-color', 'BLACK');
      el.css('color', 'WHITE');
      c = 1;
      var vas = document.getElementById('canvas');
      var ctx = vas.getContext('2d');
      var height = vas.height;
      var width = vas.width;
      var secretValue = 112;

      var origImData = ctx.getImageData(0, 0, width, height);
      console.log(`Length of image data array: ${origImData.data.length}`);
      var started = Date.now();
      var nProcessed = 0;

      var oArr = origImData.data;
      asyncProcessArray(oArr, secretValue).then(function(nArr) {
        console.log(
          'Required: ' +
            (Date.now() - started) / 1000 +
            ' seconds to convert the image.');
        var newImData = ctx.createImageData(origImData);
        newImData.data.set(nArr);
        resolve(newImData);
      });
    }
    main();
  },
  150000);



async function asyncProcessArray(origArr, sVal) {
  var length = origArr.length / 2;
  console.log('asyncProcessArray - arrayLength = ' + length + '.\n');
  if (length % 4 != 0) length = length - 2;
  var first = origArr.slice(0, length);
  var second = origArr.slice(length);
  var fFinished, sFinished;

  if (first.length > 40000) {
    fFinished = await asyncProcessArray(first, sVal);
    sFinished = await asyncProcessArray(second, sVal);
  } else {
    fFinished = await processArray(first, sVal);
    sFinished = await processArray(second, sVal);
  }
  return fFinshed.concat(sFinished);
}

async function processArray(oArr, sVal) {
    var nArr = new Uint8ClampedArray(oArr.length);

    for (var i = 0; i < oArr.length; i = i + 4) {
      for (var j = 0; j < 4; j++) {
        nArr[i + j] = (oArr[i + j] < 128 )? oArr[i + j] + sVal
          : oArr[i + j] - sVal;
      }
      if ((i > 0 && i % 2500 == 0) || i == 100) {
        if (i == 100) {
          console.log(
            `Array Processing started. Current Values:\n\tr: ${oArr[i]} rP: ${nArr[i]}\n\tg: ${oArr[i + 1]} gP: ${nArr[i + 1]}\n\tb: ${oArr[i + 2]} bP: ${nArr[i + 2]}\n\ta: ${oArr[i + 3]} aP: ${nArr[i + 3]}`);
        }else {
        console.log(
          `ProcessArray - Handled another 2500 - Values:\n\tr: ${oArr[i]} rP: ${nArr[i]}\n\tg: ${oArr[i + 1]} gP: ${nArr[i + 1]}\n\tb: ${oArr[i + 2]} bP: ${nArr[i + 2]}\n\ta: ${oArr[i + 3]} aP: ${nArr[i + 3]}`);
        }
      }
    }
    return (nArr);
}

function main() {
  var canvas_object = document.getElementById('canvas');
  var ctx = canvas_object.getContext('2d');
  var newImage = imageTx(canvas_object);

  var w = canvas_object.width;
  var h = canvas_object.height;
  var newCanvas = document.getElementById('canvas2');
  newCanvas.height = h;
  newCanvas.width = w;
  var newCtx = newCanvas.getContext('2d');

  imageTx(canvas_object).then(function(imData) {
    newCtx.putImageData(imData, 0, 0);
  });
  //   createImageBitmap(canvas_object, 0, 0, w, h).then(function(bMap){

  //     newContext.drawImage(bMap, 0, 0, w, h);
  //   });
}

var c = 0;
setInterval(
  function() {
    var el = $('#arr-length');
    if (c != 0) {
      el.css('background-color', 'WHITE');
      el.css('color', 'BLACK');
      c = 0;
    } else {
      el.css('background-color', 'BLACK');
      el.css('color', 'WHITE');
      c = 1;
      var vas = document.getElementById('canvas');
      var ctx = vas.getContext('2d');
      var height = vas.height;
      var width = vas.width;
      var secretValue = 112;

      var origImData = ctx.getImageData(0, 0, width, height);
      console.log(`Length of image data array: ${origImData.data.length}`);
      var started = Date.now();
      var nProcessed = 0;

      var oArr = origImData.data;
      asyncProcessArray(oArr, secretValue).then(function(nArr) {
        console.log(
          'Required: ' +
            (Date.now() - started) / 1000 +
            ' seconds to convert the image.');
        var newImData = ctx.createImageData(origImData);
        newImData.data.set(nArr);
        resolve(newImData);
      });
    }
    main();
  },
  150000);

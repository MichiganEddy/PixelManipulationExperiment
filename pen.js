function draw() {
  var knvs = document.getElementById('canvas');
  var ctx = knvs.getContext('2d');
  var img = document.getElementById('prac');


  $('#info').css('left', `${img.height + 100} px`);

  knvs.height =  img.height;
  knvs.width  =  img.width;
  ctx.drawImage(img, 0, 0);
  

  // Get image Data array.

  // Alter it ( simply at first ) ultimately (ideally) with a fast semi-secure hash function 
  // Consider finding the values for each pixel on the screen that deterministically map to a particular color. 
  // If the color is secret...  
  // 
  // Alternatively, maybe the array can be broken into chunks and hashed - maybe using Anyway, it may provide a degree of privacy that way... 
  

  // draw it back to the canvas in its new state.  

  /* 
    Then add a function to reverse the transformation and return the original image. 
    (and a button for it)
  */
}
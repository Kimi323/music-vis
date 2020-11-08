function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
//		fill(0,255,0)
		for (var i = 0; i< spectrum.length; i++){
//          origin code
//			var x = map(i, 0, spectrum.length, 0, width);
//          in order to draw rectangle from lower left corner to right upper corner, h is made a minus number
//		    var h = -height + map(spectrum[i], 0, 255, height, 0);
//		    rect(x, height, width / spectrum.length, h );
            
            // my solution
            // height per rectangle
            var h = map(i, 0, spectrum.length, 0, height);
            // width per rectangle
            var w = map(spectrum[i], 0, 255, 0, width);
            // color (not need to use map?)
            fill(0 + spectrum[i], 255 - spectrum[i], 0);
            // use map version
            //fill(spectrum[i],map(255-spectrum[i],127,255,0,255-spectrum[i]),0);
            // draw the rectangle
            rect(0, h, w, height / spectrum.length);
  		}
	
		pop();
	};
}

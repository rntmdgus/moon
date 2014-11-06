var solar;
var bg;
var earth;

function setup() {
    createCanvas(1000, 1000);
	solar = loadImage("sun.png");
	bg = loadImage("bg.png");
	earth = loadImage("earth.png");
}


function draw() {

	background(bg);

	var duration0 = 7000;
	var timing0 = (new Date()%duration0)/duration0;
	var duration1 = 6000;
	var timing1 = (new Date()%duration1)/duration1;
	var duration2 = 5000;
	var timing2 = (new Date()%duration2)/duration2;
	var duration3 = 4000;
	var timing3 = (new Date()%duration3)/duration3;
	var duration4 = 3000;
	var timing4 = (new Date()%duration4)/duration4;

	//지구라인
	noFill();
	stroke(255);
	ellipse(500,500,600,600)

	//달라인
	noFill();
	stroke(255);
	ellipse(500 + Math.cos(timing1*2*PI)*300,           // x좌표
        500 + Math.sin(timing1*2*PI)*300,		 // y좌표
        200,                                	  // width
        200);                              	   // height
                             	   // height 

	//태양
 	image(solar,250,250,500,500);

 	//타원궤도
	fill(0,41,191);
	stroke(0,41,191);
	ellipse(500 + Math.cos(timing0*2*PI)*300,           // x좌표
        450 + Math.sin(timing0*2*PI)*300,		 // y좌표
        50,                                	  // width
        50);   


 	//지구
	image(earth,500 + Math.cos(timing1*2*PI)*300-150,500 + Math.sin(timing1*2*PI)*300-150,300,300);

 	//달1
	fill(196,158,0);
	stroke(196,158,0);
	ellipse(500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing2*4*PI)*100,           // x좌표
        500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing2*4*PI)*100,		 // y좌표
        20,                                	  // width
        20); 

 	//달2
	fill(196,158,0);
	stroke(196,158,0);
	ellipse(500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing3*4*PI)*100,           // x좌표
        500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing3*4*PI)*100,		 // y좌표
        30,                                	  // width
        30); 

	//달3
	fill(196,158,0);
	stroke(196,158,0);
	ellipse(500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing4*4*PI)*100,           // x좌표
        500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing4*4*PI)*100,		 // y좌표
        40,                                	  // width
        40); 
}

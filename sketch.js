var vertices = [];


function setup() {
	createCanvas(640,360);
}

function mousePressed(){
	var v = createVector(mouseX,mouseY);
	vertices.push(v);
}



function draw() {

	background(51);

	for(var i=0; i<vertices.length;i++)
	{
		for(var j=i+1; j<vertices.length; j++)
	    {
	    	strokeWeight(1);
			line(vertices[i].x, vertices[i].y, vertices[j].x, vertices[j].y);
		}
	  
	}


	//prim's algorithm

	var reached = [];
	var unreached = [];

	for(var i = 0; i < vertices.length; i++)
	{
		unreached.push(vertices[i]);
	}

	reached.push(unreached[0]);
	unreached.splice(0, 1);

	while(unreached.length > 0)
	{
		var record = 100000;
		var rIndex, uIndex;

		for(var i =0 ; i < reached.length; i++)
		{
			for(var j=0; j< unreached.length; j++)
			{
				var v1 = reached[i];
				var v2 = unreached[j];
				var d = dist(v1.x, v1.y, v2.x, v2.y);

				if( d < record)
				{
					record = d;
					rIndex = i;
					uIndex = j;
				}
			}
		}
		stroke(255, 0, 0);
		strokeWeight(3);
		line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
		reached.push(unreached[uIndex]);
		unreached.splice(uIndex, 1);
	}


	for(var i = 0; i < vertices.length; i++)
	{
		fill(255);
		stroke(255);
		ellipse(vertices[i].x, vertices[i].y, 16, 16);
	}
}
var canvas = fabric.Canvas('myCanvas');
//Establece las posiciónes para la pelota y el agujero.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeigth(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();

}

function new_image()
{
	fabric.Image.fromURL("ball	.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeigth(50);
		ball_obj.set({
top:ball_y,
left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}
	
function up()
{
	if(ball_y >=0)
	{
		ball_y = ball_y - 10;
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(ball_y <=500)
	{
		ball_y =ball_y+ 10;
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(ball_x >= 0)
	{
		ball_x =ball_x - 10;
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(ball_x <= 700)
	{
		ball_x =ball_x + 10;
		uploadBackground();
		uploadrover();
   }
}
	
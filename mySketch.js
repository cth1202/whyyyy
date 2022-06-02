var colors = "ed6a5a-f4f1bb-9bc1bc-5ca4a9-e6ebe0".split("-").map(a=>"#"+a)
class Ball{
  constructor(){  //預設值
		this.p = {x:random(width),y:random(height)}
		this.v = {x:random(-1,1),y:random(-1,1)}
		this.r = random(10,200)
		this.color = random(colors)
	}
}

var ball
var balls=[]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i =0;i<300;i++){
	ball = new Ball()
		balls.push(ball)
	}
	//宣告一個元的屬性，p位置，v速度，r直徑，co;or顏色
	//ball={ p:{x:50,y:50},
	//			v:{x:0,y:1},
	//			r:100,
	//			color:color(252,68,68)
	//		 }
	}

function draw() {
	background(0);
	for(var i=0;i<balls.length;i++){
		ball =balls[i]
	fill(ball.color)
	circle(ball.p.x, ball.p.y, ball.r);
	ball.p.x = ball.p.x + ball.v.x
	ball.p.y = ball.p.y + ball.v.y
}
}
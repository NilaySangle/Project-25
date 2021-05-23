class Paper{
	constructor(x,y,r)
	{
	
	var options ={
		isStatic:false,	
		'restitution':0.3,
       ' friction':0,
        'density':1.2

	}
    
		this.body=Bodies.circle(250,540,20,options);
		this.width =50;
		World.add(world, this.body);
        this.image = loadImage("paper.png");
	}
	display()
	{


			var paperpos=this.body.position;	
			translate(paperpos.x, paperpos.y);
			fill("white")
			imageMode(CENTER)
			image(this.image,0,0,50,50);
			
	}
}


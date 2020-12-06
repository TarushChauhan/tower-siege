const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


    function preload() {
        polygon_img=loadImage("polygon.png")

    }

    function setup() {
        var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


        ground1=new Ground(600,380,1200,10)
        platform1=new Ground(400,300,300,10)
        platform2=new Ground(800,200,200,10)
    
        imageMode(CENTER);
        polygon = Bodies.circle(50,200,20)
        World.add(world,polygon)
        sling=new SlingShot(this.polygon,{x:100,y:200})
        image(polygon_img,polygon.position.x,polygon.position.y,40,40)

         
       
    }

    function draw() {
        background(50)
        Engine.update(engine);
        ground1.display()
        platform1.display()
        platform2.display()
        

    }
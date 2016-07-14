/**
 * Created by xx on 2016/7/3.
 */
requirejs.config({

  
    baseUrl: './',
    waitSeconds: 0,

  // find packages.
  packages:[
      {
          name: 'physicsjs',
          location: 'js/physicsjs/dist/',
          main: 'physicsjs-full'
      }
  ],
    //
});
require([
    'physicsjs',
    'js/jquery',
], function(Physics){
	Physics(function(world){
    	var renderer = Physics.renderer('canvas',{
    			el: 'viewport',
    		width: 500,
    		height: 500
    	});
    	world.add(renderer);
    	var square = Physics.body('rectangle',{
    		x: 250,
    		y: 250,
//  		treatment: 'static',
    		width: 100,
    		height: 100
    	});
    	
    	var convex1 = Physics.body('convex-polygon',{
    		x:250,
    		y:50,
//  		treatment: 'static',
    		mass: 1.4,
    		vertices: [
    		{x:0, y:80},
    		{x:60, y:40},
    		{x:60, y:-40},
    		{x:0, y:-80},
    		{x:-60, y:0}
    		]
    	});
   
    	world.add( Physics.body('convex-polygon', {
		    x: 400,
		    y: 200,
		    mass: 100,
//		    treatment: 'static',
		    vertices: [
		        {x: 0, y: 80},
		        {x: 80, y: 0},
		        {x: 0, y: -80},
		        {x: -30, y: -30},
		        {x: -30, y: 30}
		    ]
		}) );
		world.add( Physics.body('convex-polygon', {
		    x: 400,
		    y: 200,
//		    treatment: 'static',
		    vertices: [
		        {x: 0, y: 80},
		        {x: 80, y: 0},
		        {x: 0, y: -80},
		        {x: -30, y: -30},
		        {x:-30, y:20}
		    ]
		}) );
		
		var pos = []
		world.on('interact:poke', function( data ){
		
		  data.x; // the x coord
		  data.y; // the y coord  
		  pos.push({'x':data.x, 'y':data.y});
		});
		
		
    	world.add(convex1);
    	world.add(square);
    	world.render();
    	
    	
    	Physics.util.ticker.on(function(time, dt){
    		world.step(time);
    	});
    	Physics.util.ticker.start();
    	
    	world.on('step', function(){
    		world.render();
    	});
//  	world.add(Physics.behavior('constant-acceleration'));
    	var bounds = Physics.aabb(0, 0, 500, 500);
    	world.add(Physics.behavior('edge-collision-detection',{
    		aabb: bounds,
    		restitution: -0.08,
    		cof: 0
    	}));
    	world.add(Physics.behavior('body-collision-detection'));
    	world.add(Physics.behavior('body-impulse-response'));
    	world.add( Physics.behavior('sweep-prune') );
    	world.add(Physics.behavior('interactive',{
    		el:world.renderer().container
    	}));
    	world.on('interact:grab', function( data ){
          data.x; // the x coord
          data.y;
          data.body;     
          // the body that was grabbed
     });
		  
		  
    });
	
});

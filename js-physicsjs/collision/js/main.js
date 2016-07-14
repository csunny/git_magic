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
  ]
    //
});

require([
    'physicsjs',
], function(Physics){
    Physics(function(world){

        var viewWidth = 640,
            viewHeight = 480;
    	var pos = [];
    	
    	require([])
    	var renderer = Physics.renderer('canvas',{
    		el: 'viewport',
    		autoResize:false,
    		width: viewWidth,
    		height: viewHeight,
            autoResize: true
    	});

//        var canvas = document.getElementById("viewport");
//        var ctx = renderer.init
//        console.log(ctx);




        //test PhysicsJs API

        var canvas = document.getElementById("viewport");
        if(renderer.layer('viewport') == null){
            console.log("magic, you win")
            renderer.addLayer('viewport', canvas, {
                width: viewWidth,
                height: viewHeight,
                manual: true,
                scale: 800
            });
        }
        var ctx = renderer.layer('viewport').ctx
        var styles =  {
            'circle':{
                strokeStyle: '#ccc',
                lineWidth: 1,
                fillStyle: '#BBB',
                angleIndicator: '#aaa'
            }
        }
        var circle = renderer.drawCircle(200, 200, 100, styles, ctx);

        world.add(circle)
        world.add(renderer)
        world.render();

        //test API end


    	world.add(renderer);
		world.on('interact:poke', function( data ){
		
		  data.x; // the x coord
		  data.y; // the y coord


            pos.push({'px':data.x, 'py':data.y});
            var whichShape = pos.length;
            for(var i=0; i < whichShape; i++){

                // 测试遍历数组中的元素
                //console.log("x:"+pos[i].px+" "+"y:"+pos[i].py);
        }

            /*点击显示当前鼠标位置
            * world.add(Physics.body('circle',{
            *   x:data.x,
            *   y:data.y,
            *   radius: 3,
            *   treatment: 'static'
            *   }));
            * */

            if(whichShape <= 8) {
                switch (whichShape) {
                    case 1:
                        world.add(Physics.body('circle', {
                            x: data.x,
                            y: data.y,
                            radius: 30,
                            treatment: 'static'
                        }));
                        break;
                    case 2:
                        world.add(Physics.body('rectangle', {
                            x: (pos[0].px + pos[1].px) / 2,
                            y: (pos[0].py + pos[1].py) / 2,
                            treatment: 'static',
                            width: Math.abs(pos[0].px - pos[1].px),
                            height: Math.abs(pos[0].py - pos[1].py)
                        }));
                        break;
                    case 3:
                        world.add(Physics.body('convex-polygon', {
                            x: data.x,
                            y: data.y,
                            vertices: [
                                {x: pos[0].px, y: pos[0].py},
                                {x: pos[1].px, y: pos[1].py},
                                {x: pos[2].px, y: pos[2].py}

                            ]
                        }));
                        break;
                    case 4:
                        world.add(Physics.body('convex-polygon', {
                            x: data.x,
                            y: data.y,
                            vertices: [
                                {x: pos[0].px, y: pos[0].py},
                                {x: pos[1].px, y: pos[1].py},
                                {x: pos[2].px, y: pos[2].py},
                                {x: pos[3].px, y: pos[3].py}

                            ]
                        }));
                        break;
                    case 5:
                        world.add(Physics.body('convex-polygon', {
                            x: data.x,
                            y: data.y,
                            vertices: [
                                {x: pos[0].px, y: pos[0].py},
                                {x: pos[1].px, y: pos[1].py},
                                {x: pos[2].px, y: pos[2].py},
                                {x: pos[3].px, y: pos[3].py},
                                {x: pos[4].px, y: pos[4].py}
                            ]
                        }));
                    break;
                    case 6:
                        world.add(Physics.body('convex-polygon', {
                            x: data.x,
                            y: data.y,
                            vertices: [
                                {x: pos[0].px, y: pos[0].py},
                                {x: pos[1].px, y: pos[1].py},
                                {x: pos[2].px, y: pos[2].py},
                                {x: pos[3].px, y: pos[3].py},
                                {x: pos[4].px, y: pos[4].py},
                                {x: pos[5].px, y: pos[5].py}
                            ]
                        }));
                    break;
                    case 7:
                        world.add(Physics.body('convex-polygon', {
                            x: data.x,
                            y: data.y,
                            vertices: [
                                {x: pos[0].px, y: pos[0].py},
                                {x: pos[1].px, y: pos[1].py},
                                {x: pos[2].px, y: pos[2].py},
                                {x: pos[3].px, y: pos[3].py},
                                {x: pos[4].px, y: pos[4].py},
                                {x: pos[5].px, y: pos[5].py},
                                {x: pos[6].px, y: pos[6].py}
                            ]
                        }));
                    break;
                    case 8:
                        world.add(Physics.body('convex-polygon', {
                            x: data.x,
                            y: data.y,
                            vertices: [
                                {x: pos[0].px, y: pos[0].py},
                                {x: pos[1].px, y: pos[1].py},
                                {x: pos[2].px, y: pos[2].py},
                                {x: pos[3].px, y: pos[3].py},
                                {x: pos[4].px, y: pos[4].py},
                                {x: pos[5].px, y: pos[5].py},
                                {x: pos[6].px, y: pos[6].py},
                                {x: pos[7].px, y: pos[7].py}
                            ]
                        }));
                    break;

                }

            }else{
                alert("多边形边数不能大于8")
            }
		});  // world.on get the value of x and y pos.


    	world.render();	
    	Physics.util.ticker.on(function(time, dt){
    		world.step(time);
    	});
    	Physics.util.ticker.start();
    	
    	world.on('step', function(){
    		world.render();
    	});
    	world.add(Physics.behavior('constant-acceleration'));



    	var bounds = Physics.aabb(200, 200, viewWidth, viewHeight);
    	world.add(Physics.behavior('edge-collision-detection',{
    		aabb: bounds,
    		restitution: 0.08,
    		cof: 0
    	}));
    	world.add(Physics.behavior('body-collision-detection'));
    	world.add(Physics.behavior('body-impulse-response'));
    	world.add( Physics.behavior('sweep-prune') );
    	world.add( Physics.behavior('interactive', { el: renderer.el }) );
    	
    	
    	world.on('interact:grab', function( data ){
          data.x; // the x coord
          data.y;
          data.body;
          // the body that was grabbed
     });		  
     
	     world.on('interact:release', function( data ){
	      data.x; // the x coord
	      data.y; // the y coord
	  });
    });
});

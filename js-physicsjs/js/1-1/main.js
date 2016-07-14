/**
 * Created by xx on 2016/7/13.
 */
require.config({
    paths: {
        'physicsjs': '../physicsjs-full'
    }

});

require(['physicsjs'], function (Physics) {
    Physics(function(world){
        //and I get a world, and I can do something with world.
        var ball = Physics.body('circle', {
            x: 50,
            y: 30,
            vx: 0.2,
            vy: 0.01,
            radius: 20
        });

        world.add(ball);

        var renderer = Physics.renderer('canvas',{
            el:"canvas",
//            width: 500,
//            height: 300,
            styles:{
                'circle':{
                    strokeStyle: 'hsla(60, 37%, 17%, 1)',
                    lineWidth: 1,
                    fillStyle: 'hsla(60, 37%, 57%, 0.8)',
                    angleIndicator: 'hsla(60, 37%, 17%, 0.4)'
                }
            }
        });
        //添加renderer 使其在页面上显示
        world.add(renderer);
        world.on('step', function(){
            world.render();
        });

        var viewporybounds = Physics.aabb(300, 300, 500, 500);
        world.add(Physics.behavior('edge-collision-detection',{
            aabb: viewporybounds
        }),
        Physics.behavior('body-impulse-response')
            ,Physics.behavior('constant-acceleration')

        );

        Physics.util.ticker.on(function (time, dt) {
            world.step(time);
        });
        Physics.util.ticker.start();

        console.log(world)
    })
});
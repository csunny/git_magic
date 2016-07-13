/**
 * Created by xx on 2016/7/13.
 */
//copy Array function
if(typeof jscript.array == 'undefined'){
    jscript.array = function(){

    }
}

jscript.array.copyArray = function(inSrcArray, inDestArray){
    var i;
    for(i=0; i< inSrcArray.length; i++){
        inDestArray.push(inSrcArray[i]);
    }
    return inDestArray;
}   //end copyArray
var src=[1,2,3,4];
var indes = [4];

jscript.array.copyArray(src, indes);


//findInArray function
if(typeof jscript.array.findInArray == 'undefined'){
    jscript.array.findInArray = function(inArray, inValue){
        var i;
        for(i=0; i<inArray.length; i++){
            if(inArray[i] == inValue){
                return i
            }
        }
        return -1;
    }
}

// arrayAverage function

if(typeof jscript.array.arrayAverage == 'undefined'){
    jscript.array.arrayAverage = function(inArray){
        var accumulator = 0;
        var i;
        for(i=0; i <inArray.length; i++){
            accumulator += inArray[i];
        }
        return accumulator / inArray.length;
    }
}              // end arrayAverage

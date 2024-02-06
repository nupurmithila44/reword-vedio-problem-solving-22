// function will receive a parameter which will be number 
// convert the number to cube.
//  return the result.
// return error massage if 
// 


function cubeNumber(number){
    if( typeof number !=="number"){
        return "please provide a number"
    }
    const result = Math.pow(number, 3);
    return result;

}
console.log(cubeNumber("er"));

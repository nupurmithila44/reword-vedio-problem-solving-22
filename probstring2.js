// *
function matchfinder(stri1, stri2){
    if(typeof stri1 !=="string" || typeof stri2 !=="string"){
        return "provide a string"
    }
    const result = stri1.includes(stri2);
    return result;
}
console.log(matchfinder(4, 5));
console.log(matchfinder("johan", "ohan"));


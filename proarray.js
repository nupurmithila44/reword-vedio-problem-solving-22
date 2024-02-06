// make a function name as sortMaker(), which will take an array as input 
// access the elements of the input Array.
// if element is negative return invalid input
// if element are equal, than return "equal"
// if elements are not equal, then return in descending order 

function findaddress (obj){
    const street = obj.street || "_";
    const house = obj.house || "_";
    const socity = obj.socity || "_"
    const str = street+"," + house + "," + socity;
    return str;
}

console.log(findaddress({ street:10,society: "earth perfect"}));
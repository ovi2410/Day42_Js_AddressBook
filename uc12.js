let sortedArray_state= addressArr.sort((a,b)=>a.state.localeCompare(b.state));
console.log(sortedArray_state);
let sortedArray_city = addressArr.sort((a,b)=>a.city.localeCompare(b.city));
console.log(sortedArray_city);
let sortedArray_zip = addressArr.sort((a,b)=>(a.zip>b.zip)?1:(b.zip>a.zip)?-1:0);
console.log(sortedArray_zip);
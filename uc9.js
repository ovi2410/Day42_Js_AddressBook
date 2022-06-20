function ReturnCityMap(a)
{
    return a.city+ "->"+a.firstName;
}
let addressCityMap= addressArr.map(ReturnCityMap);
console.log("Viewing the people by their city")
console.log(addressCityMap);
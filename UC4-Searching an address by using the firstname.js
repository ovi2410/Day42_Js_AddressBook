function SearchName(addressbook)
{
    if(addressbook.firstName=="Amit") return addressbook;
}
let searchResult =addressArr.find(SearchName);
console.log("Result after searching "+searchResult);
//UC5-Delete an element using the firstname
function DeleteAddress(addressbook){
    let resultAddress = SearchName(addressbook);
    var index= addressArr.indexOf(resultAddress);
    return index;
}
let deleteIndex=addressArr.find(DeleteAddress);
console.log(addressArr.splice(deleteIndex,1)+" is deleted")
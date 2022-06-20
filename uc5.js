function DeleteAddress(addressbook){
    let resultAddress = SearchName(addressbook);
    var index= addressArr.indexOf(resultAddress);
    return index;
}
let deleteIndex=addressArr.find(DeleteAddress);
console.log(addressArr.splice(deleteIndex,1)+" is deleted")
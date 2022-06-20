let n=0;
function GetTotal(a){
   if(a!=null){
       ++n;
   }
   return n;
}
console.log("Total count of addresses "+addressArr.reduce(GetTotal,0));
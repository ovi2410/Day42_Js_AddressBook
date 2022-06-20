let addressArr = new Array();
try
{
    let address1 = new AddressBook("Ravi","Singh","UP65","VNS","UP",838372,9393932090,"ravi@gmail.com");
    let address2= new AddressBook("Amit","Patel","GJ66","Surat","Gujarat",612302,9982705303,"amit@gmail.com")
    let address3= new AddressBook("Shiva","Patel","GJ67","Surat","Gujarat",612302,9982705303,"shiv@gmail.com")

    addressArr.push(address1);
    addressArr.push(address2);
    addressArr.push(address3);
    console.log(addressArr);
}
catch(e)
{
    console.error(e);
}
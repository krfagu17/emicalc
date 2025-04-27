let userDetails={
    name:"John",
    age:25,
    printDetails:function(){
        console.log(this.name)
    }
}

const customerDetails={
    name:"Santosh Kumar",
    age:25,
}
userDetails.printDetails.call(customerDetails) // Santosh Kumar
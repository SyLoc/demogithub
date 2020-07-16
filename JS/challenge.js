
calBMI = function(){
    // console.log(this);
    this.valuebmi =  this.mass/(this.height*this.height);
}

var People1 = {
    name: "Losn",
    mass: 70,
    height: 1.78,
    BMI:calBMI
    // BMI:function(){
    //     console.log(this);
    //     return this.mass/(this.height*this.height);
    // }
}

var People2 = {
    name: "Jack",
    mass: 65,
    height: 1.75,
    BMI:calBMI
    // BMI:function(){
    //     console.log(this);
    //     return this.mass/(this.height*this.height);
    // }
}
People1.BMI();
People2.BMI();
console.log("BMI cua "+ People1.name + " bang: ", People1.valuebmi);
console.log("BMI cua "+ People2.name + " bang: ", People2.valuebmi);

// console.log("chi so BMI cua " + People1.name + " la: ", People1.BMI());
// console.log("chi so BMI cua " + People2.name  + " la: ", People2.BMI());

if(People1.valuebmi > People2.valuebmi){
    console.log("BMI cua "+ People1.name + " lon hon BMI cua " + People2.name);
}else if(People1.valuebmi < People2.valuebmi){
    console.log("BMI cua "+ People1.name + " nho hon BMI cua " + People2.name);
}else console.log("BMI cua "+ People1.name +" va " + People2.name + " bang nhau");
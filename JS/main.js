
{
    /*
var yearMe = 1995;
var tinhTuoi = (yourYear) => {
    // var y = new Date();
    // return y.getFullYear() - yourYear;
}

var thayDoiNamSinh = () =>{
    var yearMe = 2000;
}

thayDoiNamSinh();

var age = tinhTuoi(yearMe);
console.log("tuoi cua ban la: ", age);
*/
}


console.log("------------Array------------");
{
/*
var ArrayFruit = [
    "apple",
    "mangose",
    "quava",
    "Orange",
    "watermolon",
    "banana",
    "mangosteen"
]

// console.log("ArrayFruit = ", ArrayFruit );
// console.log("ArrayFruit length = ", ArrayFruit.length );
// console.log("ArrayFruit = ", ArrayFruit[4] );
// ArrayFruit.push("grape");
// console.log("ArrayFruit= ", ArrayFruit );
//push, unshift, pop, shift, indexOf, lastindexOf;

 console.log("addMethods: ", ArrayFruit );

var ArrayDemo = [
    123,
    "console",
    "****",
    true,
    ["1213", 121, "afsa"],
    "console"
]

console.log("ArrayDemo = ", ArrayDemo[7]);
// console.log("log = ", ArrayDemo[3][0]);
// console.log("ArrayDemo[3] = ", ArrayDemo[3]);
// console.log("indexOf = ", ArrayDemo.indexOf("console"));
// console.log("lastIndexOf = ", ArrayDemo.lastIndexOf("console"));

// if(ArrayDemo.indexOf(123) !== -1){
//     console.log("mi chua co ny");
// }
// else{
//     console.log("mi co roi");
// }
*/

}

//Bai tap

var ArrayBills = [124, 48, 268];
console.log("Tien Bills ", ArrayBills);

function TinhTip(x) {
    var percent;
    if(x < 50){
        percent = 0.2;
    }else if(x < 200){
        percent = 0.15;
    }else if(x > 200){
        percent = 0.1;
    }
    return percent * x;
}

// var Tip = [
//     TinhTip(ArrayBills[0]), 
//     TinhTip(ArrayBills[1]),
//     TinhTip(ArrayBills[2])
// ]

// var Tip2 = [];
// Tip2.push(TinhTip(ArrayBills[0]));
// Tip2.push(TinhTip(ArrayBills[1]));
// Tip2.push(TinhTip(ArrayBills[2]));

var Tip3 = [];
Tip3[Tip3.length]= TinhTip(ArrayBills[0]);
Tip3[Tip3.length] = TinhTip(ArrayBills[1]);
Tip3[Tip3.length] = TinhTip(ArrayBills[2]);

console.log("Tien Tip3: ", Tip3);

var finalBill = [
    ArrayBills[0] + TinhTip(ArrayBills[0]),
    ArrayBills[1] + TinhTip(ArrayBills[1]),
    ArrayBills[2] + TinhTip(ArrayBills[2])
]
console.log("Tong tien phai tra: ", finalBill);
var sum = finalBill[0]+finalBill[1]+finalBill[2];
console.log("tong tien moc tui ra: ", sum);
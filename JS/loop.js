// var array = ["John", "justin", 28, true];
// for(var i = 0; i < array.length; i++){
//     console.log("phan tu thu "+ (i + 1) + " la: " + array[i]);
// }


var arrayStudent = [
   {
    name: "Nguyen Van A",
    maths: 8,
    physics: 7.5,
   },
   {
    name: "Nguyen Van B",
    maths: 6,
    physics: 8,
   },
   {
    name: "Nguyen Van C",
    maths: 8,
    physics: 8.5,
   },
   {
    name: "Nguyen Van D",
    maths: 7,
    physics: 9.5,
   },
]



function calAverage() {
    this.average = (this.maths + this.physics)/2;
    return this.average;
}

for (var i = 0; i< arrayStudent.length; i++) {
    arrayStudent[i].calAverage = calAverage // gán vào object một Địa chỉ calAverage của hàm calAverage()
    arrayStudent[i].calAverage();
    console.log(arrayStudent[i]);
}

// calAverage();
// console.log(arrayStudent);
// console.log("---------------------------------------");
// arrayStudent[0].colia = "heoheo";
// console.log(arrayStudent[0]);
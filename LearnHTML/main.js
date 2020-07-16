
var demo = document.getElementById("demoId2");
console.log(demo);


var denday = document.getElementsByClassName("haydenday");
console.log(denday);
console.log("-------------- conver HTMLColection to array-----------------");
var total = Array.from(denday);
total.push("<div>hello</div>");
console.log(total);
console.log("total = ",total[2])
// var a = [1,2,3,4];
// console.log(a);
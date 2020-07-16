console.log("------------------------random----------------------");

/*
    Làm tròn
    Làm tròn xuống Math.floor()
    Làm tròn lên Math.ceil()
    Làm tròn chuẩn Math.round() // >= 0.4 xuống <= 0.5 lên
*/

// function RandomMin_Max(min, max) {
//     var a = (Math.random()*(max-min)+min).toFixed(0);
//     return console.log(a);
// }

// RandomMin_Max(50,250);


// function randomArray(min, max) {
//     var arr = [];
//     a = (Math.random()*(max-min)+min).toFixed(0); => toFixed() trả về string
//     arr.push(a);
//     return arr;
// }

// var bills = randomArray(3,9);
// console.log(bills);

function randomArray(n, max) {
    var arr = [];
    for(var i = 1; i <= n; i++){
        var number = (Math.random()*max);
            number = Math.round(number);
        arr.push(number);
    }
    return arr;
}

// var bills = randomArray(3, 100);
// console.log("bills = ", bills);

var John = {
    fullName : "John Cake",
    bills : randomArray(10,300),
    Caltips:function(){
        // nếu n = 10 thì in ra 10 giá trị tiền tips
        this.tips = []; // khởi tạo giá trị tips mới trong object
        this.totalValue = []; // khởi tạo giá trị tips mới trong object
        this.All = 0;
        var length = this.bills.length;
        for(var i = 0 ; i < length ; i++){
            var percent = 0;
            var bill = this.bills[i];
            if(bill < 50){
                percent = 0.2;
            }else if(bill < 200){
                percent = 0.15;
            }else {
                percent = 0.1;
            }
            this.tips[i] = bill*percent;
            this.totalValue[i] = this.tips[i] + bill;
            this.All += this.totalValue[i];
        }
        
    }
}

John.Caltips();
console.log("John = ", John);

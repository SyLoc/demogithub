console.log("-----------------------challenge Me----------------------");

function randomArray(n, max) {
    var arr = [];
    for(var i = 0; i < n; i++){
        var num = Math.random()*max; // ra so le
        var num = Math.round(num);
        arr.push(num);
    }
    return arr;
}

var John = {
    fullName : "John Smick",
    bills: randomArray(5, 300),
    CalTips: function() {
        // neu co n bills thi tra n tien tips
        this.moneyTips = [];
        this.totalMoneys = [];
        this.S = 0;
        var lenght = this.bills.length;
        console.log("lenght = ", lenght);
        for(var i = 0; i < lenght; i++){
            var bill = this.bills[i];
            var percent = 0;
            if(bill < 50 ){
                percent = 0.2;
            }else if(bill < 200){
                percent = 0.15;
            }else {
                bill = 0.1;
            }
            var tips = percent * bill;
            this.moneyTips[i] = tips;
            this.totalMoneys[i] = tips + this.bills[i];
            this.S += this.totalMoneys[i];
        }

    }
}

John.CalTips();
console.log("John= ", John);
console.log("s = ", 57.6 + 222 +  175.95 +  48+ 70.15);
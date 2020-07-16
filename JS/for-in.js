



var calAverage = function(){
    var total = 0;
    var totalScores = 0;
    for(key in this.scores){
        totalScores += this.scores[key];
        total += 1;
        // console.log(key + " : ", this.scores[key]);
        
    }
    // console.log("total = ", total);
    // console.log("totalScores = ", totalScores);
    return totalScores/total;
} 

var studentA = {
    fullName: "Nguyen Van A",
    year: 1998,
    scores: {
        maths: 7.5,
        physics: 9,
        chemistry: 6.5
    },
    calAverage: calAverage
}


var studentB = {
    fullName: "Nguyen Van B",
    year: 1998,
    scores:{
        maths: 7.5,
        physics: 9,
        chemistry: 6.5, 
        english: 8
    },
    calAverage: calAverage
}

console.log("diem TB cua " + studentA.fullName + " bang: ",studentA.calAverage());
console.log("diem TB cua " + studentB.fullName + " bang: ",studentB.calAverage());

console.log("==========================challenge2=================================");

var money = [124, 48, 268];

function percent(x) {
    if(x < 50){
        return x*0.2;
    }else if(x < 200){
        return x*0.15;
    }else {
        return x*0.1;
    }
}



var tip = [ percent(money[0]), percent(money[1]), percent(money[2])];
console.log(tip);



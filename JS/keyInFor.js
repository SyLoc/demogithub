
console.log("----------------key in for---------------");


var calAverage = function(){
    var total = 0;
    var totalScores = 0;
    for(key in this.scores){
        // console.log("key = ", key);
        // console.log("key2 = ", this.scores[key] );
        total ++;
        totalScores += this.scores[key];
    }
    return totalScores/total;
}

var studentA = {
    fullName: "Nguyen Van A",
    year: 1998,
    scores: {
        maths: 7.5,
        physics: 9,
        chemistry: 6.5,
        english: 10
    },
    calAverage: calAverage
}

console.log("Diem trung binh cua thang A la : ",studentA.calAverage());
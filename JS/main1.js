 
var Student = {
    fullname: "Nguyen Van A",
    year: 1998,
    score: {
        maths: 9,
        physics: 8.5,
        chemistry: 3,
    },
    calAverage: function(){
        // console.log("run calAverage");
        console.log(this);
        var maths = this.score.maths;
        var physics = this.score.physics;
        var chemistry = this.score.chemistry;

        return (maths + physics + chemistry) / 3;
    }
}
var average = Student.calAverage();
console.log("average: ", average);

console.log("---------------------------------------------------")

var Student2 = new Object();

Student2.fullname = "Nguyen Van B";
Student2.year = 1999;


Student2.score = {
    maths : 8,
    physics : 9.2,
    chemistry : 6,
};
Student2.calAverage = function(){
    // console.log(this);
    var maths = this.score.maths;
    var physics = this.score.physics;
    var chemistry = this.score.chemistry;

    return (maths + physics + chemistry) / 3;
}
console.log(Student2.fullname);
var xxx = Student2.calAverage();
console.log("diem trung binh: ", xxx);


console.log("--------------------------------------------");
var ObjDemo = {
    "full-name": "Ten may la gi",
}
console.log(ObjDemo);
console.log(ObjDemo.full-name);
console.log(ObjDemo["full-name"]);

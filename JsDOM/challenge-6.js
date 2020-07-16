
var elh3 = document.getElementsByTagName("h3")[0];

var he = elh3.getAttribute("class");



var elh4 = document.getElementsByTagName("h4")[0];





function AddClass(el, className) {
    var oldClass = el.getAttribute("class");

    if(oldClass){
        var Newclass = oldClass + " " + className;
        if(oldClass.indexOf(className) === -1){
            el.setAttribute("class", Newclass );
        }
        
    }else{
        el.setAttribute("class", className);
    }
}

AddClass(elh3, "he_nho");
AddClass(elh4, "image");
AddClass(elh3, "number");
AddClass(elh3, "childers");

function RemoveClass(el, nameClass){
    var oldClass = el.getAttribute("class");// lấy class cũ
    if(oldClass){    // nếu el đả có class                              
        var arrOldClass =  oldClass.split(" ");  // chuyển class dạng string về array 
        var indexDelete = arrOldClass.indexOf(nameClass); // tìm vị trí tên class
        if( indexDelete !== -1){//kiểm tra tên class cần xóa có trong ds ko
            arrOldClass.splice(indexDelete,1); // thực hiện xóa 
            el.setAttribute("class",arrOldClass.join(" "));// chuyển từ array về lại tring và set attribute cho nó .
        }
    }
}

RemoveClass(elh3, "childers");
RemoveClass(elh3, "he_nho");
console.log(elh3.getAttribute("class"));



/*
đầu tiên: ktra xem có class để xóa không ?
nếu có -> xóa 
    đang dạng ở chuổi -> array : dùng thằng split(" ")
    dùng thằng indexOf() để kiểm tra có tên class không , nếu có thì -> thì trả về != -1


*/

// var str = "hello welcome demo contact ";
// console.log(str);


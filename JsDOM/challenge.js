
var h2demo = document.getElementsByTagName("h2")[0];
var h3demo = document.getElementsByTagName("h3")[0];


function AddClass(el, ClassName) {
    var oldClass = el.getAttribute("class");
    if(oldClass){
        if(oldClass.indexOf(ClassName) === -1){
            var newClass = oldClass + " " + ClassName;
            el.setAttribute("class", newClass);
        }
    }
    else{
        el.setAttribute("class", ClassName);
    }
}

AddClass(h2demo, "image");
AddClass(h2demo, "demo-123");
AddClass(h3demo, "chuc mung chuc mung");
AddClass(h2demo, "number");



function removeClass(el, ClassName) {
    var oldClass = el.getAttribute("class");
    if(oldClass){
        var arrOldClass = oldClass.split(" ");
        var indexDelete = arrOldClass.indexOf(ClassName)
        if(indexDelete !== -1){ // class cần xóa có tồn tại trong mảng  
            arrOldClass.splice(indexDelete, 1); // thì xóa
            el.setAttribute("class",arrOldClass.join(" "));
            // arrOldClass.join(" "); -> chuyen tu mag sang chuoi
        }
    }
}
console.log(h2demo.getAttribute("class"));
removeClass(h2demo, "demo-123");
removeClass(h2demo, "image");
removeClass(h2demo, "hello");
console.log(h2demo.getAttribute("class"));

/* mình đả học 5 hàm hổ trợ array: thêm vào đầu/cuối, xóa đầu/cuối , indexOf()..
    thêm vào giữa, xóa phần tử ở cuối mảng => cần xác định roe method đó nó có làm thay đổi array góc của mình hay không.
    method arr.slice(start, end) => tạo 1 mảng mới tính từ vị trí index = start => index < end (không làm thay đổi mảng góc)
    Method arr.splice(start, deleteCount) -> vừa xóa vừa thêm
        - xóa bao nhiêu phần tử tính từ vị trí start 
        arr.splice(0, 3) -> xóa 3 phần tử tính từ vị trí index = 0 trở đi
        -> trả về 1 mảng bao gồm những phần tử đả xóa => làm thay đổi mảng góc
    method arr.splice(start, deleteCount, ...them mới)
        -dấu ... thể hiện mình muốn thêm bao nhiêu ký tự củng được
        var arr = [ 1 , 3, 4, 5, 6, 7]
        arr.splice(0,1,8,9) => [1]
        console.log(arr) => [8, 9, 3, 4, 5, 6, 7]
*/

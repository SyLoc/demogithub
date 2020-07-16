// các mothod cua element 

var demoId = document.getElementById("demo");

demoId.classList.add("class2");
demoId.classList.add("class3");
demoId.classList.add("class4");

demoId.classList.remove("class4");

var count = demoId.classList.contains("class0"); // kiem tra xem co ten class khong
// console.log(count);


// function test(...params) {
//     console.log(params);
// }
// test("params1 params11", "params2" ,"paramsN-123");

/* ====================STYLE============================= */

// demoId.style.color = "blue";

var dropdown = document.getElementsByClassName("dropdown")[0];


function Click(event) {
    if(dropdown.classList.contains("show") == false)
    {
        dropdown.setAttribute("class", dropdown.getAttribute("class") + " " + event);
    }
    else{
        dropdown.classList.remove("show");
    }
}




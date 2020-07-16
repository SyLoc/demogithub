// var dropdown = document.getElementsByClassName("dropdown")[0];

// function OpenDropdown(event){
//     var oldClass = dropdown.getAttribute("class");
//     console.log(oldClass);
//     var exam = dropdown.classList.contains("open");
//     if(exam){
//         dropdown.classList.remove("open");
//     }
//     else{
//         var newClass = oldClass + " " + event;
//         dropdown.setAttribute("class", newClass);
//     }
    
// }
// OpenDropdown();

var dropdown = Array.from(document.querySelectorAll(".dropdown"))
// console.log(dropdown)

dropdown.forEach(
    function(element,index)// con 1 arr nửa :nó là array góc thôi 
    {
        var btn = element.querySelector(".btn")
        // console.log(btn)
        btn.addEventListener("click", function(event){
            if(element.classList.value.indexOf("open") === -1){
                element.classList.add("open");
            }else{
                element.classList.remove("open");
            }
            
        });
        
    }
)

var parent = document.querySelector(".parent");
console.log(parent.parentElement.parentElement.querySelector(".child"));
console.log(parent.parentElement.parentElement.querySelector(".child").nextSibling);
console.log(parent.parentElement.parentElement.querySelector(".child").nextElementSibling);
console.log(parent.parentElement.parentElement.querySelector(".child").nextElementSibling.nextElementSibling.previousElementSibling);
console.log(parent.parentElement.parentElement.querySelector(".child").nextElementSibling.nextElementSibling.previousElementSibling.parentElement);
var h1 = parent.querySelector("h1")
console.log(h1);
console.log("text h1= ", h1.innerText) // lay gia tri text cua h1
h1.innerText = "javascript dom edit"// edit text cua h1

// chen the p trong the h1
h1.innerHTML = "<p>javascript dom edit</p>";
// h1.innerHTML = "javascript dom edit";
//truy xuất phần tử của selector cua css
/* yêu cầu : phải sử dụng selector cua css
    #demo 
    Classdemo {

    }
    attributes Selector
    có thể sử dụng cách này để thay thế cho việc truy xuất trong file main.js

    - getElementById
    - getElementsByClassName
    - getElementsByTagName

    - querySelector("#demo") -> trả về cho mình một phần tử đầu tiên tìm thấy mà math với selector

    - querySelectorAll()-> trả về cho mình nhiều phần tử mà math với selector truyền vào ,
     nó không phải là array , thì ép kiểu Array.from();
*/

var demo = document.querySelector("#demo");
console.log(demo);



var demoAll = document.querySelectorAll(".demo");
console.log(demoAll);

var ArrdemoAll = Array.from(demoAll);
ArrdemoAll.push(123432);
console.log(ArrdemoAll);

var btnModal = document.querySelector("[body data-toggle='modal']");
console.log(btnModal);
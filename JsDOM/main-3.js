var img = "https://media4.picsearch.com/is?6r7A6OchHYbIcXk_6kdEYMxO-MSHV0WisC8_H7m0asY&height=255";

var image = document.querySelector(".image");
//SET
image.setAttribute("src", img);
image.setAttribute("alt", "this is beautiful image");
image.setAttribute("width", 100);
image.setAttribute("title", "this is title of image");


//GET
// var elDataTitle = Array.from(document.querySelectorAll("[data-title]"));

// var temp = "";
// for(var i = 0; i < elDataTitle.length; i++){
//     // console.log(elDataTitle[i]);
//     temp += elDataTitle[i].getAttribute("data-title") + " ";
// }


// console.log("temp = ", temp);//đang bị dư một khoảng trống cuối cùng-> dung ham trim() de gọt bớt 2 đầu;

// document.getElementById("demo").setAttribute("data-title", temp.trim());
// console.log(elDataTitle);












var elDataTitle = Array.from(document.querySelectorAll("[data-title]"));



var temp = " ";

for(var i = 0; i < elDataTitle.length; i++){
    // console.log(elDataTitle[i]);
    temp += elDataTitle[i].getAttribute("data-title") + " ";
}
console.log(temp);


document.getElementById("demo").setAttribute("data-title", temp.trim());


















//truy xuất thuộc tính cách 2
console.log("cach 2= ", image.src);
console.log("tương đương cách 2 = ", image.getAttribute("src"));
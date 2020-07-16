
var colorSkinId = document.getElementById("color-skin");
var containerDiv = document.querySelector(".container");
var bodySkin = document.querySelector(".body")
var bodyimg = document.getElementsByTagName("body");
var ColoredLines = document.querySelector(".xinChao");
var BtnMe = document.getElementsByClassName("btn-me")[0];

function ChangeStyleColor(href) {
    // console.log(href);
    colorSkinId.setAttribute("href", href);
}

function ChangeStyleContainer(type) {
    var newStyle = "container " + type;
    containerDiv.setAttribute("class", newStyle);
}
function ChangeFont(){
    var newFont = "font-family: auto;";
    BtnMe.setAttribute("style",newFont);
}



function ChangeStyleImageBackground(UrlImage) { 
    var newImage = "background-image: url("+ UrlImage +");";
    //style="background-image: url(image/hinh1.jpg);"
    bodySkin.setAttribute("style" , newImage);
    
}


function RandomColor(){
    var random = Math.random()*9;
    random = Math.round(random);
    switch(random)
    {
        case 0: {
            ColoredLines.setAttribute("class", "xinChao color0");
            break;
        }
        case 1: {
            ColoredLines.setAttribute("class", "xinChao color1");
            break;
        }
        case 2: {
            ColoredLines.setAttribute("class", "xinChao color2");
            break;
        }
        case 3: {
            ColoredLines.setAttribute("class", "xinChao color3");
            break;
        }
        case 4: {
            ColoredLines.setAttribute("class", "xinChao color4");
            break;
        }
        case 5: {
            ColoredLines.setAttribute("class", "xinChao color5");
            break;
        }
        case 6: {
            ColoredLines.setAttribute("class", "xinChao color6");
            break;
        }
        case 7: {
            ColoredLines.setAttribute("class", "xinChao color7");
            break;
        }
        case 8: {
            ColoredLines.setAttribute("class", "xinChao color8");
            break;
        }
        default : {
            ColoredLines.setAttribute("class", "xinChao");
            break;
        }
        
    }
}




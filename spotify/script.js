let heart = myImg.src = "img/Like.svg";

function showHide()
{
    let right_bar = document.getElementById("right");
    let container = document.getElementById("grid");

    if(right_bar.style.display == "block")
    {
        right_bar.style.display = "none";
        container.style.gridTemplateColumns = ".02fr 1fr";
    }
    else{
        right_bar.style.display = "block";
        container.style.gridTemplateColumns = ".02fr 1fr .356fr";
    }
}
const myImg = document.getElementById("heart");
const myButton = document.getElementById("btn");

myButton.addEventListener("click", function() {
    if(heart == (myImg.src = "img/Like.svg"))
    {
        myImg.src = "img/FiiledLike.svg";
    }
    else
    {
        myImg.src = "img/Like.svg";
    }

})



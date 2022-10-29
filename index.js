var dice = Math.floor(6 * Math.random()) + 1;
var die = Math.floor(6 * Math.random()) + 1;
var rimg1 = "dice" + dice + ".png";
var rimg2 = "dice" + die + ".png";
document.querySelector(".img1").setAttribute("src",rimg1);
document.querySelector(".img2").setAttribute("src",rimg2);


if(dice > die)
{
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(dice < die)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else
{
  document.querySelector("h1").innerHTML = "🤭 Draw";
}

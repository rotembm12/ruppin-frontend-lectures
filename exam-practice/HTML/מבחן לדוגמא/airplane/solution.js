document.getElementById("start-fly").addEventListener("click", function () {
  const airplaneImg = document.querySelector('img[src="./airplane.png"]');
  airplaneImg.style.bottom = "90%";
  airplaneImg.style.left = "90%";
});
document.getElementById("reset").addEventListener("click", function () {
  const airplaneImg = document.querySelector('img[src="./airplane.png"]');
  airplaneImg.style.bottom = "20px";
  airplaneImg.style.left = "0";
});

const btn = document.getElementById("btn");
const select = document.querySelector("select");

btn.addEventListener("click", () => {
  if (btn.innerText === "Hide") {
    btn.innerText = "Show";
    btn.style.backgroundColor = "initial";
    select.value = "-1";
    return;
  }
  if (select.value === "-1") {
    alert("Please choose a color");
    return;
  }
  btn.style.backgroundColor = select.value;
  btn.innerText = "Hide";
});

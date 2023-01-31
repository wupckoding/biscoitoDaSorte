let btnOne = document.querySelector(".btn1");

function openCookie(event) {
  event.preventDefault();
  document.querySelector(".part1").classList.toggle("hide");
}

btnOne.addEventListener("click", openCookie());
console.log(btnOne);

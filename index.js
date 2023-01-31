const url = "https://api.adviceslip.com/advice";
const closedCookie = document.querySelector("#closedCookie");
const open = document.querySelector(".part1");
const messageCookie = document.querySelector(".message");
const classAdd = document.querySelector(".part1");
const classRemove = document.querySelector(".part2");
const reset = document.querySelector(".btn3");
/*eventos*/
closedCookie.addEventListener("click", openCookie);

/*funçoes*/
function openCookie() {
  classAdd.classList.add("hide");
  classRemove.classList.remove("hide");
}

async function getApiData() {
  const request = await fetch(url);
  const response = await request.json();
  messageCookie.innerHTML = response.slip.advice;
}
getApiData();

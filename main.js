let submit = document.getElementById("submit");
let notes = document.querySelector(".notes");

submit.addEventListener("click", () => {
  let text = document.querySelector("#text");
  let color = document.querySelector("input");
  const newDiv = document.createElement("div");

  if (color.value !== "#000000") {
    newDiv.style.backgroundColor = color.value;
  } else {
    newDiv.style.backgroundColor = "white";
  }

  newDiv.innerHTML = `${text.value}<br> <button class="delete">DELETE</button>`;
  newDiv.classList.add("newDiv");
  if (text.value !== "") notes.appendChild(newDiv);
});

notes.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});

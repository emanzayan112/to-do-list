const box = document.getElementById("box");
const lists = document.getElementById("lists");

function addTask() {
  if (box.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = box.value;
    lists.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  box.value = "";
  saveData();
}

lists.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", lists.innerHTML);
}
function showTask() {
  lists.innerHTML = localStorage.getItem("data");
}
showTask();

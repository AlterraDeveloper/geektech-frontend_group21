function generateColor(event) {
  event.preventDefault && event.preventDefault();
  if (event.code !== "Space") return;
  var columnNodes = document.querySelectorAll(".col");
  for (var columnNode of columnNodes) {
    var colorHash = chroma.random();
    var isLock = Boolean(columnNode.querySelector(".fa-lock"));
    if (!isLock) {
      columnNode.style.backgroundColor = colorHash;
      var colorTextNode = columnNode.querySelector("h2");
      colorTextNode.innerText = colorHash;
      colorTextNode.style.color =
        colorHash.luminance() > 0.5 ? "black" : "white";
    }
  }
}

function generateColorHash() {
  var red = generateRandomNumber(0, 255).toString(16).padStart(2, "0");
  var green = generateRandomNumber(0, 255).toString(16).padStart(2, "0");
  var blue = generateRandomNumber(0, 255).toString(16).padStart(2, "0");
  return "#".concat(red, green, blue).toUpperCase();
}

function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clickHandler(event) {
  var eventTarget = event.target;
  if (!eventTarget.dataset.type) return;

  switch (eventTarget.dataset.type) {
    case "lock":
      var classes = Array.from(eventTarget.classList);
      if (classes.length > 0) {
      } else {
        eventTarget = eventTarget.children[0];
      }
      eventTarget.classList.toggle("fa-lock");
      eventTarget.classList.toggle("fa-lock-open");
      break;
    case "copy":
      navigator.clipboard.writeText(eventTarget.innerText);
      var popupNode = document.querySelector(".popup");
      console.log(event);

      Object.assign(popupNode.style, {
        left: (event.clientX + window.scrollX - 125).toString() + "px",
        top: (event.clientY + window.scrollY + 10).toString() + "px",
        display: `flex`,
      });

      setTimeout(function () {
        popupNode.style.display = "none";
      }, 2000);
    default:
      break;
  }
}

document.body.addEventListener("keydown", generateColor);
document.body.addEventListener("click", clickHandler);
generateColor({ code: "Space" });

//#e0bf0c
//#e41092

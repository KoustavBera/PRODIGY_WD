let currPlayer = "X";
let array = Array(9).fill(null);
let gameOver = false;
function handleClick(el) {
  if (gameOver) return;
  const id = Number(el.id);
  array[id] = currPlayer;
  if (el.innerText == "") {
    el.innerText = array[id];
    if (!checkWinner()) {
      currPlayer = currPlayer == "X" ? "O" : "X";
      console.log("box clicked(id):", id);
      console.log("Array:", array);
    }
  }
}

function handleDblClick(el) {
  const id = el.id;
  array[id] = null;
  el.innerText = "";
  console.log("After removal Array:", array);
}

function checkWinner() {
  if (
    (array[0] != null && array[0] == array[1] && array[1] == array[2]) ||
    (array[3] != null && array[3] == array[4] && array[4] == array[5]) ||
    (array[6] != null && array[6] == array[7] && array[7] == array[8]) ||
    (array[0] != null && array[0] == array[3] && array[3] == array[6]) ||
    (array[1] != null && array[1] == array[4] && array[4] == array[7]) ||
    (array[2] != null && array[2] == array[5] && array[5] == array[8]) ||
    (array[0] != null && array[0] == array[4] && array[4] == array[8]) ||
    (array[2] != null && array[2] == array[4] && array[4] == array[6])
  ) {
    console.clear();
    gameOver = true;
    console.log(`${currPlayer} is winner`);
    let show = `<p class="custom-style">${currPlayer} wins!!</p>`;
    document.querySelector(".winner").innerHTML = show;

    return true;
  }
  if (!array.some((e) => e === null)) {
    document.querySelector(".winner").innerHTML =
      '<p class="custom-style">Draw!!</p>';
    return true;
  }
}

function Restart() {
  gameOver = false;
  array = Array(9).fill(null);
  //   console.log(array);
  for (box of document.querySelectorAll(".col")) {
    box.innerText = "";
  }
  let letsPlay = "Let's Play";
  document.querySelector(
    ".winner"
  ).innerHTML = `<p class="custom-style">${letsPlay}</p>`;
  console.log(array);
}

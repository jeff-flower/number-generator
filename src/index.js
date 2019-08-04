import "./styles.css";

function onClick() {
  document.getElementById("numberDisplay").innerHTML = Math.random();
}

window.onClick = onClick;

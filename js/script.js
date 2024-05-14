function friday() {
  const date = new Date();
  const dayToday = date.getDay();
  var result = document.getElementById("result");

  if (dayToday === 5) {
    result.style.color = "green";
    result.innerHTML = "Ja!";
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  } else {
    result.style.color = "red";
    result.innerHTML = "Nej!";
  }
}

friday();

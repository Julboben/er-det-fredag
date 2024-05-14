// When called as a constructor, returns a new Date object.
const date = new Date()
console.log(date);
const dayToday = date.getDay()
console.log(dayToday);

var result = document.getElementById("result");

function friday() {
    if (dayToday === 5) {
        result.style.color = "green";
        result.innerHTML = "Ja!";
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
    } else {
        result.style.color = "red";
        result.innerHTML = "Nej!";
    }
}

friday()
const countEl = document.getElementById("count");
console.log(countEl);
updateVisitCount();

function updateVisitCount() {
  fetch("https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      console.log(countEl);
      countEl.innerHTML = res.value;
    });
}

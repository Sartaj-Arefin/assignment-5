// heart count
document.addEventListener("DOMContentLoaded", function () {
  const heartCountEl = document.getElementById("heartCount");
  let heartCount = parseInt(heartCountEl.textContent);
  const hearts = document.querySelectorAll(".btn-heart");

  hearts.forEach(function (heart) {
    heart.addEventListener("click", function () {
      heartCount++;
      heartCountEl.textContent = heartCount;
    });
  });
});

// call count
document.addEventListener("DOMContentLoaded", function () {
  const coinCountEl = document.getElementById("coinCount");
  let coinCount = parseInt(coinCountEl.textContent);
  const callBtns = document.querySelectorAll(".btn-call");

  callBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (coinCount >= 20) {
        const card = btn.closest(".card");
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-num").textContent;
        alert("Service Name: " + serviceName + "\nNumber: " + serviceNumber);

        coinCount -= 20;
        coinCountEl.textContent = coinCount;
      } else {
        alert("Insufficient Coin");
      }
    });
  });
});


// copy count
document.addEventListener("DOMContentLoaded", function () {
  const copyCountEl = document.getElementById("copyCount");
  let copyCount = parseInt(copyCountEl.textContent) || 0;

  const copyBtns = document.querySelectorAll(".btn-copy");

  copyBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      copyCount++;
      copyCountEl.textContent = copyCount;
    });
  });
});
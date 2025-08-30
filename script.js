// heart count
document.addEventListener("DOMContentLoaded", function () { 
  const heartCountEl = document.getElementById("heartCount"); 
  let heartCount = parseInt(heartCountEl.textContent); 
  const hearts = document.querySelectorAll(".btn-heart"); 

  hearts.forEach(function (heart) { 
    heart.addEventListener("click", function handleClick() { 
      heartCount++; 
      heartCountEl.textContent = heartCount; 

      heart.classList.add("text-red-500");
      heart.classList.remove("text-gray-400");
    }); 
  }); 
});



// call count + call history
document.addEventListener("DOMContentLoaded", function () {
  const coinCountEl = document.getElementById("coinCount");
  let coinCount = parseInt(coinCountEl.textContent);
  const callBtns = document.querySelectorAll(".btn-call");

  const historyContainer = document.getElementById("callHistoryContainer");
  const clearBtn = document.getElementById("clearHistory");

  callBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (coinCount >= 20) {
        const card = btn.closest(".card");
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-num").textContent;

       
        const now = new Date();
        const localTime = now.toLocaleTimeString();

        alert("Service Name: " + serviceName + "\nNumber: " + serviceNumber);

      
        const box = document.createElement("div");
        box.className = "flex justify-between items-start bg-gray-200 p-3 rounded-lg";

        box.innerHTML = `
          <div>
            <h2 class="font-bold">${serviceName}</h2>
            <p class="text-gray-600">${serviceNumber}</p>
          </div>
          <div class="mt-4 text-right">
            <p class="text-sm text-black">${localTime}</p>
          </div>
        `;

        // container এ append করা
        historyContainer.appendChild(box);

        // কয়েন কমানো
        coinCount -= 20;
        coinCountEl.textContent = coinCount;

      } else {
        alert("Insufficient Coin");
      }
    });
  });

  // clear button
  clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
  });
});


// copy count
document.addEventListener("DOMContentLoaded", function () {
  const copyCountEl = document.getElementById("copyCount");
  let copyCount = parseInt(copyCountEl.textContent) || 0;

  const copyBtns = document.querySelectorAll(".btn-copy");

  copyBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
    alert("Copied");
      copyCount++;
      copyCountEl.textContent = copyCount;
      
      const card = btn.closest(".card");
      const serviceNum = card.querySelector(".service-num").textContent;

      navigator.clipboard.writeText(serviceNum);
    });
  });
});
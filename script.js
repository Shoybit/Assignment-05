let count = 0;

const loveIcons = document.querySelectorAll(".love-Icon");
const loveCount = document.getElementById("love-count");

for (let i = 0; i < loveIcons.length; i++) {
    loveIcons[i].addEventListener("click", function(e) {
        e.preventDefault();
        count++;
        loveCount.innerText = count;
        console.log('click', count);
    });
}



let coin = 100;
const coinShow = document.getElementById("coin");
const callButtons = document.querySelectorAll(".call-btn");
const cartBox = document.getElementById("cart-box");
const clearBtn = document.getElementById("clear-btn");

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    if (coin < 20) {
      alert("❌ You don't have enough coins! You need at least 20 coins to make a call.");
      return;
    }

    const cardBody = btn.closest(".card-copy");
    const callingName = cardBody.querySelector("h2").innerText;
    const callingNumber = cardBody.querySelector("h1").innerText;

    alert(`📞 Calling: ${callingName} ${callingNumber}...`);

    coin -= 20;
    coinShow.innerText = coin;

    
   const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).toUpperCase();

    
    const newCart = document.createElement("div");
    newCart.className = "history-entry flex justify-between items-center mt-5 bg-[#fafafa] rounded-lg p-3 shadow";
    newCart.innerHTML = `
      <div class="flex flex-col">
        <span class="font-semibold text-[18px] font-hind">${callingName}</span>
        <span class="text-[#5c5c5c] text-[18px]">${callingNumber}</span>
      </div>
      <span class="text-black text-[18px]">${time}</span>
    `;
    cartBox.appendChild(newCart);
  });
}



clearBtn.addEventListener("click", function () {
  
  let entries = cartBox.querySelectorAll(".history-entry");
  while (entries.length > 0) {
    entries[0].remove();      
    entries = cartBox.querySelectorAll(".history-entry"); 
  }
});



let copyCount = 0;
const counterBtn = document.getElementById("copy-counter");

document.querySelectorAll(".copy-number").forEach(btn => {
  btn.onclick = () => {
    const card = btn.closest(".card-copy");
    const number = card.querySelector(".number").innerText.trim();

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(number).then(() => {
        copyCount++;
        counterBtn.innerText = `${copyCount} Copy`;
        alert(`Copied Number: ${number}`);
      })
    }
      if (success) {
        copyCount++;
        counterBtn.innerText = `${copyCount} Copy`;
        alert(`Copied Number: ${number}`);
      } 
    }
});

   
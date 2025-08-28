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
    if (coin <= 0) {
      alert("❌ You don't have enough coins! You need at least 20 coins to make a call.");
      return;
    }

    const cardBody = btn.parentNode.parentNode.parentNode;
    const callingName = cardBody.querySelector("h2").innerText;
    const callingNumber = cardBody.querySelector("h1").innerText;

    alert(`📞 Calling: ${callingName} ${callingNumber}...`);

    coin -= 20;
    if (coin < 0) coin = 0;
    coinShow.innerText = coin;

    if (coin > 0) {
      const time = new Date().toLocaleTimeString();
      const newCart = document.createElement("div");
      newCart.className =
        "flex justify-between items-center mt-5 bg-[#fafafa] rounded-lg p-3 shadow";

      newCart.innerHTML = `
        <div class="flex flex-col">
          <span class="font-semibold text-[18px]">${callingName}</span>
          <span class="text-[#5c5c5c] text-[18px]">${callingNumber}</span>
        </div>
        <span class="text-black text-[18px]">${time}</span>
      `;

      cartBox.appendChild(newCart); 
    }
  });
}

clearBtn.addEventListener("click", function () {
  while (cartBox.children.length > 1) {
    cartBox.removeChild(cartBox.lastChild);
  }
});


  function handleBuyNowClick(buttonNumber) {
    event.preventDefault();
    var button = document.getElementById('buyNowBtn' + buttonNumber);
    button.innerHTML = '<span class="material-symbols-outlined">check</span> Bought';
    button.classList.add('bought');
    button.disabled = true;
  }


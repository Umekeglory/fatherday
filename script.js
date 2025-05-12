const card = document.getElementById('card');

card.addEventListener('click', () => {
  const isOpen = card.classList.toggle('open');

  if (isOpen) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
});

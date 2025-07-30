window.addEventListener("DOMContentLoaded", () => {
  const count = 400;
  const end = Date.now() + 4 * 1000;
  const sidesColors = ["#bb0000", "#ffffff"];
  const defaults = {
    origin: { y: 0.7 },
    colors: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: sidesColors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: sidesColors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});

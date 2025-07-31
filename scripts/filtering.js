
filterBtn.addEventListener("click", (e) => {
  filterOverlay.style.display = "block";
  filterLeft.style.display = "block";

  filterOverlay.style.top = `${window.scrollY}px`;
  filterLeft.style.top = `${window.scrollY}px`;
});

filterCrossBtn.addEventListener("click", (e) => {
  filterOverlay.style.display = "none";
  filterLeft.style.display = "none";
});


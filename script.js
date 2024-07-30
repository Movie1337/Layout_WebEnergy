document.addEventListener("DOMContentLoaded", () => {
  const filterButton = document.querySelector(".header__filter-button");
  const filtersContainer = document.querySelector(".filters");

  filterButton.addEventListener("click", () => {
    filtersContainer.classList.toggle("filters--visible");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.querySelector(".filter__range-input");
  const minLabel = document.querySelector(
    ".filter__range-labels span:nth-child(1)"
  );
  const maxLabel = document.querySelector(
    ".filter__range-labels span:nth-child(2)"
  );

  rangeInput.addEventListener("input", function () {
    minLabel.textContent = `от ${rangeInput.min}`;
    maxLabel.textContent = `до ${rangeInput.value}`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterHeaders = document.querySelectorAll(".filter__header");

  filterHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.classList.toggle("filter__content--visible");
      this.classList.toggle("filter__header--expanded");
    });
  });
});

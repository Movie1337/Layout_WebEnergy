document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header__menu-button");
  const menu = document.querySelector(".header__menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("header__menu--open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filters__button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) =>
        btn.classList.remove("filters__button--active")
      );
      this.classList.add("filters__button--active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const priceRangeInput = document.querySelector(".filter__range-input");
  const priceLabels = document.querySelectorAll(".filter__range-labels span");

  priceRangeInput.addEventListener("input", function () {
    priceLabels[0].textContent = `от ${this.min}`;
    priceLabels[1].textContent = `до ${this.value}`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sortSelect = document.getElementById("sort-select");
  const productCards = document.querySelectorAll(".product-card");

  sortSelect.addEventListener("change", function () {
    const sortBy = this.value;
    sortProducts(sortBy);
  });

  function sortProducts(criteria) {
    // Логика сортировки карточек товаров в зависимости от критерия
    // Это может включать обновление DOM, перестановку элементов и т.д.
    // Для примера, ниже код лишь имитирует сортировку
    console.log("Sorting by:", criteria);
  }
});

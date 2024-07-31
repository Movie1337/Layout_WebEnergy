document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header__menu-button");
  const filters = document.querySelector(".catalog__filters");
  const closeButton = document.querySelector(".filter__close-button");

  const toggleFilters = () => {
    if (window.innerWidth <= 320) {
      filters.classList.toggle("catalog__filters--visible");
    }
  };

  menuButton.addEventListener("click", toggleFilters);
  closeButton.addEventListener("click", toggleFilters);
});

document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.querySelector(".header__cart");
  const dropdown = document.getElementById("sizeOptionsDropdown");
  const closeDropdown = document.getElementById("closeDropdown");
  const quantityInputs = document.querySelectorAll(".quantity-input");
  const decreaseButtons = document.querySelectorAll(".quantity-decrease");
  const increaseButtons = document.querySelectorAll(".quantity-increase");

  cartIcon.addEventListener("click", function () {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  closeDropdown.addEventListener("click", function () {
    dropdown.style.display = "none";
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && !cartIcon.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });

  decreaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let quantity = parseInt(quantityInputs[index].value);
      if (quantity > 0) quantityInputs[index].value = quantity - 1;
    });
  });

  increaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let quantity = parseInt(quantityInputs[index].value);
      quantityInputs[index].value = quantity + 1;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-tags");
  const extraTags = document.querySelector(".filters__extra-tags");
  let tagsVisible = false;

  toggleButton.addEventListener("click", function () {
    tagsVisible = !tagsVisible;
    extraTags.style.display = tagsVisible ? "flex" : "none";
    toggleButton.textContent = tagsVisible ? "Свернуть" : "Показать еще";
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

document.addEventListener("DOMContentLoaded", function () {
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");
  const minPriceInputField = document.getElementById("min-price-input");
  const maxPriceInputField = document.getElementById("max-price-input");
  const rangeTrack = document.querySelector(".filter__range-track");

  const updateRange = () => {
    const minValue = parseInt(minPriceInput.value);
    const maxValue = parseInt(maxPriceInput.value);

    if (minValue > maxValue - 1) {
      minPriceInput.value = maxValue - 1;
    }
    if (maxValue < minValue + 1) {
      maxPriceInput.value = minValue + 1;
    }

    minPriceInputField.value = minPriceInput.value;
    maxPriceInputField.value = maxPriceInput.value;

    updateTrack();
  };

  const updateInputs = () => {
    minPriceInput.value = minPriceInputField.value;
    maxPriceInput.value = maxPriceInputField.value;
    updateRange();
  };

  const updateTrack = () => {
    const minValue = parseInt(minPriceInput.value);
    const maxValue = parseInt(maxPriceInput.value);
    const rangeMax = parseInt(minPriceInput.max);

    const percentMin = (minValue / rangeMax) * 100;
    const percentMax = (maxValue / rangeMax) * 100;

    rangeTrack.style.left = `${percentMin}%`;
    rangeTrack.style.right = `${100 - percentMax}%`;
  };

  minPriceInput.addEventListener("input", updateRange);
  maxPriceInput.addEventListener("input", updateRange);
  minPriceInputField.addEventListener("input", updateInputs);
  maxPriceInputField.addEventListener("input", updateInputs);

  updateTrack();
});

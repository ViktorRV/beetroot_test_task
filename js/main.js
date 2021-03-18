const category = document.querySelector(".category")
const maxPrice = document.querySelector(".max-price")
const items = document.querySelectorAll(".product-box__item")

category.addEventListener("change", (e) => filter(category.value, maxPrice.value))
maxPrice.addEventListener("change", (e) => filter(category.value, maxPrice.value))

function filterByCategory(category, dataCategory) {
  if (category == 0) {
    return true
  }
  return category == dataCategory
}

function filterByPrice(price, dataPrice) {
  if (price == 0) {
    return true
  }
  return +dataPrice <= +price
}

function filter(category, price) {
  items.forEach(item => {
    if (filterByCategory(category, item.dataset.category) && filterByPrice(price, item.dataset.price)) {
      item.classList.remove("hidden")
    } else {
      item.classList.add("hidden")
    }
  })
}
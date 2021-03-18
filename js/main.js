// categorization and filtering functionality
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

// counting functionality

const box = document.querySelector(".products-box")
const amountText = document.querySelector("#amount")
const dishesNumberText = document.querySelector("#items-number")

amountText.textContent = 0
dishesNumberText.textContent = 0

box.addEventListener("click", (e) => {
  if (!e.target.classList.contains("product-box__btn")) {
    return
  }
  amountText.textContent = countTotalAmount()
  dishesNumberText.textContent = countTotalDishesNumber()
})

function countTotalDishesNumber() {
  let val = 0
  items.forEach(item => {
    val += +item.querySelector(".qty__item").value
  })
  return val
}

function countTotalAmount() {
  let amount = 0
  items.forEach(item => {
    amount += +item.querySelector(".qty__item").value * +item.dataset.price
  })
  return amount
}

// ordering functionality
const form = document.querySelector(".order-form")
const orderButton = document.querySelector(".btn-check")
const modal = document.querySelector(".order-modal-container")
const modalOverlay = document.querySelector(".order-modal-overlay")
const closeButton = document.querySelector(".close")
const nameField = document.querySelector("#order-name")
const emailField = document.querySelector("#order-email")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (nameField.value.trim() == "" || emailField.value.trim() == "") {
    alert("Пожалуйста, заполните все поля формы")
    return
  }
  alert("Благодарим за покупку!")
  nameField.value == "" 
  emailField.value == ""
  amountText.textContent = 0
  dishesNumberText.textContent = 0
  document.querySelectorAll(".qty__item").forEach(item => item.value = "")
  closeModal()
})

orderButton.onclick = openModal
modalOverlay.onclick = closeModal
closeButton.onclick = closeModal

function openModal() {
  modal.hidden = false
}

function closeModal() {
  modal.hidden = true
}
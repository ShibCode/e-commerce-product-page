const main = document.querySelector("main");
const lightbox = document.querySelector(".lightbox");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const leftArrowPath = document.querySelector(".left-arrow-path");
const rightArrowPath = document.querySelector(".right-arrow-path");
const thumb1 = document.querySelector(".product-img-thumbnail-lightbox-1");
const thumb4 = document.querySelector(".thumb4-lightbox");
const cartItem = document.querySelector(".cart-item");
const total = document.querySelector(".menu-total");
const emptyCartText = document.querySelector(".empty-cart");
const byDefaultSelect = document.querySelectorAll(".thumbnail-img");
const cartButton = document.querySelector(".cart");
const menu = document.querySelector(".menu");
const cartAmount = document.querySelector(".cart-amount");
const checkOut = document.querySelector(".checkout");
const tempArr = document.querySelectorAll(".thumbnail-img-lightbox");
const minusButton = document.querySelector(".minus-use");
const amount = document.querySelector(".current-amount");
const mobileLeftArrow = document.querySelector(".move-left");
const mobileRightArrow = document.querySelector(".move-right");
const mobileImages = document.querySelectorAll(".product-img");
const byDefaultSelectLightBox = document.querySelectorAll(
  ".thumbnail-img-lightbox"
);

let currentAmount = 0;
let thumbnailArr = [];
for (let item of tempArr) {
  thumbnailArr.push(item.childNodes[1]);
}

byDefaultSelect[0].style.border = "2px solid hsla(26, 100%, 55%)";
byDefaultSelect[0].childNodes[1].style.opacity = "0.3";
byDefaultSelectLightBox[0].style.border = "2px solid hsla(26, 100%, 55%)";
byDefaultSelectLightBox[0].childNodes[1].style.opacity = "0.3";
byDefaultSelectLightBox[0].childNodes[1].classList.add("selected");

if (thumb1.style.opacity == 0.3) {
  leftArrow.style.opacity = "0.3";
  leftArrowPath.style.stroke = "#1D2026";
} else if (thumb4.style.opacity == 0.3) {
  rightArrow.style.opacity = "0.3";
  rightArrowPath.style.stroke = "#1D2026";
}

minusButton.style.opacity = "0.6";

mobileLeftArrow.style.opacity = "0.6";

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-img-thumbnail")) {
    const thumbnails = document.querySelectorAll(".product-img-thumbnail");
    const bigImg = document.querySelectorAll(".product-img");
    thumbnails.forEach((item) => {
      item.style.opacity = "";
      item.parentNode.style.border = "";
      item.classList.add("opacity");
    });
    e.target.classList.remove("opacity");
    e.target.style.opacity = "0.3";
    e.target.parentNode.style.border = "2px solid hsla(26, 100%, 55%)";
    bigImg.forEach((item, index) => {
      item.classList.remove("show");
      if (item.classList.contains(e.target.classList[0])) {
        bigImg[index].classList.add("show");
      }
    });
  } else if (e.target.classList.contains("product-img")) {
    lightbox.classList.add("show-flex");
    lightbox.classList.add("opacity");
  } else if (
    e.target.classList.contains("add-button") ||
    e.target.classList.contains("add") ||
    e.target.classList.contains("add-use")
  ) {
    currentAmount += 1;
    amount.textContent = currentAmount;
    minusButton.style.opacity = "";
  } else if (
    e.target.classList.contains("minus-button") ||
    e.target.classList.contains("minus") ||
    e.target.classList.contains("minus-use")
  ) {
    if (currentAmount > 0) {
      currentAmount -= 1;
      amount.textContent = currentAmount;
    }
    if (currentAmount == 0) {
      minusButton.style.opacity = "0.6";
    }
  }
  if (
    e.target.classList.contains("add-to-cart") ||
    e.target.classList.contains("cart2") ||
    e.target.classList.contains("atc")
  ) {
    if (currentAmount > 0) {
      cartItem.childNodes[3].childNodes[3].innerHTML = `$125.00 x ${currentAmount} <span class='menu-total'>$${
        125 * currentAmount
      }.00</span`;
      cartItem.classList.add("show-flex2");
      checkOut.classList.add("show");
      emptyCartText.classList.add("hide-text");
      cartAmount.classList.remove("hide-text");
      cartAmount.textContent = currentAmount;
    } else {
      cartItem.classList.remove("show-flex2");
      checkOut.classList.remove("show");
      cartItem.childNodes[3].childNodes[3].textContent = "price here";
      emptyCartText.classList.remove("hide-text");
      cartAmount.classList.add("hide-text");
    }
  }
});

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    cartItem.classList.remove("show-flex2");
    checkOut.classList.remove("show");
    emptyCartText.classList.remove("hide-text");
  }
});

lightbox.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-img-thumbnail-lightbox")) {
    const thumbnails = document.querySelectorAll(
      ".product-img-thumbnail-lightbox"
    );
    const bigImg = document.querySelectorAll(".product-img-lightbox");
    thumbnails.forEach((item) => {
      item.style.opacity = "";
      item.parentNode.style.border = "";
      item.classList.remove("selected");
      item.classList.add("opacity");
    });
    e.target.classList.remove("opacity");
    e.target.classList.add("selected");
    e.target.style.opacity = "0.3";
    e.target.parentNode.style.border = "2px solid hsla(26, 100%, 55%)";
    if (e.target.classList.contains("thumb1-lightbox")) {
      leftArrow.style.opacity = "0.3";
      leftArrowPath.style.stroke = "#1D2026";
    } else {
      leftArrow.style.opacity = "";
      leftArrowPath.style.stroke = "";
    }
    if (e.target.classList.contains("thumb4-lightbox")) {
      rightArrow.style.opacity = "0.3";
      rightArrowPath.style.stroke = "#1D2026";
    } else {
      rightArrow.style.opacity = "";
      rightArrowPath.style.stroke = "";
    }
    bigImg.forEach((item, index) => {
      item.classList.remove("show");
      if (item.classList.contains(e.target.classList[0])) {
        bigImg[index].classList.add("show");
      }
    });
  } else if (
    e.target.classList.contains("lightbox") ||
    e.target.classList.contains("close-btn")
  ) {
    lightbox.classList.remove("show-flex");
    lightbox.classList.remove("opacity");
    thumb1.click();
  }
  if (
    e.target.classList.contains("left") ||
    e.target.classList.contains("left-arrow") ||
    e.target.classList.contains("left-arrow-path")
  ) {
    thumbnailArr.forEach((item, index) => {
      if (item.classList.contains("selected")) {
        const prevClass = "thumb" + index + "-lightbox";
        filtered = thumbnailArr.filter((item) => {
          return item.classList.contains(prevClass);
        });
        filtered[0].click();
      }
    });
  } else if (
    e.target.classList.contains("right") ||
    e.target.classList.contains("right-arrow") ||
    e.target.classList.contains("right-arrow-path")
  ) {
    for (let index in thumbnailArr) {
      item = thumbnailArr[index];
      if (item.classList.contains("selected")) {
        const nextClass = "thumb" + (+index + 2) + "-lightbox";
        filtered = thumbnailArr.filter((i) => {
          return i.classList.contains(nextClass);
        });
        filtered[0].click();
        break;
      }
    }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    lightbox.classList.remove("show-flex");
    lightbox.classList.remove("opacity");
  }
});

cartButton.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("cart") ||
    e.target.classList.contains("cart-path")
  )
    menu.classList.toggle("menu-closed");
  menu.classList.toggle("menu-opened");
});

const hamMenu = document.querySelector(".hammenu");
const mainHammenu = document.querySelector(".ham-menu");
const blackedOut = document.querySelector(".blacked-out");
const crossButton = document.querySelector(".close-btn");
document.body.addEventListener("click", (e) => {
  if (
    !(
      e.target.classList.contains("menu-heading") ||
      e.target.classList.contains("menu-content") ||
      e.target.classList.contains("small-img") ||
      e.target.classList.contains("para") ||
      e.target.classList.contains("menu-total") ||
      e.target.classList.contains("delete") ||
      e.target.classList.contains("checkout") ||
      e.target.classList.contains("cart") ||
      e.target.classList.contains("cart-path")
    )
  ) {
    menu.classList.add("menu-closed");
    menu.classList.remove("menu-opened");
  }
  if (
    e.target.classList.contains("hammenu-img") ||
    e.target.classList.contains("hammenu-path")
  ) {
    hamMenu.classList.toggle("swipe");
    blackedOut.classList.toggle("blacked-out-hide");
    mainHammenu.classList.toggle("invisible");
  } else if (e.target.classList.contains("close-btn")) {
    hamMenu.classList.toggle("swipe");
    blackedOut.classList.toggle("blacked-out-hide");
    mainHammenu.classList.toggle("invisible");
  }
  if (e.target.classList.contains("blacked-out")) {
    crossButton.click();
  }
  if (
    e.target.classList.contains("move-right") ||
    e.target.classList.contains("move-right-div") ||
    e.target.classList.contains("move-right-path")
  ) {
    let selectedImg = [];
    mobileImages.forEach((item, index) => {
      if (item.classList.contains("show")) {
        selectedImg.push(`thumb${index + 2}`, index + 1, item);
        item.classList.remove("show");
      }
    });
    if (selectedImg[1] == 4) {
      selectedImg[2].classList.add("show");
    } else {
      if (selectedImg[1] == 3) {
        mobileRightArrow.style.opacity = "0.6";
      }
      for (let item in mobileImages) {
        if (item == selectedImg[1]) {
          mobileImages[item].classList.add("show");
          mobileLeftArrow.style.opacity = "";
        }
      }
    }
  } else if (
    e.target.classList.contains("move-left") ||
    e.target.classList.contains("move-left-div") ||
    e.target.classList.contains("move-left-path")
  ) {
    let selectedImg = [];
    mobileImages.forEach((item, index) => {
      if (item.classList.contains("show")) {
        selectedImg.push(`thumb${index}`, index - 1, item);
        if (selectedImg[1] < 0) {
        } else {
          item.classList.remove("show");
        }
      }
    });
    if (selectedImg[1] < 0) {
    } else {
      if (selectedImg[1] == 0) {
        mobileLeftArrow.style.opacity = "0.6";
      }
      for (let item in mobileImages)
        if (item == selectedImg[1]) {
          mobileImages[item].classList.add("show");
        }
      mobileRightArrow.style.opacity = "";
    }
    console.log(selectedImg);
  }
});

let cartList = [];

const cards = document.querySelectorAll(".card");
const starFunc = (e, stars, ind) => {
  console.log(e, stars, ind);
  const starClasses = e.target.classList;
  if (starClasses.contains("star-fill")) {
    for (let i = 0; i <= ind; i++) {
      stars[i].classList.remove("star-fill");
    }
  } else {
    for (let i = 0; i <= ind; i++) {
      stars[i].classList.add("star-fill");
    }
  }
};

cards.forEach((el, i) => {
  const heart = el.querySelector(".fa-heart");

  heart.addEventListener("click", (e) => {
    if (heart.classList.contains("heart-fill")) {
      heart.classList.remove("heart-fill");
    } else {
      heart.classList.add("heart-fill");
    }
  });

  const stars = el.querySelectorAll(".stars");
  stars.forEach((el, i) => {
    for (let i = 0; i < el.children.length; i++) {
      el.children[i].addEventListener("click", (e) =>
        starFunc(e, el.children, i)
      );
    }
  });

  const title = el.querySelector(".title");
  const btn = el.querySelector(".btn");

  btn.addEventListener("click", (e) => {
    if (!cartList.includes(title.textContent)) {
      cartList.push(title.textContent);
    } else {
      cartList = cartList.filter((e) => {
        return e !== title.textContent;
      });
    }

    document.querySelector(
      ".fa-cart-shopping"
    ).textContent = ` ${cartList.length}`;
  });
});

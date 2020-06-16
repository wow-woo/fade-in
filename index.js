const imgs = document.querySelectorAll("img");

const ip = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.dataset.src;

      img.setAttribute("src", src);
      console.log("😎", img.getAttribute("src"));
      img.classList.add("fade-in");

      //   observer.disconnect();
    }
  });
});

imgs.forEach((img) => ip.observe(img));

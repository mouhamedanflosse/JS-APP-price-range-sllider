let rangeInp = document.querySelectorAll(".range input");
let slider = document.querySelector(".slider .progress");
let amountInp = document.querySelectorAll(".amount input");
rangeInp.forEach((inp) => {
  inp.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInp[0].value);
    let maxVal = parseInt(rangeInp[1].value);
    if (maxVal - minVal < 1000) {
      if (e.target.className === "min") {
        rangeInp[0].value = maxVal - 1000;
        slider.style.left = `${(rangeInp[0].value / rangeInp[0].max) * 100}%`;
        amountInp[0].value = rangeInp[0].value;
      } else {
        rangeInp[1].value = 1000 + minVal;
        slider.style.right = `${
          100 - (rangeInp[1].value / rangeInp[1].max) * 100
        }%`;
        amountInp[1].value = rangeInp[1].value;
      }
    } else {
      amountInp[1].value = maxVal;
      amountInp[0].value = minVal;
      slider.style.left = `${(minVal / rangeInp[0].max) * 100}%`;
      slider.style.right = `${100 - (maxVal / rangeInp[1].max) * 100}%`;
    }
  });
});

amountInp.forEach((inp) => {
  inp.addEventListener("input", (e) => {
    let minVal = parseInt(amountInp[0].value);
    let maxVal = parseInt(amountInp[1].value);
    if (maxVal - minVal < 1000) {
      if (e.target.className === "min") {
        amountInp[0].value = maxVal - 1000;
        rangeInp[0].value = amountInp[0].value;
        slider.style.left = `${(rangeInp[0].value / rangeInp[0].max) * 100}%`;
      } else {
        amountInp[1].value = 1000 + minVal;
        rangeInp[1].value = amountInp[1].value;
        slider.style.right = `${
          100 - (rangeInp[1].value / rangeInp[1].max) * 100
        }%`;
      }
    } else {
      rangeInp[1].value = maxVal;
      rangeInp[0].value = minVal;
      slider.style.left = `${(minVal / rangeInp[0].max) * 100}%`;
      slider.style.right = `${100 - (maxVal / rangeInp[1].max) * 100}%`;
    }
  });
});
let userAgent = navigator.userAgent
console.log(userAgent)
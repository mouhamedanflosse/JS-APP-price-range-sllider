// let rangrInp = document.querySelectorAll(".range input")
// let slider = document.querySelector(".slider .progress")
// let amountInp = document.querySelectorAll(".amount input")
// rangrInp.forEach((inp) => {
//     inp.addEventListener("input", (e) => {
    //     let minVal = parseInt(rangrInp[0].value)
    //     let maxVal = parseInt(rangrInp[1].value)
    //     if (maxVal - minVal < 1000) {
    //         if (e.target.className === "min") {
    //             rangrInp[0].value = maxVal - 1000
    //         }
    //         else {
    //             rangrInp[1].value = minVal + 1000
    //         }
    //     }
    //     else {
    //         amountInp[0].value = minVal
    //         amountInp[1].value = maxVal
    //         slider.style.left = `${minVal / rangrInp[0].max * 100}%`
    //         slider.style.right = `${100 - maxVal / rangrInp[1].max * 100}%`
    //     }
    // })
// })
// amountInp.forEach((inp) => {
//     inp.addEventListener("input", (e) => {
//         let minVal = parseInt(amountInp[0].value)
//         let maxVal = parseInt(amountInp[1].value)
//         if (maxVal - minVal >= 1000 && maxVal <= 10000 && minVal <= 10000) {
//             if (e.target.className === "min") {
//                 rangrInp[0].value = minVal
//                 slider.style.left = `${minVal / rangrInp[0].max * 100}%`
//             }
//             else {
//                 rangrInp[1].value = maxVal
//                 slider.style.left = `${maxVal / rangrInp[0].max * 100}%`
//             }
//         }
//     })
// })
let rangrInp = document.querySelectorAll(".range input")
let slider = document.querySelector(".slider .progress")
let amountInp = document.querySelectorAll(".amount input")
rangrInp.forEach((inp) => {
    inp.addEventListener("input",(e) => {
        let minVal = parseInt(rangrInp[0].value)
        let maxVal = parseInt(rangrInp[1].value)
        if (maxVal - minVal < 1000) {
            if (e.target.className === "min") {
                rangrInp[0].value = maxVal - 1000
            }
            else {                
                rangrInp[1].value = minVal + 1000
            }
        }
        else {
            amountInp[0].value = minVal
            amountInp[1].value = maxVal
            slider.style.left = `${minVal / rangrInp[0].max * 100}%`
            slider.style.right = `${100 - maxVal / rangrInp[0].max * 100}%`
        }
    })
})
amountInp.forEach((inp) => {
    inp.addEventListener("input",(e) => {
        let minVal = parseInt(amountInp[0].value)
        let maxVal = parseInt(amountInp[1].value)
        if (maxVal - minVal < 1000) {
            if (e.target.className === "min") {
                amountInp[0].value = maxVal - 1000
            }
            else {                
                amountInp[1].value = minVal + 1000
            }
        }
        else {
            rangrInp[0].value = minVal
            rangrInp[1].value = maxVal
            slider.style.left = `${minVal / rangrInp[0].max * 100}%`
            slider.style.right = `${100 - maxVal / rangrInp[0].max * 100}%`
        }
    })
})
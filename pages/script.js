const mainContainer = document.querySelector(".content-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rateNumbers = document.querySelectorAll(".button")

submitButton.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "flex";  //doesn't show spacing of main container
});

rateNumbers.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
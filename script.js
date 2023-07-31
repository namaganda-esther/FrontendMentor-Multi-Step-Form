// JavaScript code to handle the "Next Step" button click
document.addEventListener("DOMContentLoaded", function() {
    const step1Section = document.getElementById("step-1");
    const step2Section = document.getElementById("step-2");

    // Hide Step 2 initially
    step2Section.style.display = "none";

    // Function to switch to Step 2
    function goToStep2(event) {
      event.preventDefault();
      step1Section.style.display = "none";
      step2Section.style.display = "block";
    }

    // Get the "Next Step" button and attach a click event listener
    const nextStepButton = document.querySelector("form button");
    nextStepButton.addEventListener("click", goToStep2);

    // Function to go back to Step 1
    function backToStep1(event) {
      event.preventDefault();
      step1Section.style.display = "block";
      step2Section.style.display = "none";
    }

    // Get the "Go Back" link and attach a click event listener
    const previousButton = document.getElementById("previous");
    previousButton.addEventListener("click", backToStep1);



   // code to run the switch between the monthly and yearly prices
    const monthlyPrices = [9,12,15];
    const yearlyPrices = [90,120,150];

    const monthlyLabels = document.querySelectorAll(".monthly-label");
    const YearlyLabels = document.querySelectorAll(".yearly-label");


    // Function to toggle between monthly and yearly prices
    function togglePlan(event){
      const isYearly = event.target.checked;
      monthlyLabels.forEach((label, index) => {
        label.style.display = isYearly ? "none" : "block";
        yearlyLabels[index].style.display = isYearly ? "block" : "none";
      });
    }


    // Get the switch and attach a change event listener
    const switchInput = document.getElementById("flexSwitchCheckChecked");
    switchInput.addEventListener("change", togglePlan);

    // Hide yearly prices initially (show monthly)
    togglePlan({ target: switchInput });

});


        const switchInputs = document.querySelectorAll(".switch-wrapper input");
        const prices = document.querySelectorAll(".price");
        const cards = document.querySelectorAll(".card");
        const toggleClass = "hide";
    
        for (const switchInput of switchInputs) {
        switchInput.addEventListener("input", function () {
            // Handle table display
            for (const price of prices) {
            price.classList.add(toggleClass);
            }
            const activePrices = document.querySelectorAll(`.price.${switchInput.id}`);
            for (const activePrice of activePrices) {
            activePrice.classList.remove(toggleClass);
            }
    
            // Handle card display
            for (const card of cards) {
            const cardPrices = card.querySelectorAll(".price");
            for (const price of cardPrices) {
                price.classList.add(toggleClass);
            }
            const activeCardPrice = card.querySelector(`.price.${switchInput.id}`);
            activeCardPrice.classList.remove(toggleClass);
            }
        });
        }


  
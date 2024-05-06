class Calculator {
    constructor(operand1Element, operand2Element) {
        this.operand1Element = operand1Element;
        this.operand2Element = operand2Element;
        this.clear();
    }

    clear() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.updateUI();
    }

    updateUI() {
        this.operand1Element.innerHTML = this.operand1 + this.operator;
        this.operand2Element.innerHTML = this.operand2;
    }

    appendNumber(number) {
        if (number === "." && this.operand2.includes(".")) return
        this.operand2 = this.operand2 === 0
            ? number
            : this.operand2.toString() + number;
        this.updateUI();
    }

    delete() {
        if (this.operand2 === 0) return
        this.operand2 = +this.operand2.toString().slice(0, -1)
        this.updateUI();
    }
}

// Get DOM elements
const operand1Element = document.querySelector("[data-operand-1]")
const operand2Element = document.querySelector("[data-operand-2]")
const clearBtn = document.querySelector("[data-clear]")
const numberBtns = document.querySelectorAll("[data-number]")
const deleteBtn = document.querySelector("[data-delete]")

// Create Calculator instance
const calculator = new Calculator(operand1Element, operand2Element)

// Clear button is activated
clearBtn.addEventListener("click", () => {
    calculator.clear()
})

// Some number buttons is clicked
numberBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        calculator.appendNumber(btn.innerHTML)
    })
})

// Delete button is activated
deleteBtn.addEventListener("click", () => {
    calculator.delete();
})
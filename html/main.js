function calculateFibonacci() {
    const input = document.getElementById("number");
    const resultDiv = document.getElementById("result");
    const value = Number(input.value);

    
    if (isNaN(value) || value <= 0 || !Number.isInteger(value)) {
    resultDiv.innerText = "Por favor, ingresa un número valido.";
    return;
    }

    let fibonacci = [0, 1];

    for (let i = 2; i < value; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

fibonacci = fibonacci.slice(0, value); 


resultDiv.innerText = "Serie de Fibonacci: " + fibonacci.join(", ");
console.log("Serie de Fibonacci:", fibonacci.join(", "));
}
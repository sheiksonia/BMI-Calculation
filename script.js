


const calculateBMI = () => {
  const weight = parseFloat(document.getElementById("weightInput").value);
  const height = parseFloat(document.getElementById("heightInput").value);

  if (!isNaN(weight) && !isNaN(height)) {
    const bmi = weight / (height * height);

    document.getElementById(
      "result"
    ).innerHTML = `Your BMI Calculation  is ${bmi.toFixed(2)}`;
  }
};
document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
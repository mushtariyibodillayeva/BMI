function calculate() {
  var bmi;
  var result = document.getElementById("result");
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);

  document.getElementById("weight-val").textContent = weight + " kg";
  document.getElementById("height-val").textContent = height + " cm";

  bmi = weight / Math.pow(height / 100, 2).toFixed(1);
  result.textContent = bmi;

  if (bmi < 18.5) {
    category = "Kam vazin 😒";
    result.style.color = "red";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Yetarli vazin 👍";
    result.style.color = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Ortiqcha vazin 😯";
    result.style.color = "green";
  } else {
    category = "Semirib ketibsiz 😮";
    result.style.color = "black";
  }
  document.getElementById("category").textContent = category;
}

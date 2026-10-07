function getZodiacSign(day, month) {
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    return "Aquarius";
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "Pisces";
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "Aries";
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return "Taurus";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return "Gemini";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return "Cancer";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "Leo";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "Virgo";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return "Libra";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return "Scorpio";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return "Sagittarius";
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    return "Capricorn";
  } else {
    return "Invalid date";
  }
}

const form = document.getElementById("birthForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const birthDate = document.getElementById("birthDate").value;
  const birthTime = document.getElementById("birthTime").value;
  const birthPlace = document.getElementById("birthPlace").value;

  const date = new Date(birthDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;

  const zodiacSign = getZodiacSign(day, month);

  const result = document.getElementById("result");

  result.innerHTML = `
        <h2>Your Birth Chart</h2>

        <p>☀ Sun Sign: ${zodiacSign}</p>
    `;
});

import "./styles.css";

const list = document.querySelector(".ajax-section .cities");

const apiKey = "6345ccb70e77b48e730ebee2a86e1cfe";

const url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=53.53&lon=27.34&exclude=daily&appid=${apiKey}`;

fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const { current, timezone, hourly } = data;
    const icon = `https://openweathermap.org/img/wn/${current.weather[0]["icon"]}@2x.png`;

    const li = document.createElement("li");
    const li2 = document.createElement("li");

    li.classList.add("city");
    li2.classList.add("city");

    const markup = `
        <h2 class="city-name" data-name="">${timezone.split("/")[1]}</h2>
        <div class="city-temp">${Math.round(
          current.temp - 273.15
        )}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src=${icon} alt=${current.weather[0]["main"]}>
          <figcaption>${current.weather[0]["description"]}</figcaption>
        </figure>
      `;
    const mk2 = `
    <h2>Hourly weather</h2>
      <div class="city-temp">${Math.round(
        hourly[0].temp - 273.15
      )}<sup>°C</sup></div>`;

    li.innerHTML = markup;
    list.appendChild(li);

    li2.innerHTML = mk2;
    list.appendChild(li2);
  })
  .catch(() => {
    console.log("😩");
  });

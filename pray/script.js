let times = document.getElementById("times");
let city = document.getElementById("change-city");
let cityName = document.getElementById("cityName");
console.log(times);
console.log(city.value);
console.log(cityName);

function changeCityName() {
  if (city.value === "Cairo") {
    cityName.innerText = "القاهرة";
  } else if (city.value === "Alexandria") {
    cityName.innerText = "الاسكندرية";
  } else if (city.value === "Luxor") {
    cityName.innerText = "الاقصر";
  } else if (city.value === "Aswan") {
    cityName.innerText = "اسوان";
  } else if (city.value === "Sohag") {
    cityName.innerText = "سوهاج";
  } else if (city.value === "Matrouh") {
    cityName.innerText = "مطروح";
  }
}

function getTimes() {
  axios
    .get(
      ` http://api.aladhan.com/v1/timingsByCity?country=EG&city=${city.value}`
    )
    .then((res) => {
      console.log(res.data.data.timings);
      times.innerHTML = `
      <div class="style">
      <h2 class="salah amiri-bold">الفجر</h2>
      <h2 class="time">${res.data.data.timings.Fajr}</h2>
    </div>
    <div class="style">
      <h2 class="salah amiri-bold">الشروق</h2>
      <h2 class="time">${res.data.data.timings.Sunrise}</h2>
    </div>
    <div class="style">
      <h2 class="salah amiri-bold">الظهر</h2>
      <h2 class="time">${res.data.data.timings.Dhuhr}</h2>
    </div>
    <div class="style">
      <h2 class="salah amiri-bold">العصر</h2>
      <h2 class="time">${res.data.data.timings.Asr}</h2>
    </div>
    <div class="style">
      <h2 class="salah amiri-bold">المغرب</h2>
      <h2 class="time">${res.data.data.timings.Maghrib}</h2>
    </div>
    <div class="style">
      <h2 class="salah amiri-bold">العشاء</h2>
      <h2 class="time">${res.data.data.timings.Isha}</h2>
    </div>
      `;
    });
}
getTimes();
city.addEventListener("change",function(){
    changeCityName()
    getTimes()
})
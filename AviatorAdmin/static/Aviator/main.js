const getSignal = document.getElementById("get-signal");
const stopSignalTimeBlock = document.getElementById("stop-signal-time-block");
const printSignal = document.getElementById("print-signal");
const stopProgress = document.getElementById("stop-progress");

const coefficients = [580.15]; // Массив с коэффициентами
let currentIndex = 0;


getSignal.onclick = async function () {
  let receivingSignal = coefficients[currentIndex];

  // Увеличиваем индекс для следующего нажатия
  currentIndex = (currentIndex + 1) % coefficients.length; // Циклический переход

  // Отображаем коэффициент
  printSignal.innerHTML = `${receivingSignal}${"x"}`;
  printSignal.classList.remove("deactivate");

  // Запускаем таймер
  goTimer(20);

  // Деактивируем кнопку
  getSignal.disabled = true;
}

// Таймер после получения сигнала
function goTimer(time) {
  const timer = setInterval(() => {
    if (time >= 1) {
      getSignal.classList.add("deactivate");
      getSignal.style["z-index"] = "-1";
      stopProgress.style["animation"] = "animateProgress 20s linear infinite";
      stopSignalTimeBlock.classList.remove("deactivate");
      let stopTimer = document.getElementById("stop-timer");
      stopTimer.innerHTML = `${time--}${"<span> seconds</span>"}`;
      timerr = time;
      getSignal.disabled = true;
    } else {
      getSignal.classList.remove("deactivate");
      getSignal.style["z-index"] = "5";
      stopSignalTimeBlock.classList.add("deactivate");
      stopProgress.style["animation"] = "none";
      clearInterval(timer);
      getSignal.disabled = false;
    }
  }, 1000)
}

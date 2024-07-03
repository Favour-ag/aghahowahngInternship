document.addEventListener("DOMContentLoaded", function () {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    currentTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
    currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
  }

  updateTime();
  setInterval(updateTime, 1000); // Update every second
});

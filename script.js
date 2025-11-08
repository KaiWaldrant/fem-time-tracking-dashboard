const allCards = document.querySelectorAll(".count_card");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const rearranged = { daily: {}, weekly: {}, monthly: {} };

    data.forEach((item) => {
      Object.entries(item.timeframes).forEach(([period, values]) => {
        rearranged[period][item.title] = { ...values };
      });
    });

    console.log(rearranged);
    const daily = document.getElementById("daily");
    const weekly = document.getElementById("weekly");
    const monthly = document.getElementById("monthly");

    const filter = document.querySelector(".main__menu");

    filter.addEventListener("click", (e) => {
      // Remove old active class
      document.querySelectorAll(".filter.active").forEach((item) => {
        item.classList.remove("active");
      });

      // Add active class to clicked one
      e.target.classList.add("active");

      // Get the clicked element’s ID
      const filterId = e.target.id;

      updateCards(rearranged[filterId], filterId);

    });
    document.querySelector("#weekly").classList.add("active");
    updateCards(data, "weekly");
  });

const updateCards = (data, timeframe) => {
  allCards.forEach((card) => {

    const category = card.querySelector(".count__heading").textContent;
    const currentTime = card.querySelector(".count__current");
    const lastTime = card.querySelector(".count__previous");
    currentTime.textContent = `${data[category].current}hrs`;
    const prevText = { daily: "Yesterday", weekly: "Last Week", monthly: "Last Month" };
    lastTime.textContent = `${prevText[timeframe]} - ${data[category].previous}hrs`;
  });
};

const allCards = document.querySelectorAll(".count_card");

fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        const daily = document.getElementById('daily');
        const weekly = document.getElementById('weekly');
        const monthly = document.getElementById('monthly');

        const filter = document.querySelector('.main__menu');

        // filterItems.forEach((item) => {
        //     item.addEventListener("click", function () {
        //         filterItems.forEach((filterItem) =>
        //           filterItem.classList.remove("active")
        //         );
        //         this.classList.add("active");
        //     });
        // });

        filter.addEventListener("click", (e) => {     
            // Remove old active class
            document.querySelectorAll(".filter.active").forEach((item) => {
                item.classList.remove("active");
            });

            // Add active class to clicked one
            e.target.classList.add("active");

            // Get the clicked element’s ID
            const id = e.target.id;

            // Use the ID downstream (example: update content dynamically)
            // if (id === "home") {
            //   content.textContent = "Welcome home!";
            // } else if (id === "about") {
            //   content.textContent = "About us section here.";
            // } else if (id === "contact") {
            //   content.textContent = "Contact form coming soon.";
            // }

        });
    });

const updateBoards = (data) => {
  allCards.forEach((card, index) => {

    let hour;
    const cat = data[index].title;
    hour = term || "weekly";
    const category = board.querySelector(".boards__board-category");
    const time = board.querySelector(".boards__board-time");
    const lastTime = board.querySelector(".boards__board-last-time");
    category.textContent = cat;
    time.textContent = `${data[index].timeframes[hour].current}hrs`;
    lastTime.textContent = `Last Week - ${data[index].timeframes[hour].previous}hrs`;
  });
};
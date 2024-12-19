document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const totalDays = 24;

    let row;
    for (let i = 1; i <= totalDays; i++) {
        if (i % 8 === 1) {
            row = document.createElement("div");
            row.classList.add("row", "p-0", "justify-content-between", "align-items-center", "mx-1", "py-4");
            calendar.appendChild(row);
        }

        const day = document.createElement("div");
        day.classList.add("col-lg-1", "col-md-2", "col-4", "day");
        day.textContent = i;

        row.appendChild(day);
    }


    const day25 = document.createElement("div");
    day25.classList.add("col-12", "day", "mt-4");
    day25.textContent = 25;
    calendar.appendChild(day25);
});
document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const totalDays = 24;

    const icons = [
        'ico-albero.png',
        'ico-calza.png',
        'ico-campana.png',
        'ico-caramella.png',
        'ico-fiocco.png',
        'ico-neve.png',
        'ico-omino.png',
        'ico-pupazzo.png',
        'ico-stella.png'
    ];

    let row;
    for (let i = 1; i <= totalDays; i++) {
        if (i % 8 === 1) {
            row = document.createElement("div");
            row.classList.add("row", "p-0", "justify-content-between", "align-items-center", "mx-1", "py-4");
            calendar.appendChild(row);
        }

        const day = document.createElement("div");
        day.classList.add("col-lg-1", "col-md-2", "col-4", "day");

        const iconIndex = (i - 1) % icons.length;
        const iconName = icons[iconIndex];

        const dayIcon = document.createElement("div");
        dayIcon.classList.add("day-icon");
        dayIcon.innerHTML = `<img src="assets/img/icons/${iconName}" alt="icon ${i}" class="img-fluid">`;
        day.appendChild(dayIcon);

        const dayNumber = document.createElement("div");
        dayNumber.classList.add("day-number");
        dayNumber.textContent = i;
        day.appendChild(dayNumber);

        row.appendChild(day);
    }


    const day25 = document.createElement("div");
    day25.classList.add("col-12", "day-25");

    const day25Icon = document.createElement("div");
    day25Icon.classList.add("day-25-icon");
    day25Icon.innerHTML = `<img src="assets/img/page-icon.webp" alt="icon 25" class="img-fluid">`;
    day25.appendChild(day25Icon);

    const day25Number = document.createElement("div");
    day25Number.classList.add("day-25-number");
    day25Number.textContent = 25;
    day25.appendChild(day25Number);

    calendar.appendChild(day25);
});
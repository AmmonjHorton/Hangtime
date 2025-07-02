// script.js (You would link this in your HTML)

const calendarDays = document.getElementById('calendarDays');
const currentMonthYear = document.getElementById('currentMonthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let currentDate = new Date(); // Represents the month currently being viewed

function renderCalendar() {
    calendarDays.innerHTML = ''; // Clear existing days
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-indexed

    currentMonthYear.textContent = new Date(year, month).toLocaleString('en-US', { month: 'long', year: 'numeric' });

    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get last day of current month

    // Add days from previous month (to fill the grid)
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth; i > 0; i--) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day', 'other-month');
        dayDiv.textContent = prevMonthDays - i + 1;
        calendarDays.appendChild(dayDiv);
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day', 'current-month');
        dayDiv.textContent = i;

        // Check for today's date
        const today = new Date();
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add('today');
        }

        // TODO: Add logic here to check if this day has an event
        // if (eventsData.some(event => event.date === new Date(year, month, i).toISOString().split('T')[0])) {
        //     dayDiv.classList.add('has-event');
        // }

        dayDiv.addEventListener('click', () => {
            // Handle day click (e.g., show event details)
            console.log(`Clicked day: ${i}/${month + 1}/${year}`);
            // Add/remove 'selected' class
            document.querySelectorAll('.day.selected').forEach(d => d.classList.remove('selected'));
            dayDiv.classList.add('selected');
        });

        calendarDays.appendChild(dayDiv);
    }

    // Add days from next month (only to fill the current last week row)
    const totalDaysCurrentlyDisplayed = calendarDays.children.length;
    const daysToFillLastRow = totalDaysCurrentlyDisplayed % 7; // How many days are already in the last row (0-6)

    // If daysToFillLastRow is not 0, it means the last row is not full.
    // We need to add (7 - daysToFillLastRow) days to complete it.
    // If daysToFillLastRow is 0, it means the last row is already full (e.g., it ended on a Saturday).
    // In this case, we don't need to add any more days from the next month to fill that row.
    if (daysToFillLastRow !== 0) {
        let nextMonthDay = 1;
        for (let i = 0; i < (7 - daysToFillLastRow); i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day', 'other-month');
            dayDiv.textContent = nextMonthDay;
            calendarDays.appendChild(dayDiv);
            nextMonthDay++;
        }
    }
}

// Navigation event listeners
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});


renderCalendar(); // Initial render
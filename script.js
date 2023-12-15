document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');

    // Mock data for events (replace with dynamic data from the server)
    const events = [
        { date: '2023-03-15', title: 'Meeting with Team' },
        { date: '2023-03-20', title: 'Project Deadline' },
        // Add more events as needed
    ];

    function renderCalendar() {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        // Clear previous content
        calendar.innerHTML = '';

        // Render header
        const header = document.createElement('div');
        header.innerHTML = `<strong>${currentDate.toLocaleString('default', { month: 'long' })} ${currentYear}</strong>`;
        calendar.appendChild(header);

        // Render days
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');

            // Highlight current day
            if (currentDate.getDate() === day && currentDate.getMonth() === currentMonth) {
                dayElement.style.backgroundColor = '#f0f8ff';
            }

            // Display events for the day
            const eventsForDay = events.filter(event => {
                const eventDate = new Date(event.date);
                return eventDate.getDate() === day && eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
            });

            if (eventsForDay.length > 0) {
                eventsForDay.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.classList.add('event');
                    eventElement.textContent = event.title;
                    dayElement.appendChild(eventElement);
                });
            }

            dayElement.innerHTML += `<span>${day}</span>`;
            calendar.appendChild(dayElement);
        }
    }

    renderCalendar();
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const eventList = document.getElementById("event-list");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        // Get input values
        const eventName = capitalizeFirstLetter(document.getElementById("name").value.trim());
        const eventDate = document.getElementById("date").value;
        const eventTime = document.getElementById("time").value;
        const eventLocation = capitalizeFirstLetter(document.getElementById("location").value.trim());
        let eventDescription = document.getElementById("discrip").value.trim();
        eventDescription = eventDescription ? capitalizeFirstLetter(eventDescription) : "";

        // Validate required fields
        if (!eventName || !eventDate || !eventTime || !eventLocation) {
            alert("Please fill in all required fields.");
            return;
        }

        // Create a new event element
        const eventItem = document.createElement("li");
        eventItem.classList.add("event-item");

        eventItem.innerHTML = `
            <div class="event-details">
                <strong class="event-name">${eventName}</strong>
                <span class="event-meta">${eventDate} at ${eventTime}</span>
                <span class="event-meta">${eventLocation}</span>
                ${eventDescription ? `<p class="event-description">${eventDescription}</p>` : ""}
            </div>
            <div class="event-actions">
                <button class="edit-btn">✏️</button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;

        // Add delete functionality
        eventItem.querySelector(".delete-btn").addEventListener("click", function () {
            eventItem.remove();
        });

        // Add edit functionality
        eventItem.querySelector(".edit-btn").addEventListener("click", function () {
            const newName = prompt("Edit event name:", eventName);
            if (newName) {
                eventItem.querySelector(".event-name").textContent = capitalizeFirstLetter(newName);
            }
        });

        // Append to the event list
        eventList.appendChild(eventItem);

        // Clear the form
        form.reset();
    });

    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
});

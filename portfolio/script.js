// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("Your message has been sent successfully! ✅"); // Alert the user
    document.querySelector("form").submit(); // Submits the form after the alert
    return false;
}

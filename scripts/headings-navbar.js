function loadHeadingsNavbar() {
    const navbar = document.getElementById("headings-navbar");
    const headings = document.querySelectorAll("div > h2"); // find h2s inside divs

    let html = "<nav>";

    headings.forEach((h2) => {
        const parentId = h2.parentElement.id; // use the div’s ID
        if (parentId) {
            html += `<button onclick="location.href='#${parentId}'">${h2.textContent}</button>`;
        }
    });

    html += "</nav>";
    navbar.innerHTML = html;
}

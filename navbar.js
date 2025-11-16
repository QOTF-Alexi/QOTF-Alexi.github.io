function loadNavbar() {
    const navbarHTML = `
    <nav>
      <button onclick="location.href = '../index.html';">Main Page</button>
      <button onclick="location.href = '../trans.html';">The Transitioning</button>
      <button onclick="location.href = '../docs.html';">Random Things</button>
    </nav>
  `;
    document.getElementById("navbar").innerHTML = navbarHTML;
}
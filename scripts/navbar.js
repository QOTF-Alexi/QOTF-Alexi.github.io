function loadNavbar() {
    document.getElementById("navbar").innerHTML = `
    <nav>
      <button onclick="location.href = '../index.html';">Main Page</button>
      <button onclick="location.href = '../trans.html';">The Transitioning</button>
      <button onclick="location.href = '../tech.html';">Tech Things</button>
      <button onclick="location.href = '../randomthoughts.html';">Random Stuff</button>
    </nav>
  `;
}
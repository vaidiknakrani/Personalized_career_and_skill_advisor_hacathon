// Function to change the background gradient based on mouse position
document.addEventListener('mousemove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  const body = document.querySelector('body');
  body.style.background = `linear-gradient(${x * 360}deg, #ff0099, #00bfff, #ff5733, #ffcc00)`;
});


// Career suggestion logic
function suggestCareerPath() {
  const skills = document.getElementById("skills").value.toLowerCase();
  const resultContainer = document.getElementById("result-container");

  if (skills) {
    let suggestion = "";
    if (skills.includes("java")) {
      suggestion = "Software Developer, Backend Developer, Data Scientist";
    } else if (skills.includes("python")) {
      suggestion = "Data Scientist, Machine Learning Engineer, Web Developer";
    } else if (skills.includes("data analysis")) {
      suggestion = "Data Analyst, Business Analyst, Market Research Analyst";
    } else {
      suggestion = "UI/UX Designer, Product Manager, Project Manager";
    }

    resultContainer.innerHTML = `
      <h3>Suggested Career Paths:</h3>
      <p>${suggestion}</p>
    `;
    resultContainer.style.display = "block";
  } else {
    resultContainer.style.display = "none";
    alert("Please enter your skills to get recommendations.");
  }
}

// Dummy data for testing matching functionality
const users = [
    { name: "Chandan", know: "English", learn: "Spanish" },
    { name: "Abhishek", know: "coding", learn: "painting" },
    { name: "Amardeep", know: "painting", learn: "coding" },
    { name: "Ankush", know: "music", learn: "coding" },
    {name : "ranveer", know : "coding", learn : "music"},
    { name: "Amar", know: "python", learn: "java" },
    { name: "Ashu", know: "python", learn: "java" },
    {name : "Raj", know : "java", learn : "python"},
    {name : "Anshu", know : "java", learn : "python"}
   

];

// Function to navigate to the next step
function goToNextStep() {
    const step1 = document.getElementById("step1");
    const knowInput = document.getElementById("know").value.trim();

    if (knowInput === "") {
        alert("Please enter the skill you know.");
        return;
    }

    step1.classList.add("hidden"); // Hide Step 1
    const step2 = document.getElementById("step2");
    step2.classList.remove("hidden"); // Show Step 2
}

// Function to simulate a search match
function searchSwap() {
    const knowValue = document.getElementById("know").value.trim().toLowerCase();
    const learnValue = document.getElementById("learn").value.trim().toLowerCase();

    // Show the loader
    const loader = document.getElementById("loader");
    loader.style.display = "block";

    // Clear previous results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    setTimeout(() => {
        loader.style.display = "none";

        if (knowValue && learnValue) {
            // Find matching users
            const matches = users.filter(user =>
                user.know.toLowerCase() === learnValue &&
                user.learn.toLowerCase() === knowValue
            );

            if (matches.length > 0) {
                // Display results in card format
                matches.forEach(match => {
                    const card = document.createElement("div");
                    card.className = "result-card";
                    card.innerHTML = `
                        <h3>${match.name}</h3>
                        <p>Can teach: ${match.know}</p>
                        <p>Wants to learn: ${match.learn}</p>
                    `;
                    resultsDiv.appendChild(card);
                });
            } else {
                resultsDiv.innerHTML = "<p>No matches found. Try different skills.</p>";
            }
        } else {
            resultsDiv.innerHTML = "<p>Please fill in both fields to find a match.</p>";
        }
    }, 2000); // Simulate loading time
}

/* body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #f5f7fa, #c3cfe2);
}

header {
    background-color: #0bb2c8;
    color: white;
    padding: 1em; /* Increased padding for a taller navbar */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

header h1 {
    font-size: 2em; /* Made larger */
    font-weight: bold; /* Bold text */
    margin: 0;
    text-align: center;
    flex-grow: 1;
}
header nav {
    margin: 0;
}
nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 1em;
    font-weight: bold;
    font-size: 1.2em; /* Slightly larger */
}


nav a:hover {
    text-decoration: underline;
}

main {
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


h2 {
    color: #444;
    font-size: 1.8em;
}

.task {
    background: white;
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 1.5em 0; /* Added vertical spacing between tasks */
    max-width: 500px;
    width: 100%; /* Ensure consistent width */
    text-align: center; /* Center text inside tasks */
    position : relative;
}
.task h3 {
    font-size: 1.5em;
    margin: 0.5em 0;
    color: #333;
}

.task p {
    margin: 0.5em 0;
    font-size: 1em;
    color: #666;
}

.bid-input {
    width: calc(100% - 20px);
    padding: 0.5em;
    margin-bottom: 0.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.bid-btn {
    padding: 0.5em 1em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.bid-btn:hover {
    background-color: #0056b3;
}

.bid-container {
    margin-top: 1em;
    background: #f1f1f1;
    padding: 0.5em;
    border-radius: 5px;
    font-size: 0.9em;
    color: #333;
}

.large-btn {
    display: inline-block;
    padding: 0.8em 2em;
    font-size: 1em;
    font-weight: bold;
    background: #28a745;
    color: white;
    text-align: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1em;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.large-btn:hover {
    background: #218838;
}

.modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 1.5em;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 500px;
    z-index: 1000;
}

.modal-content {
    margin: 0 auto;
    text-align: center;
}

.close {
    position: absolute;
    top: 10px;
    right: 15px;
    color: #aaa;
    font-size: 1.5em;
    cursor: pointer;
}

.close:hover {
    color: black;
} */







// swap-shot.css



General Body Styling
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
}

/* Navbar */
header {
    background-color: #4db3ba;
    color: white;
    padding: 1em 2em;
    position: sticky;
    top: 0;
    z-index: 100;
}

header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-size: 1.8em;
    text-align: center;
}

.nav-links a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    margin: 0 1em;
    font-size: 1.1em;
}

.nav-links a:hover {
    text-decoration: underline;
}

/* Main Section */
main {
    padding: 3em 1em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

/* Skill Swap Cards */
.step-card {
    background: white;
    padding: 2em;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    text-align: center;
    transition: opacity 0.5s;
}

.hidden {
    display: none;
}

.input-field {
    width: 80%;
    padding: 0.7em;
    margin: 1em 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

.large-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.8em 1.5em;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.large-btn:hover {
    background-color: #45a049;
    transform: scale(1.05);
}

/* Loader and Results */
.loader {
    margin: 2em auto;
    border: 8px solid #f3f3f3;
    border-top: 8px solid #4CAF50;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.results p {
    margin-top: 1em;
    font-size: 1.1em;
    color: #555;
}

/* Result Card Styles */
.result-card {
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    text-align: center;
    width: 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.result-card h3 {
    color: #4CAF50;
    margin-bottom: 0.5em;
}

.result-card p {
    margin: 0.5em 0;
}

/* Adjust display to inline-flex */
.results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
}

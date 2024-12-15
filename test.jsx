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



/* General Body Styling */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    overflow-x: hidden;
}

/* Navbar */
header {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    color: white;
    padding: 1.2em 2em;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-size: 2.5em;
    font-weight: bold;
    text-shadow: 0 2px 5px rgba(255, 255, 255, 0.3);
}

.nav-links a {
    color: white;
    text-decoration: none;
    margin: 0 1.5em;
    font-size: 1.2em;
    transition: color 0.3s, text-shadow 0.3s;
}

.nav-links a:hover {
    color: #4db3ba;
    text-shadow: 0 3px 5px rgba(255, 255, 255, 0.5);
}

/* Main Section */
main {
    padding: 3em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    text-align: center;
}

/* 3D Glassmorphism Cards */
.step-card {
    
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(255, 255, 255, 0.1) inset;
    padding: 2em;
    text-align: center;
    transition: transform 0.4s, box-shadow 0.4s;
    margin: 2em 0;
    width: 85%;
    max-width: 500px;
    
}

.step-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 5px 20px rgba(255, 255, 255, 0.2) inset;
}

.hidden {
    display: none;
}

/* Input Fields */
.input-field {
    width: 85%;
    padding: 0.9em;
    margin: 1.5em 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-size: 1em;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(10px);
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: border-color 0.3s;
}

.input-field:focus {
    border-color: #4db3ba;
    outline: none;
    
}

/* Neon Buttons */
.large-btn {
    background: linear-gradient(90deg, #ff8c00, #ff0080);
    color: white;
    border: none;
    padding: 0.9em 2.5em;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 12px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(255, 0, 128, 0.5), 0 0 15px rgba(255, 128, 0, 0.4);
}

.large-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 15px rgba(255, 0, 128, 0.8), 0 0 20px rgba(255, 128, 0, 0.6);
}

/* Neon Loader */
.loader {
    margin: 2em auto;
    border: 8px solid rgba(255, 255, 255, 0.1);
    border-top: 8px solid #ff8c00;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 1s linear infinite;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 128, 0, 0.6);
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Results */
.results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    margin-top: 2em;
    max-width: 100%;
}

.result-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 16px;
    margin: 8px;
    text-align: center;
    width: 280px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(255, 255, 255, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.result-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(255, 255, 255, 0.2);
}

.result-card h3 {
    color: #ff8c00;
    text-shadow: 0 3px 5px rgba(255, 128, 0, 0.7);
    margin-bottom: 0.5em;
}

.result-card p {
    margin: 0.5em 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1em;
}



// second 



/* General Body Styling */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    overflow-x: hidden;
}

/* Navbar Styling */
header {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

header h1 {
    font-size: 1.8em;
    font-weight: 500;
}

.nav-links a {
    color: white;
    text-decoration: none;
    margin: 0 1em;
    font-weight: 400;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #4db3ba;
}

/* Main Content Styling */
main {
    padding: 2em;
    text-align: center;
}

/* Skill Swap Section */
#swap h2 {
    font-size: 2.5em;
    font-weight: 700;
    margin-bottom: 0.5em;
}

#swap .description {
    font-size: 1.2em;
    font-weight: 300;
    margin-bottom: 2em;
    line-height: 1.6;
}

/* Step Cards */
.step-card {
    margin: 2em auto;
    padding: 2em;
    max-width: 400px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}

.step-card h3 {
    font-size: 1.5em;
    margin-bottom: 1em;
}

.hidden {
    display: none;
}

/* Input Fields */
.input-field {
    width: 85%;
    padding: 0.9em;
    margin: 1.5em 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-size: 1em;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(10px);
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: border-color 0.3s;
}

/* Placeholder Styling */
.input-field::placeholder {
    color: white;
    opacity: 0.8;
    font-style: italic;
}

.input-field:focus {
    border-color: #4db3ba;
    outline: none;
}

/* Buttons */
.large-btn {
    padding: 0.8em 2em;
    background: #4db3ba;
    border: none;
    border-radius: 25px;
    color: white;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.large-btn:hover {
    background-color: #3a999a;
    transform: scale(1.05);
}

/* Loader Animation */
.loader {
    border: 5px solid rgba(255, 255, 255, 0.2);
    border-top: 5px solid #4db3ba;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 2em auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Results Section */
.results {
    margin-top: 2em;
    padding: 1.5em;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* Footer Styling */
footer {
    background: rgba(0, 0, 0, 0.8);
    padding: 1em 0;
    text-align: center;
    font-size: 0.9em;
    color: #ccc;
    margin-top: 3em;
}

footer p {
    margin: 0;
}

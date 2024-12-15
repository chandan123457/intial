function showTaskForm() {
    const taskModal = document.getElementById('taskModal');
    taskModal.style.display = 'block';
}

function closeTaskForm() {
    const taskModal = document.getElementById('taskModal');
    taskModal.style.display = 'none';
}

function postTask() {
    const taskName = document.getElementById('taskName').value.trim();
    const taskDesc = document.getElementById('taskDesc').value.trim();
    const taskList = document.getElementById('taskList');

    if (taskName && taskDesc) {
        const newTask = `
            <div class="task">
                <h3>${taskName}</h3>
                <p>${taskDesc}</p>
                <p><strong>Posted by:</strong> Ankush</p>
                <input type="text" class="bid-input" placeholder="Enter your bid">
                <button class="bid-btn" onclick="handleBid(this)">Submit Bid</button>
                <div class="bid-container"></div>
            </div>
        `;
        taskList.innerHTML += newTask;
        closeTaskForm();
    } else {
        alert('Please fill out all fields before submitting.');
    }
}

function handleBid(button) {
    const taskBlock = button.closest('.task');
    const bidInput = taskBlock.querySelector('.bid-input');
    const bidContainer = taskBlock.querySelector('.bid-container');
    const bidValue = bidInput.value.trim();

    if (bidValue) {
        const userName = 'Ankush';
        const bidMessage = `<p><strong>${userName} bidded:</strong> ₹${bidValue}</p>`;
        bidContainer.innerHTML = bidMessage;
        bidInput.value = '';
    } else {
        alert('Please enter your bid amount.');
    }
}

// Retaining dummy data for tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const dummyTasks = [
        {name: 'Translate a document', desc: 'Translate a 10-page document from English to Japanese.', poster: 'Chandan'},
        {name: 'Web development help', desc: 'Help me debug my React application.', poster: 'Abhishek'},
        {name: 'Graphic design', desc: 'Create a logo for my startup.', poster: 'Akshay'},
        {name: 'Content Writing', desc: 'Write SEO-friendly articles for my blog.', poster: 'Amardeep'},
        {name: 'Data Analysis', desc: 'Analyze a set of data and provide insights.', poster: 'Sonu'}
    ];
    taskList.innerHTML = dummyTasks.map(task => `
        <div class="task">
            <h3>${task.name}</h3>
            <p>${task.desc}</p>
            <p><strong>Posted by:</strong> ${task.poster}</p>
            <input type="text" class="bid-input" placeholder="Enter your bid">
            <button class="bid-btn" onclick="handleBid(this)">Submit Bid</button>
            <div class="bid-container"></div>
        </div>
    `).join('');
});

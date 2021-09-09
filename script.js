

function formatDate() {
    const dateNode = document.getElementById('showDate');
    setInterval(() => {
        const date = new Date();
        dateNode.textContent = date.toDateString() + ' ' + date.toLocaleTimeString('en-US');}, 1000);
}


formatDate();
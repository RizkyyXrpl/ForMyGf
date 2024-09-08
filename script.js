function sendMessage(event) {

    const url ="https://api.whatsapp.com/send?phone=6285758025548";

    window.open(url);
}

function toggleMessage() {
    var message = document.getElementById("hidden-message");
    var btn = document.getElementById("toggle-message-btn");
    if (message.style.display === "none") {
        message.style.display = "block";
        btn.textContent = "Tutup Pesan";
    } else {
        message.style.display = "none";
        btn.textContent = "Baca Pesan";
    }
}

// Pesan akan tertutup saat pertama kali halaman dibuka
window.onload = function() {
    document.getElementById("hidden-message").style.display = "none";
    document.getElementById("toggle-message-btn").textContent = "Baca Pesan";
}
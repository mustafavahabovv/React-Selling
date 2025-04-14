// Geri sayım taymeri üçün kod
// Hədəf tarixi təyin edirik: 20 Aprel 2025 (1 həftə sonra)
const targetDate = new Date('April 20, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    // Vaxtı həftə, gün, saat, dəqiqə və saniyəyə çeviririk
    const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // HTML-dəki elementləri yeniləyirik
    const countdownElement = document.getElementById('date-countdown');
    countdownElement.querySelectorAll('.countdown-block')[0].querySelector('.label').textContent = weeks < 10 ? '0' + weeks : weeks;
    countdownElement.querySelectorAll('.countdown-block')[1].querySelector('.label').textContent = days < 10 ? '0' + days : days;
    countdownElement.querySelectorAll('.countdown-block')[2].querySelector('.label').textContent = hours < 10 ? '0' + hours : hours;
    countdownElement.querySelectorAll('.countdown-block')[3].querySelector('.label').textContent = minutes < 10 ? '0' + minutes : minutes;
    countdownElement.querySelectorAll('.countdown-block')[4].querySelector('.label').textContent = seconds < 10 ? '0' + seconds : seconds;

    // Əgər vaxt bitibsə, taymeri sıfırlayaq
    if (timeDifference < 0) {
        clearInterval(countdownInterval);
        countdownElement.querySelectorAll('.countdown-block .label').forEach(label => label.textContent = '00');
    }
}

// Hər saniyədən bir yeniləyirik
const countdownInterval = setInterval(updateCountdown, 1000);

// İlk dəfə dərhal yeniləyirik
updateCountdown();

// Kontakt forması üçün kod
var form = document.getElementById('form');

form.onsubmit = function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name == '' || email == '' || subject == '' || message == '') {
        alert('Fill all fields!');
        return;
    }

    var data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(res) {
        return res.json();
    })
    .then(function() {
        alert('Sent!');
        form.reset();
    });
};
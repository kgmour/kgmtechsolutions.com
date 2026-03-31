// Email
var u = ‘kevin’; var dom = ‘kgmtechsolutions.com’;
var el = document.getElementById(‘footerEmail’);
if (el) el.textContent = u + ‘@’ + dom;

// Carousel
var track = document.getElementById(‘carouselTrack’);
var dots = document.querySelectorAll(’.carousel-dot’);
var current = 0;
var total = 6;

function goTo(index) {
current = ((index % total) + total) % total;
track.style.transform = ‘translateX(-’ + (current * 100) + ‘%)’;
dots.forEach(function(dot, i) {
dot.classList.toggle(‘active’, i === current);
});
}

document.getElementById(‘nextBtn’).addEventListener(‘click’, function() { goTo(current + 1); });
document.getElementById(‘prevBtn’).addEventListener(‘click’, function() { goTo(current - 1); });
dots.forEach(function(dot) {
dot.addEventListener(‘click’, function() { goTo(parseInt(dot.dataset.index)); });
});

setInterval(function() { goTo(current + 1); }, 8000);

// Form
document.getElementById(‘contactForm’).addEventListener(‘submit’, function(e) {
e.preventDefault();
var form = this;
var data = new FormData(form);
fetch(‘https://formspree.io/f/xykbjvpn’, {
method: ‘POST’,
body: data,
headers: { ‘Accept’: ‘application/json’ }
}).then(function(response) {
if (response.ok) {
document.getElementById(‘formSuccess’).style.display = ‘block’;
form.reset();
setTimeout(function() {
document.getElementById(‘formSuccess’).style.display = ‘none’;
}, 6000);
} else {
alert(‘Something went wrong. Please email kevin@kgmtechsolutions.com directly.’);
}
}).catch(function() {
alert(‘Something went wrong. Please email kevin@kgmtechsolutions.com directly.’);
});
});

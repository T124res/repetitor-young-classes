// Кнопка для повернення на головну
function scrollToHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

// Обробка форми
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Забороняємо стандартну відправку
    alert('Дякуємо за вашу заявку!');
});

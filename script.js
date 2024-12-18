document.getElementById('contactForm').addEventListener('submit', function(e) {    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;    const message = document.getElementById('message').value;
    alert(`Дякуємо за ваше повідомлення, ${name}! Ми зв’яжемося з вами на адресу ${email}.`);
});

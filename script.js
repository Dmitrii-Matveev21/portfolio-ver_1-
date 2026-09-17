// Объявление функции
function getGreeting(userName, userAge, userJob) {
    return `Привет, меня зовут ${userName}, мне ${userAge} год, моя профессия ${userJob}.`
}
// Вызов функции (запуск)
let myGreeting = getGreeting('Dima', 21, 'It');
let friendGreeting = getGreeting('Misha', 18, 'Python developer');
console.log(friendGreeting, myGreeting);
// 1. Находим кнопку с классом .my-btn
const myButton = document.querySelector('.btn-top');

myButton.addEventListener('click',function(event){
    event.preventDefault(); // Отменяем резкий прыжок по умолчанию

    myButton.textContent = "Едем наверх! 🚀"
    myButton.classList.toggle('active-btn');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    console.log("Кнопка Наверх была нажата!")
});
// 1. Находим кнопку и само меню
const menuButton = document.querySelector('.menu-btn')
const shapkaMenu = document.querySelector('.shapka')
// 2. Навешиваем клик
menuButton.addEventListener('click', function(){
    shapkaMenu.classList.toggle('show');
});
// --- Массив проектов и динамический рендеринг ---
const projectsLists = [
    { title: 'Дима-портфолио', tech: 'HTML, CSS, JS'},
    { title: 'Второй учебный проект', tech: 'JavaScript DOM'}
];
// Находим контейнер для карточек
 const projectsContainer = document.querySelector('.projects-container')
//Перебираем массив и добавляем карточки на страницу
projectsLists.forEach(function(item) {
     projectsContainer.innerHTML += `
     <div class='project-card'>
     <h3>${item.title}</h3>
     <p>Технологии: ${item.tech}</p>
     </div>
     `;
     console.log(item.title)   
});
// Находим форму на странице
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event){
        // Отменяем перезагрузку страницы
        event.preventDefault();
        // Находим поля ввода
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        // Забираем значение из полей
        const userName = nameInput ? nameInput.value.trim() : '';
        const userEmail = emailInput ? emailInput.value.trim() : '';
        // проверяем заполнение
        if (userName === '' || userEmail === '') {
            alert('Пожалуйста, заполните все поля!');
        }else {
            // Уведомляем пользователя
            alert(`Спасибо за заполнение ${userName}!`);
             
            //очистка формы
            contactForm.reset();
        }
    });
}

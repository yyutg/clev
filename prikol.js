//Для проверки
document.getElementById('main-header').addEventListener('click', function() {
    console.log('Click event on H1 triggered');
    alert('Вы кликнули на заголовок!'); // Добавим уведомление при клике
});

// Получаем элемент изображения студента
const studentPhoto = document.getElementById('student-photo');

// Обработчик наведения мыши на изображение
studentPhoto.addEventListener('mouseover', function() {
    console.log('Mouse over event triggered');
    this.style.transform = 'scale(1.1)';
});

// Обработчик ухода мыши с изображения
studentPhoto.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)'; // Возвращаем размер при уходе мыши
});

// Обработчик клика на изображение
studentPhoto.addEventListener('click', function() {
    console.log('Click event triggered');
    this.src = 'logo.png';
    this.alt = 'Фото любимого преподавателя';
});

// Обработчик двойного клика на изображение
studentPhoto.addEventListener('dblclick', function() {
    console.log('Double click event triggered');
    this.src = 'default-photo.png'; // Возвращаем изображение по двойному клику
    this.alt = 'Фото студента';
});

// Обработчик клика на кнопку смены практик
document.getElementById('change-practices').addEventListener('click', function() {
    console.log('Change practices button clicked');
    const practicesTableBody = document.querySelector('#practices-table tbody');
    const button = document.getElementById('change-practices');

    // Меняем текст кнопки и содержимое таблицы практик
    if (button.textContent === 'Посмотреть практики второго семестра') {
        button.textContent = 'Посмотреть практики первого семестра';
        console.log('Switching to second semester topics');
        // Здесь можно добавить код для обновления содержимого таблицы
        practicesTableBody.innerHTML = `
            <tr>
                <td>Практика 1</td>
                <td>Описание практики 1 второго семестра</td>
            </tr>
            <tr>
                <td>Практика 2</td>
                <td>Описание практики 2 второго семестра</td>
            </tr>`;
    } else {
        button.textContent = 'Посмотреть практики второго семестра';
        console.log('Switching to first semester topics');
        // Здесь можно добавить код для обновления содержимого таблицы
        practicesTableBody.innerHTML = `
            <tr>
                <td>Практика 1</td>
                <td>Описание практики 1 первого семестра</td>
            </tr>
            <tr>
                <td>Практика 2</td>
                <td>Описание практики 2 первого семестра</td>
            </tr>`;
    }
});
  
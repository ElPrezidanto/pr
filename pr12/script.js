document.addEventListener('DOMContentLoaded', function () {
    const notificationsContainer = document.getElementById('notifications-container');
    const maxNotifications = 3;
    const notifications = [];
    let count = 0;
    let stopCounter = false;

    function createNotification() {
        if (stopCounter) {
            return; // Если счетчик остановлен, не создавать новые уведомления
        }

        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = `Новое уведомление №${count + 1}`;
        count++;
        notifications.unshift(notification);

        // Ограничиваем количество отображаемых уведомлений
        if (notifications.length > maxNotifications) {
            const removedNotification = notifications.pop();
            removedNotification.remove();
        }

        notificationsContainer.innerHTML = '';

        for (const notif of notifications) {
            notificationsContainer.appendChild(notif);
            setTimeout(() => {
                notif.style.opacity = '1';
            }, 10);
        }
    }

    // Обработчик для кнопки остановки счетчика
    document.getElementById('stopButton').addEventListener('click', function () {
        stopCounter = true; // Останавливаем счетчик
        setTimeout(() => {
            stopCounter = false; // Восстанавливаем счетчик через 10 секунд
        }, 10000);
    });

    // Запуск функции создания уведомлений каждые 3 секунды
    setInterval(createNotification, 3000);

    function createListItem() {
        const userInput = prompt('Введите содержимое пункта списка:');

        // Проверка на отмену ввода или пустую строку
        if (userInput === null || userInput.trim() === '') {
            return;
        }

        // Создаем новый элемент списка
        const listItem = document.createElement('li');
        // Преобразуем введенный текст в текстовое содержимое
        listItem.textContent = userInput;

        // Добавляем элемент к списку
        document.getElementById('myList').appendChild(listItem);

        // Рекурсивный вызов функции для создания следующего пункта
        createListItem();
    }

    // Вызываем функцию для создания первого пункта списка
    createListItem();
});

function showNotification(options) {
    const notification = document.createElement('div');
    notification.className = 'notification4';
    notification.textContent = options.content;

    document.body.appendChild(notification);

    // Исчезание через 1,5 секунды
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 1500);
}

function showNotificationPrompt() {
    const userText = prompt('Введите текст для уведомления:');

    if (userText !== null && userText.trim() !== '') {
        showNotification({content: userText});
    }
}
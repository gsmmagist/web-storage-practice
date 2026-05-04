const noteField = document.getElementById('note');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');

const storageKey = 'savedNote';

// Восстановление заметки при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  const savedNote = localStorage.getItem(storageKey);

  if (savedNote !== null) {
    noteField.value = savedNote;
  }
});

// Сохранение заметки в Web Storage
saveBtn.addEventListener('click', () => {
  localStorage.setItem(storageKey, noteField.value);
});

// Очистка заметки из Web Storage и поля ввода
clearBtn.addEventListener('click', () => {
  localStorage.removeItem(storageKey);
  noteField.value = '';
});

const statusText = document.querySelector("#status");
const checkBtn = document.querySelector("#checkBtn");
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => {
      statusText.textContent = "SW зарегистрирован";
    })
  .catch (err => {
    statusText.textContent = "Запустите через localhost!";
  });
}
checkBtn.addEventListener("click", () => {
  statusText.textContent = navigator.onLine ? "Сеть есть" : "Офлайн!";
});
/**
 * ============================================================
 * main.js — главный скрипт для WeDo 2.0
 * ============================================================
 * Требует: jQuery (загружен до этого скрипта)
 * ============================================================
 */

$(document).ready(function () {
  // ============================================================
  // 1. КАРУСЕЛЬ — плавное появление
  // ============================================================
  $(".carousel-item").css("transition", "transform 0.8s ease-in-out");

  // ============================================================
  // 2. КНОПКА "ВНИЗ" — плавная прокрутка к футеру
  // ============================================================
  $(".scroll-down").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#footer").offset().top,
      },
      600,
    );
  });

  // ============================================================
  // 3. ПЕРЕКЛЮЧЕНИЕ ТЁМНОЙ/СВЕТЛОЙ ТЕМЫ
  // ============================================================
  const themeToggle = $("#themeToggle");
  const body = $("body");
  const icon = themeToggle.find("i");

  // Проверяем сохранённую тему в localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.addClass("dark-theme");
    icon.removeClass("fa-moon").addClass("fa-sun");
  }

  // Обработка клика по кнопке
  themeToggle.on("click", function () {
    body.toggleClass("dark-theme");

    if (body.hasClass("dark-theme")) {
      icon.removeClass("fa-moon").addClass("fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      icon.removeClass("fa-sun").addClass("fa-moon");
      localStorage.setItem("theme", "light");
    }
  });

  // ============================================================
  // 4. ЛОГ В КОНСОЛИ (для отладки)
  // ============================================================
  console.log("🚀 WeDo 2.0 с Bootstrap и jQuery загружен!");
});

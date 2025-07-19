const toggle = document.getElementById('modeToggle');
const icon = document.getElementById('modeIcon');

toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    icon.textContent = '🌙';
  } else {
    icon.textContent = '☀️';
  }
});
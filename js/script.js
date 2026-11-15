document.getElementById('leadForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  const phone = document.getElementById('phoneInput').value.trim();
  const consent = document.getElementById('consentInput').checked;
  const status = document.getElementById('statusMsg');
  if (!name || !phone) { alert('Пожалуйста, заполните имя и телефон'); return; }
  if (!consent) { alert('Необходимо согласие на обработку персональных данных'); return; }
  status.style.display = 'block';
  this.reset();
  setTimeout(function () { status.style.display = 'none'; }, 5000);
});

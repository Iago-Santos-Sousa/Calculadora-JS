const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.querySelector('input');


const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
});

// Verifica se recebe apenas os valores de allowedKeys, impedindo que o usuário digite letras mas sim apenas o que tem no array allowedKeys.
input.addEventListener('keydown', function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace' || ev.key === 'Delete') {
    input.value = input.value.slice(0, -1)
  }

  if (ev.key === 'Enter') {
    calculate()
  }

  // ev.key é a tecla associada ao evento
})

// Calcular
function calculate() {

  const result = eval(input.value)
  input.value = result

}
document.getElementById('equal').addEventListener('click', calculate)

// Limpar campos
document.getElementById('clear').addEventListener('click', function () {
  input.value = ''
  input.focus()
  input.value = ''


})



const formulario = document.querySelector('.input-sequence')
const selecao = formulario.getElementsByTagName('select')
const inputs = formulario.getElementsByTagName('input')
const iterableInputs = [...inputs]
const botaoForm = formulario.getElementsByTagName('button')[0]
console.log(formulario)
const imgFormLoad = formulario.getElementsByClassName('loading-img')[0]

formulario.onsubmit = e => {
  e.preventDefault()

  localStorage.clear()
  const selectedIndex = selecao[0].options.selectedIndex

  const selectedIndexTitle = selecao[0].options[selectedIndex].title
  const selectedIndexText = selecao[0].options[selectedIndex].innerText
  localStorage.setItem(selectedIndexTitle, selectedIndexText)

  iterableInputs.forEach(input => {
    const name = input.name
    const text = input.value || input.placeholder

    localStorage.setItem(name, text)
  })

  botaoForm.style.display = 'none'
  imgFormLoad.style.display = 'block'

  setInterval(() => {
    imgFormLoad.style.display = 'none'
    window.location.href += 'informacoes-investimento'
  }, 1000)
}
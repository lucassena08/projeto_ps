const formulario = document.querySelector('.input-sequence')
const selecao = formulario.getElementsByTagName('select')
const inputs = formulario.getElementsByTagName('input')
const iterableInputs = [...inputs]

formulario.onsubmit = () => {
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
}
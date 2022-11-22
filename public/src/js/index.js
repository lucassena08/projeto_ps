const formulario = document.querySelector('.input-sequence')
const selecao = formulario.getElementsByTagName('select')
const inputs = formulario.getElementsByTagName('input')
const iterableInput = [...inputs]

formulario.onsubmit = () => {
  localStorage.clear()
  const selectedIndex = selecao[0].options.selectedIndex
  
  const selectedIndexValue = selecao[0].options[selectedIndex].value
  const selectedIndexText = selecao[0].options[selectedIndex].innerText
  localStorage.setItem(selectedIndexValue, selectedIndexText)

  console.log(selectedIndexValue)
  console.log(selectedIndexText)

  iterableInput.forEach(input => {
    const name = input.name
    const text = input.value || input.placeholder

    console.log(name)
    console.log(text)
    localStorage.setItem(name, text)
  })
}
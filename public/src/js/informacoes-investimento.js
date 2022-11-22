const inputs = document.getElementsByTagName('input')
const iterableInputs = [...inputs]

iterableInputs.forEach(input => {
  const inputName = input.name
  const value = localStorage.getItem(inputName)
  
  input.value = value
})
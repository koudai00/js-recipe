const memoinput = document.getElementById("memo-input")
const button = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

button.onclick = function() {
  const card = createCard(memoinput.value)
  memocontainer.append(card)

  memoinput.value = ""
}

const createCard = function(Text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo-container"
  todo.textContent = Text
  card.append(todo)

  //削除ボタン出して消せるようにしたい
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.className = "delete-container"

  deleteButton.onclick = function() {
    card.remove()
  }
  card.append(deleteButton)

  return card
}

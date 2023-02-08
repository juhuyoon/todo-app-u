let formInput = document.querySelector("#formInput");

console.log(formInput);

formInput.addEventListener("submit", async (event) => {
  event.preventDefault();
  let todoInput = document.querySelector("#todo-input").value.trim();
  console.log(todoInput);
  const info = await fetch("/todo", {
    method: "POST",
    body: JSON.stringify({
      todoInput,
    }),
    headers: { "Content-Type": "application/json" },
  });
});

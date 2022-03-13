function nextId() {
  const coffees = readAll();
  const ids = coffees.map((coffee) => coffee.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}

function load(newCoffees) {
  localStorage.setItem('coffees-app:coffees', JSON.stringify(newCoffees));
}

function create(coffee) {
  coffee = { id: nextId(), ...coffee };
  const coffees = readAll();
  const newCoffees = [...coffees, coffee];
  load(newCoffees);
  return coffee;
}

function readAll() {
  return JSON.parse(localStorage.getItem('coffees-app:coffees'));
}

function read(id) {
  const coffees = readAll();
  const coffee = coffees.find((coffee) => coffee.id === id);
  return ;
}


export default { load, create, readAll, read};
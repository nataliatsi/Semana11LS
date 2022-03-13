import dataset from './dataset.js';
import coffees from './coffee.js';

const formCoffee = document.querySelector('#formCoffee');
coffees.load(dataset);

for (const coffee of coffees.readAll()) {
  const card = createCoffeeCard(coffee);
}

function createCoffeeCard(coffee) {
  const card = `<div class="row ">
      <div class="col-sm-6" style="width:15rem;">
        <div class="card">
          <img class="card-img-top" src="${coffee.imagem}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${coffee.nome}</h5>
            <p class="card-text">${coffee.descrição}</p>
            <p class="card-text">${coffee.preço}</p>
          </div>
      </div>
  </div>`;
  const cardDeck = document.querySelector('.card-section');
  cardDeck.insertAdjacentHTML('beforeend', card);
}

formCoffee.onsubmit = (e) => {
  e.preventDefault();

  const coffee = Object.fromEntries(new FormData(formCoffee));
  const newCoffee = coffees.create(coffee);
  createCoffeeCard(newCoffee);

  $('#exampleModal').modal('toggle');
};

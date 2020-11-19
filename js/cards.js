// Stored variables
const parentEl = document.querySelector('.cards');

// JSON-Server code

const cardData = async () => {
  let uri = 'http://localhost:3000/cards';

  const response = await fetch(uri);
  const cards = await response.json();

  let cardTemplate = '';

  cards.forEach( card => {
    cardTemplate += `
    <div class="usa-card desktop:grid-col-3 tablet:grid-col-4 mobile-lg:grid-col-6 grid-col-12">
      <div class="usa-card__container">
        <header class="usa-card_header">
          <h5 class="usa-card__heading">${card.title}</h5>
        </head>

        <div class="usa-card__body">
          <p>${card.data}</p>
        </div>
        
        <div class="usa-card__footer">
          <button class="usa-button"><i class="fas fa-exclamation-circle"></i>INFO</button>
          <button class=""><i class="fas fa-external-link-alt"></i>GO TO APP</button>
        </div>
      </div>
    </div>
    `

  });

  parentEl.innerHTML = cardTemplate;
}

window.addEventListener('DOMContentLoaded', () => cardData());
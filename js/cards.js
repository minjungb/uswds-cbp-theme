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
      <div class="usa-card__container" style="height: 280px; overflow-y: hidden">
        <header class="usa-card_header">
          <h5 class="usa-card__heading">${card.title}</h5>
        </head>

        <div class="usa-card__body" style="padding: 0 !important">
          <p>${card.data}</p>
        </div>
        
        <div class="usa-card__footer" style="justify-content: space-between; display: flex; padding-left: 0; padding-right: 0">
          <button class="usa-button usa-button--outline" style="height: 40px"><i class="fas fa-exclamation-circle"></i>INFO</button>
          <button class="usa-button" style="height: 40px"><i class="fas fa-external-link-alt"></i>GO TO APP</button>
        </div>
      </div>
    </div>
    `

  });

  parentEl.innerHTML = cardTemplate;
}

window.addEventListener('DOMContentLoaded', () => cardData());
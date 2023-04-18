const axios = require('axios');

const INFOCASAS_API = 'https://graph.infocasas.com.uy/graphql'

const propertyId = process.argv[2]; // Get the property ID from the command line argument

const query = `
  query {
    property(id: ${propertyId}) {
      price {
        amount
        currency {
          name
        }
      }
    }
  }
`;

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Origin': 'www.infocasas.com.uy'
};

axios.post(INFOCASAS_API, { query }, { headers })
  .then(response => {
    if(response.data.data.property === null) return console.log(`price not found for id ${propertyId}`)

    const data = response.data.data.property.price;

    console.log(`${data.currency.name} ${data.amount} `);
  })
  .catch(error => console.error(error));

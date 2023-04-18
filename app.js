// Import the Axios library
const axios = require('axios');

// Set the API URL
const INFOCASAS_API = 'https://graph.infocasas.com.uy/graphql'

// Get the property ID from the command line argument
const propertyId = process.argv[2];

// Define an asynchronous function to get the property price
async function getPropertyPrice(Id) {

  // Set the GraphQL query to retrieve the property price
  const query = `
    query {
      property(id: ${Id}) {
        price {
          amount
          currency {
            name
          }
        }
      }
    }
  `;

  // Set the HTTP request headers
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Origin': 'www.infocasas.com.uy'
  };

  // Make the HTTP request using Axios
  axios.post(INFOCASAS_API, { query }, { headers })
    .then(response => {
      // If the property is not found, return an error message
      if(response.data.data.property === null) return console.log(`price not found for id ${Id}`)

      // If the property is found, return the price in the corresponding currency
      const data = response.data.data.property.price;
      return console.log(`${data.currency.name} ${data.amount} `);
    })
    .catch(error => console.error(error));
}

// Call the function to get the property price
getPropertyPrice(propertyId);

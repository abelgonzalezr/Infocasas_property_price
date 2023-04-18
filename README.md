# InfoCasas Property Price

## How to use

### Installation

npm install


### Usage

node app.js [property_id]

## Description

This Node.js application allows you to retrieve the price of a property from the InfoCasas API. Simply run the command `node app.js [property_id]`, replacing `[property_id]` with the ID of the property you wish to retrieve the price for.

The application will make a GraphQL request to the InfoCasas API with the provided property ID, and will return the price in the following format: `[currency] [price]`.

## Example

node app.js 189771624


This will return the price of the property with ID `189771624`, in the following format:

USD 270000



/// <reference types="cypress" />

// Elements
const logoutButton = '.user > .btn'
const createClient = '#app > div > h2 > a'

// Actions / Functions
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function createClients(cy, contentToConfirm){
    cy.get(createClient).click()
    cy.contains(contentToConfirm)

}

// Exports
module.exports = {
   performLogout,
   createClients
}
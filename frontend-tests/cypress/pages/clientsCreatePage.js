/// <reference types="cypress" />

// Elements
const logoutButton = '.user > .btn'
const nameField = '#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]'
const emailField = '#app > div > div:nth-child(2) > div:nth-child(2) > input[type=email]'
const telephoneField = '#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]'
const saveClientButton = '#app > div > div.actions > a.btn.blue'

// Actions / Functions
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function clientFormular(cy, contentToConfirm){
    cy.get(nameField).type('Tester123')
    cy.get(emailField).type('tester123@test.com')
    cy.get(telephoneField).type('123456789')
    cy.get(saveClientButton).click()
    cy.contains(contentToConfirm)
}

// Exports
module.exports = {
    performLogout,
    clientFormular
}
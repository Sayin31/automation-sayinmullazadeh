/// <reference types="cypress" />

// Elements
const titleOfIndexPage = 'Testers Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'

// Actions / Functions

function checkTitleOfIndexPage(cy){
    cy.title().should('eq', titleOfIndexPage)
}

function performValidLoginUserOne(cy, username, password, contentToConfirm){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}

function performInvalidLogin(cy, password){
    cy.get(usernameTextfield).type('username test 123')
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains('Bad username or password')
    cy.reload()
}

function performValidLoginUserTwo(cy, usernameTwo, passwordTwo, contentToConfirm){
    cy.get(usernameTextfield).type(usernameTwo)
    cy.get(passwordTextField).type(passwordTwo)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}


// Exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLoginUserOne,
    performInvalidLogin,
    performValidLoginUserTwo,
}
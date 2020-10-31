/// <reference types="cypress" />

// Elements
const logoutButton = '.user > .btn'
const editAvailable101 = '#app > div > div:nth-child(2) > div:nth-child(6) > div'
const editSaveButton = '#app > div > div.actions > a.btn.blue'

// Actions / Functions
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function pushAvailableButton(cy){
    cy.get(editAvailable101).click()
}

function saveEdit(cy, contentToConfirm){
    cy.get(editSaveButton).click()
    cy.contains(contentToConfirm)
}


// Exports
module.exports = {
    performLogout,
    pushAvailableButton,
    saveEdit
}
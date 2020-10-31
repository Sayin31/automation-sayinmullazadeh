/// <reference types="cypress" />

// Elements
const backButton = '#app > div > div:nth-child(3) > a'
const logoutButton = '.user > .btn'
const editButton101 = '#app > div > div.rooms > div:nth-child(1) > div.action > img'
const editSubButton101 = '#app > div > div.rooms > div:nth-child(1) > div.menu > a:nth-child(1)'

// Actions / Functions
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function editRoom101(cy, contentToConfirm){
    cy.get(editButton101).click()
    cy.get(editSubButton101).click()
    cy.contains(contentToConfirm)
}

// Exports
module.exports = {
    performLogout,
    editRoom101
}
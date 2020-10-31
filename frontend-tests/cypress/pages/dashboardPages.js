/// <reference types="cypress" />

// Elements
const logoutButton = '.user > .btn'
const roomPageButton = '#app > div > div > div:nth-child(1) > a'
const clientsPageButton = '#app > div > div > div:nth-child(2) > a'
const billsPageButton = '#app > div > div > div:nth-child(3) > a'
const reservationsPageButton = '#app > div > div > div:nth-child(3) > a'

// Actions / Functions
function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function chooseRoomPage(cy, contentToConfirm){
    cy.get(roomPageButton).click()
    cy.contains(contentToConfirm)
}

function chooseClientsPage(cy, contentToConfirm){
    cy.get(clientsPageButton).click()
    cy.contains(contentToConfirm)
}

function chooseBillsPage(cy, contentToConfirm){
    cy.get(billsPageButton).click()
    cy.contains(contentToConfirm)
}

function chooseReservationsPage(cy, contentToConfirm){
    cy.get(reservationsPageButton).click()
    cy.contains(contentToConfirm)
}


// Exports
module.exports = {
    performLogout,
    chooseRoomPage,
    chooseClientsPage,
    chooseBillsPage,
    chooseReservationsPage
}
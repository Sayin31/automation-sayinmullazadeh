/// <reference types="cypress" />

    // Imports
    import * as indexFuncs from '../pages/indexPage'
    import * as dashBoardFuncs from '../pages/dashboardPages'
    import * as targets from '../targets/targets'
    import * as roomFuncs from '../pages/roomPage'
    import * as roomOneEdit from '../pages/roomOne'
    import * as clientsFuncs from '../pages/clientsPage'
    import * as clientsCreation from '../pages/clientsCreatePage'

// Test suite
describe('Tester Hotel', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })
    // Test case
    it('Perform login and logout', function(){
        indexFuncs.performValidLoginUserOne(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
    })

    it('Perform an invalid login, a correct login and then logout', function(){
        indexFuncs.performInvalidLogin (cy, targets.password)
        indexFuncs.performValidLoginUserOne(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
    })

    it('Perform login with many users', function(){
        indexFuncs.performValidLoginUserOne(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
        indexFuncs.performValidLoginUserTwo(cy, targets.usernameTwo, targets.passwordTwo, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
    })

    it('Change available room 101', function(){
        indexFuncs.performValidLoginUserOne(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.chooseRoomPage(cy, 'Rooms')
        roomFuncs.editRoom101(cy, 'ID')
        roomOneEdit.pushAvailableButton(cy)
        roomOneEdit.saveEdit(cy, 'Rooms')
        roomOneEdit.performLogout(cy, 'Login')
    })

    it('Create a new client', function(){
        indexFuncs.performValidLoginUserOne(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.chooseClientsPage(cy, 'Clients')
        clientsFuncs.createClients(cy, 'New Client')
        clientsCreation.clientFormular(cy, 'Clients')
        clientsFuncs.performLogout(cy, 'Login')
    })

    it('Visit all pages', function(){
        indexFuncs.performValidLoginUserOne(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.chooseRoomPage(cy, 'Rooms')
        cy.go('back')
        dashBoardFuncs.chooseClientsPage(cy, 'Clients')
        cy.go('back')
        dashBoardFuncs.chooseBillsPage(cy, 'Bills')
        cy.go('back')
        dashBoardFuncs.chooseReservationsPage(cy, 'Reservations')
        cy.go('back')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
})
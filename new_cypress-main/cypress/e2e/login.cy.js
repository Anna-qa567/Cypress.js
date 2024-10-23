describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт 

         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажала войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
         cy.get('#forgotEmailButton')
     })   
    

     it('Верный пароль и НЕверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт 

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('german@dolnkov.ru'); // Ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
        cy.get('#forgotEmailButton')
    })




    it('НЕверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт 

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio12'); // Ввели НЕверный пароль
        cy.get('#loginButton').click(); // Нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
        cy.get('#forgotEmailButton')
    })



    it('Вверный пароль и логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт 

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажала войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
        cy.get('#forgotEmailButton')
    })

    it('Строчные буквы в логине и вверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт 

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин строчными буквами 
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
        cy.get('#forgotEmailButton')
    }) 
    


    
    it('Проверка на восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт 

        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
        cy.get('#forgotEmailButton').click(); // Нажимаю "Забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту для восстановления 
        cy.get('#restoreEmailButton').click();  // Нажала отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на своподение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
        cy.get('#forgotEmailButton')
    }) 
})

 // План
 // Найти поле логин и ввести верный логин
 // Найти поле пароль и ввести верный пароль
 // Найти кнопку Войти и нажать на нее 
 // Проверить, что авторизация прошла успешно 
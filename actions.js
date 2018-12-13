
testScript( I, menu, login ) {
    const product = '//img[@src="/public/menu/thumbs/version_5/0287b497ad335203fe9bc9d9a0a2354a.jpg"]';
    const menuItem = `//div[@class="ands_block2"]//*[contains(text(), "${ menu }")]`;
    const adresComand = '//div[contains(@class, "ands_tipatab")]//a[contains(text(), "Adrese comenzilor")]';

    I.amOnPage('https://www.andys.md/');
    I.say(`Ожидаю меню ${ menu }, затем кликаю`);
    if( login === "register"){
        I.amOnPage('https://www.andys.md/ro/pages/register/');
        I.waitForElement('//input[@placeholder="Nume"]', 20);
        I.fillField('//input[@placeholder="Nume"]', "\">+<script>alert('XSS');</script>\"");
        I.fillField('//input[@placeholder="Telefon"]', "78901234");
        I.fillField('//input[@placeholder="e-mail"]', "\">+<script>alert('XSS');</script>\"+eewrw@yahoo.com");
        I.fillField('//input[@placeholder="Parola"]', "fhdhfgdhhjh54ryfthg");
        I.fillField('//input[@placeholder="Confirmați parola"]', "fhdhfgdhhjh54ryfthg");
        I.click('//input[@type="submit"]');
        I.click('//div[contains(@class, "ands_tipatab")]//a[contains(text(), "Adrese comenzilor")]');
        I.click('//a[@class="btn"]');
//        I.acceptPopup();
    }
    I.waitForElement( menuItem, 20 );
    I.click(menuItem);
    I.say('Выбираю продукт');
    I.waitForElement( product, 20 );
    I.scrollTo(product);
    I.click(product);
    I.scrollTo('.in a.buy');
    I.click('.in a.buy');
    I.scrollTo('//word[contains(text(),"Coșul tau")]');
    I.click('//word[contains(text(),"Coșul tau")]');
    I.click('//span[@class="ands_check_text"][contains(text(), "Livrare")]');
    I.click('//input[@value="Comandă"]');

    I.waitForElement( '//input[@placeholder="Nume"]', 20 );
    I.fillField( '//input[@placeholder="Nume"]', 'Maxim');
    I.fillField( '//input[@placeholder="Strada"]', "Studentilor");
    I.fillField( '//input[contains(@placeholder,"bloc")]', "01" );
    I.fillField( '//input[contains(@placeholder,"Ap.")]', "123");
    I.fillField( '//input[contains(@placeholder,"Scara")]', "4");
    I.fillField( '//input[contains(@placeholder,"Etajul")]', "5");
    I.fillField( '//input[@id="check_phone"]', "78123456");
    I.fillField( '//input[@placeholder="e-mail"]', "qwerty-testing@gmail.com" );

    I.click('//span[contains(text(),"Plata online")]');
    I.click('//input[contains(@value,"Continuare")]');
    I.waitForElement( '//a[@class="btn"]', 30 );
    I.click('//a[@class="btn"]');
    I.waitForElement( '//input[@id="approve"]', 30 );

};
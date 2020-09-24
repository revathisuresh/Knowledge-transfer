describe('Chain locators demo',function() {  


it('Open Angular js website',function() {
browser.get('https://dev.payschoolscentral.com/#/login');
//repeater ,  chain locators, And css for identical tags
element(by.xpath('/html/body/app-root/app-full-layout/app-login/div/form/div/div[2]/div[1]/div[1]/a/button')).click();

element(by.xpath('/html/body/app-root/app-full-layout/app-register/div/form/div/div[2]/div/mat-form-field[1]/div/div[1]/div/mat-select/div/div[2]/div')).click();
element(by.id("cdk-overlay-0")).element(by.css("mat-option:nth-child(2)")).click();


// element(by.model("operator")).element(by.css("option:nth-child(4)")).click();







})

})
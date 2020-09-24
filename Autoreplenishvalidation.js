
 //var driver = require("protarctor")

 describe('Login', function() {
	var obj=  require("./Jsobjectdemo.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
 // beforeEach(function(){
  it('psc url', function() {
	var EC = protractor.ExpectedConditions;

    obj.getURL();
	
	expect (browser.getTitle()).toBe('PaySchools Central');
  },500000);
 



	using(d.Datadriven, function (data, description) {
		

		    it('TS-'+description , function() {
				var EC = protractor.ExpectedConditions;

				browser.ignoreSynchronization = true;
				obj.getURL();
				
				//for(var i=0;i<=1;i++){
				obj.email1.sendKeys(data.email1);
				//console.log(data.email[i]);
				obj.password1.sendKeys(data.password1);
				obj.login.click().then(function(){
					browser.sleep(25000);

				});
				obj.cancel.click().then(function(){	 
					browser.sleep(5000);  
                });
                obj.autoreplenish.click().then(function(){
                    browser.sleep(10000);
                    });

                   /* obj.account.click().then(function(){
                        browser.sleep(5000);
                        });
				
                        obj.selectmeal.click().then(function(){
                            browser.sleep(5000);
                            });*/
                            obj.ballevel.click().then(function(){
                                browser.sleep(2000);
                              });
                          
                          
                              obj.ten$.click().then(function(){
                                browser.sleep(8000);
                              });

                              browser.executeScript('window.scrollTo(0,10000);').then(function () {

                              /*obj.datepick.click().then(function(){
                                browser.sleep(2000);
                              });
                              
                          

                              obj.dateselection.click().then(function(){
                                browser.sleep(8000);
                              });*/


                                obj.date.sendKeys(data.date).then(function(){
                                  browser.sleep(5000);
                                 });

                                //obj.clear.sendKeys(protractor.Keys(protractor.Keys.CONTROL,"a",protractor.Keys.DELETE)).then(function(){

                                 // browser.sleep(5000);
                               // });

                                 obj.date.clear().then(function(){
                              // obj.clear.clear().then(function(){
                                 browser.sleep(5000);
                                 // obj.clear.clear().then(function(){
                                });
                              
                              expect(obj.error.getText()).toBe(data.err);   
                                                      // });
                                                      
                              
                            });
                         
			 
		
		
				
				

});
	},25000000);
	afterEach(function(){
		console.log("Execution completed")
	});

	}); 













































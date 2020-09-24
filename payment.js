
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
				
			
				obj.email1.sendKeys(data.email1);
				//console.log(data.email[i]);
				obj.password1.sendKeys(data.password1);
				obj.login.click().then(function(){
					browser.sleep(25000);

				});
				obj.cancel.click().then(function(){	 
					browser.sleep(5000);  
                });
                
                obj.payment.click().then(function(){
					browser.sleep(8000);

                });

                obj.addbutton1.click().then(function(){
					browser.sleep(8000);

                });
      
            obj.paymentmethod.click().then(function(){
                    browser.sleep(8000);
          
                          });
                          obj.ACH.click().then(function(){
                    browser.sleep(8000);
          
                          });
                          obj.name1.sendKeys(data.name).then(function(){
                              browser.sleep(8000);
                        
                        });
                          
               
                                   obj.accounttype.click().then(function(){
                               browser.sleep(8000);

                                          });
                                         // obj.dropclose.sendKeys(protractor.Key.ESCAPE);
                                         // browser.actions().sendKeys(protractor.Key.ESCAPE);
                              obj.checking.click().then(function(){
                                       browser.sleep(8000);
                 
                                  });
                                                                      
                          
                         obj.account.sendKeys(data.number2).then(function(){
                              browser.sleep(8000);
                                                
                              });
                              obj.routing.sendKeys(data.routing).then(function(){
                                    browser.sleep(8000);
                                                      
                                    });
                                    obj.checkbox3.click().then(function(){
                                          browser.sleep(8000);
                   
                                    });
                                    obj.checkbox4.click().then(function(){
                                          browser.sleep(8000);
                   
                                    });
                                    obj.addbutton.click().then(function(){
                                          browser.sleep(8000);
                   
                                    }); 
                          
                         //expect(obj.error7.getText()).toBe(data.error6);   
                         // expect(obj.error8.getText()).toBe(data.error7); 
                          //expect(obj.error12.getText()).toBe(data.error11);   
                          expect(obj.error13.getText()).toBe(data.error12)
                          obj.error13.getText().then(function(text){
                              console.log(text);
                              browser.sleep(1000);
                        
                        });
                        
                          
                              
                         // expect(obj.error11.getText()).toBe(data.error10);   




                        



                  },25000000);
               
            });
afterEach(function(){
      console.log("Execution completed");
});
});

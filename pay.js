
 //var driver = require("protarctor")

 describe('Login', function() {
	var obj=  require("./Jsobjectdemo.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
  beforeEach(function() {
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

        $('body').sendKeys(protractor.Key.ESCAPE);

        expect(obj.error11.getText()).toBe(data.RT00163); 
        obj.error11.getText().then(function(text){
            console.log(text);
            browser.sleep(1000);
      
      });  

        obj.paymentmethod.click().then(function(){
            browser.sleep(8000);

        });

        obj.credit.click().then(function(){
            browser.sleep(8000);

        });
        obj.name.click().then(function(){
            browser.sleep(8000);

        });
        obj.number.sendKeys(data.number).then(function(){
            browser.sleep(8000);

        });
        expect(obj.error4.getText()).toBe(data.RT00160); 
        obj.error4.getText().then(function(text){
            console.log(text);
            browser.sleep(1000);
      
      });  

        obj.month.sendKeys(data.month).then(function(){
            browser.sleep(8000);

        });
        expect(obj.error1.getText()).toBe(data.RT00155);   
        obj.error1.getText().then(function(text){
            console.log(text);
            browser.sleep(1000);
      
      });

        obj.cvv.sendKeys(data.cvv).then(function(){
            browser.sleep(8000);

        });
        expect(obj.error2.getText()).toBe(data.RT00156); 
        obj.error2.getText().then(function(text){
            console.log(text);
            browser.sleep(1000);
      
      });

        obj.month.click().then(function(){
            browser.sleep(8000);

        });
        expect(obj.error9.getText()).toBe(data.RT00166);   
        obj.error9.getText().then(function(text){
            console.log(text);
            browser.sleep(1000);
      
      });
        obj.number.clear().then(function(){
            browser.sleep(5000);
        });

        obj.number.sendKeys(data.number1).then(function(){
            browser.sleep(8000);
                  
                  });

                  obj.cvv.sendKeys(data.cvv1).then(function(){
                    browser.sleep(8000);
          
                          });
                          expect(obj.error3.getText()).toBe(data.RT00157);
                          obj.error3.getText().then(function(text){
                            console.log(text);
                            browser.sleep(1000);
                      
                      });
                          obj.month.click().then(function(){
                            browser.sleep(8000);
                  
                         });
                           
               expect(obj.error5.getText()).toBe(data.RT00158);
               obj.error5.getText().then(function(text){
                console.log(text);
                browser.sleep(1000);
          
          });
    
                        });

    },25000000);

    using(d.Datadriven, function (data, description) {
		

        it('TS-'+description , function() {
            var EC = protractor.ExpectedConditions;

            browser.ignoreSynchronization = true;
            obj.getURL();
                

            obj.paymentmethod.click().then(function(){
                    browser.sleep(8000);
          
                          });
                          obj.credit.click().then(function(){
                                browser.sleep(8000);
  
                  });
                  obj.name.sendKeys(data.name).then(function(){
                                browser.sleep(8000);
  
                  });
                  
                  
                    obj.number.sendKeys(data.number2).then(function(){
                          browser.sleep(10000);
                
              });
             
              obj.month.sendKeys(data.month1).then(function(){
                    browser.sleep(8000);
          
                 });
                 obj.cvv.click().then(function(){
                    browser.sleep(8000);
          
                          });
                          obj.month.click().then(function(){
                            browser.sleep(8000);
                  
                                  });
        

                    expect(obj.error6.getText()).toBe(data.RT00165);   
                    obj.error6.getText().then(function(text){
                        console.log(text);
                        browser.sleep(1000);
                  
                  });

              obj.cvv.sendKeys(data.cvv2).then(function(){
                    browser.sleep(8000);
          
                          });
                          browser.executeScript('window.scrollTo(0,10000);').then(function () {
  
                          obj.checkbox1.click().then(function(){
                                browser.sleep(8000);
                      
                           });
                        });
                          obj.checkbox2.click().then(function(){
                                browser.sleep(8000);
                                  
                               });
                          obj.addbutton.click().then(function(){
                               browser.sleep(8000);
                                              
                             });
                  
                             
                 expect(obj.error10.getText()).toBe(data.RT00159);   
                 obj.error10.getText().then(function(text){
                    console.log(text);
                    browser.sleep(1000);
              
              });

                  },25000000);    

});

//ACH

using(d.Datadriven, function (data, description) {
		

    it('TS-'+description , function() {
        var EC = protractor.ExpectedConditions;

        browser.ignoreSynchronization = true;
        obj.getURL();

        

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

                         $('body').sendKeys(protractor.Key.ESCAPE);
                          expect(obj.error12.getText()).toBe(data.RT00161);
                          obj.error12.getText().then(function(text){
                            console.log(text);
                            browser.sleep(1000);
                      
                      });               
                         obj.accounttype.click().then(function(){
                                        browser.sleep(8000);
                          });
             
                          obj.checking.click().then(function(){
                                   browser.sleep(8000);
             
                              });
                                                                  
                              obj.routing.click().then(function(){
                                browser.sleep(8000);
                                      
                                      });
                          
                               obj.account.click().then(function(){
                                              browser.sleep(8000);
                                                    
                                                    });
                              expect(obj.error8.getText()).toBe(data.RT00168); 
                              obj.error8.getText().then(function(text){
                                console.log(text);
                                browser.sleep(1000);
                          
                          });
                           obj.routing.click().then(function(){
                                                        browser.sleep(8000);
                                                              
                                                              });

                     expect(obj.error7.getText()).toBe(data.RT00167);   
                     obj.error7.getText().then(function(text){
                        console.log(text);
                        browser.sleep(1000);
                  
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
                      
                      
                      expect(obj.error13.getText()).toBe(data.RT00162);   
                      obj.error13.getText().then(function(text){
                        console.log(text);
                        browser.sleep(1000);
                  
                  });



                    });



              },25000000);

  afterEach(function(){
      console.log("Execution completed");
          });
    });




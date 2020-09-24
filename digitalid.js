describe('Login', function() {
	var obj=  require("./Jsobjectdemo.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
  it('psc url', function() {
	var EC = protractor.ExpectedConditions;

    obj.getURL();
	
  expect (browser.getTitle()).toBe('PaySchools Central');
  
  
  },500000);

  using(d.Datadriven, function (data, description) {
		

    it('TS-'+"DigitalID and Preorder should be disabled for no patron and inactive patron" , function() {
    var EC = protractor.ExpectedConditions;
  
    browser.ignoreSynchronization = true;
    //obj.getURL();
  
  
    obj.email.sendKeys(data.email2);
    //console.log(data.email[i]);
    obj.password.sendKeys(data.password2);
    obj.login.click().then(function(){
        browser.sleep(25000);
    });
    expect(obj.digital.isEnabled()).toBe(true).then(function(){
      console.log("Digital ID is disabled for no patrons");
  
    });
    expect((obj.preorder).isPresent()).toBe(false);
  
  
  obj.student1.click().then(function(){
  browser.sleep(5000);
  
  });
  obj.addstudent.click().then(function(){
  browser.sleep(2000);
  
  });
  obj.state.click().then(function(){
  browser.sleep(5000);
  
  });
  obj.selectstate.click().then(function(){
  browser.sleep(5000);
  
  });
  obj.district1.click().then(function(){
    browser.sleep(5000);
  
  });
  obj.districtselect.click().then(function(){
    browser.sleep(5000);
  
  });
  
  obj.studentid.sendKeys(data.studentid).then(function(){
    browser.sleep(2000);
  
  });
  obj.fname.sendKeys(data.fname).then(function(){
    browser.sleep(2000);
  
  });
  obj.lname.sendKeys(data.lname).then(function(){
    browser.sleep(2000);
  
  });
  obj.relation.click().then(function(){
  browser.sleep(2000);
  });
  obj.relationselect.click().then(function(){
  browser.sleep(2000);
  });
  obj.studentbutton.click().then(function(){
  browser.sleep(5000);
  });
  
  expect(obj.digital.isEnabled()).toBe(true).then(function(){
    console.log("Digital ID is disabled for inactive patrons");
  
  });
  expect((obj.preorder).isPresent()).toBe(true);
  
  obj.remove.click().then(function(){
    browser.sleep(5000);
    });
    obj.remove1.click().then(function(){
      browser.sleep(5000);
      });
  
  
        obj.logout.click().then(function(){	   
          browser.sleep(5000);
      });
  
    },2500000);
  
  });

  using(d.Datadrivenpre, function (data, description) {
		

    it("PreOrder should be enabled for active patron" , function() {
  
      browser.ignoreSynchronization = true;
      //obj.getURL();
      var EC = protractor.ExpectedConditions;
  
          obj.email.sendKeys(data.emailm);
                        
           
                    obj.password.sendKeys(data.passwordm);
  
                    obj.login.click().then(function(){
                           browser.sleep(25000);
                           
                    });
   
        
    expect((obj.preorder).isEnabled()).toBe(true);
    });
  
  it("Should land on Dashboard" , function() {
  
         obj.preorder.click().then(function(){
            browser.sleep(8000);
          
            });
  
    
      obj.backtopsc.click().then(function(){
              browser.sleep(10000);
            
              });
       /* obj.freeclosemf.click().then(function(){
                            browser.sleep(1000);
                                  
                           });*/
        expect((obj.Dashboard).isPresent()).toBe(true);
  
  });
  });  
});
  

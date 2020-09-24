describe('Login', function() {
	var obj=  require("./Jsobjectdemo.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  var path = require("path");
  var remote = require("C:/Users/Harshitha TN/Desktop/projects/PSC2/PSC2/node_modules/selenium-webdriver/remote");
  const fs = require('fs'); 

  
  
  
  using(d.Datadriven, function (data, description) {
		
    it("Should verify all the labels of the DigitalID page" , function() {
        var EC = protractor.ExpectedConditions;

        browser.ignoreSynchronization = true;
       // obj.getURL();

       browser.sleep(6000);

        
        obj.digital.click().then(function(){
            browser.sleep(5000);

      }); 


     // obj.Student.click().then(function(){
       // browser.sleep(8000);

 // }); 
 expect((obj.Schoolname).isPresent()).toBe(true);
 expect(obj.Schoolname.getText()).toBe(data.Schoolname);
                           obj.Schoolname.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.district).isPresent()).toBe(true);
 expect(obj.district.getText()).toBe(data.District);
                           obj.district.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.Name).isPresent()).toBe(true);
 expect(obj.Name.getText()).toBe(data.Studentname);
                           obj.Name.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.ID).isPresent()).toBe(true);
 expect(obj.ID.getText()).toBe(data.ID);
                           obj.ID.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.Grade).isPresent()).toBe(true);
 expect(obj.Grade.getText()).toBe(data.Grade);
                           obj.Grade.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.HR).isPresent()).toBe(true);
 expect(obj.HR.getText()).toBe(data.HR);
                           obj.HR.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.Download).isPresent()).toBe(true);
 obj.Download.click().then(function(){
   browser.sleep(5000);
 
 });
 


 expect((obj.image).isPresent()).toBe(true).then(function(){
  console.log("Image is present");

});
 expect((obj.barcode).isPresent()).toBe(true).then(function(){
  console.log("Barcode is present");

});
 expect((obj.returntodashboard).isPresent()).toBe(true).then(function(){
  console.log("Return to Dashboard is present");

});
 expect((obj.privacy).isPresent()).toBe(true).then(function(){
  console.log("Privacy is present");

});
 expect((obj.help).isPresent()).toBe(true).then(function(){
  console.log("Help is present");

});
 expect((obj.terms).isPresent()).toBe(true).then(function(){
  console.log("Terms is present");

});
 
});

it("Should not display ID card for inactive patron" , function() {

 expect((obj.john).isPresent()).toBe(false).then(function(){
  console.log("ID card is not displaying for an inactive student ");

});
 
 obj.forward.click().then(function(){
   browser.sleep(2000);
 
 });
 obj.forward.click().then(function(){
   browser.sleep(2000);
 
 });
 expect((obj.Johnson).isPresent()).toBe(true).then(function(){
  console.log("Johnson  is present");

});

 
});

it("Format and Student ID should be valid" , function() {

browser.setFileDetector(new remote.FileDetector());

      obj.getURL1();
      browser.sleep(8000);
      
     var fileToUpload = 'C:/Users/Harshitha TN/Downloads/351445.png';
     absolutePath = path.resolve(__dirname,fileToUpload);


     
obj.upload.sendKeys(absolutePath).then(function(){
  browser.sleep(8000);
                    
  });



browser.driver.sleep(5000);



  obj.submit.click().then(function(){
    browser.driver.sleep(5000);

});

//handlePromise = browser.getAllWindowHandles();

      browser.getAllWindowHandles().then(function(handles){
        //handlePromise.then(function(handles) {

      browser.waitForAngularEnabled(false);

      //WebDriverWait wait=new WebDriverWait(driver,5).until(ExpectedConditions.numberOfWindowsToBe(2)); //induce WebDriverWait
     // var newtab = handles[1];
      var handle = browser.switchTo().window(handles[0]).then(function(){   
      //browser.switchTo().window(handles[1]).then(function(){
    browser.driver.sleep(5000);
      
    });

  });

  expect(obj.format.getText()).toBe(data.format);
  obj.format.getText().then(function(text){
      console.log(text);
      browser.sleep(2000);

});

expect(obj.stuID.getText()).toBe(data.stuID);
obj.stuID.getText().then(function(text){
    console.log(text);
    browser.sleep(8000);

});


browser.close();


 },25000000);

});

/*using(d.Datadriven, function (data, description) {
		

  it('TS-'+description , function() {
  var EC = protractor.ExpectedConditions;

  browser.ignoreSynchronization = true;
  //obj.getURL();


  obj.email.sendKeys(data.email2);
  //console.log(data.email[i]);
  obj.password.sendKeys(data.password2);
  obj.login.click().then(function(){
      browser.sleep(8000);
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
browser.sleep(2000);

});
obj.selectstate.click().then(function(){
browser.sleep(2000);

});
obj.district1.click().then(function(){
  browser.sleep(2000);

});
obj.districtselect.click().then(function(){
  browser.sleep(2000);

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

});*/

    });
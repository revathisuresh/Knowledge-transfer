

describe('Protractor psc2', function() {
	var obj=  require("./Jsobjectdemo.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
  it('psc application', function() {
    obj.getURL();
   
  },50000);
  
	    



//Test4 registration

using(d.Datadrivend, function (data, description) {
	it('TS-'+description, function() {
	  //  var EC3 = protractor.ExpectedConditions;
	  //  browser.wait(EC3.visibilityOf(obj.closepop2.click()), 10000);

/*	  
  obj.logoutstudent.click().then(function(){
		browser.sleep(8000);
  
	  });
  */


	 // obj.closepop2.click().then(function(){
	//	 browser.sleep(4000);
		  
	 // });
	   
	  obj.register.click().then(function(){
	   browser.sleep(1000);
	
	  });
	  
	  obj.languagedropdown.click().then(function(){
		browser.sleep(1000);
	
	  });
		
	  obj.english.click().then(function(){
		browser.sleep(1000);
	
	  });
		
	  obj.newemail.sendKeys(data.newemail)
	  //.then(function(){
		//browser.sleep(1000);
	
	  //});
		
	  obj.fn.sendKeys(data.fn)
	  //.then(function(){
		//browser.sleep(1000);
	
	  //});
	 
	 obj.ln.sendKeys(data.ln);
	  //.then(function(){
		//browser.sleep(1000);
	
	 // }); 
	  
	  obj.address1.sendKeys(data.address1);
	  //.then(function(){
	  //	browser.sleep(1000);
	
	//  }); 
	  
	  obj.address2.sendKeys(data.address2);
	  //.then(function(){
		//browser.sleep(1000);
	
	  //});  
	  
	  obj.postalcode.sendKeys(data.postalcode);
	  //.then(function(){
	  //	browser.sleep(1000);
	
	 // });      
	  
	  obj.city.sendKeys(data.city)
	  //.then(function(){
		//browser.sleep(1000);
	
	  //});  
	  
	  obj.statedropdown.click().then(function(){
		browser.sleep(1000);
	
	  }); 
	  
	  obj.stateselection.click().then(function(){
		browser.sleep(1000);
	
		
	  }); 
	  
	 // obj.countrydropdown.click().then(function(){
	 //   browser.sleep(1000);
	
	 // }); 
	  
	 // var EC3 = protractor.ExpectedConditions;
	  //browser.wait(EC3.visibilityOf(obj.countryselection.click()), 9999);
	  
	 //obj.countryselection.click().then(function(){
	   //browser.sleep(1000);
	
	  //}); 
	  
	 // obj.ph.sendKeys(data.ph);
	  //.then(function(){
	  //	browser.sleep(1000);
	
	 // }); 
	  
	  
	  //obj.mb.sendKeys(data.mb);
	  //.then(function(){
		//browser.sleep(1000);
	
	  //}); 
	  

	  obj.ch0.click().then(function(){
		browser.sleep(1000);
	
	  }); 
	obj.registerbutton.click().then(function(){
	 browser.sleep(1000);
	
	 });
	
	expect(obj.resultUS.getText()).toBe(data.resultUS);
	obj.resultUS.getText().then(function(text){
	console.log(text);
	browser.sleep(5000);
  
	});	



});	
	});	


 //Test5 gmail navigation and activation
 using(d.Datadrivene, function (data, description) {
	it('TS-'+description, function() {
	
	obj.getURL1();
	browser.sleep(4000);
	
	obj.gmail.sendKeys(data.gmail).then(function(){
	  browser.sleep(3000);
	});

   obj.next.click().then(function(){
	 browser.sleep(5000);

   });

	  obj.gpassword.sendKeys(data.gpassword).then(function(){
	  browser.sleep(1000);
		 });

		obj.next1.click().then(function(){
		   browser.sleep(10000);

		});




	   obj.inbox.click().then(function(){
		  browser.sleep(9000);

		   }); 


		 obj.link.click().then(function(){
			browser.sleep(1000);

			 }); 



			 browser.getAllWindowHandles().then(function(handles){
			   browser.waitForAngularEnabled(false);
			 browser.switchTo().window(handles[1]).then(function(){
			   browser.sleep(9000);
			   
			 });

			 });

  obj.activationemail.sendKeys(data.activationemail).then(function(){
			  browser.sleep(1000);
			 });

			 
			 obj.activationpassword.sendKeys(data.activationpassword).then(function(){
			   browser.sleep(1000);
			 });
			 
			 obj.activationconfirmationpassword.sendKeys(data.activationconfirmationpassword).then(function(){
				browser.sleep(1000);
			  });
			  expect(obj.confirmbutton.getText()).toBe(data.confirm);
			  obj.confirmbutton.getText().then(function(text){
			  console.log(text);
				browser.sleep(3000);
			  });


			  obj.confirmbutton.click().then(function(){
				browser.sleep(1000);
	
				 }); 


			  });   
			});
	


//Test6 userlogin


using(d.Datadriven, function (data, description) {
	it('TS-'+description, function() {
		browser.ignoreSynchronization = true;
		obj.getURL();
		browser.sleep(4000);
		//  obj.closepop4.click().then(function(){
	   //browser.sleep(1000);
	
	//	});
					  
		
		
		obj.email2.sendKeys(data.email2);
	  obj.password2.sendKeys(data.password2);
	  obj.login2.click().then(function(){
			 browser.sleep(8000);
			 
	  });
	
   //  var EC1 = protractor.ExpectedConditions;
 //browser.wait(EC1.visibilityOf(obj.freecheckbox.click()), 9999);
	  
			
							   
	
 var EC = protractor.ExpectedConditions;
 //   Waits for the element with id 'abc' to be visible on the dom.
   browser.driver.wait(EC.visibilityOf(obj.freeclose), 9999);
   //browser.driver.wait((obj.freeclose.click()), 7000);	  
 obj.freeclose.click().then(function(){
browser.sleep(1000);
	 
 });

 obj.result12.click().then(function(){
	browser.sleep(1000);

	 }); 

 expect(obj.result12.getText()).toBe(data.result12);
 obj.result12.getText().then(function(text){
 console.log(text);
   browser.sleep(3000);

 }); 

 //$('body').sendKeys(protractor.Key.ESCAPE);
 obj.result21.click().then(function(){
	browser.sleep(1000);

	 }); 
/*
 obj.menun.click().then(function(){
	browser.sleep(1000);
  
	});
	obj.menu1n.click().then(function(){
	browser.sleep(1000);
  
	});
*/
 obj.logoutbutton.click().then(function(){
	browser.sleep(4000);

  });
  //obj.closepop4.click().then(function(){
	//browser.sleep(1000);
 
	 });

	  
	});
	
   
	    	
//test1 - new user login
  using(d.Datadrivena, function (data, description) {
    it('TS-'+description, function() {
    	browser.ignoreSynchronization = true;
		obj.getURL();
		browser.sleep(4000);
    	//obj.closepop.click().then(function(){
    	  //   browser.sleep(1000);
    	        
    	   // });
      obj.email1.sendKeys(data.email1);
      obj.password1.sendKeys(data.password1);
      obj.login1.click().then(function(){
        browser.sleep(6000);
        
	  });

	  var EC29 = protractor.ExpectedConditions;
 //   Waits for the element with id 'abc' to be visible on the dom.
   //browser.driver.wait(EC29.visibilityOf(obj.addstudentfreeclose), 9999);

//obj.addstudentfreeclose.click().then(function(){
//	browser.sleep(5000);
//});


	});
});

//test2 - add student
  using(d.Datadrivenb, function (data, description) {
  it('TS-'+description, function() {
 


 // });

  obj.menu.click().then(function(){
  browser.sleep(2000);

  });
  obj.menu1.click().then(function(){
  browser.sleep(2000);

  });



  obj.student.click().then(function(){
  browser.sleep(3000);

  });
  obj.addstudent.click().then(function(){
  browser.sleep(3000);

  });
  obj.country.click().then(function(){
  browser.sleep(3000);

  });
  obj.countryselect.click().then(function(){
  browser.sleep(2000);

  });
  obj.district.click();
  obj.districtselect.click();
  obj.studentid.sendKeys(data.studentid);
  obj.fname.sendKeys(data.fname);
  obj.lname.sendKeys(data.lname);
  obj.relation.click().then(function(){
  browser.sleep(2000);
  });
  obj.relationselect.click().then(function(){
  browser.sleep(2000);
  });
  obj.studentbutton.click().then(function(){
  browser.sleep(2000);
  });

  //var EC2 = protractor.ExpectedConditions;
  //browser.wait(EC2.invisibilityOf(obj.studentclosepopup.click()), 9999);

  var EC2 = protractor.ExpectedConditions;
  browser.wait(EC2.visibilityOf(obj.deletestudent, 9999));


  obj.deletestudent.click().then(function(){
  browser.sleep(3000);
});


  expect(obj.removepopup.getText()).toBe(data.removepopup);
  obj.removepopup.getText().then(function(text){
  console.log(text);
  browser.sleep(2000);

  });
  obj.yes.click().then(function(){
  browser.sleep(3000);
  });

  obj.returntodashboard.click().then(function(){
  browser.sleep(5000);
  });

//obj.studentfreecheck.click().then(function(){
//	browser.sleep(5000);
//});

//obj.studentfreeclose.click().then(function(){
//	browser.sleep(5000);
});


 
 });  
  //});  
  
//  });
//});




  
//test3 - payment method

  using(d.Datadrivenc, function (data, description) {
  it('TS-'+description, function() {

  obj.paymentmethod.click().then(function(){
  browser.sleep(4000);
  });

  obj.addpayment.click().then(function(){
  browser.sleep(4000);
  });


  obj.paymentdropdown.click().then(function(){
  browser.sleep(4000);
  });

  obj.paymentselection.click().then(function(){
  browser.sleep(4000);
  });

  obj.nickname.sendKeys(data.nickname).then(function(){
  browser.sleep(1000);
  });

  obj.cardnumber.sendKeys(data.cardnumber).then(function(){
  browser.sleep(1000);
  });

  obj.expirydate.sendKeys(data.expirydate).then(function(){
  browser.sleep(1000);
  });

  obj.cvv.sendKeys(data.cvv).then(function(){
  browser.sleep(1000);
  });

  obj.checkbox1.click().then(function(){
  browser.sleep(1000);
  });

  obj.checkbox2.click().then(function(){
  browser.sleep(1000);
  });

  obj.addpaymentbutton.click().then(function(){
  browser.sleep(4000);
  });

  obj.cancelpayment.click().then(function(){
  browser.sleep(2000);
  });

  expect(obj.paymentsuccess.getText()).toBe(data.paymentsuccess);
  obj.paymentsuccess.getText().then(function(text){
  console.log(text);
  browser.sleep(1000);

  });
  
  
  obj.cancelpaymentyes.click().then(function(){
  browser.sleep(5000);
  }); 


  



  });
  });       
  


  using(d.Datadrivenc1, function (data, description) {
	it('TS-'+description, function() {
  //Adding ACH card
  obj.paymentmethod1.click().then(function(){
	browser.sleep(3000);
	});
  
	obj.addpayment1.click().then(function(){
	browser.sleep(2000);
	});
  
	obj.paymentdropdown1.click().then(function(){
	browser.sleep(2000);
	});
  
	obj.paymentselection1.click().then(function(){
	browser.sleep(2000);
	});
  
	obj.nickname1.sendKeys(data.nickname1).then(function(){
	browser.sleep(2000);
	});
  
	obj.Accounttypedropdown1.click().then(function(){
	browser.sleep(2000);
	});
  
	obj.Accounttype1.click().then(function(){
	browser.sleep(2000);
	});
  
	obj.Accountnumber1.sendKeys(data.Accountnumber1).then(function(){
	browser.sleep(2000);
	});
  
	obj.routingnumber1.sendKeys(data.routingnumber1).then(function(){
	browser.sleep(2000);
	});
  
	
	obj.checkbox3.click().then(function(){
	browser.sleep(2000);
	});
  
	obj.checkbox4.click().then(function(){
	browser.sleep(2000);
	});
  
	obj.addpaymentbutton1.click().then(function(){
	browser.sleep(5000);
	});
  
	
	expect(obj.paymentsuccess1.getText()).toBe(data.paymentsuccess1);
	obj.paymentsuccess1.getText().then(function(text){
	console.log(text);
	browser.sleep(1000);
	});
  

  obj.logoutpayment.click().then(function(){
      browser.sleep(5000);

    });


			});
		//});
		//});
		
	});
//});


//});
});

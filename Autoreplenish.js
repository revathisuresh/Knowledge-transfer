

describe('Autoreplenish', function() {
	var obj=  require("./Jsobjectdemo.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
  it('psc url', function() {
    //browser.ignoreSynchronization = true;
    obj.getURL();
    browser.sleep(3000);
   
  });

  
  using(d.Datadrivenautoreplenish, function (data, description) {
    it('TS-'+description, function() {
		browser.ignoreSynchronization = true;
		//browser.waitForAngularEnabled(false);
      obj.getURL();
      browser.sleep(6000);

      //var ECfunds = protractor.ExpectedConditions;
      //browser.wait(ECfunds.visibilityOf( obj.updateclose.click()), 9999);
      
    
    //  obj.updateclose19.click().then(function(){
     // browser.sleep(6000);
	  //});

	 // var ECfun1 = protractor.ExpectedConditions;
      //browser.wait(ECfun1.visibilityOf( obj.emailfund.click()), 9999);

	  //browser.waitForAngularEnabled(false);
	
    obj.emailauto.sendKeys(data.emaila);
    obj.passwordauto.sendKeys(data.passworda).then(function(){
    browser.sleep(1000);
    });
    obj.loginauto.click().then(function(){
     browser.sleep(9000);
	});



//var ECauto = protractor.ExpectedConditions;
     
//browser.wait(ECauto.visibilityOf(obj.freeclose19.click()), 9999);

obj.freeclose19.click().then(function(){
browser.sleep(6000);
});

obj.menuauto.click().then(function(){
  browser.sleep(1000);
  
  });
  obj.menu1auto.click().then(function(){
  browser.sleep(2000);
  
  });


  obj.autoreplenish.click().then(function(){
  browser.sleep(6000);
  });

  

  obj.accountdrop.click().then(function(){
    browser.sleep(3000);
    });

    

  obj.selectmeal.click().then(function(){
    browser.sleep(3000);
    });

    obj.amttoadd.click().then(function(){
      browser.sleep(2000);
    });
    
    obj.add30.click().then(function(){
      browser.sleep(2000);
    });

 
    obj.ballevel.click().then(function(){
      browser.sleep(2000);
    });


    obj.ten$.click().then(function(){
      browser.sleep(2000);
    });

    obj.datepick.click().then(function(){
      browser.sleep(2000);
    });
    


    obj.dateselection.click().then(function(){
      browser.sleep(2000);
    });
    obj.paydrop.click().then(function(){
      browser.sleep(2000);
    });
    
    obj.paydrop1.click().then(function(){
      browser.sleep(4000);
    });
    obj.savebut.click().then(function(){
      browser.sleep(2000);
    });
    obj.autocheckbox.click().then(function(){
      browser.sleep(2000);
    });
   

   // expect(obj.saveauto.getText()).toBe(data.autosave);
//	obj.saveauto.getText().then(function(text){
//	console.log(text);
//	browser.sleep(1000);
//	});
  obj.saveauto.click().then(function(){
    browser.sleep(4000);
  });
  //var ECrep = protractor.ExpectedConditions;
    //  browser.wait(ECrep.visibilityOf( obj.autoclose.click()), 9999);
      

//  obj.autoclose.click().then(function(){
  //  browser.sleep(2000);
 // });

browser.refresh();
browser.sleep(5000);

obj.accountdrop.click().then(function(){
  browser.sleep(3000);
  });

  

obj.selectfund.click().then(function(){
  browser.sleep(5000);
  });

 

  obj.ballevel1.click().then(function(){
    browser.sleep(2000);
  });


  obj.ten$1.click().then(function(){
    browser.sleep(2000);
  });

  obj.amttoadd1.click().then(function(){
    browser.sleep(2000);
  });
  
  obj.add301.click().then(function(){
    browser.sleep(2000);
  });


  obj.datepick1.click().then(function(){
    browser.sleep(2000);
  });
  
  obj.dateselection1.click().then(function(){
    browser.sleep(2000);
  });
  obj.paymentmethodrep.click().then(function(){
    browser.sleep(2000);
  });
  
  obj.paymentmethodrep1.click().then(function(){
    browser.sleep(4000);
  });
  
  obj.sav1.click().then(function(){
    browser.sleep(4000);
  });
  obj.autocheckbox1.click().then(function(){
    browser.sleep(2000);
  });
  obj.saveauto.click().then(function(){
    browser.sleep(8000);
  });

  obj.toggleoff.click().then(function(){
    browser.sleep(2000);
  });

  obj.yesbutton.click().then(function(){
    browser.sleep(9000);
  });

  //var ECrep = protractor.ExpectedConditions;
    //  browser.wait(ECrep.visibilityOf( obj.autoclose.click()), 9999);
      

  obj.autoclose.click().then(function(){
    browser.sleep(2000);
  });


 // browser.switchTo().alert().accept().then(function(){

  //}

  browser.executeScript('window.scrollTo(0,10000);').then(function () {

    obj.turnoffauto.click().then(function(){
      browser.sleep(3000);
      });
    });
      obj.yesbutton.click().then(function(){
        browser.sleep(6000);
      });
      obj.viewallhistory.click().then(function(){
        browser.sleep(4000);
      });
      obj.typedrop.click().then(function(){
        browser.sleep(4000);
      });
      obj.typedropauto.click().then(function(){
        browser.sleep(4000);
      });
      obj.daysdrop.click().then(function(){
        browser.sleep(4000);
      });
      obj.daysdrop90.click().then(function(){
        browser.sleep(4000);
      });
      obj.createpdfauto.click().then(function(){
        browser.sleep(3000);
      });
      obj.sendemail.click().then(function(){
        browser.sleep(4000);
      });
      obj.ok2.click().then(function(){
        browser.sleep(4000);
      });
      obj.createpdfauto.click().then(function(){
        browser.sleep(4000);
      });
      obj.downloadnow.click().then(function(){
        browser.sleep(4000);
      });
      obj.createexcelauto.click().then(function(){
        browser.sleep(4000);
      });
      obj.sendemail.click().then(function(){
        browser.sleep(4000);
      });
      obj.ok2.click().then(function(){
        browser.sleep(4000);
      });
      obj.createexcelauto.click().then(function(){
        browser.sleep(4000);
      });
      obj.downloadnow.click().then(function(){
        browser.sleep(6000);
      });
      obj.rtd04.click().then(function(){
        browser.sleep(6000);
      });










  //
     
});


});
});

//});


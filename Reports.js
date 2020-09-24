

describe('FeeSectionTestSuite', function() {
	var obj=  require("./Jsobjectdemo.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
  it('psc url', function() {
    obj.getURL();
    browser.sleep(2000);
   
  });
  

/*
  using(d.Datadrivenfee, function (data, description) {
    it('TS-'+description, function() {
      obj.getURL();
      browser.ignoreSynchronization = true;
      //obj.testmessage.click().then(function(){
    	  // 	    	browser.sleep(1000);
    	    //});
        
    	obj.emailf.sendKeys(data.emailf);
      obj.passwordf.sendKeys(data.passwordf).then(function(){
	    	browser.sleep(1000);
	    });
      obj.loginff.click().then(function(){
         browser.sleep(9000);
         browser.manage().timeouts().implicitlyWait(80000);
		//  browser.sleep(8000);
      });
      
      obj.freeclose15.click().then(function(){
        browser.sleep(3000);
     
       });
      //obj.checkfree.click().then(function(){
	    	//browser.sleep(1000);
	    //});
    //obj.closefree.click().then(function(){
	    //	browser.sleep(9000);
  
     //});
  
     obj.fees.click().then(function(){
   	browser.sleep(5000);
   });

   obj.addfee.click().then(function(){
	    	browser.sleep(4000);
    });
   obj.addfeetocart.click().then(function(){
   	browser.sleep(4000);
   });
   
   obj.clickoncartfee.click().then(function(){
       browser.sleep(3000);
       
 });
 
 obj.clickonselectfee.click().then(function(){
	  browser.sleep(3000);
 });
 
 
 expect(obj.optionfee.getText()).toBe(data.optionfee);
 obj.optionfee.getText().then(function(text){
   console.log(text);
   browser.sleep(2000);

});
 
 obj.paymentcontinuefee.click().then(function(){
	  browser.sleep(2000);
 });
 
 obj.paymentcheckboxfee.click().then(function(){
	  browser.sleep(5000);
 });
 
 obj.makepayment03.click().then(function(){
  browser.sleep(6000);
});


//  browser.switchTo().alert().accept().then(function()

//{
//10sec
	//browser.sleep(5000);

//var EC7 = protractor.ExpectedConditions;
//browser.wait(EC7.visibilityOf(obj.rtd03.click()), 9000);

obj.rtd03.click().then(function(){
browser.sleep(6000);

}); 

   // });
  

});	
   
   
 
   
//obj.logoutbutton1.click().then(function(){
  //browser.sleep(8000);
  
  //});
   
   
  //  });	
 	
  
        //});
		 //  });
   
 
using(d.Datadrivennotification, function (data, description) {
  it('TS-'+description, function() {

    //obj.getURL();
    //browser.sleep(4000);
    //obj.getURL();
    //browser.sleep(4000);

   // var ECfund = protractor.ExpectedConditions;
   // browser.wait(ECfund.visibilityOf( obj.updateclose.click()), 9999);
        
   // obj.updateclose.click().then(function(){
  //  browser.sleep(2000);
    //});

//obj.emailnot.sendKeys(data.emailf);
//obj.passwordnot.sendKeys(data.passwordf).then(function(){
//browser.sleep(1000);
//});

//obj.loginnot.click().then(function(){
//browser.sleep(9000);
//});


  // var EC45 = protractor.ExpectedConditions;
   //browser.wait(EC45.visibilityOf(obj.freeclose17.click()),9999);

    obj.freeclose17.click().then(function(){
      browser.sleep(5000);
      });
              
        obj.menunot.click().then(function(){
        browser.sleep(1000);
        
        });
        obj.menu1not.click().then(function(){
        browser.sleep(2000);
        
        });
        obj.notification.click().then(function(){
        browser.sleep(6000);
        });
        //obj.mealbala.click().then(function(){
        //  browser.sleep(5000);
        //  });
         // obj.mealbalaselect.click().then(function(){
         //   browser.sleep(3000);
         //   });
           obj.mealtoggle.click().then(function(){
           browser.sleep(9000);
           });
           // obj.closeup.click().then(function(){
           //   browser.sleep(5000);
           //    });

            //obj.feedaysnotice.click().then(function(){
            //  browser.sleep(1000);
            //   });
               obj.fundamo.click().then(function(){
                browser.sleep(1000);
                 });
              obj.fundamoselect.click().then(function(){
                  browser.sleep(1000);
                   });
                   obj.dayofmonth.click().then(function(){
                     browser.sleep(2000);

                 });
                 obj.dayofmonthselect.click().then(function(){
                  browser.sleep(2000);

              }); 
              obj.updatebutton.click().then(function(){
                browser.sleep(8000);

            });
           // expect(obj.resultnot.getText()).toBe(data.result10);
			      //obj.resultnot.getText().then(function(text){
			       // console.log(text);
			        //browser.sleep(3000);
			    
         //});
         
         //obj.ok1.click().then(function(){
         // browser.sleep(7000);
         // });

          obj.rtd08.click().then(function(){
            browser.sleep(7000);
            });



           // browser.close();


    
  });
});

});
*/

  using(d.Datadrivenmanagereports, function (data, description) {
    it('TS-'+description, function() {
  
      //obj.getURL();
      //browser.sleep(4000);
     obj.getURL();
     browser.ignoreSynchronization = true;

     browser.sleep(7000);
  
     // var ECfund = protractor.ExpectedConditions;
     // browser.wait(ECfund.visibilityOf( obj.updateclose.click()), 9999);
          
    //obj.updateclose18.click().then(function(){
   // browser.sleep(2000);
   // });
  
  obj.emailrep.sendKeys(data.emailr);
  obj.passwordrep.sendKeys(data.passwordr).then(function(){
  browser.sleep(2000);
  });
  obj.loginrep.click().then(function(){
    browser.manage().timeouts().implicitlyWait(80000);

  browser.sleep(8000);
  });


   // var EC23 = protractor.ExpectedConditions;
   //browser.wait(EC23.visibilityOf(obj.freeclose18.click()),9999);
     
       obj.freeclose18.click().then(function(){
        browser.sleep(5000);
        });
                
          obj.menurep.click().then(function(){
          browser.sleep(1000);
          
          });
          obj.menu1rep.click().then(function(){
          browser.sleep(5000);
          
          });


          obj.reports.click().then(function(){
          browser.sleep(6000);
          });
         
          obj.selectreport.click().then(function(){
            browser.sleep(3000);
            });


            obj.selectmealactivityreport.click().then(function(){
              browser.sleep(3000);
              });
             // var ECrep = protractor.ExpectedConditions;
// Waits for the element with id 'myCheckbox' to be selected.
//browser.wait(ECrep.elementToBeSelected($('selectstudent')), 9000);
            //  browser.executeScript('window.scrollTo(0,0);').then(function () {
              obj.selectstudent.click().then(function(){
                 browser.sleep(7000);

                  });
                 // obj.selectstudent.click().then(function(){
                 //browser.sleep(1000);
                 //  });
           //obj.selectstudent1.click().then(function(){
           //browser.sleep(5000);
          // browser.actions().sendKeys(protractor.Key.space).perform();
           //browser.sleep(5000);
           obj.selectstudent1.click().then(function(){
           // broswer.sleep(2000);
           
           obj.dropclose.sendKeys(protractor.Key.ESCAPE);
          
             //browser.sendKeys(protractor.Key.ESCAPE);
           });
            //});
           // obj.clickout.click().then(function(){
              browser.sleep(3000);
            //});

            obj.date.click().then(function(){
              browser.sleep(4000);
            });
            obj.dateselect.click().then(function(){
              browser.sleep(2000);
            });
            obj.createpdfbutton.click().then(function(){
              browser.sleep(2000);
            });
            obj.sendemail.click().then(function(){
              browser.sleep(2000);
            });
            obj.ok2.click().then(function(){
              browser.sleep(4000);
            });
            obj.createpdfbutton.click().then(function(){
              browser.sleep(4000);
            });
            obj.downloadnow.click().then(function(){
              browser.sleep(4000);
            });
            obj.createexcel.click().then(function(){
              browser.sleep(4000);
            });
            obj.sendemail.click().then(function(){
              browser.sleep(4000);
            });
            obj.ok2.click().then(function(){
              browser.sleep(4000);
            });
            obj.createexcel.click().then(function(){
              browser.sleep(4000);
            });
            obj.downloadnow.click().then(function(){
              browser.sleep(6000);
            });

            //browser.executeScript('window.scrollTo(0,0);').then(function () {
            //var ECacc = protractor.ExpectedConditions;
     // browser.wait(ECacc.visibilityOf( obj.selectreport.click()), 9999);
            browser.refresh();

            
            obj.selectreport1.click().then(function(){
              browser.sleep(3000);
              });
            //});

            
              obj.selectmealaccount.click().then(function(){
                browser.sleep(3000);
                });
               // var ECrep = protractor.ExpectedConditions;
  // Waits for the element with id 'myCheckbox' to be selected.
  //browser.wait(ECrep.elementToBeSelected($('selectstudent')), 9000);
              //  browser.executeScript('window.scrollTo(0,0);').then(function () {
                obj.selectstudent.click().then(function(){
                   browser.sleep(7000);
  
                    });
                   // obj.selectstudent.click().then(function(){
                   //browser.sleep(1000);
                   //  });
             //obj.selectstudent1.click().then(function(){
             //browser.sleep(5000);
            // browser.actions().sendKeys(protractor.Key.space).perform();
             //browser.sleep(5000);
             obj.selectstudent1.click().then(function(){
             // broswer.sleep(2000);
             
             obj.dropclose.sendKeys(protractor.Key.ESCAPE);
            
               //browser.sendKeys(protractor.Key.ESCAPE);
             });
              //});
             // obj.clickout.click().then(function(){
                browser.sleep(3000);
                obj.date.click().then(function(){
                  browser.sleep(4000);
                });
                obj.dateselect.click().then(function(){
                  browser.sleep(2000);
                });

              //});
              obj.createpdfbutton.click().then(function(){
                browser.sleep(2000);
              });
              obj.sendemail.click().then(function(){
                browser.sleep(2000);
              });
              //browser.refresh();
              obj.ok2.click().then(function(){
                browser.sleep(4000);
              });
              //var ECclose = protractor.ExpectedConditions;
              //browser.wait(ECclose.visibilityOf(obj.close6.click()), 9000);
              //obj.close6.click().then(function(){
                //browser.sleep(1000);
              //});
              
              obj.createpdfbutton.click().then(function(){
                browser.sleep(4000);
              });
              obj.downloadnow.click().then(function(){
                browser.sleep(4000);
              });
              obj.createexcel.click().then(function(){
                browser.sleep(4000);
              });
              obj.sendemail.click().then(function(){
                browser.sleep(4000);
              });
              obj.ok2.click().then(function(){
                browser.sleep(4000);
              });
              obj.createexcel.click().then(function(){
                browser.sleep(4000);
              });
              obj.downloadnow.click().then(function(){
                browser.sleep(4000);
              });

/*
              obj.reports.click().then(function(){
                browser.sleep(3000);
                });
                
                obj.selectreport.click().then(function(){
                  browser.sleep(3000);
                  });
                  obj.selectmealactivityreport.click().then(function(){
                    browser.sleep(3000);
                    });
                   // var ECrep = protractor.ExpectedConditions;
      // Waits for the element with id 'myCheckbox' to be selected.
      //browser.wait(ECrep.elementToBeSelected($('selectstudent')), 9000);
                  //  browser.executeScript('window.scrollTo(0,0);').then(function () {
                    obj.selectstudent.click().then(function(){
                       browser.sleep(7000);
      
                        });
                       // obj.selectstudent.click().then(function(){
                       //browser.sleep(1000);
                       //  });
                 //obj.selectstudent1.click().then(function(){
                 //browser.sleep(5000);
                // browser.actions().sendKeys(protractor.Key.space).perform();
                 //browser.sleep(5000);
                 obj.selectstudent1.click().then(function(){
                 // broswer.sleep(2000);
                 
                 obj.dropclose.sendKeys(protractor.Key.ESCAPE);
                
                   //browser.sendKeys(protractor.Key.ESCAPE);
                 });
                  //});
                 // obj.clickout.click().then(function(){
                    browser.sleep(3000);
                  //});
                  obj.date.click().then(function(){
                    browser.sleep(4000);
                  });
                  obj.datecustom.click().then(function(){
                    browser.sleep(2000);
                  });
                  //obj.fromdatetext.click().then(function(){
                  //  browser.sleep(1000);
                  //});
                  obj.fromdate.click().then(function(){
                    browser.sleep(2000);
                 });
                  obj.prevmonth.click().then(function(){
                   browser.sleep(4000);
                 });
                 // obj.prevmonth.click().then(function(){
                // browser.sleep(2000);
                 // });
                  obj.dateselectpre.click().then(function(){
                    browser.sleep(2000);
                  });

                  obj.todatecus.click().then(function(){
                    browser.sleep(2000);
                  });

                  obj.todateselcus.click().then(function(){
                    browser.sleep(2000);
                  });


                 
//browser.executeScript("document.getElementById('mat-input-3').setvalue='2/14/2020'");

//browser.sleep(9000);

// obj.fromdate.click().then(function(){
 // browser.sleep(2000);
 //  });

//obj.fromdatetext.click().then(function(){
  //browser.sleep(2000);
//});

//obj.todatetext.click().then(function(){
  //browser.sleep(1000);
//})

//browser.executeScript("document.getElementById('mat-input-4').value='4/14/2020'")
//browser.sleep(3000);


obj.createpdfbutton.click().then(function(){
  browser.sleep(2000);
});
obj.sendemail.click().then(function(){
  browser.sleep(2000);
});
//browser.refresh();
obj.ok2.click().then(function(){
  browser.sleep(4000);
});
//var ECclose = protractor.ExpectedConditions;
//browser.wait(ECclose.visibilityOf(obj.close6.click()), 9000);
//obj.close6.click().then(function(){
  //browser.sleep(1000);
//});

obj.createpdfbutton.click().then(function(){
  browser.sleep(4000);
});
obj.downloadnow.click().then(function(){
  browser.sleep(4000);
});
obj.createexcel.click().then(function(){
  browser.sleep(4000);
});
obj.sendemail.click().then(function(){
  browser.sleep(2000);
});
obj.ok2.click().then(function(){
  browser.sleep(4000);
});
obj.createexcel.click().then(function(){
  browser.sleep(4000);
});
obj.downloadnow.click().then(function(){
  browser.sleep(4000);
});

*/
            /*  

              browser.executeScript('window.scrollTo(0,10000);').then(function () {

                obj.selectfundacc.click().then(function(){
                  browser.sleep(3000);
                  });
                  obj.selectafterschool.click().then(function(){
                    browser.sleep(3000);
                    });
                    obj.selectstudentfun.click().then(function(){
                      browser.sleep(7000);
     
                       });
                       obj.selectstudent1fun.click().then(function(){
                        browser.sleep(7000);
                       //obj.dclose.sendKeys(protractor.Key.ESCAPE);
                       obj.date1.click().then(function(){
                        browser.sleep(4000);
                      });
                      obj.dateselect1.click().then(function(){
                        browser.sleep(2000);
                      });
          
                        //browser.sleep(7000);
       
                         });
                         obj.createpdfbutton1.click().then(function(){
                         browser.sleep(4000);
                    });
                    //obj.createpdfbutton1.click().then(function(){
                     // browser.sleep(2000);
                 //});
                        
                        obj.sendemail1.click().then(function(){
                          browser.sleep(6000);
                        });
                        obj.ok4.click().then(function(){
                          browser.sleep(6000);
                        });
                        obj.createpdfbutton1.click().then(function(){
                          browser.sleep(6000);
                        });
                        obj.downloadnow1.click().then(function(){
                          browser.sleep(9000);
                        });

                        
                      //});
                       // var EC25 = protractor.ExpectedConditions;
                       //browser.wait(EC25.visibilityOf(obj.createexcel1.click()), 9999);
                       //var EC25 = protractor.ExpectedConditions;
                       //expect(createexcel1.isEnabled()).toBe(true);
                       //expect<any>($('#saveChangesBtn').isEnabled()).toBe(true);
                       //browser.wait(EC25.elementToBeClickable(createexcel1), 5000);
                       //obj.createxcel1.click();

                        obj.createexcel1.click().then(function(){
                          browser.sleep(6000);
                        });

                        obj.sendemail1.click().then(function(){
                          browser.sleep(6000);
                        });
                        obj.ok4.click().then(function(){
                          browser.sleep(6000);
                        });
                        obj.createexcel1.click().then(function(){
                          browser.sleep(6000);
                        });
                        obj.downloadnow1.click().then(function(){
                          browser.sleep(7000);
                        }); 

                        */
                        obj.rettodsh.click().then(function(){
                          browser.sleep(4000);
                        });
              
             /*           
                        
//manage payments

   var EC46 = protractor.ExpectedConditions;
   browser.wait(EC46.visibilityOf(obj.freeclose20.click()),9999);

//obj.freeclose20.click().then(function(){
 // browser.sleep(5000);
//  });


obj.menurep.click().then(function(){
  browser.sleep(1000);
  
  });
  obj.menu1rep.click().then(function(){
  browser.sleep(2000);
  
  });



  obj.paymenthistory.click().then(function(){
  browser.sleep(3000);
  });

  obj.typesel.click().then(function(){
    browser.sleep(2000);
  });

  obj.mealsel.click().then(function(){
    browser.sleep(2000);
  });

  obj.datesel.click().then(function(){
    browser.sleep(2000);
  });

  obj.cussel.click().then(function(){
    browser.sleep(2000);
  });

  obj.fromdatecal.click().then(function(){
    browser.sleep(2000);
  });
 // obj.datefebsel.click().then(function(){
   // browser.sleep(2000);
  //});

  obj.yeardrop.click().then(function(){
    browser.sleep(2000);
  });
  
  obj.yearsel.click().then(function(){
    browser.sleep(3000);
  });
  obj.monsel.click().then(function(){
    browser.sleep(2000);
  });
  obj.firstsel.click().then(function(){
    browser.sleep(2000);
  });
  obj.enddatesel.click().then(function(){
    browser.sleep(2000);
  });
  obj.thirtysel.click().then(function(){
    browser.sleep(2000);
  });
  obj.createpdfbuttonpay.click().then(function(){
    browser.sleep(2000);
  });
  obj.sendemailpay.click().then(function(){
    browser.sleep(2000);
  });
  obj.okpay.click().then(function(){
    browser.sleep(4000);
  });
  obj.createpdfbuttonpay.click().then(function(){
    browser.sleep(4000);
  });
  obj.downloadpay.click().then(function(){
    browser.sleep(4000);
  });
  obj.createexcelpay.click().then(function(){
    browser.sleep(4000);
  });
  obj.sendemailpay.click().then(function(){
    browser.sleep(2000);
  });
  obj.okpay.click().then(function(){
    browser.sleep(4000);
  });
  obj.createexcelpay.click().then(function(){
    browser.sleep(4000);
  });
  obj.downloadpay.click().then(function(){
    browser.sleep(6000);
  });
  







  



             // });
  
          });
            


      //  });
      //});

      
//});



*/

  
    
    //});	




   // });
    
 // });

}); 
  

});

});
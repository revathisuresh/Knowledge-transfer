/**
 * http://usejsdoc.org/
 */
 function  car()
{


 this.getURL=function() {
     browser.get('https://dev.payschoolscentral.com');
  
    browser.sleep(9999);

     this.email= element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-login[1]/div[1]/div[2]/div[2]/div[1]/form[1]/mat-form-field[1]/div[1]/div[1]/div[1]/input[1]'));
      this.password= element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-login[1]/div[1]/div[2]/div[2]/div[1]/form[1]/mat-form-field[2]/div[1]/div[1]/div[1]/input[1]'));
     this.login= element(by.xpath("/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-login[1]/div[1]/div[2]/div[2]/div[1]/form[1]/button[1]"));
      this.cancel = element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-remove-dialog[1]/div[1]/div[1]/div[2]/a[1]/mat-icon[1]'));
      this.logout = element(by.xpath('//mat-list//a//h6//span[contains(text(),"Logout")]'));
      this.autoreplenish=element(by.xpath('//p/span[contains(text(),"Auto Replenishment")]'));
    // this.account = element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/div[1]/div[2]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]/div[1]')); 
     //this.selectmeal=element(by.xpath('//mat-option//span[contains(text(),"Meal Account")]'));
     this.ballevel=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-meal[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]'));
     this.ten$=element(by.xpath('//mat-option//span[@class="mat-option-text"][contains(text()," $10 ")]'));
    // this.amt=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-meal[1]/div[1]/form[2]/div[1]/div[2]/div[1]/div[2]/div[3]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]/div[1]'));
    // this.two$=element(by.xpath('//mat-option//span[@class="mat-option-text"][contains(text()," $20 ")]'));

    this.datepick=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-meal[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[4]/div[2]/mat-form-field[1]/div[1]/div[1]/div[2]/mat-datepicker-toggle[1]/button[1]'));
    this.dateselection=element(by.xpath('//table//tbody//tr//td//div[contains(text(),"30")]'));
    //this.clear=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-meal[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[4]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/input[1]'));
    this.error = element(by.xpath('//div//mat-error[conatins(text(),"Stop payment is required")]'));
    this.date=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-auto-replenishment[1]/div[2]/app-auto-replenishment-meal[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[2]/div[4]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/input[1]'));

    this.payment=element(by.xpath('//span[@id="PaymentMethods"]'));

      this.addbutton1=element(by.xpath('//button[@class="btn btn-orange ng-star-inserted"]'));

      this.paymentmethod=element(by.xpath('//div[@class="mat-select-arrow"]'));

      this.credit=element(by.xpath('//span[@class="mat-option-text"][contains(text(),"Credit")]'));

      this.name=element(by.xpath('//div//mat-form-field[2]//div//div//div//input[@placeholder="Nick Name"]'));

      this.number=element(by.xpath('//div//mat-form-field[3]//div//div//div//input[@name="Number"]'));

      this.month=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-add-payment-methods[1]/div[2]/form[1]/div[2]/div[2]/mat-form-field[4]/div[1]/div[1]/div[1]/input[1]'));
    
    this.cvv=element(by.xpath('//input[@name="Cvv"]'));

    this.ACH=element(by.xpath('//span[contains(text(),"ACH")]'));
    this.account=element(by.xpath('//div//input[@name="AccountNumber"]'));

    this.routing=element(by.xpath('//div//input[@name="RoutingNumber"]'));
    this.name1=element(by.name('NickName'));
this.accounttype=element(by.xpath('//div//span[contains(text(),"Account Type")]'));
this.checking=element(by.xpath('//span[contains(text(),"Checking")]'));
this.dropclose=element(by.xpath('//div[@class="col-md-8 ps-card"]//div//mat-form-field//div[@class="mat-form-field-wrapper"]//div[@class="mat-form-field-flex"]//div//input[@name="NickName"]'));

    this.checkbox1=element(by.name('Terms'));
  this.checkbox2=element(by.name('Default'));
  
  this.checkbox3=element(by.name('ACHTerms'));
	this.checkbox4=element(by.name('Default'));

    this.addbutton=element(by.xpath('//div//button[contains(text(),"ADD PAYMENT METHOD")]'));
this.clear1=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-add-payment-methods[1]/div[2]/form[1]/div[2]/div[2]]'));


    this.error1=element(by.xpath('//div[contains(text(),"Enter 16 digit card number")]'));

    this.error2=element(by.xpath('//div[contains(text(),"Enter valid future date in MM")]'));

    this.error3=element(by.xpath('//div[contains(text(),"Enter 15 digit card number")]'));
    this.error4=element(by.xpath('//div[contains(text(),"Enter Nick Name")]'));
    this.error5=element(by.xpath('//div[contains(text(),"Enter 4 digit Cvv number")]'));
    this.error6=element(by.xpath('//div[contains(text(),"Please enter valid CVV number")]'));
    this.error7=element(by.xpath('//div//mat-error[contains(text(),"Please enter valid account number.")]'));
    this.error8=element(by.xpath('//div//mat-error[contains(text(),"Please enter valid routing number.")]'));
    this.error9=element(by.xpath('//div[contains(text(),"Enter 3 digit Cvv number")]'));
    this.error10=element(by.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/snack-bar-container[1]/simple-snack-bar[1]/span[1]'));
    this.error11=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-add-payment-methods[1]/div[2]/form[1]/div[2]/div[2]/mat-form-field[1]/div[1]/div[3]/div[1]/mat-error[1]'));
    this.error12=element(by.xpath('//div//mat-error[contains(text(),"Select Account type")]'));
    this.error13=element(by.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/snack-bar-container[1]/simple-snack-bar[1]/span[1]'));



    //Digital ID
    

    this.digital1=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-header[1]/div[1]/div[1]/div[1]/div[1]/app-side-menu[1]/div[1]/div[2]/mat-list[1]/a[9]'));
    //this.digital=element(by.xpath('//body//a[9][@class="disabled"]'));

    this.digital=element(by.xpath('//span[contains(text(),"Digital ID")]'));
    //this.Student=element(by.xpath('//a[contains(text(),"Cole Johnson")]'));
    this.nostudent=element(by.xpath('//b[contains(text(),"Click Here")]'));
    this.inactivestudent=element(by.xpath('//div//span//mat-icon[contains(text(),"brightness_1")]'));
    this.remove=element(by.xpath('//div//span//mat-icon[contains(text(),"cancel")]'));
    this.remove1=element(by.xpath('//button[contains(text(),"YES")]'));


    this.Schoolname=element(by.xpath('//p[@class="school-name"]'));
    this.district=element(by.xpath('//p[@class="district"]'));
    this.Name=element(by.xpath('//p[contains(text(),"Johnathan Clarke")]'));
    this.ID=element(by.xpath('//p[contains(text(),"ID#: 351445")]'));
    this.Grade=element(by.xpath('//p[contains(text(),"Grade: 10")]'));
    this.HR=element(by.xpath('//p[contains(text(),"HR: 208B")]'));
    this.Download=element(by.xpath('//button[@class="btn btn-orange"]'));
    this.image=element(by.xpath('//img[@class="student-img"]'));
    this.barcode=element(by.xpath('//div[@class="barcode"]//*[local-name()="svg"][1]/*[name()="rect"][1]'));
    this.returntodashboard=element(by.xpath('//p[@class="fc-gray underline-text"]'));
    this.privacy=element(by.xpath('//a[contains(text(),"Privacy")]'));
    this.terms=element(by.xpath('//a[contains(text(),"Terms")]'));
    this.help=element(by.xpath('//a[contains(text(),"Help")]'));
    this.forward=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-digital-id[1]/div[2]/form[1]/div[1]/div[2]/mat-tab-group[1]/mat-tab-header[1]/div[3]/div[1]'));
    this.john=element(by.xpath('//a[contains(text(),"John Alexander")]'));
    this.Johnson=element(by.xpath('//a[contains(text(),"Kaya  Johnson")]'));

    this.upload=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/section[1]/div[1]/div[1]/div[1]/aside[1]/div[1]/input[1]'));

    this.submit=element(by.xpath('//input[@id="MainContent_cmdReadBarcodesRed"]'));

    this.student1=element(by.id('YourStudents'));
    this.addstudent=element(by.buttonText('Add Student / Staff'));
    this.state=element(by.name('IntStateId'));
    this.selectstate=element(by.className('cdk-overlay-pane')).element(by.css('mat-option:nth-child(1)'));
    this.district1=element(by.xpath('/html/body/app-root/app-full-layout/app-add-patrons/div[2]/form/div/div[2]/div[2]/mat-form-field[2]/div/div[1]/div/mat-select/div/div[2]'));
    this.districtselect=element(by.xpath('//span[contains(text(),"Saugus")]'));
    this.studentid=element(by.name('PatronId'));
    this.fname=element(by.name('FirstName'));
    this.lname=element(by.name('LastName'));
    this.relation=element(by.xpath('/html/body/app-root/app-full-layout/app-add-patrons/div[2]/form/div/div[2]/div[2]/mat-form-field[6]/div/div[1]/div/mat-select/div/div[1]/span'));
    this.relationselect=element(by.xpath('//span[contains(text(),"Non-Guardian")]'));
    this.studentbutton=element(by.xpath('//button[contains(text(),"Add Student / Staff")]'));
  
    this.format=element(by.xpath('//td[contains(text(),"Code39")]'));

    this.stuID=element(by.xpath('//pre[contains(text(),"351445")]'));

//preodermeals


this.backtopsc=element(by.xpath('/html[1]/body[1]/form[1]/header[1]/div[1]/div[2]/nav[1]/div[2]/ul[1]/li[7]/a[1]'));
this.Dashboard=element(by.xpath('//h1[@class="ps-card-title"]'));
this.Cart=element(by.xpath('//h1[contains(text(),"Cart")]'));


this.nextweek=element(by.xpath('//input[@id="Content_Content_btnForward"]'));
   this.preorder=element(by.xpath('//span[contains(text(),"Pre-Order Meals")]'));

this.zerodollar=element(by.xpath('//td[contains(text(),"$ 0.00")]'));
this.reduced=element(by.xpath('//td[contains(text(),"$ 0.40")]'));
this.denied=element(by.xpath('//td[contains(text(),"$ 3.00")]'));

this.preordermeal=element(by.xpath('//tr[2]//td[3][contains(text()," Preorder Meal ")]'));
this.viewcart=element(by.xpath('//div[@class="tab"]'));
this.emptycart=element(by.xpath('//input[@id="btnEmptyCartDialog"]'));
this.emptycartconfirm=element(by.xpath('//input[@id="btnEmptyCart"]'));

this.checkcart=element(by.xpath('//span[@class="custom-hide"]'));



   this.Addtocart4=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[5]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));
   this.Addtocart6=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[7]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));
   this.Addtocart7=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[6]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));

    this.Addtocart1=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[3]/td[6]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));
    this.addingcart=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[3]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));
    this.Addtocart2=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[3]/td[6]/div[1]/div[1]/div[3]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));
    this.Addtocart3=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[4]/td[6]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));
    this.Addtocart5=element(by.xpath('/html[1]/body[1]/form[1]/div[3]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[4]/td[6]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]/div[1]/div[1]/input[1]'));

    this.email1=element(by.id('mat-input-0'));
	this.password1= element(by.xpath('//*[@placeholder="Password"]'));
	//this.login1=element(by.buttonText('LOGIN'));
	this.login1=element(by.xpath('//button[@type="submit"]'));
	this.addstudentfreecheck=element(by.name('message1'));
	this.addstudentfreeclose=element(by.className('dialog-close-icon mat-icon notranslate material-icons mat-icon-no-color'));
	this.freeclosemf=element(by.className('dialog-close-icon mat-icon notranslate material-icons mat-icon-no-color'));

	this.menubutton=element(by.className('mat-button'));
	this.menu2=element(by.className('mat-button'));
	this.preorder=element(by.xpath('//span[contains(text(),"Pre-Order Meals")]'));
	//this.addingcart=element(by.xpath('//span[@id="Content_Content_gridStudents_MenuDisplay4_0_repeaterMeals_0_MenuDisplayByType_1_repeaterMeals_1_MealDisplay_0_lblBtn_0"]//input[@value="Add to Cart"]'));
	this.checkoutmmo=element(by.xpath('//input[@class="btn-green checkoutButtonClass"]'));
	this.placeorder=element(by.xpath('//input[@value="Place Order"]'));
	this.preexp=element(by.xpath('//tr//td[contains(text()," Preorder Meal ")]'));
	
	this.clickonselectmmo=element.all(by.className('mat-header-row ng-star-inserted')).all(by.tagName('mat-checkbox'));
this.continuemmo=element(by.buttonText('CONTINUE'));
//this.paymentcheckmmo=element(by.className('checkbox-display')).element(by.css('label:nth-child(1)'));
this.paymentcheckmmo=element(by.xpath('/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-cart-dialog[1]/div[1]/div[5]/div[1]/mat-checkbox[1]/label[1]/div[1]'));


this.thouchecm=element(by.xpath('//mat-checkbox[@id="mat-checkbox-9"]//div[@class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"]'));

this.makepaymentmmo=element(by.xpath('//button[contains(text(),"MAKE PAYMENT")]'));
this.rtdmmo=element(by.xpath('//button[@class="btn btn-white"]'));
this.freeclosepre=element(by.className('dialog-close-icon mat-icon notranslate material-icons mat-icon-no-color'));
this.close=element(by.xpath('//a//mat-icon[contains(text(),"cancel")]'));

//this.menup=element(by.className('mat-button'));
//this.menu1p=element(by.className('mat-button'));
this.preorderp=element(by.xpath('//span[contains(text(),"Pre-Order Meals")]'));
this.purchasebut=element(by.xpath('//button[contains(text(),"Purchased")]'));
this.removemeal=element(by.xpath('//div[@id="removeMeal"]//input[@class="btn-red floatLeft"]'));
this.delete=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-cart[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[7]/mat-icon[1]'));
this.yes=element(by.xpath('//button[contains(text(),"Yes")]'));

this.return=element(by.xpath('//button[@class="btn btn-white"]'));
this.addcart=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-dashboard[1]/div[2]/div[2]/form[1]/div[1]/div[2]/app-meals[1]/div[2]/div[1]/table[1]/tbody[1]/tr[2]/td[3]/span[1]/mat-icon[1]'));
//this.addcart=element(by.xpath("//mat-icon[text()='edit ']"));

this.amount21=element(by.xpath('//input[@name="Amount"]'));
//this.amount=element(by.name('Amount')).element(by.id('mat-input-8'));
//this.amount=element(by.xpath("//input[x-with(@id,'mat-input-8')]"));
this.amounttoadd21=element(by.xpath('//button[contains(@class,"btn btn-orange")]'));
this.clickoncart21=element(by.className('custom-hide'));
//this.clickonselect=element(by.buttonText('Return to dashboard'));
//this.clickonselect=element(by.className('mat-checkbox-layout')).element(by.id('mat-checkbox-1'));
this.clickonselect21=element.all(by.className('mat-header-row ng-star-inserted')).all(by.tagName('mat-checkbox'));
this.continue21=element(by.buttonText('CONTINUE'));
this.paymentcheck21=element(by.className('checkbox-display')).element(by.css('label:nth-child(1)'));
this.thouchec=element(by.xpath('//mat-checkbox[@id="mat-checkbox-9"]//div[@class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"]'));

this.makepayment21=element(by.buttonText('MAKE PAYMENT'));
this.rtd21=element(by.xpath('//span[contains(text(),"Dashboard")]'));
this.freeclose20pa=element(by.xpath('//div//a//mat-icon[@class="dialog-close-icon mat-icon notranslate material-icons mat-icon-no-color"]'));

//this.menurep=element(by.className('mat-button'));
//this.menu1rep=element(by.className('mat-button'));
//this.reports=element(by.xpath('//p/span[contains(text(),"Reports")]'));
this.paymenthistory=element(by.xpath('//span[contains(text(),"Payment History")]'));
this.typesel=element(by.xpath('//mat-select[@name="Type"]//div[@class="mat-select-value"]'));
this.mealsel=element(by.xpath('//span[@class="mat-option-text"][contains(text(),"Meal")]'));
this.preorder1=element(by.xpath('//span[@class="mat-option-text"][contains(text()," Preorder ")]'));
this.datesel=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[1]/div[2]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]'));
this.dateselect=element(by.xpath('//span[@class="mat-option-text"][contains(text()," 7 days ")]'));
this.amou=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[8]/td[1]'));
this.success=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[11]/td[1]'));
this.rtd09=element(by.xpath('//a//p[contains(text(),"Return To Dashboard")]'));


this.createpdfbuttonpay=element(by.xpath('//button[contains(text(),"Create PDF Report")]'));
this.sendemailpay=element(by.xpath('//button[contains(text(),"Send email")]'));
this.okpay=element(by.xpath('//button[@class="btn btn-white"]'));
this.downloadpay=element(by.xpath('//button[contains(text(),"Download Now")]'));
this.createexcelpay=element(by.xpath('//button[contains(text(),"Create Excel Report")]'));


this.typesel1=element(by.xpath('//mat-select[@name="Type"]//div[@class="mat-select-value"]'));
//this.mealsel=element(by.xpath('//span[@class="mat-option-text"][contains(text(),"Meal")]'));
this.preorder2=element(by.xpath('//span[@class="mat-option-text"][contains(text()," Preorder ")]'))
this.datesel=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[1]/div[2]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]'));
this.cussel=element(by.xpath('//span[contains(text(),"Custom Date")]'));
this.fromdatecal=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[2]/mat-datepicker-toggle[1]/button[1]/span[1]/*[local-name()="svg"][1]'));
this.datefebsel=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-datepicker-content[1]/mat-calendar[1]/mat-calendar-header[1]/div[1]/div[1]/button[2]'));
this.fromdatesel=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-datepicker-content[1]/mat-calendar[1]/div[1]/mat-month-view[1]/table[1]/tbody[1]/tr[6]/td[4]/div[1]'));
this.yeardrop=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-datepicker-content[1]/mat-calendar[1]/mat-calendar-header[1]/div[1]/div[1]/button[1]/span[1]'));
this.yearsel=element(by.xpath('//div[contains(text(),"2020")]'));
this.monsel=element(by.xpath('//div[contains(text(),"JAN")]'));
this.firstsel=element(by.xpath('//tr[1]//td[2]//div[1]'));
this.enddatesel=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-payment-history[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/mat-form-field[1]/div[1]/div[1]/div[2]/mat-datepicker-toggle[1]/button[1]/span[1]/*[local-name()="svg"][1]'));
this.yeardrop1=element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-datepicker-content[1]/mat-calendar[1]/mat-calendar-header[1]/div[1]/div[1]/button[1]/span[1]'));
this.yearsel1=element(by.xpath('//div[contains(text(),"2020")]'));
this.monsel1=element(by.xpath('//div[contains(text(),"JAN")]'));
this.firstsel1=element(by.xpath('//tr[1]//td[2]//div[1]'));
this.filterbut=element(by.xpath('//button[@class="custom-width mat-button"]'));
this.expres=element(by.xpath('//div[contains(text()," No records found ")]'));


//Messages

this.message=element(by.xpath('//span[contains(text(),"Messages")]'));
this.message1=element(by.xpath('/html[1]/body[1]/app-root[1]/app-full-layout[1]/app-user-messages[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]'));
//this.message2=element(by.xpath('//p[contains(text(),"PaySchools here with a quick update Tampines Singa")]'));
this.message2=element(by.xpath('//p[@class="text-message-pop"]'));

  }//p[@class='text-message-pop']

    this.getURL1=function() {
      browser.waitForAngularEnabled(false);
     // browser.get('https://www.onlinebarcodereader.com');
     browser.get('https://online-barcode-reader.inliteresearch.com/');

      browser.sleep(8000);
    };
} 

  module.exports= new car();
 /* a.getModel();
  console.log(a.engine);*/


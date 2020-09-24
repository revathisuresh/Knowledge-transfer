
	 //var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
	 //var Jasmine2HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
	 var HtmlReporter = require('protractor-beautiful-reporter');

	//var reporter = new HtmlReporter({
	   //dest: '/target/screenshots',
	  // filename: 'my-report.html'
	 //});  
	 
	 exports.config = {
		 directConnect: true,
		 
		 // Capabilities to be passed to the webdriver instance.
		 Capabilities: {

		   'browserName': 'chrome',
		 },
		 
		 // Framework to use. Jasmine is recommended.
		 framework: 'jasmine',
	   
		 // Spec patterns are relative to the current working directory when
		 // protractor is called.
		 specs: ['preorder.js','Digital.js'],

		 chromeDriver:'C:/Users/revathip/Desktop/Automation/digital/Preorder and digital/node_modules/webdriver-manager/selenium/chromedriver_85.0.4183.87.exe',
        seleniumServerJar :'C:/Users/revathip/Desktop/Automation/digital/Preorder and digital/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
// Options to be passed to Jasmine.
		 jasmineNodeOpts: {
		   defaultTimeoutInterval: 25000000
		 },
		 //beforeLaunch: function() {
		  // return new Promise(function(resolve){
			// reporter.beforeLaunch(resolve);
		  // });
		 //},
		 /*onPrepare: function() {
			browser.driver.manage().window().maximize();

			jasmine.getEnv().addReporter(
			  new HtmlReporter({
				savePath: 'target/screenshots'
		 // Assign the test reporter to each running instance
		// onPrepare: function() {
		   //jasmine.getEnv().addReporter(reporter);
		})
		);	
	},   */ 
	onPrepare: function() {
		browser.driver.manage().window().maximize();

		// Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({
			preserveDirectory: false,

		   baseDirectory: 'Reports/screenshots'
		   	  , filename: 'my-report.html'

		   , docName: 'index.html'

		}).getJasmine2Reporter());
	 }
	 
	   };
	 
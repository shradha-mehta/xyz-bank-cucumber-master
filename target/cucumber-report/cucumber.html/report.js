$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/bank/resources/featurefile/bankmanager.feature");
formatter.feature({
  "line": 2,
  "name": "Bank manager feature",
  "description": "As a user I want to check bank manager functionality on xyz bank website",
  "id": "bank-manager-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankManager"
    }
  ]
});
formatter.before({
  "duration": 12811903700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Bank manager should add customer successfully",
  "description": "",
  "id": "bank-manager-feature;bank-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter first name \"jiya\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter last name \"pandya\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter post code \"ub60lf\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see customer added successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 102872600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 110117100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 364462000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jiya",
      "offset": 20
    }
  ],
  "location": "BankManagerSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 291059200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pandya",
      "offset": 19
    }
  ],
  "location": "BankManagerSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 95110500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ub60lf",
      "offset": 19
    }
  ],
  "location": "BankManagerSteps.iEnterPostCode(String)"
});
formatter.result({
  "duration": 93441100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 107008400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 15646100,
  "status": "passed"
});
formatter.after({
  "duration": 689934200,
  "status": "passed"
});
formatter.before({
  "duration": 13703221200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Bank manager should delete customer successfully",
  "description": "",
  "id": "bank-manager-feature;bank-manager-should-delete-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on customers tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I search customer by name \"rahi\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 1203300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 184080400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnCustomersTab()"
});
formatter.result({
  "duration": 421809800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rahi",
      "offset": 27
    }
  ],
  "location": "BankManagerSteps.iSearchCustomerByName(String)"
});
formatter.result({
  "duration": 303874600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 20105245800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//tr[@class\u003d\u0027ng-scope\u0027]//td//button\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-C1H7GVRS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\shrad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49261}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 710b6d119ae16e76b402e4a8117af9d7\n*** Element info: {Using\u003dxpath, value\u003d//tr[@class\u003d\u0027ng-scope\u0027]//td//button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.bank.utility.Utility.clickOnElement(Utility.java:56)\r\n\tat com.bank.pages.CustomerPage.deleteCustomer(CustomerPage.java:30)\r\n\tat com.bank.cucumber.stepdefs.BankManagerSteps.iClickOnDeleteButton(BankManagerSteps.java:78)\r\n\tat ✽.And I click on delete button(src/test/java/com/bank/resources/featurefile/bankmanager.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1055306200,
  "status": "passed"
});
formatter.uri("src/test/java/com/bank/resources/featurefile/customerpage.feature");
formatter.feature({
  "line": 3,
  "name": "Customer page feature",
  "description": "As a user I customer page functionality on xyz bank website",
  "id": "customer-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Customer"
    }
  ]
});
formatter.before({
  "duration": 10570760500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "customer-page-feature;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select customer name \"Rahi Pandya\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify logout button is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see your name lable is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 1073900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 434801500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahi Pandya",
      "offset": 24
    }
  ],
  "location": "CustomerPageSteps.iSelectCustomerName(String)"
});
formatter.result({
  "duration": 20496599600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Rahi Pandya\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-C1H7GVRS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.bank.utility.Utility.selectByVisibleTextFromDropDown(Utility.java:125)\r\n\tat com.bank.pages.CustomerLoginPage.selectYourName(CustomerLoginPage.java:32)\r\n\tat com.bank.cucumber.stepdefs.CustomerPageSteps.iSelectCustomerName(CustomerPageSteps.java:22)\r\n\tat ✽.And I select customer name \"Rahi Pandya\"(src/test/java/com/bank/resources/featurefile/customerpage.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerPageSteps.iVerifyLogoutButtonIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnLogoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerPageSteps.iShouldSeeYourNameLableIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1014855000,
  "status": "passed"
});
formatter.before({
  "duration": 10939868900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "customer-page-feature;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select customer name \"Rahi Pandya\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on deposit wihtdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verifty depsit successful message displayed on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 1228900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 122996100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahi Pandya",
      "offset": 24
    }
  ],
  "location": "CustomerPageSteps.iSelectCustomerName(String)"
});
formatter.result({
  "duration": 20596276600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Rahi Pandya\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-C1H7GVRS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.bank.utility.Utility.selectByVisibleTextFromDropDown(Utility.java:125)\r\n\tat com.bank.pages.CustomerLoginPage.selectYourName(CustomerLoginPage.java:32)\r\n\tat com.bank.cucumber.stepdefs.CustomerPageSteps.iSelectCustomerName(CustomerPageSteps.java:22)\r\n\tat ✽.And I select customer name \"Rahi Pandya\"(src/test/java/com/bank/resources/featurefile/customerpage.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnDepositButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "CustomerPageSteps.iEnterAmount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerPageSteps.iClickOnDepositWihtdrawButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerPageSteps.iVeriftyDepsitSuccessfulMessageDisplayedOnTheScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1010719100,
  "status": "passed"
});
});
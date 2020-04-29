package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class AddCustomerPage extends Utility {
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());


    @FindBy (xpath ="//input[@placeholder='First Name']" )
    WebElement firstName;
    @FindBy(xpath ="//input[@placeholder='Last Name']" )
    WebElement lastName;
    @FindBy (xpath ="//input[@placeholder='Post Code']")
    WebElement postcode;
    @FindBy (xpath ="//form[@name='myForm']//button[contains(text(),'Add Customer')]" )
    WebElement _addCustomerBtn;



    public void enterFirstName(String fName) {
        Reporter.addStepLog("entering firstname on firstname field : "+fName+firstName.toString());
        sendTextToElement(firstName, fName);
        log.info("entering firstname on firstname field : "+fName+firstName.toString());
    }

    public void enterLastName(String lName) {
    Reporter.addStepLog("entering lastname on lastname field : "+lName+lastName.toString());
        sendTextToElement(lastName, lName);
        log.info("entering lastname on lastname field : "+lName+lastName.toString());
    }

    public void enterPostcode(String pCode) {
   Reporter.addStepLog("entering postcode on postcode field : "+pCode+postcode.toString());
        sendTextToElement(postcode, pCode);
        log.info("entering postcode on postcode field : "+pCode+postcode.toString());
    }

    public void clickOnAddCustomerButton() {
        Reporter.addStepLog("clicking on add button : " + _addCustomerBtn.toString());
        log.info("clicking on add  button : " +_addCustomerBtn.toString());
        clickOnElement(_addCustomerBtn);

    }

}


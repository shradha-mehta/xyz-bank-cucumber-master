package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class BankManagerLoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(BankManagerLoginPage.class.getName());

    @FindBy (xpath ="//button[contains(text(),'Add Customer')]" )
    WebElement _addCustomerTab;
    @FindBy (xpath ="//button[contains(text(),'Open Account')]" )
    WebElement _openAccountTab;
    @FindBy (xpath ="//button[contains(text(),'Customers')]" )
    WebElement _customersTab;
    @FindBy (xpath ="//button[@class='btn home']" )
    WebElement _homeButtonTab;


    public void clickOnAddCustomerTab()
    {
        Reporter.addStepLog("clicking on add customer tab : "+ _addCustomerTab.toString());
        clickOnElement(_addCustomerTab);
        log.info("clicking on add customer tab : "+ _addCustomerTab.toString());
    }

    public void clickOnOpenAccountTab(){
        Reporter.addStepLog("clicking on open account tab : "+ _openAccountTab.toString());
        clickOnElement(_openAccountTab);
        log.info("clicking on open account tab : "+ _openAccountTab.toString());
    }

    public void clickOnCustomerTab(){
        Reporter.addStepLog("clicking on customer tab : "+ _customersTab.toString());
        clickOnElement(_customersTab);
        log.info("clicking on customer tab : "+ _customersTab.toString());
    }
    public void clickOnHomeBtn(){
        Reporter.addStepLog("clicking on home tab : "+ _homeButtonTab.toString());
        clickOnElement(_homeButtonTab);
        log.info("clicking on home tab : "+ _homeButtonTab.toString());
    }


}
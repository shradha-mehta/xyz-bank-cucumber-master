package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    @FindBy (xpath ="//button[@class='btn home']" )
    WebElement _homeButtonLink;
    @FindBy (xpath ="//button[contains(text(),'Customer Login')]" )
    WebElement _customerLoginTab;
    @FindBy (xpath = "//button[contains(text(),'Bank Manager Login')]")
    WebElement _bankManagerLoginTab;



    public void clickOnHomeBtn(){
     Reporter.addStepLog("clicking on Home button : "+ _homeButtonLink.toString());
        clickOnElement(_homeButtonLink);
        log.info("clicking on Home button : "+ _homeButtonLink.toString());
    }

    public void clickOnCustomerLoginTab(){
     Reporter.addStepLog("clicking on customer login button : "+ _customerLoginTab.toString());
        clickOnElement(_customerLoginTab);
        log.info("clicking on customer login button : "+ _customerLoginTab.toString());

    }

    public void clickOnBankManagerLoginTab(){
        Reporter.addStepLog("clicking on bank manager login button : "+ _bankManagerLoginTab.toString());
        clickOnElement(_bankManagerLoginTab);
        log.info("clicking on bank manager login button : "+ _bankManagerLoginTab.toString());
    }


}

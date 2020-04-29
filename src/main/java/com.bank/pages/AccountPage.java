package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class AccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());
    @FindBy (xpath ="//button[@class='btn logout']" )
    WebElement logOutBtn;
    @FindBy (xpath ="//button[contains(text(),'Transactions')]" )
    WebElement transactionTab;
    @FindBy (xpath ="//button[contains(text(),'Deposit')]" )
    WebElement depositTab;
    @FindBy (xpath ="//button[contains(text(),'Withdrawl')]" )
    WebElement withdrawlTab;
    @FindBy (xpath ="//input[@placeholder='amount']" )
    WebElement _amount;
    @FindBy (xpath ="//button[@class='btn btn-default']" )
    WebElement depositWithdrawBtn;
    @FindBy (xpath ="//span[@class='error ng-binding']" )
   WebElement errorMessage;
    @FindBy (xpath ="//button[@class='btn home']" )
    WebElement homeButtonTab;

    public void clickOnLogoutButton() {
        Reporter.addStepLog("clicking on logout button : "+logOutBtn.toString());
        clickOnElement(logOutBtn);
        log.info("clicking on logout button : "+logOutBtn.toString());
    }

    public boolean isLogoutButtonDisplayed() {
        if ((logOutBtn).isDisplayed()) {

            return true;
        } else {
            return false;
        }
    }

    public void clickOnTransactionTab() {
        Reporter.addStepLog("clicking on transaction tab : "+ transactionTab.toString());
        clickOnElement(transactionTab);
        log.info("clicking on transaction tab : "+ transactionTab.toString());
    }

    public void clickOnDepositTab() {
        Reporter.addStepLog("clicking on deposit tab : "+ depositTab.toString());
        clickOnElement(depositTab);
        log.info("clicking on deposit tab : "+ depositTab.toString());
    }

    public void clickOnWithdrawlTab() {
        Reporter.addStepLog("clicking on withdrawl tab : "+ withdrawlTab.toString());
        clickOnElement(withdrawlTab);
        log.info("clicking on withdrawl tab : "+ withdrawlTab.toString());
    }

    public void enterAmount(String amount) {
        Reporter.addStepLog("entering amount in the amount field : " + amount +_amount.toString());
        sendTextToElement(this._amount, String.valueOf(amount));
        log.info("entering amount in the amount field : " + amount +_amount.toString());
    }

    public void clickOnDepositWithdrawButton() {
        Reporter.addStepLog("clicking on depositwithdrawl button "+ depositWithdrawBtn.toString());
        clickOnElement(depositWithdrawBtn);
        log.info("clicking on depositwithdrawl button "+ depositWithdrawBtn.toString());
    }

    public String getErrorSuccessMessage() {
        Reporter.addStepLog("Getting error message : " +errorMessage.toString());
        log.info("Getting error message : " +errorMessage.toString());
        return getTextFromElement(errorMessage);
    }

    public void clickOnHomeBtn() {
        Reporter.addStepLog("clicking on home button tab : "+ homeButtonTab.toString());
        clickOnElement(homeButtonTab);
        log.info("clicking on home button tab : "+ homeButtonTab.toString());

    }
}


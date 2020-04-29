package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class CustomerPage extends Utility {
    private static final Logger log = LogManager.getLogger(CustomerPage.class.getName());

    @FindBy (xpath ="//input[@placeholder='Search Customer']" )
    WebElement _searchCustomer;
    @FindBy (xpath ="//tr[@class='ng-scope']//td//button" )
    WebElement _deleteBtn;

    public void searchCustomerByName(String name){
        clickOnElement(_searchCustomer);
       Reporter.addStepLog("search customer " + name + _searchCustomer.toString());
        sendTextToElement(_searchCustomer, name);
        log.info("search customer " + name + _searchCustomer.toString());
    }

    public void deleteCustomer(){
        Reporter.addStepLog("clicking on delete customer tab :"+ _deleteBtn.toString());
        clickOnElement(_deleteBtn);
        log.info("clicking on delete customer tab :"+ _deleteBtn.toString());
    }




}

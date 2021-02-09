describe('Tax Response Filters - Add, Edit, Delete !', function() {

    beforeAll(function () {
        // Passing the username and Credentials from Scripts Details.json
        var scriptName = path.basename(__filename);
        page.Actions.setUserCredsFromJson(scriptName);
        page.LoneStarHomePage.launchLoneStar();
        page.LoneStarHomePage.enterCredentials(browser.params.login);
    
    });

    /**  ITA-385
    Verify creation of Tax response filter group and filter*/
    xit('Add a Filter', function() {
       // page.sitewidepage.clickonTaxResponseFiltersTab(); 
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.addFilter(tData.addTaxResponseFiltersData.addFilters.info); //creates filter group and filter
        
    });
    /** ITA-387
     *   verify the add functionality of new Tax Response Filter Group*/
    xit('Add a  new Tax Response Filter Group', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.addNewFilterGroup(tData.addTaxResponseFiltersData.addFilters.info); //Adds new Tax Response filter group
    });
    /*ITA-388
    * verify the edit functionality of an existing 'Tax Response Filter Group*/
    xit('Edit a Tax Response Filter Group', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.editFilterGroup(tData.addTaxResponseFiltersData.addFilters.info); //edits existing Tax Response filter group
    });
    /* ITA-390
     *  Cloud UI: Verify creation of Tax response filter group and filter with all special characters */
    xit('Add a  new Tax Response Filter with special characters', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.addSpecialCharactersFilter(tData.addTaxResponseFiltersData.addSpecialFilters.info); //Adds new Tax Response filter with special characters
    });
     
    /**  ITA-391
    Edit and   Verify update of Tax response filter with name and priority*/
    xit('edit a Filter', function() {
         
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');
        page.TaxResponseFiltersPage.editFilter(tData.addTaxResponseFiltersData.editFilters.info); //edits filter name and priority
     });
    /**ITA-392
     Verify update of Tax response filter by adding AND condition */
    xit('verify update of Tax Response Filter Group by adding AND condition', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.addAndCondition(tData.addTaxResponseFiltersData.addFilters.addAndCondition); //Adds  AND condition for new Tax Response filter group
    });
    /**ITA-393
      Verify update of Tax response filter (NL) by adding OR condition */
    xit('verify update of Tax Response Filter Group by adding OR condition', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.addORCondition(tData.addTaxResponseFiltersData.addFilters.addORCondition); //Adds  OR condition for new Tax Response filter group
    });
    /**ITA-373
      Cloud UI - Verify the Tax Response Filter List Screen and Columns as well as options functionality */
      xit('Verify the Tax Response Filter List Screen and Columns as well as options functionality', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.clickOnFilterIcon(); //Clicks on Filter icon button
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.clickOnEditIcon(tData.addTaxResponseFiltersData.editFilters.info);//Clicks on Edit/Pencil icon
        page.TaxResponseFiltersPage.clickOnViewInExcel(); //Clicks on view in excel button
        page.TaxResponseFiltersPage.clickOnAddFilterLink(); //Clicks on view in excel button

    });
     /**ITA-375
      Cloud UI - Verify the copy functionality in the More button option of Tax Response List page */
      xit('Verify the copy functionality in the More button option of Tax Response List page ', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.copyFunctionality(); // 
    });
    /**ITA-376
     Cloud UI - Verify the Reorder functionality in the More button option of Tax Response List page */
      fit('Verify the Reorder functionality in the More button option of Tax Response List page ', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.reorderButtonFunctionality(); // 
    });
    /**ITA-406
      Cloud UI - Verify Added new optional column TaxResponse Filter Group to the list page and other functions which impacts*/
      xit('Verify Added new optional column TaxResponse Filter Group to the list page and other functions which impacts', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.addAdditionalColumns();
       // browser.executeScript("window.scrollBy(1000,0)");  //To scroll horizantally
        
    });
    /**ITA-382
      Verify if view in Excel is working */
      xit('verify update of Tax Response Filter Group by adding OR condition', function() {
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');  //Navigates to tax response filters page 
        page.TaxResponseFiltersPage.clickOnViewInExcel(); //Clicks on view in excel button
    });
     //deletes a company associated with filter group and filter name
    xit('delete a Filter', function() {
         
        page.LoneStarHomePage.NavigateTo('TAX RESPONSE FILTERS');
        page.TaxResponseFiltersPage.deleteFilter(tData.addTaxResponseFiltersData.deleteFilters.info);
     });

    afterAll(function() {
        page.LoneStarHomePage.signOut();
    });
});
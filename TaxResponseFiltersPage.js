const { browser, element } = require("protractor");
TaxResponseFiltersPage = function() {

    var elements = {
        lnkAddFilter          : element(by.linkText('Add Filter')),
        cmbSelectedCompany    : element(by.model('inputLabel')),
        cmbCompanyValues      : element.all(by.exactRepeater('node in treeModel')),
        txtFilterComName      : element(by.id('filter-input-companyName')),
        //txtGroupName        : element(by.xpath("//*[@id='bento-combobox-filter-group']//input")),
        txtGroupName          : element(by.id('filter-group')),
        btnSettings           : element(by.className('bento-icon-cog')),
        btnAdd                : element(by.className('bento-icon-add')),
        btnEdit               : element(by.className('bento-icon-edit')),
        editCompany           : element(by.className('bento-icon-edit grid-action-icon edit-button')),
        deleteCompany         : element(by.className('bento-icon-remove grid-action-icon edit-button')),
        buttondelete          : element(by.buttonText('Delete')),
        txtNewGroupName       : element(by.id('newFilterGroup')),
        txtFilterName         : element(by.name('taxResponseEditorName')),
        txtPriority           : element(by.id('filter-priority')),
        txtStartDate          : element(by.name('startDate')),
        txtSelectParent       : element(by.xpath("//*[@id='parent-conditions-0']//input")),
        txtSelectParent1      : element(by.xpath("//*[@id='parent-conditions-1']//input")),
        txtElement            : element(by.id('element-0')),
        txtElement1           : element(by.id('element-1')),
        txtOperator           : element(by.xpath("//*[@id='operator-0']//input")),
        txtOperator1          : element(by.xpath("//*[@id='operator-1']//input")),
        cmbOperatorValue      : element.all(by.exactRepeater('item in data track by $index')),
        txtConstant           : element(by.id('value-0')),
        txtConstant1          : element(by.id('value-1')),
        lnkCondition          : element(by.xpath('//span[contains(@class,"ng-binding ng-scope")]  [contains(text(),"Add another Condition")]')),
        //txtEndDate          : element(by.model('indirectAddEditLookupList.basicInformation.endDate')),
        txtDescription        : element(by.id('filter-comment')),
        btnDelete             : element(by.className('bento-icon-remove')),
        btnSave               : element(by.buttonText('Save')),

        lnkViewInExcel        : element(by.linkText('View in Excel')),
        btnFilter             : element(by.className('bento-icon-filter-az')),
        txtCompanyFilter      : element(by.id('filter-input-companyName')),
        txtGroupNameFilter    : element(by.id('filter-input-taxResponseFilterGroupName')),
        txtPriorityFilter     : element(by.id('filter-input-ordering')),
        txtTRFFilter          : element(by.id('filter-input-taxResponseEditorName')),
        btnBack               : element(by.className('bento-icon-arrow-left')),
        btndropdown           : element(by.xpath('//span[text()="MORE"]')),
        btnCopyIcon           : element(by.className('bento-icon-copy')),
        btnReorderPriority    : element(by.className('bento-icon-tree')),
        btnCopy               : element(by.buttonText('Copy')),
        txtNewCopyFilter      : element(by.id('filter_name')),
        columnCreatedBy       : element(by.xpath('//span[text()="Created By"]')),
        columnCreaterEmail    : element(by.xpath('//span[text()="Creator Email"]')),
        columnCreatedOn       : element(by.xpath('//span[text()="Created On"]')),
        columnModifiedBy      : element(by.xpath('//span[text()="Modified By"]')),
        columnModifierEmail   : element(by.xpath('//span[text()="Modifier Email"]')),
        columnLastModifiedBy  : element(by.xpath('//span[text()="Last Modified"]')),
        barHorizontalScroll   : element(by.css('[wj-part="root"]')),
        txtReorderPosition    : element(by.model('reorderFilterController.position')),
        txtReoderMoveBelow    : element(by.model('inputLabel')),
        btnMove               : element(by.buttonText('MOVE')),        

        drpCondition : function (elementData) {
            return element.all(by.cssContainingText("span.combobox-default-row.ng-binding.ng-scope",elementData));
        },

    };
    //creates filter group with default group name and  adds filter name,priority
    this.addFilter = function(TaxResponseFiltersData){
        var companyName = TaxResponseFiltersData.CompanyName; 
        var filterName = TaxResponseFiltersData.FilterName;
        var description = TaxResponseFiltersData.Description;
        var priority=TaxResponseFiltersData.Priority
        var startDate = TaxResponseFiltersData.StartDate;
        var selectParent=TaxResponseFiltersData.SelectParent;   // variables with values from test data
        var elementexp =TaxResponseFiltersData.Element;
        var operator=TaxResponseFiltersData.Operator;
        var constant=TaxResponseFiltersData.Constant;
        
        cLog.info('In addFilter function.');
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter'); // clicks on add filter link
        page.Actions.selectByValueIDT(elements.cmbSelectedCompany, elements.cmbCompanyValues, companyName);  //selects company name from the list
        
        // browser.wait(EC.elementToBeClickable(element(by.xpath('.//span[contains(text(),"'+companyName+'")]'))), DATA.WAITFOR,'Failed: No Company is available with '+companyName);
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        description && page.Actions.enterText(elements.txtDescription, description);

        // browser.wait(EC.elementToBeClickable(elements.txtStartDate), DATA.WAITFOR, 'Wait for txtStartDate field to be clickable');
        //page.Actions.ClearAndType(elements.txtStartDate, startDate);
        page.Actions.waitAndClick(elements.btnDelete, ' Delete button');

        // page.Actions.ClearAndType(elements.txtSelectParent,selectParent );
        // page.Actions.enterText(elements.txtSelectParent,selectParent);
        // page.Actions.enterText(elements.txtElement,elementexp);
        // this.selectOperator(operator);
        // page.Actions.enterText(elements.txtConstant,constant);

       //browser.wait(EC.elementToBeClickable(elements.txtOperator), DATA.ELEMENTWAIT, 'Wait for Add  operator to be clickable');
        //page.Actions.ClearAndType(elements.txtOperator,operator);
       // page.Actions.selectByValueIDT(elements.txtOperator,elements.cmbOperatorValue,operator);
        //browser.wait(EC.elementToBeClickable(element(by.xpath('.//span[contains(text(),"'+operator+'")]'))), DATA.WAITFOR,'Failed: No Company is available with '+operator);
       // page.Actions.enterText(elements.txtOperator,operator);
        
        page.Actions.waitAndClick(elements.btnSave, ' Save button');
        
        
        
    
    };
    //creates a new Tax Response filter group  and  adds filter name,priority
   
    this.addNewFilterGroup = function(TaxResponseFiltersData){
        var companyName = TaxResponseFiltersData.CompanyName; 
        var groupName = TaxResponseFiltersData.GroupName ;
        var editGroupName = TaxResponseFiltersData.EditGroupName ;                 // variables with values from test data
        var filterName = TaxResponseFiltersData.FilterName;
        var description = TaxResponseFiltersData.Description;
        var priority=TaxResponseFiltersData.Priority
        var startDate = TaxResponseFiltersData.StartDate;
        
        
        cLog.info('In addFilter function.');
        
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter');
        page.Actions.selectByValueIDT(elements.cmbSelectedCompany, elements.cmbCompanyValues, companyName);
      
        // browser.wait(EC.elementToBeClickable(element(by.xpath('.//span[contains(text(),"'+companyName+'")]'))), DATA.WAITFOR,'Failed: No Company is available with '+companyName);
        page.Actions.waitAndClick(elements.btnSettings,'In Settings');
        if(page.Actions.waitAndClick(elements.btnAdd, 'Add button'))
        {
            browser.wait(EC.elementToBeClickable(elements.txtNewGroupName), DATA.WAITFOR, 'Wait for txtFilterName field to be clickable');
            page.Actions.ClearAndType(elements.txtNewGroupName,groupName);
            page.Actions.enterText(elements.txtNewGroupName,groupName);
            page.Actions.ClearAndType(elements.txtStartDate, startDate);
            page.Actions.waitAndClick(elements.btnSave, 'Add New Group Name');
        }

        
    
        
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        description && page.Actions.enterText(elements.txtDescription, description);

        // browser.wait(EC.elementToBeClickable(elements.txtStartDate), DATA.WAITFOR, 'Wait for txtStartDate field to be clickable');
        //page.Actions.ClearAndType(elements.txtStartDate, startDate);
        page.Actions.waitAndClick(elements.btnDelete, 'Delete button');
        page.Actions.waitAndClick(elements.btnSave, 'Save button');
       
        
        
    
    };
    //Edits Tax Response filter group  and  adds filter name,priority

    this.editFilterGroup = function(TaxResponseFiltersData){
        var companyName = TaxResponseFiltersData.CompanyName; 
        var groupName = TaxResponseFiltersData.GroupName ;
        var editGroupName = TaxResponseFiltersData.EditGroupName ;                 // variables with values from test data
        var filterName = TaxResponseFiltersData.FilterName;
        var description = TaxResponseFiltersData.Description;
        var priority=TaxResponseFiltersData.Priority
        var startDate = TaxResponseFiltersData.StartDate;
         
        
        cLog.info('In EditFilterGroup function.');
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter');
        page.Actions.selectByValueIDT(elements.cmbSelectedCompany, elements.cmbCompanyValues, companyName);
        // browser.wait(EC.elementToBeClickable(element(by.xpath('.//span[contains(text(),"'+companyName+'")]'))), DATA.WAITFOR,'Failed: No Company is available with '+companyName);
        page.Actions.waitAndClick(elements.btnSettings,'waiting for Settings');
        if(page.Actions.waitAndClick(elements.btnEdit, ' Edit button'))
        {
            browser.wait(EC.elementToBeClickable(elements.txtNewGroupName), DATA.WAITFOR, 'Wait for txtFilterName field to be clickable');
            page.Actions.ClearAndType(elements.txtNewGroupName,editGroupName);
            page.Actions.enterText(elements.txtNewGroupName,editGroupName);
            page.Actions.ClearAndType(elements.txtStartDate, startDate);
            page.Actions.waitAndClick(elements.btnSave, 'Save button');
        }
    
        
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        description && page.Actions.enterText(elements.txtDescription, description);

        // browser.wait(EC.elementToBeClickable(elements.txtStartDate), DATA.WAITFOR, 'Wait for txtStartDate field to be clickable');
        //page.Actions.ClearAndType(elements.txtStartDate, startDate);
        page.Actions.waitAndClick(elements.btnDelete, 'Delete button');
        page.Actions.waitAndClick(elements.btnSave, 'Save button');
       
        
        
    
    };
    //Adds filter group and filter name with special characters
    this.addSpecialCharactersFilter = function(TaxResponseFiltersData){
        var companyName = TaxResponseFiltersData.CompanyName; 
        var groupName   = TaxResponseFiltersData.SpecialGroup ;
        var filterName  = TaxResponseFiltersData.SpecialFilterName;
        var description = TaxResponseFiltersData.Description;
        var priority    = TaxResponseFiltersData.Priority;                     // variables with values from test data
        var startDate   = TaxResponseFiltersData.StartDate;
        var selectParent= TaxResponseFiltersData.SelectParent;
        var elementexp  = TaxResponseFiltersData.Element;
        var operator    = TaxResponseFiltersData.Operator;
        var constant    = TaxResponseFiltersData.Constant;
        
        cLog.info('In addSpecialCharactersFilter function.');
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter'); // clicks on add filter link
        page.Actions.selectByValueIDT(elements.cmbSelectedCompany, elements.cmbCompanyValues, companyName);  //selects company name from the list
        page.Actions.waitAndClick(elements.btnSettings,'In Settings');
        page.Actions.waitAndClick(elements.btnAdd, 'Add button');
        
        browser.wait(EC.elementToBeClickable(elements.txtNewGroupName), DATA.WAITFOR, 'Wait for txtFilterName field to be clickable');
        page.Actions.ClearAndType(elements.txtNewGroupName,groupName);
        page.Actions.enterText(elements.txtNewGroupName,groupName);
        page.Actions.ClearAndType(elements.txtStartDate, startDate);
        page.Actions.waitAndClick(elements.btnSave, 'Add New Group Name');
        
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        description && page.Actions.enterText(elements.txtDescription, description);

        // browser.wait(EC.elementToBeClickable(elements.txtStartDate), DATA.WAITFOR, 'Wait for txtStartDate field to be clickable');
        //page.Actions.ClearAndType(elements.txtStartDate, startDate);
       // page.Actions.waitAndClick(elements.btnDelete, ' Delete button');
       page.Actions.ClearAndType(elements.txtSelectParent,selectParent );
       page.Actions.enterText(elements.txtSelectParent,selectParent);
       page.Actions.enterText(elements.txtElement,elementexp);
       this.selectOperator(operator);
       page.Actions.enterText(elements.txtConstant,constant);
       page.Actions.waitAndClick(elements.btnSave, ' Save button');
        
        
        
    
    };
    //Edit and updatation of Tax response filter with name and priority
    this.editFilter=function(editFilterData){
        var company=editFilterData.CompanyName;
        var filterName=editFilterData.FilterName;
        var priority=editFilterData.Priority;
        browser.wait(EC.visibilityOf(elements.txtFilterComName), DATA.WAITFOR, 'Failed: Wait for txtCategoryFilter to be visible at verifyAddStadMapping.');
        elements.txtFilterComName.clear();
        page.Actions.slowType(elements.txtFilterComName, company);
        page.Actions.waitAndClick(elements.editCompany, 'edit button');
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        page.Actions.waitAndClick(elements.btnDelete, 'Delete button');
        page.Actions.waitAndClick(elements.btnSave, 'Save button');
    };
    ////deletes a company associated with filter group and filter name
    this.deleteFilter=function(deleteFilterData){
        var company=deleteFilterData.CompanyName;
        
        browser.wait(EC.visibilityOf(elements.txtFilterComName), DATA.WAITFOR, 'Failed: Wait for txtCategoryFilter to be visible at verifyAddStadMapping.');
        elements.txtFilterComName.clear();
        page.Actions.slowType(elements.txtFilterComName, company);
        browser.sleep(3000);
        page.Actions.waitAndClick(elements.deleteCompany, 'Delete button'); //
       // browser.sleep(3000);
        page.Actions.waitAndClick(elements.buttondelete, 'delete button');
        browser.sleep(5000);

    
    };
    this.addAndCondition=function(TaxResponseFiltersData){
        var companyName = TaxResponseFiltersData.CompanyName; 
        var groupName = TaxResponseFiltersData.GroupName ;
        var filterName = TaxResponseFiltersData.FilterName;
        var description = TaxResponseFiltersData.Description;
        var priority=TaxResponseFiltersData.Priority
        var startDate = TaxResponseFiltersData.StartDate;
        var selectParent=TaxResponseFiltersData.SelectParent;   // variables with values from test data
        var elementexp =TaxResponseFiltersData.Element;
        var operator=TaxResponseFiltersData.Operator;
        var constant=TaxResponseFiltersData.Constant;
        var selectParent1=TaxResponseFiltersData.SelectParent1;   
        var elementexp1 =TaxResponseFiltersData.Element1;
        var operator1=TaxResponseFiltersData.Operator1;
        var constant1=TaxResponseFiltersData.Constant1;
        
        cLog.info('In addAndCondition function.');
        
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter');
        page.Actions.selectByValueIDT(elements.cmbSelectedCompany, elements.cmbCompanyValues, companyName);
      
        // browser.wait(EC.elementToBeClickable(element(by.xpath('.//span[contains(text(),"'+companyName+'")]'))), DATA.WAITFOR,'Failed: No Company is available with '+companyName);
        page.Actions.waitAndClick(elements.btnSettings,'In Settings');
        page.Actions.waitAndClick(elements.btnAdd, 'Add button')
        
        browser.wait(EC.elementToBeClickable(elements.txtNewGroupName), DATA.WAITFOR, 'Wait for txtFilterName field to be clickable');
        page.Actions.ClearAndType(elements.txtNewGroupName,groupName);
        page.Actions.enterText(elements.txtNewGroupName,groupName);
        page.Actions.ClearAndType(elements.txtStartDate, startDate);
        page.Actions.waitAndClick(elements.btnSave, 'Add New Group Name');
        
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        description && page.Actions.enterText(elements.txtDescription, description);
        page.Actions.ClearAndType(elements.txtSelectParent,selectParent );
        page.Actions.enterText(elements.txtSelectParent,selectParent);
        page.Actions.enterText(elements.txtElement,elementexp);
        page.Actions.enterText(elements.txtOperator,operator);

        this.selectOperator(operator,0);
        page.Actions.enterText(elements.txtConstant,constant);
        page.Actions.waitAndClick(elements.lnkCondition,'Add condition');
        page.Actions.enterText(elements.txtSelectParent1,selectParent1);
        this.selectCondition(selectParent1,1);
        page.Actions.enterText(elements.txtElement1,elementexp1);
        page.Actions.enterText(elements.txtOperator1,operator1);
        //  var operatorListObj2=element(by.id('operator-1')).element(by.classname('bento-combobox-container-body')).element.all(by.cssContainingText('.combobox-default-row.ng-binding.ng-scope',operator1));
        //  page.Actions.waitAndClick(operatorListObj2);
        this.selectOperator(operator1,1);
        page.Actions.enterText(elements.txtConstant1,constant1);

        page.Actions.waitAndClick(elements.btnSave, ' Save button');
        

    }
    this.addORCondition=function(TaxResponseFiltersData){
        var companyName = TaxResponseFiltersData.CompanyName; 
        var groupName = TaxResponseFiltersData.GroupName ;
        var filterName = TaxResponseFiltersData.FilterName;
        var description = TaxResponseFiltersData.Description;
        var priority=TaxResponseFiltersData.Priority
        var startDate = TaxResponseFiltersData.StartDate;
        var selectParent=TaxResponseFiltersData.SelectParent;   // variables with values from test data
        var elementexp =TaxResponseFiltersData.Element;
        var operator=TaxResponseFiltersData.Operator;
        var constant=TaxResponseFiltersData.Constant;
        var selectParent1=TaxResponseFiltersData.SelectParent1;   
        var elementexp1 =TaxResponseFiltersData.Element1;
        var operator1=TaxResponseFiltersData.Operator1;
        var constant1=TaxResponseFiltersData.Constant1;
        
        cLog.info('In addORCondition function.');
        
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter');
        page.Actions.selectByValueIDT(elements.cmbSelectedCompany, elements.cmbCompanyValues, companyName);
      
        // browser.wait(EC.elementToBeClickable(element(by.xpath('.//span[contains(text(),"'+companyName+'")]'))), DATA.WAITFOR,'Failed: No Company is available with '+companyName);
        page.Actions.waitAndClick(elements.btnSettings,'In Settings');
        page.Actions.waitAndClick(elements.btnAdd, 'Add button')
        
        browser.wait(EC.elementToBeClickable(elements.txtNewGroupName), DATA.WAITFOR, 'Wait for txtGroupName field to be clickable');
        page.Actions.ClearAndType(elements.txtNewGroupName,groupName);
        page.Actions.enterText(elements.txtNewGroupName,groupName);
        page.Actions.ClearAndType(elements.txtStartDate, startDate);
        page.Actions.waitAndClick(elements.btnSave, 'Add New Group Name');
        
        page.Actions.ClearAndType(elements.txtFilterName,filterName );
        page.Actions.enterText(elements.txtFilterName,filterName);
        priority && page.Actions.enterText(elements.txtPriority,priority);
        description && page.Actions.enterText(elements.txtDescription, description);
        page.Actions.ClearAndType(elements.txtSelectParent,selectParent );
        page.Actions.enterText(elements.txtSelectParent,selectParent);
        page.Actions.enterText(elements.txtElement,elementexp);
        page.Actions.enterText(elements.txtOperator,operator);

        this.selectOperator(operator,0);
        page.Actions.enterText(elements.txtConstant,constant);
        page.Actions.waitAndClick(elements.lnkCondition,'Add condition');
        page.Actions.enterText(elements.txtSelectParent1,selectParent);
        //this.selectCondition(selectParent,0);
        page.Actions.enterText(elements.txtElement1,elementexp1);
        page.Actions.enterText(elements.txtOperator1,operator1);
        //  var operatorListObj2=element(by.id('operator-1')).element(by.classname('bento-combobox-container-body')).element(by.cssContainingText('.combobox-default-row.ng-binding.ng-scope',operator1));
        //  page.Actions.waitAndClick(operatorListObj2);
        this.selectOperator(operator1,1);
        page.Actions.enterText(elements.txtConstant1,constant1);
        browser.sleep(5000);
        page.Actions.waitAndClick(elements.btnSave, ' Save button');
        

    }
    this.selectOperator=function(operators,index){
        cLog.info("In select operator"+operators);
      //  elements.drpCondition(operators).get(index).click();
         var operatorListObj=element.all(by.xpath('//span[text()="'+operators+'"]')).get(index);
         page.Actions.waitAndClick(operatorListObj);
    }
    this.selectCondition=function(condition,index){
        
        var conditionListObj=element.all(by.xpath('//span[text()="'+condition+'"]')).get(index);
        page.Actions.waitAndClick(conditionListObj);
    }
    // this verifies if view in excel is working
    this.clickOnViewInExcel=function(){
        browser.wait(EC.elementToBeClickable(elements.lnkViewInExcel), DATA.ELEMENTWAIT, 'Wait for Add View in Excel link to be clickable');
        page.Actions.waitAndClick(elements.lnkViewInExcel);
        browser.wait(EC.visibilityOf(elements.lnkViewInExcel), DATA.WAITFOR, 'Failed: Wait for Add View in Excel link to be clickable');
        
    }
    this.clickOnFilterIcon=function(){
        var groupName="Company01";
        var priority="1";
        var empty=""
        browser.wait(EC.elementToBeClickable(elements.btnFilter), DATA.ELEMENTWAIT, 'Wait for Filter button to be clickable');
        browser.sleep(5000); 
        page.Actions.waitAndClick(elements.btnFilter);     
        browser.sleep(5000);   
        browser.wait(EC.elementToBeClickable(elements.btnFilter), DATA.ELEMENTWAIT, 'Wait for Filter button to be clickable');
        page.Actions.waitAndClick(elements.btnFilter);
        browser.sleep(5000);
        page.Actions.waitAndClick(elements.txtCompanyFilter);
        page.Actions.ClearAndType(elements.txtCompanyFilter,groupName);
        browser.sleep(5000);
        page.Actions.ClearAndType(elements.txtCompanyFilter,empty);
        browser.sleep(3000);
        page.Actions.waitAndClick(elements.txtGroupNameFilter);
        browser.sleep(3000);
        page.Actions.waitAndClick(elements.txtPriorityFilter);
        page.Actions.ClearAndType(elements.txtPriorityFilter,priority);
        browser.sleep(5000);
        page.Actions.waitAndClick(elements.txtTRFFilter);
        browser.sleep(3000);      

    }
    this.clickOnEditIcon = function(editFilterData){
       // var company=editFilterData.CompanyName;
        var companyName="Company01";
        browser.wait(EC.visibilityOf(elements.txtFilterComName), DATA.WAITFOR, 'Failed: Wait for txtCategoryFilter to be visible at verifyAddStadMapping.');
        elements.txtFilterComName.clear();
        page.Actions.slowType(elements.txtFilterComName, companyName);
        page.Actions.waitAndClick(elements.editCompany, 'edit button');
        browser.wait(EC.visibilityOf(elements.txtFilterName), DATA.WAITFOR, 'Failed: Wait for txtCategoryFilter to be visible at verifyAddStadMapping.');
        page.Actions.waitAndClick(elements.btnBack, 'back button');
        browser.sleep(3000);
    }

    this.clickOnAddFilterLink = function(){
        browser.wait(EC.elementToBeClickable(elements.lnkAddFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.lnkAddFilter, 'Add Filter'); // clicks on add filter link
        browser.wait(EC.elementToBeClickable(elements.cmbSelectedCompany), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.btnBack, 'back button');
        browser.sleep(3000);    
    }

    this.copyFunctionality = function(){
        var filterName = "TestFilter";
        var newFilterName = "TestFilter123";
        browser.wait(EC.elementToBeClickable(elements.txtTRFFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.slowType(elements.txtTRFFilter, filterName);
        browser.wait(EC.elementToBeClickable(elements.txtTRFFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.btndropdown, 'dropDown button');
       // browser.wait(EC.elementToBeClickable(elements.btnCopyIcon), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.btnCopyIcon, ' copy icon button');
        browser.sleep(3000);
        page.Actions.waitAndClick(elements.txtNewCopyFilter);
        page.Actions.ClearAndType(elements.txtNewCopyFilter,newFilterName);
        
        page.Actions.waitAndClick(elements.btnCopy, 'copy button');
        browser.sleep(3000);
       
    }

    this.addAdditionalColumns=function(){
        browser.wait(EC.elementToBeClickable(elements.btnSettings), DATA.ELEMENTWAIT, 'Wait for settings icon to be clickable');
        page.Actions.waitAndClick(elements.btnSettings, 'settings button');
        browser.sleep(3000);
        page.Actions.waitAndClick(elements.columnCreatedBy, 'created by checkbox');
        browser.sleep(1000);
        page.Actions.waitAndClick(elements.columnCreaterEmail, 'creater email checkbox');
        browser.sleep(1000);
        page.Actions.waitAndClick(elements.columnCreatedOn, 'created on checkbox');
        browser.sleep(1000);
        page.Actions.waitAndClick(elements.columnModifiedBy, 'modified by checkbox');
        browser.sleep(1000);
        page.Actions.waitAndClick(elements.columnModifierEmail, 'modifier email checkbox');
        browser.sleep(1000);
        page.Actions.waitAndClick(elements.columnLastModifiedBy, 'last modified by checkbox');
        browser.sleep(3000);
        page.Actions.waitAndClick(elements.btnSettings, 'settings button');
        // browser.executeScript("arguments[0].scrollIntoView(true)",elements.barHorizontalScroll.getWebElement());
        browser.sleep(3000);
        browser.wait(EC.elementToBeClickable(elements.btnSettings), DATA.ELEMENTWAIT, 'Wait for settings icon to be clickable');
        page.Actions.waitAndClick(elements.btnSettings, 'settings button');
        page.Actions.waitAndClick(elements.columnCreatedBy, 'created by checkbox');
        page.Actions.waitAndClick(elements.columnCreaterEmail, 'creater email checkbox');
        page.Actions.waitAndClick(elements.columnCreatedOn, 'created on checkbox');
        page.Actions.waitAndClick(elements.columnModifiedBy, 'modified by checkbox');
        page.Actions.waitAndClick(elements.columnModifierEmail, 'modifier email checkbox');
        page.Actions.waitAndClick(elements.columnLastModifiedBy, 'last modified by checkbox');
        browser.sleep(2000);
    }
    
    this.reorderButtonFunctionality=function(){
        
        var filterName = "TestFilter";
        var moveBelow  = "No parent";
        var position   = "1";
        browser.wait(EC.elementToBeClickable(elements.txtTRFFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.slowType(elements.txtTRFFilter, filterName);
        browser.wait(EC.elementToBeClickable(elements.txtTRFFilter), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.waitAndClick(elements.btndropdown, 'dropDown button');
        page.Actions.waitAndClick(elements.btnReorderPriority, 'reorder priority button');
        browser.wait(EC.elementToBeClickable(elements.txtReoderMoveBelow), DATA.ELEMENTWAIT, 'Wait for Add Filter link to be clickable');
        page.Actions.ClearAndType(elements.txtReoderMoveBelow,moveBelow );
        page.Actions.waitAndClick(elements.txtReorderPosition, 'reorder position');
        page.Actions.ClearAndType(elements.txtReorderPosition,position );
        page.Actions.waitAndClick(elements.btnMove, 'move button');
        browser.sleep(2000);

    }
};
module.exports.TaxResponseFiltersPage = TaxResponseFiltersPage;
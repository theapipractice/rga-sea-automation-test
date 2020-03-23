@Property
Feature: Properties
	As a user
	I want to be ensure that Property feature works well

	@PP_Search_Property
    Scenario Outline: PP_Search_Property
	Given  I login successfully with userName "<username>" and passWord "<password>" that login "<result>"
	Then  I Click on Properties Link 
	Then  Enter search value in text field "<searchValue>"
	And   Verify result "<expected>"
	Examples: 
	| testing | username                   | password      | searchValue    | expected  | result   |
	| valid   | dinhquyenonline1@gmail.com | 0906879564@Qt | AATesting      | AATesting | passed   |
	| invalid | dinhquyenonline1@gmail.com | 0906879564@Qt | invalidProperty|           | passed   |
	| valid   | dinhquyenonline1@gmail.com | 0906879564@Qt | Testing        | AATesting | passed   |
	| valid   | dinhquyenonline1@gmail.com | 0906879564@Qt | AAT            | AATesting | passed   |

	@PP_Clear_Search_Properties
	Scenario Outline: PP_Clear_Search_Properties
	Given  I login successfully with userName "<username>" and passWord "<password>" that login "<result>"
	Then  I Click on Properties Link 
	Then  Enter search value in text field "<searchValue>"
	And   Verify result "<expected>"
	Then  Click X button to clear the value
	And   Verify List Number Of first pageVa
	Examples: 
	| testing | username                   | password      | searchValue    | expected  | result |
	| valid   | dinhquyenonline1@gmail.com | 0906879564@Qt | AATesting      | AATesting | passed |

	@PP_Create_Valid_New_Properties
	Scenario Outline: PP_Create_Valid_New_Properties
	Given  I login successfully with userName "<username>" and passWord "<password>" that login "<result>"
	Then  I Click on Properties Link 
	Then  Add new Property
	Then  I Click on Properties Link 
	Then  Enter search value in text field "<searchValue>"
	And   Verify result "<expected>"

	Examples: 
	| testing | username                   | password      | searchValue    | expected  | result |
	| valid   | dinhquyenonline1@gmail.com | 0906879564@Qt | AATesting      | AATesting | passed |

	@PP_Create_Invalid_New_Properties
	Scenario Outline: PP_Create_Invalid_New_Properties
	Given  I login successfully with userName "<username>" and passWord "<password>" that login "<result>"
	Then  I Click on Properties Link 
	Then  Add new Property with property name "<propertyName>"
	And   Verify the error message "<errorMessage>" with "<testing>"
	
	Examples: 
	| testing     | username                   | password      | propertyName    | errorMessage                                 | result |
	| duplicate   | dinhquyenonline1@gmail.com | 0906879564@Qt | address         | A model with name address already exists     | passed |
	| empty       | dinhquyenonline1@gmail.com | 0906879564@Qt |                 | Property Name is a required field            | passed |

    @PP_Edit_Valid_New_Properties
	Scenario Outline: PP_Edit_Valid_New_Properties
	Given  I login successfully with userName "<username>" and passWord "<password>" that login "<result>"
	Then  I Click on Properties Link 
	Then  Enter search value in text field "<searchValue>"
	Then  Edit the information Of Property "<type>"
	Then  I Click on Properties Link
	Then  Enter search value in text field "<searchValue>"
	And   Verify result "<expected>"

	Examples: 
	| testing | username                   | password      | searchValue    | expected  |type    | result  |
	| valid   | dinhquyenonline1@gmail.com | 0906879564@Qt | AATesting      | AATesting |String  | passed  |
	| valid   | dinhquyenonline1@gmail.com | 0906879564@Qt | AATesting      | AATesting |Integer  | passed  |
	| valid   | dinhquyenonline1@gmail.com | 0906879564@Qt | AATesting      | AATesting |Number  | passed  |
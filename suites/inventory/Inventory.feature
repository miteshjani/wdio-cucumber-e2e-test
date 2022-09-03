Feature: Inventory

    @smoke @demo1 @debug
    Scenario Outline: Inventory
        Given Login to inventory webapp
        Then Inventory page should list <NumberOfProducts>
        #Then Validate all products have valid price        
        Examples:
            | TestID  | NumberOfProducts|
            | Int TC002 |6|

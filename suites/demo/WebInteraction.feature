Feature: Web Interactions
    @demo @smoke
    Scenario Outline: Demo Web Interaction
        Given A web page is opened
        When Perform web interactions
        
        Examples:
            | TestID  | 
            | Demo TC002 |

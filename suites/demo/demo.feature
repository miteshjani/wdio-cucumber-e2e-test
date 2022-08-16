Feature: Demo Feature
    @demo1
    Scenario Outline: Run First Demo Feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on first search result
        Then URl should match <ExpectedURL>

        Examples:
            | TestID  | SearchItem | ExpectedURL |
            | Demo TC001 | WDIO    | https://webdriver.io/ |
    
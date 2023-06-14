public with sharing class AccountListController {
    public AccountListController() {
        @AuraEnabled(cacheable=true)
        public static List<Account> getAccountList(){
            List<Account> accountList = [SELECT Id, Name, Type, Phone, Income__c FROM Account];
            return accountList;
    }
}
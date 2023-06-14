import { LightningElement, wire } from 'lwc';
import getAccountList from
'@salesforce/apex/AccountListController.getAccountList';

const columns = [
    {label: 'Account Id', fieldName: 'Id'},
    {label: 'Account Name', fieldName: 'Name'},
    {label: 'Account Phone', fieldName: 'Phone'},
    {label: 'Account Type', fieldName: 'Type'},
    {label: 'Account Income', fieldName: 'Income'}
]

export default class Accounts extends LightningElement {
    columns = columns;
    @wire(getAccountList) accounts;
}
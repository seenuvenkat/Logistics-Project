import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import EMAILID_FIELD from '@salesforce/schema/account.Emailid';
import BILLINGADDRESS_FIELD from '@salesforce/schema/Account.BillingAddress';
import SHIPPINGADDRESS_FIELD from '@salesforce/schema/Account.ShippingAddress';
  

export default class Customerlist extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    acc=[NAME_FIELD,PHONE_FIELD,BILLINGADDRESS_FIELD,SHIPPINGADDRESS_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

}

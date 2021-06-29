import { LightningElement, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getCurrentTime from '@salesforce/apex/refreshApex_Poc.getCurrentTime';

export default class RefreshApex_Poc extends LightningElement {
    currentTime = 'nothing set';

    /** Wired Apex result so it can be refreshed programmatically */
    wiredGetCurrentTimeResult;

    @wire(getCurrentTime)
    wiredAccounts(result) {
        this.wiredGetCurrentTimeResult = result;
        if (result.data) {
            this.currentTime = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.currentTime = undefined;
        }
    }

    handleRefreshTime (event) {
        refreshApex(this.wiredGetCurrentTimeResult);
    }
}
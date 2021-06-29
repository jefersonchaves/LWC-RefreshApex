public with sharing class refreshApex_Poc {
    @AuraEnabled(cacheable=true)
    public static String getCurrentTime() {
        return Datetime.now().millisecondGmt().format();
    }
}

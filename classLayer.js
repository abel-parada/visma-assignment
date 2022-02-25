const { validate: uuidValidate  } = require('uuid');

module.exports = class VismaURI {
    
    constructor(data){
        this.parsedURL = new URL(data);
    };

    identifyAction (){
        if (this.parsedURL.protocol !== 'visma-identity:'){
            throw new Error('Wrong Scheme');
        }
        else {
            switch (this.parsedURL.host){
                case 'confirm':
                    return this.confirm();
                case 'login':
                    return this.login();
                case 'sign':
                    return this.sign();
                default:
                    throw new Error('Wrong action');
                };
        };
    };

    confirm(){
         if(this.parsedURL.searchParams.get('paymentnumber')){
             return `Action is: ${this.parsedURL.host}. \nPayment number is ${this.parsedURL.searchParams.get('paymentnumber')}.\nThank you for using Visma ${this.parsedURL.searchParams.get('source')}\n`;
         }
         else {
            throw new Error ('URI must have a paymentnumber parameter')
         };
    };

    login(){
            return `Action is: ${this.parsedURL.host}.\nWelcome to Visma\n`;
    };

    sign(){

         if(uuidValidate(this.parsedURL.searchParams.get('documentid'))){
             return `Action is: ${this.parsedURL.host}. \nDocument ID is ${this.parsedURL.searchParams.get('documentid')}.\nThank you for using Visma ${this.parsedURL.searchParams.get('source')}\n`;
         }
         else{
             throw new Error ('URI must have a valid documentid UUID parameter')
         }; 
    };
 };
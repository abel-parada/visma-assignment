module.exports = class VismaURI {

    constructor(data){
        this.data = data;
     };
 
     identifyAction (action){
        if (this.data.scheme !== 'visma-identity:'){
            throw new Error('Wrong Scheme');
        }
        else {
            if(this.data.path === action){
                if(!this.data.parameters.paymentNumber && !this.data.parameters.documentId){
                    return `Action is: ${action}.\nWelcome to Visma\n`;
                };
                if(this.data.parameters.paymentNumber){
                    return `Action is: ${action}. \nPayment number is ${this.data.parameters.paymentNumber}.\nThank you for using Visma ${this.data.parameters.source}\n`;
                };
                if(this.data.parameters.documentId){
                    return `Action is: ${action}. \nDocument ID is ${this.data.parameters.documentId}.\nThank you for using Visma ${this.data.parameters.source}\n`;
                };
            };

        };
     };
 };

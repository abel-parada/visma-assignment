const myURL = new URL('visma-identity://login?source=severa');

// const myURL = new URL('visma-identity://confirm?source=netvisor&paymentnumber=102226');

// const myURL = new URL('visma-identity://sign?source=vismasign&documentid=47ed9186-2ba0-4e8b-b9e2-7123575fdd5b');

const URI = {
    scheme: myURL.protocol,
    path: myURL.hostname,
    parameters: {
        source: myURL.searchParams.get('source'),
        paymentNumber: myURL.searchParams.get('paymentnumber'),
        documentId: myURL.searchParams.get('documentid')
    }
}


class VismaURIv2 {

    constructor(data){
        this.data = data
     }
 
     identifyAction (action){
        if (!this.data.scheme === 'visma-identity'){
            throw new Error('Wrong Scheme')
        }
        if(this.data.path === action){
            if(!this.data.parameters.paymentNumber && !this.data.parameters.documentId){
                return `Action is: ${action}.\nWelcome to Visma\n`;
            }
            if(this.data.parameters.paymentNumber){
                return `Action is: ${action}. \nPayment number is ${URI.parameters.paymentNumber}.\nThank you for using Visma ${URI.parameters.source}\n`;
            }
            if(this.data.parameters.documentId){
                return `Action is: ${action}. \nDocument ID is ${URI.parameters.documentId}.\nThank you for using Visma ${URI.parameters.source}\n`;
            }
        }
     }
 
 }

 const test = new VismaURIv2 (URI);

 console.log(test.identifyAction(URI.path));

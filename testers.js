// const URI = {
//     scheme:'visma-identity',
//     path:'login',
//     parameters:'source=severa'
// }

// const URI2 = {
//     scheme:'visma-identity',
//     path:'confirm',
//     parameters:'source=netvisor&paymentnumber'
// }

// const URI3 = {
//     scheme:'visma-identity',
//     path:'sign',
//     parameters:'source=vismasign&documentid'
// }

const myURL = new URL('visma-identity://login?source=severa');

// const myURL = new URL('visma-identity://confirm?source=netvisor&paymentnumber=102226');

// const myURL = new URL('visma-identity://sign?source=vismasign&documentid=47ed9186-2ba0-4e8b-b9e2-7123575fdd5b');

let URI = {
    scheme: myURL.protocol,
    path:myURL.hostname,
    parameters: {
        source: myURL.searchParams.get('source'),
        paymentNumber: myURL.searchParams.get('paymentnumber'),
        documentId: myURL.searchParams.get('documentid')
    }
}

class VismaURI {

    constructor(data){
       this.data = data
    }

    login (source) {
        if(typeof source == "string"){

            if (!this.data.scheme === URI.scheme){
                throw new Error('Wrong Scheme')
            }
            if(this.data.path === source)
            return `${this.data.scheme}//${this.data.path}?source=${this.data.parameters.source}`;

        }
        else return `ERROR: parameters must be strings`;
    };

    confirm (source, paymentNumber) {
        if(typeof source == "string" && typeof paymentNumber =='number'){

            if (!this.data.scheme === 'visma-identity'){
                throw new Error('Wrong Scheme')
            }
            if(!this.data.path === source) throw new Error (`Wrong source. Introduce proper path, which is ${this.data.path}.`);
            if(!paymentNumber) throw new Error ('Missing parameter');
            else{
                return `${this.data.scheme}://${this.data.path}?${this.data.parameters}=${paymentNumber}`;
            }
        }
        else return `ERROR: first parameter must be a string. Second a number`;
    };

    sign (source, documentId) {
        if(typeof source == "string" && typeof documentId =='string'){

            if (!this.data.scheme === 'visma-identity'){
                throw new Error('Wrong Scheme')
            }
            if(!this.data.path === source) throw new Error (`Wrong source. Introduce proper path, which is ${this.data.path}.`);
            if(!documentId) throw new Error ('Missing parameter');
            else{
                return `${this.data.scheme}://${this.data.path}?${this.data.parameters}=${documentId}`;
            }
        }
        else return `ERROR: parameters must be strings`;
    };

}

const testLogin = new VismaURI(URI);

// const testConfirm = new VismaURI(URI2)

// const testSign = new VismaURI(URI3)

console.log(testLogin.login('login'));

// console.log(testConfirm.confirm('confirm',98))

// console.log(testSign.sign('sign',98));


// const myURL = new URL ('visma-identity://login?source=severa');

// console.log(myURL);
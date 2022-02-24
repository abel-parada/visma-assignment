const Vismaclass = require('./classLayer');

// const myURL = new URL('visma-identity://login?source=severa');

const myURL = new URL('visma-identity://confirm?source=netvisor&paymentnumber=102226');

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

const visma = new Vismaclass(URI);

const loginMethod = visma.confirm('confirm',98);
console.log(`Using the login method: ${loginMethod}`);


// console.log(visma.sign('sign','8uhbdsfja8'))
// how to access searchParams https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams

// const myURL = new URL('visma-identity://login?source=severa');
// let params =myURL.searchParams;
// console.log(params);
// let source = params.get('source');
// console.log(source);

// console.log('\n');
// console.log(myURL);
// console.log('\n');

// const myURL2 = new URL('visma-identity://confirm?source=netvisor&paymentnumber=102226');
// let params2 =myURL2.searchParams;
// console.log(params2);
// let source2 = params2.get('source');
// let paymentNumber = params2.get('paymentnumber');
// console.log(source2);
// console.log(paymentNumber);

// console.log('\n');
// console.log(myURL2);
// console.log('\n');

// const myURL = new URL('visma-identity://sign?source=vismasign&documentid=47ed9186-2ba0-4e8b-b9e2-7123575fdd5b');
// let params3 =myURL3.searchParams;
// console.log(params3);
// let source3 = params3.get('source');
// let documentId = params3.get('documentid');
// console.log(source3);//paramaters
// console.log(documentId);

// console.log('\n');
// console.log(myURL3);
// console.log('\n');

////////////////


// how to access searchParams https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams


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

console.log(URI)
const VismaURI = require('./classLayer');

const visma = new VismaURI('visma-identity://login?source=severa');
// const visma = new VismaURI('visma-identity://confirm?source=netvisor&paymentnumber=102226');
// const visma = new VismaURI('visma-identity://sign?source=vismasign&documentid=47ed9186-2ba0-4e8b-b9e2-7123575fdd5b');

console.log(visma.identifyAction());
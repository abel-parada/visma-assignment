module.exports = class VismaURI {

    constructor(data){
        this.data = data
     }
 
     login (source) {
        if(typeof source == "string"){

            if (!this.data.scheme === 'visma-identity'){
                throw new Error('Wrong Scheme')
            }
            if(this.data.path === source)
            return `${this.data.scheme}//${this.data.path}?source=${this.data.parameters.source}`;
            else{
                return `Error. Use the ${this.data.path}() method instead`;
            }

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
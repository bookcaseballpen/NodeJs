var person = {
    firstname : 'sam',
    lastname : 'wang'
};

var sayName = function (){
    console.log(this.firstname + ' ' + this.lastname);
};

sayName.call(person);
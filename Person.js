class Person {
   // var _firstName, _lastname;
  //  var s_firstname  = new Symbol();
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.log();
    }

    log() {
        console.log('I am', this._firstName, this._lastName);
    }

    // setters
    set profession(val) {
        this._profession = val;
    }
    // getters
    get profession() {
        console.log(this._firstName, this._lastName, 'is a', this._profession);
    }
// With the above code, even though we can access the properties outside the function to change their content what if we don't want that.
// Symbols come to rescue.

}

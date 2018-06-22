function Field (value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field("itking");
var password = new Field("my_password");
var birthday = new Field("10/10/2010");

var fields = [username, password, birthday];

let result = fields.every((field) => {
    return field.validate();
});

console.log(result);
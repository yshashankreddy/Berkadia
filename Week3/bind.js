var student= {firstName: 'Shashank', lastName: 'Reddy'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

var studgreeting=say.bind(student, ['Welcome to Berkedia']);
studgreeting();

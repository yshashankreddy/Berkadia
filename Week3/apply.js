var student= {firstName: 'Shashank', lastName: 'Reddy'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(student, ['Welcome to Berkedia']);
var student= {firstName: 'Shashank', lastName: 'Reddy'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(student,'Welcome to Berkedia');
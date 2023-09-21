function greeting(greetingHandaler, name){
    greetingHandaler(name);
}

function greetingHandaler(name){
    console.log('welcome to my', name)
};

function greetingEvening(name){
console.log('welcome to my hotel for evening mr.', name);
}

greeting(greetingHandaler, 'najiya islam');
greeting(greetingHandaler, 'mainul islam');
greeting(greetingEvening, 'sonamuni');
let user = {
    age: 30,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('Ohhh');
    }
}

user.age // O(1)
user.spell = 'Love Song'; // O(1)
user.scream(); // O(1)
ocument.getElementById('jubilationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let age = Number(document.getElementById('age').value);
    let sex = document.getElementById('sex').value;
    
    let canRetire = false;
    if (sex === 'male' && age >= 60) {
        canRetire = true;
    } else if (sex === 'female' && age >= 54) {
        canRetire = true;
    }
    
    document.getElementById('result').innerHTML = 
        `${name} ${canRetire ? 'sí' : 'no'} se puede jubilar.`;
});
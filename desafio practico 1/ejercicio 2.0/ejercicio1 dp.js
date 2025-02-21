document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let numbers = [
        document.getElementById('num1').value,
        document.getElementById('num2').value,
        document.getElementById('num3').value,
        document.getElementById('num4').value,
        document.getElementById('num5').value,
        document.getElementById('num6').value,
        document.getElementById('num7').value,
        document.getElementById('num8').value
    ];
    numbers = numbers.map(num => num.toString()).sort();
    document.getElementById('result').innerHTML = 
        'Números ordenados lexicográficamente: ' + numbers.join(', ');
});
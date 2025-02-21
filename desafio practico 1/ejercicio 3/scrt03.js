document.getElementById('conversionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let value = Number(document.getElementById('value').value);
    let fromUnit = document.getElementById('fromUnit').value;
    const conversions = {
        mm: 0.001,  // 
        cm: 0.01, 
        m: 1,      
        km: 1000,   
        in: 0.0254  
    }
    let valueInMeters = value * conversions[fromUnit];

    let results = {
        mm: (valueInMeters / conversions.mm).toFixed(2),
        cm: (valueInMeters / conversions.cm).toFixed(2),
        m: valueInMeters.toFixed(2),
        km: (valueInMeters / conversions.km).toFixed(2),
        in: (valueInMeters / conversions.in).toFixed(2)
    };
    
    document.getElementById('result').innerHTML = `
        ${value} ${fromUnit} = 
        ${results.mm} mm, 
        ${results.cm} cm, 
        ${results.m} m, 
        ${results.km} km, 
        ${results.in} in
    `;
});
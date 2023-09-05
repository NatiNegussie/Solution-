const start = () => {
    const input = document.querySelector('.input');
    const price1 = document.getElementById('price1').value;
    const price2 = document.getElementById('price2').value;
    const price3 = document.getElementById('price3').value;
    const price4= document.getElementById('price4').value;
    const price5 = document.getElementById('price5').value;
    const price6 = document.getElementById('price6').value;
    const budget = document.getElementById('budget').value;
    input.style.display = 'flex';
    document.getElementById('Start').style.display = 'none';
   
}
const total = () => {
    const input = document.querySelector('.input');
    const price1 = document.getElementById('price1').value;
    const price2 = document.getElementById('price2').value;
    const price3 = document.getElementById('price3').value;
    const price4= document.getElementById('price4').value;
    const price5 = document.getElementById('price5').value;
    const price6 = document.getElementById('price6').value;
    const budget = document.getElementById('budget').value;
    const p = document.getElementById('p');
    
    input.style.display = 'none';
    p.style.display = 'flex';
   
  p.innerHTML = budget - (price1 + price2 + price3 + price4 + price5 + price6);
}

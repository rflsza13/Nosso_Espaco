const birthDateJulia = new Date("1996-12-21T00:00:00");
const birthDateRafael = new Date("1994-04-17T00:00:00");

function updateCounter(startDate) {
    const now = new Date();
    const diff = now - startDate;
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor((hours / 24) - 7);
  
    let years = Math.floor(days / 365);
    days %= 365;
  
    let months = Math.floor(days / 30.44);
    days = Math.floor(days % 30.44);
    return years;
}

// Inicializar
let age1 = updateCounter(birthDateJulia);
document.getElementById("idadeJulia").textContent = age1;
let age2 = updateCounter(birthDateRafael);
document.getElementById("idadeRafael").textContent = age2;
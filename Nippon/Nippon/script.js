function minFunktion(){
    alert("HUSK at tilmelde dig vores nyhedsbrev for 15% på din ordre!");
}

minFunktion();

document.addEventListener("click", minFunktion)

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
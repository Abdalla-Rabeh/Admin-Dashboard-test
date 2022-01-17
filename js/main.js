let Avatr = document.querySelector('.avatr');
let Navigation = document.querySelector('.navigation');
Drowdown(Avatr)
Drowdown(Navigation)
function Drowdown(Selector){

    let dorpMenu = Selector.querySelector('.dropdown-menu');
    Selector.addEventListener('click', ()=>{
        dorpMenu.classList.toggle("active")
        
    })
}
let sliderbar = document.querySelector(".slidebar"),
    bars = document.querySelector(".bars");

    bars.addEventListener('click', ()=>{
        sliderbar.classList.toggle("active")
    })

    let Visitors = [800,320, 190, 250, 400,600],
    Hired = [502,203,70,200,350,400], 
    years = [2015,2016,2017,2018,2019,2020] ;
    var options = {
        chart: {
          type: 'area',
          height: '100%',
        },
        series: [{
          type: 'area',
          name :"visitors",
          data: Visitors
        }, {
          type: 'area',
          name :"Hired",
          data: Hired
        }],
        xaxis: {
          categories: [...years]
        },
        colors:['#43a047', '#e65245', '#e43a15']
      }
      
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      
      chart.render();
      

///Toggle Mode 
let mode = document.querySelector(".mode");
mode.addEventListener("click",()=>{
  if(document.body.classList.contains("dark"))
  {
    document.body.classList.remove("dark");
    mode.querySelector("i").classList.replace("fa-sun","fa-moon")
  }
  else
  {
    document.body.classList.add("dark");
    mode.querySelector("i").classList.replace("fa-moon","fa-sun")
  }
})





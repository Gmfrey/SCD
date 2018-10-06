var minerals = 1000;

var mineralsEarned = 0;

var mineralsPerSecond = 0;

var gas = 0;

var gasEarned = 0;

var gasPerSecond = 0;

var idleworkers = 0;

var mineralworkers = 12;

var gasworkers = 0;

var mineralpatch = 8;

var gaspatch = 2;

//Window Loop
window.setInterval(function(){
    mineminerals();
    minegas();
}, 5000);


//Worker Function - minerals

function createWorkers(){
  if (minerals >= 50){
  idleworkers = idleworkers + 1;
  minerals = minerals - 50;
};
  document.getElementById("idleworkers").innerHTML = idleworkers;
  document.getElementById("mineralworkers").innerHTML = mineralworkers;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
};

//Assign workers - Minerals
function assignworkermineral(){
  if (idleworkers >= 1 && mineralworkers < mineralpatch){
    idleworkers = idleworkers - 1;
    mineralworkers = mineralworkers +1;
    document.getElementById("idleworkers").innerHTML = idleworkers;
    document.getElementById("mineralworkers").innerHTML = mineralworkers;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
  }
}
//Assign workers - gas
function assignworkergas(){
  if (idleworkers >= 1){
    idleworkers = idleworkers - 1;
    gasworkers = gasworkers +1;
    document.getElementById("idleworkers").innerHTML = idleworkers;
    document.getElementById("gasworkers").innerHTML = gasworkers;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
  }
}

//Mine minerals function
function mineminerals(){
  mineralsEarned = mineralworkers * 5;
  minerals = minerals + mineralsEarned
  document.getElementById("minerals").innerHTML = minerals;
}
//Mine gas function
function minegas(){
  gasEarned = gasworkers * 5;
  gas = gas + gasEarned
  document.getElementById("gas").innerHTML = gas;
}

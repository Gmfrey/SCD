var minerals = 1000;

var mineralsEarned = 0;

var gas = 0;

var gasEarned = 0;

var idleWorkers = 0;

var mineralWorkers = 12;

var gasWorkers = 0;

var mineralPatch = 8;

var gasPatch = 2;

var time = 5000;

var supply = 12;

var supplyLimit = 200;




//Window Loop
window.setInterval(function(){
    mineMinerals();
    mineGas();
    document.getElementById("time").innerHTML = time;
}, time);


//Create Idle Worker

function createWorkers(){
  if (minerals >= 50 &&  supply < supplyLimit){
  idleWorkers = idleWorkers + 1;
  minerals = minerals - 50;
  supply = supply + 1;
};
  document.getElementById("idleWorkers").innerHTML = idleWorkers;
  document.getElementById("mineralWorkers").innerHTML = mineralWorkers;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  document.getElementById("supply").innerHTML = supply;
  document.getElementById("supplyLimit").innerHTML = supplyLimit;
};

//Assign workers - minerals
function assignWorkerMineral(){
  if (idleWorkers >= 1 && mineralWorkers < mineralPatch * 2){
    idleWorkers = idleWorkers - 1;
    mineralWorkers = mineralWorkers + 1;
    document.getElementById("idleWorkers").innerHTML = idleWorkers;
    document.getElementById("mineralWorkers").innerHTML = mineralWorkers;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
  }
}
//Assign workers - gas
function assignWorkerGas(){
  if (idleWorkers >= 1 && gasWorkers < gasPatch * 3){
    idleWorkers = idleWorkers - 1;
    gasWorkers = gasWorkers + 1;
    document.getElementById("idleWorkers").innerHTML = idleWorkers;
    document.getElementById("gasWorkers").innerHTML = gasWorkers;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
  }
}

//Mine minerals function
function mineMinerals(){
  mineralsEarned = mineralWorkers * 5;
  minerals = minerals + mineralsEarned
  document.getElementById("minerals").innerHTML = minerals;
}
//Mine gas function
function mineGas(){
  gasEarned = gasWorkers * 5;
  gas = gas + gasEarned
  document.getElementById("gas").innerHTML = gas;
}


//Update All Values in HTML page
document.getElementById("supply").innerHTML = supply;
document.getElementById("supplyLimit").innerHTML = supplyLimit;
document.getElementById("idleWorkers").innerHTML = idleWorkers;
document.getElementById("mineralWorkers").innerHTML = mineralWorkers;
document.getElementById("gasWorkers").innerHTML = gasWorkers;
document.getElementById("minerals").innerHTML = minerals;
document.getElementById("gas").innerHTML = gas;

var minerals = 0;

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

var supplyLimit = 15;

var commandCenter = 1;

var orbitalCommand = 0;

var planetaryFortress = 0;

var supplyDepot = 0;

var refinery = 0;

var barracks = 0;

var engineeringBay = 0;

var bunker = 0;

var missileTurret = 0;

var sensorTower = 0;

var factory = 0;

var ghostAcademy = 0;

var armory = 0;

var starport = 0;

var fusionCore = 0;

var techLab = 0;

var reactor = 0;



//Window Loop Mining
window.setInterval(function(){
    mineMinerals();
    mineGas();
    calcSupply();
    document.getElementById("time").innerHTML = time;
}, time);

//Window loop update UI each second
window.setInterval(function(){
    updateValues();
}, 1000);

//Calculate Supply Availible
function calcSupply(){
  supplyLimit = 15*(commandCenter + orbitalCommand + planetaryFortress) + 8*supplyDepot;
  if (supplyLimit > 200){
    supplyLimit = 200;
  }
  document.getElementById("supplyLimit").innerHTML = supplyLimit;
};

//Create Idle Worker

function createWorkers(){
  if (minerals >= 50 && supply < supplyLimit){
  idleWorkers = idleWorkers + 1;
  minerals = minerals - 50;
  supply = supply + 1;
  document.getElementById("idleWorkers").innerHTML = idleWorkers;
  document.getElementById("mineralWorkers").innerHTML = mineralWorkers;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  document.getElementById("supply").innerHTML = supply;
  document.getElementById("supplyLimit").innerHTML = supplyLimit;
  };
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
  };
};
//Assign workers - gas
function assignWorkerGas(){
  if (idleWorkers >= 1 && gasWorkers < gasPatch * 3){
    idleWorkers = idleWorkers - 1;
    gasWorkers = gasWorkers + 1;
    document.getElementById("idleWorkers").innerHTML = idleWorkers;
    document.getElementById("gasWorkers").innerHTML = gasWorkers;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
  };
};

//Mine minerals function
function mineMinerals(){
  mineralsEarned = mineralWorkers * 5;
  minerals = minerals + mineralsEarned
  document.getElementById("minerals").innerHTML = minerals;
};
//Mine gas function
function mineGas(){
  gasEarned = gasWorkers * 5;
  gas = gas + gasEarned
  document.getElementById("gas").innerHTML = gas;
};
//Create Supply Depot

function createsupplyDepot(){
  if (minerals >= 100){
  minerals = minerals - 100;
  supplyDepot = supplyDepot + 1;
  document.getElementById("supplyDepot").innerHTML = supplyDepot;
  document.getElementById("minerals").innerHTML = minerals;
};


//Update All Values in HTML page every second
function updateValues(){
  document.getElementById("supply").innerHTML = supply;
  document.getElementById("supplyLimit").innerHTML = supplyLimit;
  document.getElementById("idleWorkers").innerHTML = idleWorkers;
  document.getElementById("mineralWorkers").innerHTML = mineralWorkers;
  document.getElementById("gasWorkers").innerHTML = gasWorkers;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  document.getElementById("supplyDepot").innerHTML = supplyDepot;
};

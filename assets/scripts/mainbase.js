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
}, 5000);

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
  if (idleWorkers >= 1 && gasWorkers < refinery * 3){
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

///////////////////////////////////BUILDINGS//////////////////////////////////////////

//Build Supply Depot

function createSupplyDepot(){
  if (minerals >= 100){
  minerals = minerals - 100;
  supplyDepot = supplyDepot + 1;
  supplyLimit = 15*(commandCenter + orbitalCommand + planetaryFortress) + 8*supplyDepot;
  if (supplyLimit > 200){
    supplyLimit = 200;};
  document.getElementById("supplyDepot").innerHTML = supplyDepot;
  document.getElementById("supplyLimit").innerHTML = supplyLimit;
  document.getElementById("minerals").innerHTML = minerals;
  };
};

//Build Command Center
function createCommandCenter(){
  if (minerals >= 400){
  minerals = minerals - 400;
  commandCenter = commandCenter + 1;
  mineralPatch = mineralPatch + 6;
  gasPatch = gasPatch + 2;
  supplyLimit = 15*(commandCenter + orbitalCommand + planetaryFortress) + 8*supplyDepot;
  if (supplyLimit > 200){
    supplyLimit = 200;};
  document.getElementById("supplyLimit").innerHTML = supplyLimit;
  document.getElementById("commandCenter").innerHTML = commandCenter;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("mineralPatch").innerHTML = mineralPatch;
  document.getElementById("gasPatch").innerHTML = gasPatch;

  };
};

//Upgrade Command Center to Planetary Fortress
function createPlanetaryFortress(){
  if (minerals >= 150 && gas >= 150 && commandCenter >= 1){
  minerals = minerals - 150;
  gas = gas - 150;
  commandCenter = commandCenter - 1;
  planetaryFortress = planetaryFortress + 1;
  document.getElementById("commandCenter").innerHTML = commandCenter;
  document.getElementById("planetaryFortress").innerHTML = planetaryFortress;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  };
};
//Upgrade Command Center to Orbital Command
function createOrbitalCommand(){
  if (minerals >= 150 && commandCenter >= 1){
  minerals = minerals - 150;
  commandCenter = commandCenter - 1;
  orbitalCommand = orbitalCommand + 1;
  document.getElementById("commandCenter").innerHTML = commandCenter;
  document.getElementById("orbitalCommand").innerHTML = orbitalCommand;
  document.getElementById("minerals").innerHTML = minerals;

  };
};
//Build Barracks
function createBarracks(){
  if (minerals >= 150){
  minerals = minerals - 150;
  barracks = barracks + 1;
  document.getElementById("barracks").innerHTML = barracks;
  document.getElementById("minerals").innerHTML = minerals;
  };
};

//Build Refinery
function createRefinery(){
  if (minerals >= 75 && refinery < gasPatch){
  minerals = minerals - 75;
  refinery = refinery + 1;
  document.getElementById("refinery").innerHTML = refinery;
  document.getElementById("minerals").innerHTML = minerals;
  };
};
//Build engineeringBay
function createEngineeringBay(){
  if (minerals >= 150){
  minerals = minerals - 150;
  engineeringBay = engineeringBay + 1;
  document.getElementById("engineeringBay").innerHTML = engineeringBay;
  document.getElementById("minerals").innerHTML = minerals;
  };
};
//Build Bunker
function createBunker(){
  if (minerals >= 100){
  minerals = minerals - 150;
  bunker = bunker + 1;
  document.getElementById("bunker").innerHTML = bunker;
  document.getElementById("minerals").innerHTML = minerals;
  };
};

//Build Factory
function createFactory(){
  if (minerals >= 150 && gas >= 100){
  minerals = minerals - 150;
  gas = gas - 100;
  factory = factory + 1;
  document.getElementById("factory").innerHTML = factory;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};
//Build Ghost Academy
function createGhostAcademy(){
  if (minerals >= 150 && gas >= 50){
  minerals = minerals - 150;
  gas = gas - 50;
  ghostAcademy = ghostAcademy + 1;
  document.getElementById("ghostAcademy").innerHTML = ghostAcademy;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};
//Build Armory
function createArmory(){
  if (minerals >= 150 && gas >= 100){
  minerals = minerals - 150;
  gas = gas - 100;
  armory = armory + 1;
  document.getElementById("armory").innerHTML = armory;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};
//Build Starport
function createStarport(){
  if (minerals >= 150 && gas >= 100){
  minerals = minerals - 150;
  gas = gas - 100;
  starport = starport + 1;
  document.getElementById("starport").innerHTML = starport;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};
//Build Fusion Core
function createFusionCore(){
  if (minerals >= 150 && gas >= 150){
  minerals = minerals - 150;
  gas = gas - 150;
  fusionCore = fusionCore + 1;
  document.getElementById("fusionCore").innerHTML = fusionCore;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};
//Build Sensor Tower
function createSensorTower(){
  if (minerals >= 125 && gas >= 100){
  minerals = minerals - 125;
  gas = gas - 100;
  sensorTower = sensorTower + 1;
  document.getElementById("sensorTower").innerHTML = sensorTower;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};


//////Need to Add techLab, reactor////

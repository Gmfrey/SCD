var minerals = 10000;

var mineralsEarned = 0;

var gas = 10000;

var gasEarned = 0;

var mineralPatch = 8;

var gasPatch = 2;

var time = 5000;

var supply = 12;

var supplyLimit = 15;

var armyValue = 0;

///BUILDINGS////

var commandCenter = 1;

var orbitalCommand = 0;

var planetaryFortress = 0;

var supplyDepot = 0;

var refinery = 0;

var barracks = 0;

var barracksTechLab = 0;

var barracksReactor = 0;

var engineeringBay = 0;

var bunker = 0;

var missileTurret = 0;

var sensorTower = 0;

var factory = 0;

var factoryTechLab = 0;

var factoryReactor = 0;

var ghostAcademy = 0;

var armory = 0;

var starport = 0;

var starportTechLab = 0;

var starportReactor = 0;

var fusionCore = 0;

var techLab = 0;

var idleTechLab = 0;

var reactor = 0;

var idleReactor = 0;

///////UNITS///////////

var idleWorkers = 0;

var mineralWorkers = 12;

var gasWorkers = 0;

var marine = 0;

var marauder = 0;

var reaper = 0;

var ghost = 0;

var hellion = 0;

var hellbat = 0;

var widowMine = 0;

var siegeTank = 0;

var cyclone = 0;

var thor = 0;

var viking = 0;

var medivac = 0;

var liberator = 0;

var banshee = 0;

var raven = 0;

var battlecruiser = 0;

var missleTurret = 0;


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
  gasEarned = gasWorkers * 4;
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
  if (minerals >= 150 && gas >= 150 && commandCenter >= 1 && engineeringBay >= 1){
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
  if (minerals >= 150 && commandCenter >= 1 && supplyDepot >= 1){
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
  if (minerals >= 150 && supplyDepot >= 1){
  minerals = minerals - 150;
  barracks = barracks + 1;
  document.getElementById("barracks").innerHTML = barracks;
  document.getElementById("minerals").innerHTML = minerals;
  };
};

//Upgrade Barracks with Techlab
function createBarracksTechLab(){
  if (minerals >= 50 && gas >= 25 && barracks >= 1){
  minerals = minerals - 50;
  gas = gas - 25;
  barracks = barracks - 1;
  barracksTechLab = barracksTechLab + 1;
  document.getElementById("barracks").innerHTML = barracks;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  document.getElementById("barracksTechLab").innerHTML = barracksTechLab;
  };
};

///Liftoff Barracks with Techlab
function liftBarracksTechLab(){
  if (barracksTechLab >=1){
    barracksTechLab = barracksTechLab - 1;
    barracks = barracks + 1;
    idleTechLab = idleTechLab + 1;
    document.getElementById("barracks").innerHTML = barracks;
    document.getElementById("barracksTechLab").innerHTML = barracksTechLab;
    //document.getElementById("idleTechLab").innerHTML = idleTechLab;
  }
}
///Land Barracks with Techlab
function landBarracksTechLab(){
  if (idleTechLab >=1 && barracks >= 1){
    barracksTechLab = barracksTechLab + 1;
    barracks = barracks - 1;
    document.getElementById("barracks").innerHTML = barracks;
    document.getElementById("barracksTechLab").innerHTML = barracksTechLab;
    //document.getElementById("idleTechLab").innerHTML = idleTechLab;
  }
}

//Upgrade Barracks with Reactor
function createBarracksReactor(){
  if (minerals >= 50 && gas >= 50 && barracks >= 1){
  minerals = minerals - 50;
  gas = gas - 50;
  barracks = barracks - 1;
  barracksReactor = barracksReactor + 1;
  document.getElementById("barracks").innerHTML = barracks;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  document.getElementById("barracksReactor").innerHTML = barracksReactor;
  };
};

///Liftoff Barracks with Reactor
function liftBarracksReactor(){
  if (barracksReactor >=1){
    barracksReactor = barracksReactor - 1;
    barracks = barracks + 1;
    idleReactor = idleReactor + 1;
    document.getElementById("barracks").innerHTML = barracks;
    document.getElementById("barracksReactor").innerHTML = barracksReactor;
    //document.getElementById("idleReactor").innerHTML = idleReactor;
  }
}
///Land Barracks with Reactor
function landBarracksReactor(){
  if (idleReactor >=1 && barracks >= 1){
    barracksReactor = barracksReactor + 1;
    barracks = barracks - 1;
    document.getElementById("barracks").innerHTML = barracks;
    document.getElementById("barracksReactor").innerHTML = barracksReactor;
    //document.getElementById("idleReactor").innerHTML = idleReactor;
  }
}

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
  if (minerals >= 100 && supplyDepot >= 1){
  minerals = minerals - 150;
  bunker = bunker + 1;
  document.getElementById("bunker").innerHTML = bunker;
  document.getElementById("minerals").innerHTML = minerals;
  };
};

//Build Factory
function createFactory(){
  if (minerals >= 150 && gas >= 100 && supplyDepot >= 1){
  minerals = minerals - 150;
  gas = gas - 100;
  factory = factory + 1;
  document.getElementById("factory").innerHTML = factory;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};

//Upgrade Factory with Tech Lab
function createFactoryTechLab(){
  if (minerals >= 50 && gas >= 25 && factory >= 1){
  minerals = minerals - 50;
  gas = gas - 50;
  factory = factory - 1;
  factoryTechLab = factoryTechLab + 1;
  document.getElementById("factory").innerHTML = factory;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  document.getElementById("factoryTechLab").innerHTML = factoryTechLab;
  };
};

///Liftoff Factory with Techlab
function liftFactoryTechLab(){
  if (factoryTechLab >=1){
    factoryTechLab = factoryTechLab - 1;
    factory = factory + 1;
    idleTechLab = idleTechLab + 1;
    document.getElementById("factory").innerHTML = factory;
    document.getElementById("factoryTechLab").innerHTML = factoryTechLab;
    //document.getElementById("idleTechLab").innerHTML = idleTechLab;
  }
}
///Land Barracks with Techlab
function landFactoryTechLab(){
  if (idleTechLab >=1 && factory >= 1){
    factoryTechLab = factoryTechLab + 1;
    factory = factory - 1;
    document.getElementById("factory").innerHTML = factory;
    document.getElementById("factoryTechLab").innerHTML = factoryTechLab;
    //document.getElementById("idleTechLab").innerHTML = idleTechLab;
  }
}


//Upgrade Factory with Reactor
function createFactoryReactor(){
  if (minerals >= 50 && gas >= 50 && factory >= 1){
  minerals = minerals - 50;
  gas = gas - 50;
  factory = factory - 1;
  factoryReactor = factoryReactor + 1;
  document.getElementById("factory").innerHTML = factory;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  document.getElementById("factoryReactor").innerHTML = factoryReactor;
  };
};

///Liftoff Factory with Reactor
function liftFactoryReactor(){
  if (factoryReactor >=1){
    factoryReactor = factoryReactor - 1;
    factory = factory + 1;
    idleReactor = idleReactor + 1;
    document.getElementById("factory").innerHTML = factory;
    document.getElementById("factoryReactor").innerHTML = factoryReactor;
    //document.getElementById("idleReactor").innerHTML = idleReactor;
  }
}
///Land Factory with Reactor
function landFactoryReactor(){
  if (idleReactor >=1 && factory >= 1){
    factoryReactor = factoryReactor + 1;
    factory = factory - 1;
    document.getElementById("factory").innerHTML = factory;
    document.getElementById("factoryReactor").innerHTML = factoryReactor;
    //document.getElementById("idleReactor").innerHTML = idleReactor;
  }
}


//Build Ghost Academy
function createGhostAcademy(){
  if (minerals >= 150 && gas >= 50 && supplyDepot >= 1){
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
  if (minerals >= 150 && gas >= 100 && factory >= 1 || factoryReactor >= 1 || factoryTechLab >= 1){
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
  if (minerals >= 150 && gas >= 100 && factory >= 1 || factoryReactor >= 1 || factoryTechLab >= 1){
  minerals = minerals - 150;
  gas = gas - 100;
  starport = starport + 1;
  document.getElementById("starport").innerHTML = starport;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};

//Upgrade Starport with Tech Lab
function createStarportTechLab(){
  if (minerals >= 50 && gas >= 25 && starport >= 1){
  minerals = minerals - 50;
  gas = gas - 50;
  starport = starport - 1;
  starportTechLab = starportTechLab + 1;
  document.getElementById("starport").innerHTML = starport;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  document.getElementById("starportTechLab").innerHTML = starportTechLab;
  };
};

///Liftoff Starport with Techlab
function liftStarportTechLab(){
  if (starportTechLab >=1){
    starportTechLab = starportTechLab - 1;
    starport = starport + 1;
    idleTechLab = idleTechLab + 1;
    document.getElementById("starport").innerHTML = starport;
    document.getElementById("starportTechLab").innerHTML = starportTechLab;
    //document.getElementById("idleTechLab").innerHTML = idleTechLab;
  }
}
///Land Starport with Techlab
function landStarportTechLab(){
  if (idleTechLab >=1 && starport >= 1){
    starportTechLab = starportTechLab + 1;
    starport = starport - 1;
    document.getElementById("starport").innerHTML = starport;
    document.getElementById("starportTechLab").innerHTML = starportTechLab;
    //document.getElementById("idleTechLab").innerHTML = idleTechLab;
  }
}

//Upgrade Starport with Reactor
function createStarportReactor(){
  if (minerals >= 50 && gas >= 50 && starport >= 1){
  minerals = minerals - 50;
  gas = gas - 50;
  starport = starport - 1;
  starportReactor = starportReactor + 1;
  document.getElementById("starport").innerHTML = starport;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById("gas").innerHTML = gas;
  document.getElementById("starportReactor").innerHTML = starportReactor;
  };
};

///Liftoff Starport with Reactor
function liftStarportReactor(){
  if (starportReactor >=1){
    starportReactor = starportReactor - 1;
    starport = starport + 1;
    idleReactor = idleReactor + 1;
    document.getElementById("starport").innerHTML = starport;
    document.getElementById("starportReactor").innerHTML = starportReactor;
    //document.getElementById("idleReactor").innerHTML = idleReactor;
  }
}
///Land Starport with Reactor
function landStarportReactor(){
  if (idleReactor >=1 && starport >=1){
    starportReactor = starportReactor + 1;
    starport = starport - 1;
    document.getElementById("starport").innerHTML = starport;
    document.getElementById("starportReactor").innerHTML = starportReactor;
    //document.getElementById("idleReactor").innerHTML = idleReactor;
  }
}

//Build Fusion Core
function createFusionCore(){
  if (minerals >= 150 && gas >= 150 && starport >= 1 || starportReactor >= 1 || starportTechLab >= 1){
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
  if (minerals >= 125 && gas >= 100 && engineeringBay >= 1){
  minerals = minerals - 125;
  gas = gas - 100;
  sensorTower = sensorTower + 1;
  document.getElementById("sensorTower").innerHTML = sensorTower;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};

//Build Misslie Turret
function createMissileTurret(){
  if (minerals >= 100 && engineeringBay >= 1){
  minerals = minerals - 100;
  missileTurret = missleTurret + 1;
  document.getElementById("missileTurret").innerHTML = missleTurret;
  document.getElementById("minerals").innerHTML = minerals;
  document.getElementById('gas').innerHTML = gas;
  };
};


/////////ARMY UNITS/////////////////

//Build Marine
function createMarine(){
  if (minerals >= 50 && supply < supplyLimit && barracks >= 1 || barracksReactor >=1 || barracksTechLab >= 1){
    marine = marine + 1;
    minerals = minerals - 50;
    supply = supply + 1;
    armyValue = armyValue +1;
    document.getElementById("marine").innerHTML = marine;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Marauder
function createMarauder(){
  if (minerals >= 100 && gas >= 25 && barracksTechLab >= 1 && supply + 2 <= supplyLimit){
    marauder = marauder + 1;
    minerals = minerals - 100;
    gas = gas - 25;
    supply = supply + 2;
    armyValue = armyValue +3;
    document.getElementById("maruader").innerHTML = marauder;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Reaper
function createReaper(){
  if (minerals >= 50 && gas >= 50 && supply < supplyLimit && barracksTechLab >= 1 || barracks >= 1 || barracksReactor >= 1){
    reaper = reaper + 1;
    minerals = minerals - 50;
    gas = gas - 50;
    supply = supply + 1;
    armyValue = armyValue + 2;
    document.getElementById("reaper").innerHTML = reaper;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};


//Build Ghost
function createGhost(){
  if (minerals >= 150 && gas >= 125 && supply +2 <= supplyLimit && barracksTechLab >= 1 && ghostAcademy >= 1){
    ghost = ghost + 1;
    minerals = minerals - 150;
    gas = gas - 125;
    supply = supply + 2;
    armyValue = armyValue + 3;
    document.getElementById("ghost").innerHTML = ghost;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Hellion
function createHellion(){
  if (minerals >= 100 && supply + 2 <= supplyLimit && factory >= 1 || factoryReactor >= 1 || factoryTechLab >= 1){
    hellion = hellion + 1;
    minerals = minerals - 100;
    supply = supply + 2;
    armyValue = armyValue +3;
    document.getElementById("hellion").innerHTML = hellion;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Widow Mine
function createWidowMine(){
  if (minerals >= 75 && gas >= 25 && supply + 2 <= supplyLimit && factory >= 1 || factoryReactor >= 1 || factoryTechLab >= 1){
    widowMine = widowMine + 1;
    minerals = minerals - 75;
    gas = gas - 25;
    supply = supply + 2;
    armyValue = armyValue +3;
    document.getElementById("widowMine").innerHTML = widowMine;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Cyclone
function createCyclone(){
  if (minerals >= 150 && gas >= 100 && supply + 3 <= supplyLimit && factory >= 1 || factoryReactor >= 1 || factoryTechLab >= 1){
    cyclone = cyclone + 1;
    minerals = minerals - 150;
    gas = gas - 125;
    supply = supply + 2;
    armyValue = armyValue +3;
    document.getElementById("cyclone").innerHTML = cyclone;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Siege Tank
function createSiegeTank(){
  if (minerals >= 150 && gas >= 125 && factoryTechLab >= 1 && supply + 3 <= supplyLimit){
    siegeTank = siegeTank + 1;
    minerals = minerals - 150;
    gas = gas - 125;
    supply = supply + 3;
    armyValue = armyValue + 4;
    document.getElementById("siegeTank").innerHTML = siegeTank;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Hellbat
function createHellbat(){
  if (minerals >= 100 && armory >=1 && supply + 2 <= supplyLimit && factory >=1 || factoryReactor >=1 || factoryTechLab >= 1){
    hellbat = hellbat + 1;
    minerals = minerals - 100;
    supply = supply + 2;
    armyValue = armyValue +3;
    document.getElementById("hellbat").innerHTML = hellbat;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Thor
function createThor(){
  if (minerals >= 300 && gas >= 200 && factoryTechLab >= 1 && armory >= 1 && supply + 6 <= supplyLimit){
    thor = thor + 1;
    minerals = minerals - 300;
    gas = gas - 200;
    supply = supply + 6;
    armyValue = armyValue + 10;
    document.getElementById("thor").innerHTML = thor;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};
//Build Medivac
function createMedivac(){
  if (minerals >= 100 && gas >= 100 && supply + 2 <= supplyLimit && starport >= 1 || starportReactor >=1 || starportTechLab >= 1){
    medivac = medivac + 1;
    minerals = minerals -100;
    gas = gas - 100;
    supply = supply + 2;
    armyValue = armyValue + 5;
    document.getElementById("medivac").innerHTML = medivac;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};
//Build Viking
function createViking(){
  if (minerals >= 150 && gas >= 75 && supply + 2 <= supplyLimit && starport >= 1 || starportReactor >=1 || starportTechLab >= 1){
    viking = viking + 1;
    minerals = minerals - 150;
    gas = gas - 75;
    supply = supply + 2;
    armyValue = armyValue + 5;
    document.getElementById("viking").innerHTML = viking;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Liberator
function createLiberator(){
  if (minerals >= 150 && gas >= 150 && supply + 3 <= supplyLimit && starport >= 1 || starportReactor >=1 || starportTechLab >= 1){
    liberator = liberator + 1;
    minerals = minerals - 150;
    gas = gas - 150;
    supply = supply + 3;
    armyValue = armyValue + 5;
    document.getElementById("liberator").innerHTML = liberator;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Banshee
function createBanshee(){
  if (minerals >= 150 && gas >= 100 && supply + 3 <= supplyLimit && starportTechLab >= 1){
    banshee = banshee + 1;
    minerals = minerals - 150;
    gas = gas - 100;
    supply = supply + 3;
    armyValue = armyValue + 8;
    document.getElementById("banshee").innerHTML = banshee;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Raven
function createRaven(){
  if (minerals >= 100 && gas >= 200 && supply + 2 <= supplyLimit && starportTechLab >= 1){
    raven = raven + 1;
    minerals = minerals - 100;
    gas = gas - 200;
    supply = supply + 2;
    armyValue = armyValue + 8;
    document.getElementById("raven").innerHTML = raven;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

//Build Battlecruiser
function createBattlecruiser(){
  if (minerals >= 400 && gas >= 300 && supply + 2 <= supplyLimit && starportTechLab >= 1 && fusionCore >= 1){
    battlecruiser = battlecruiser + 1;
    minerals = minerals - 400;
    gas = gas - 300;
    supply = supply + 6;
    armyValue = armyValue + 10;
    document.getElementById("battlecruiser").innerHTML = battlecruiser;
    document.getElementById("minerals").innerHTML = minerals;
    document.getElementById("gas").innerHTML = gas;
    document.getElementById("supply").innerHTML = supply;
    document.getElementById("armyValue").innerHTML = armyValue;
  };
};

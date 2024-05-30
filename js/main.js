const projectInfo = document.querySelector('.project-info');
const hogerLagerBtn = document.querySelector('.hoger-lager-btn');
const escapeRoomBtn = document.querySelector('.escape-room-btn');
const bkeBtn = document.querySelector('.bke-btn');
const duckHuntBtn = document.querySelector('.duck-hunt-btn');
const catalogusBtn = document.querySelector('.catalogus-btn');
const dashboardBtn = document.querySelector('.dashboard-btn');

const hogerLagerText = 
`<h1 class="text-center">hoger lager</h1>
<img class="img-fluid" src="/img/hogerlager.png" alt="">
<p class="text-center">Het hoger lager spel was de eerste project die ik heb moeten maken van school, het was een vrij simpel project maar met de hoeveel heid kennis die ik had van progameren was het best pittig. dit project heb ik met 2 andere klas genoten en het ging niet helemaal vlekken loos maar we hebben het uit eindelijk wel gelukt.
</p>`

const escapeRoomText = 
`<h1 class="text-center">escape room</h1>
<img class="img-fluid" src="/img/escaperoom.png" alt="">
<p class="text-center">De escaperoom maken was best leuk maar wel pittig om het te laten werken hoe ik het wilden want we nogsteends niet genoeg verstandt van coderen waardoor we heel lang bezig waren met het neer zeten van objecten. deze project hebben we in een groepje van 5 en waar iederen aan zij egen escape room moets werken, het idee was dat we een verhaal moestem verzinnen waar de escaperoom over gaat en daar dan iets mee doen.
</p>`

const bkeText = 
`<h1 class="text-center">boter kaan en eieren</h1>
<img class="img-fluid" src="/img/boterKaasEnEieren.png" alt="">
<p class="text-center">Bij de project buld a game moets je minstens in je groepje 3 spellen hebben, de spel die ik heb moeten maken was boter kaas en eiren. Het klinkt niet zo moeilijk om te maken dacht ik maar het was moeilijker dan ik dacht. ik denk dat ik boter kaas en eiren niet hoeft uit te leggen maar ik moets wel een npc maken die tegen je speelden maar dat is mij niet gelukt.
</p>`

const duckHuntText = 
`<h1 class="text-center">duck hunt</h1>
<img class="img-fluid" src="/img/duckhunt.png" alt="">
<p class="text-center">Duckhunt was een week project die ik niet helemaal af had gemaakt maar het was een leuke oproject om aan te werken en mischien dat ik hem ooit af gaan maken. deze project moest je in je eentje maken en je mocht zelf kiesen welk spel je ging maken. ik had gekozen zoor duckhunt want het leek me niet zo moeilijk om te maken. het doel van het spel is dat je een eend uit de lucht schiet met een aantal kogels die je hebt, en de eend gaat steeds snellen.
</p>`

const catalogusText =
`<h1 class="text-center">catalogus</h1>
<img class="img-fluid" src="/img/catalogus.png" alt="">
<p class="text-center">De catalogus is een project waar we een markt website moetsen maken. mijn pagina was een market voor Warframe (een game) daar heb ik in game market, een murch en een in game bundels. we moesten daar mee met servers werken de bedoeling is dat we data op en server zetten en die met de catalogus fetchen. deze project moesten we met een groepje van 3 maken het was uitdagend want je moest echt samen werken om een goede reseltat te krijgen.
</p>`

const dashboardText = 
`<h1 class="text-center">dashboard</h1>
<img class="img-fluid" src="/img/" alt="">
<p class="text-center"> ...
</p>`


hogerLagerBtn.addEventListener('click', function(){
    projectInfo.innerHTML = hogerLagerText
})

escapeRoomBtn.addEventListener('click', function(){
    projectInfo.innerHTML = escapeRoomText
})

bkeBtn.addEventListener('click', function(){
    projectInfo.innerHTML = bkeText
})

duckHuntBtn.addEventListener('click', function(){
    projectInfo.innerHTML = duckHuntText
})

catalogusBtn.addEventListener('click', function(){
    projectInfo.innerHTML = catalogusText
})

dashboardBtn.addEventListener('click', function(){
    projectInfo.innerHTML = dashboardText
})
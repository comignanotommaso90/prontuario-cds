
const search = document.getElementById("search")
const results = document.getElementById("results")

search.addEventListener("input", function(){

let query = search.value.toLowerCase()
results.innerHTML=""

articoli.forEach(a=>{

if(
a.articolo.toLowerCase().includes(query) ||
a.titolo.toLowerCase().includes(query) ||
a.paroleChiave.some(k=>k.includes(query))
){

let card=`
<div class="card">

<h2>${a.articolo} - ${a.titolo}</h2>

<h3>Sanzioni</h3>

<table>
<tr>
<th>Condizione</th>
<th>Sanzione</th>
<th>Sanzioni Accessorie</th>
</tr>

${a.sanzioni.map(s=>`
<tr>
<td>${s.condizione}</td>
<td>${s.sanzione}</td>
<td>${s.accessorie}</td>
</tr>
`).join("")}

</table>

<h3>Procedura Operativa</h3>
<p>${a.procedura}</p>

<h3>Riduzioni</h3>
<p>${a.riduzioni}</p>

</div>
`

results.innerHTML += card
}

})

})


  /* ══════════════════════════════════════════════
     DATOS — aquí puedes añadir, quitar o editar
     campeones libremente.
     Formato: { name, cost, traits: [] }
  ══════════════════════════════════════════════ */
  const CHAMPIONS = [
    // ── Coste 1 ──
    { name: "Cho'Gath",    cost: 1, traits: ["Estrella oscura", "Luchador"] },
    { name: "Lissandra",   cost: 1, traits: ["Estrella oscura", "Pastor", "Arcanista"] },
    { name: "Poppy",       cost: 1, traits: ["Meeple", "Bastion"] },
    { name: "Veigar",      cost: 1, traits: ["Meeple", "Arcanista"] },
    { name: "Rek'Sai",     cost: 1, traits: ["Primordiano", "Luchador"] },
    { name: "Briar",       cost: 1, traits: ["Primordiano", "Picaro"] },
    { name: "Caitlyn",     cost: 1, traits: ["N.O.V.A.", "Tejedestinos"] },
    { name: "teemo",       cost: 1, traits: ["Onda espacial", "Pastor"] },  
    { name: "Nasus",       cost: 1, traits: ["Onda espacial", "Vanguardia"] },
    { name: "Leona",       cost: 1, traits: ["Sentencia", "Vanguardia"] },
    { name: "Ezreal",      cost: 1, traits: ["Disruptor temporal", "Francotirador"] },
    { name: "Twisted Fate",cost: 1, traits: ["Astral", "Tejedestinos"] },
    { name: "Aatrox",      cost: 1, traits: ["N.O.V.A.", "Bastion"] },
    { name: "Talon",       cost: 1, traits: ["Astral", "Picaro"] },
    // ── Coste 2 ──
    { name: "Gragas",      cost: 2, traits: ["Psiónico", "Luchador"] },
    { name: "Mordekaiser", cost: 2, traits: ["Estrella oscura", "Conducto", "Vanguardia"] },
    { name: "Meepsie",     cost: 2, traits: ["Meeple", "Pastor", "Viajante"] },
    { name: "Gnar",        cost: 2, traits: ["Meeple", "Francotirador"] },
    { name: "Milio",       cost: 2, traits: ["Disruptor temporal", "Tejedestinos"] },
    { name: "Pyke",        cost: 2, traits: ["Psiónico", "Viajante"] },
    { name: "Zoe",         cost: 2, traits: ["Sentencia", "Conducto"] },
    { name: "Jinx",        cost: 2, traits: ["Ánima", "Contendiente"] },
    { name: "Bel'Veth",    cost: 2, traits: ["Primordiano", "Yelmo sombrío", "Contendiente"] },
    { name: "Pantheon",    cost: 2, traits: ["Disruptor temporal", "Luchador", "Arcanista"] },
    { name: "Akali",       cost: 2, traits: ["N.O.V.A.", "Yelmo sombrío"] },
    { name: "Gwen",        cost: 2, traits: ["Onda espacial", "Picaro"] },
    { name: "Jax",       cost: 2, traits: ["Astral", "Bastión"] },
    
    // ── Coste 3 ──
    { name: "Kai'Sa",      cost: 3, traits: ["Estrella oscura", "Tirador"] },
    { name: "Aurora",      cost: 3, traits: ["Ánima", "Viajante"] },
    { name: "Fizz",        cost: 3, traits: ["Meeple", "Picaro"] },
    { name: "Diana",       cost: 3, traits: ["Sentencia", "contendiente"] },
    { name: "Maokai",      cost: 3, traits: ["N.O.V.A.", "Luchador"] },
    { name: "Illaoi",      cost: 3, traits: ["Ánima", "Vanguardia", "Pastor"] },
    { name: "Lulu",        cost: 3, traits: ["Meeple", "Conducto"] },
    { name: "Rhaast",      cost: 3, traits: ["all"] },
    { name: "Mis Fortune", cost: 3, traits: ["Diosa de las pistolas","Atributo elegido" ] },
    { name: "Ornn",        cost: 3, traits: ["Onda espacial", "Bation"] },
    { name: "Samira",      cost: 4, traits: ["Onda espacial", "Francotirador"] },
    { name: "Urgot",       cost: 4, traits: ["Mecha ","Luchador", "Yelmo sombrío"] },
    { name: "Viktor",      cost: 3, traits: ["Psiónico", "Conducto"] },
    // ── Coste 4 ──
    { name: "Karma",       cost: 4, traits: ["Estrella oscura", "Viajante"] },
    { name: "Maestro Yi",  cost: 3, traits: ["Psiónico", "Yelmo sombrío"] },
    { name: "Nunu",        cost: 4, traits: ["Astral", "Vanguardia"] },
    { name: "Corki",       cost: 4, traits: ["Meeple", "Tejedestinos"] },
    { name: "Rammus",      cost: 4, traits: ["Meeple", "Bastión"] },
    { name: "Tahm Kench",  cost: 4, traits: ["Oráculo", "Luchador"] },
    { name: "Kindred",     cost: 4, traits: ["N.O.V.A.", "Contendiente"] },
    { name: "Aurelion Sol",cost: 4, traits: ["Mecha ","Conducto"] },
    { name: "LeBlanc",     cost: 3, traits: ["Sentencia", "Pastor"] },
    { name: "Riven",       cost: 3, traits: ["Disruptor temporal", "Picaro"] },
    { name: "Megamecha",   cost: 4, traits: ["Mecha ","Viajante"] },
    { name: "Xayah",       cost: 5, traits: ["Astral", "Francotirador"] },
    { name: "Morgana",     cost: 5, traits: ["Dama oscura"] },
    { name: "Nami",        cost: 2, traits: ["Onda espacial", "Arcanista"] },
    
    // ── Coste 5 ──
    { name: "Jhin",        cost: 5, traits: ["Estrella oscura", "Francotirador"] },
    { name: "Graves",      cost: 5, traits: ["Factory New", ] },
    { name: "Fiora",       cost: 5, traits: ["Ánima", "Yelmo sombrío","Duelista divino"] },
    { name: "Vex",         cost: 5, traits: ["Fatalista"] },
    { name: "Shen",        cost: 5, traits: ["Bastión", ""] },
    { name: "Blitzcrank",  cost: 5, traits: ["Onda espacial", "Vanguardia", ] },
    { name: "Bard",        cost: 5, traits: ["Meeple", "Conducto"] },
    { name: "Sona",        cost: 5, traits: ["Psiónico", "Comandante","Pastor"] },
    { name: "Zed",         cost: 5, traits: ["Cazador galáctico", "Picaro"] },
   
  ];

  /* ══════════════════════════════════════════════
     MAPA DE IMÁGENES — Data Dragon de Riot Games
     Si un campeón no carga, añade su clave aquí.
     Formato: "Nombre en CHAMPIONS": "NombreEnDDragon"
  ══════════════════════════════════════════════ */
  const IMG_KEYS = {
    "Cho'Gath": "Chogath",
    "Bel'Veth": "Belveth",
    "Rek'Sai": "RekSai",
    "Kai'Sa": "Kaisa",
    "Maestro Yi": "MasterYi",
    "Twisted Fate": "TwistedFate",
    "Tahm Kench": "TahmKench",
    "LeBlanc": "Leblanc",
    "Meepsie": "Ivern",
    "Miss Fortune": "MissFortune",
    "Aurelion Sol": "AurelionSol",
    "Rhaast": "Kayn",
    "teemo":       "Teemo",
    "Mis Fortune": "MissFortune",
    "Aurora":       "Nilah",
    "Megamecha":   "Sion"
  };

  const DDRAGON = "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/";

  function imgUrl(name) {
    const key = IMG_KEYS[name] || name.replace(/[' ]/g, "");
    return DDRAGON + key + ".png";
  }

  /* ── Estado de la app ── */
  let selected = [];
  let activeTraitFilter = null;

  const allTraits = [...new Set(CHAMPIONS.flatMap(c => c.traits))].sort();

  /* ══════════════════════════════════════════════
     LÓGICA
  ══════════════════════════════════════════════ */
  function getSelectedTraits() {
    const t = new Set();
    selected.forEach(n => {
      const c = CHAMPIONS.find(x => x.name === n);
      if (c) c.traits.forEach(tr => t.add(tr));
    });
    return t;
  }

  function isRelated(champ) {
    if (!selected.length) return false;
    const t = getSelectedTraits();
    return champ.traits.some(tr => t.has(tr));
  }

  /* ══════════════════════════════════════════════
     RENDER — Cuadrícula de campeones
  ══════════════════════════════════════════════ */
  function renderChamps() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const grid = document.getElementById("champGrid");
    const label = document.getElementById("gridLabel");

    let list = CHAMPIONS.filter(c => {
      const matchText = c.name.toLowerCase().includes(query) ||
                        c.traits.some(t => t.toLowerCase().includes(query));
      const matchTrait = !activeTraitFilter || c.traits.includes(activeTraitFilter);
      return matchText && matchTrait;
    });

    if (selected.length) {
      list.sort((a, b) => {
        const ra = isRelated(a) ? 0 : 1;
        const rb = isRelated(b) ? 0 : 1;
        return ra - rb || a.cost - b.cost;
      });
      const relCount = list.filter(c => isRelated(c) && !selected.includes(c.name)).length;
      label.textContent = activeTraitFilter
        ? `Filtrando: ${activeTraitFilter}`
        : `${relCount} compañeros con rasgos en común`;
    } else {
      list.sort((a, b) => a.cost - b.cost || a.name.localeCompare(b.name));
      label.textContent = activeTraitFilter
        ? `Filtrando: ${activeTraitFilter} (${list.length})`
        : `Todos los campeones (${list.length})`;
    }

    grid.innerHTML = list.map(c => {
      const sel = selected.includes(c.name);
      const rel = !sel && isRelated(c);
      const dim = selected.length && !sel && !rel;
      const cls = sel ? "selected" : rel ? "related" : dim ? "dimmed" : "";
      const safeN = c.name.replace(/'/g, "\\'");
      return `<div class="champ-card ${cls}" onclick="toggleChamp('${safeN}')">
        <span class="cost-badge cost-${c.cost}">${c.cost}</span>
        <img class="champ-img"
             src="${imgUrl(c.name)}"
             alt="${c.name}"
             onerror="this.style.display='none'">
        <div class="champ-name">${c.name}</div>
        <div class="champ-traits">${c.traits.join(" · ")}</div>
      </div>`;
    }).join("");
  }

  /* ══════════════════════════════════════════════
     RENDER — Chips del equipo seleccionado
  ══════════════════════════════════════════════ */
  function renderSelected() {
    const chips = document.getElementById("selectedChips");
    document.getElementById("teamCount").textContent = selected.length;

    if (!selected.length) {
      chips.innerHTML = '<span class="empty-state">Selecciona campeones en la cuadrícula de abajo</span>';
      return;
    }
    chips.innerHTML = selected.map(n => {
      const safeN = n.replace(/'/g, "\\'");
      return `<div class="chip">
        <img src="${imgUrl(n)}" alt="${n}" onerror="this.style.display='none'">
        ${n}
        <span class="chip-remove" onclick="removeChamp('${safeN}')">×</span>
      </div>`;
    }).join("");
  }

  /* ══════════════════════════════════════════════
     RENDER — Contador de rasgos
  ══════════════════════════════════════════════ */
  function renderTraitCount() {
    const area = document.getElementById("traitCounterArea");
    if (!selected.length) { area.style.display = "none"; return; }
    area.style.display = "block";

    const counts = {};
    selected.forEach(n => {
      const c = CHAMPIONS.find(x => x.name === n);
      if (c) c.traits.forEach(t => counts[t] = (counts[t] || 0) + 1);
    });

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    document.getElementById("traitCounter").innerHTML = sorted
      .map(([t, n]) => `<div class="trait-count">${t}<span class="num">${n}</span></div>`)
      .join("");
  }

  /* ══════════════════════════════════════════════
     RENDER — Botones de filtro por rasgo
  ══════════════════════════════════════════════ */
  function renderTraitFilters() {
    document.getElementById("traitFilters").innerHTML = allTraits
      .map(t => `<button class="trait-btn ${activeTraitFilter === t ? "active" : ""}"
                         onclick="filterTrait('${t}')">${t}</button>`)
      .join("");
  }

  /* ══════════════════════════════════════════════
     ACCIONES
  ══════════════════════════════════════════════ */
  function toggleChamp(name) {
    if (selected.includes(name)) {
      selected = selected.filter(n => n !== name);
    } else {
      if (selected.length >= 12) {
        alert("Máximo 12 campeones en el equipo.");
        return;
      }
      selected.push(name);
    }
    renderSelected();
    renderChamps();
    renderTraitCount();
  }

  function removeChamp(name) {
    selected = selected.filter(n => n !== name);
    renderSelected();
    renderChamps();
    renderTraitCount();
  }

  function filterTrait(trait) {
    activeTraitFilter = activeTraitFilter === trait ? null : trait;
    renderTraitFilters();
    renderChamps();
  }

  function clearAll() {
    selected = [];
    activeTraitFilter = null;
    document.getElementById("searchInput").value = "";
    renderSelected();
    renderChamps();
    renderTraitCount();
    renderTraitFilters();
  }

  /* ── Arranque ── */
  renderTraitFilters();
  renderChamps();
  renderSelected();

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrellaBeach,faClock,faBell,faGear,faListCheck,faBriefcase,faSearch,faPlus,faCircleCheck,faTriangleExclamation,faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const navigation = [
  { nom: "Tâches",        icone: faListCheck,       titreHeader: "Gérez vos tâches quotidiennes",             compteur: "tache",},
  { nom: "Congés",        icone: faUmbrellaBeach,   titreHeader: "Gérez les demandes de congés",},
  { nom: "Permissions",   icone: faClock,           titreHeader: "Gérez les permissions et autorisations",},
  { nom: "Notifications", icone: faBell,            titreHeader: "Consultez vos notifications",               compteur: "notification",},
  { nom: "Paramètres",    icone: faGear,            titreHeader: "Configurez votre application",},
];

const statistiques = [
  { icone: faListCheck,           couleur: "bleu",   badge: "+12%",    couleurBadge: "vert",    nom: "Total des tâches",  valeur: 58,},
  { icone: faCircleCheck,         couleur: "vert",   badge: "+8%",     couleurBadge: "vert",    nom: "Tâches terminées",  valeur: 36,},
  { icone: faClock,               couleur: "orange", badge: "Urgent",  couleurBadge: "orange",  nom: "En cours",          valeur: 14,},
  { icone: faTriangleExclamation, couleur: "rouge",  badge: "-5%",     couleurBadge: "rouge",   nom: "En retard",         valeur: 6,},
];

const taches = [
  { id: 1, nom: "Valider les demandes de congés",     description: "Analyser et valider les demandes des employés",    priorite: "Haute priorité",     couleurPriorite: "orange",     date: "Aujourd’hui 15:00",   avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",  termine: false,},
  { id: 2, nom: "Préparer le rapport mensuel",        description: "Compiler les données RH du mois en cours",         priorite: "Normale",            couleurPriorite: "bleu",       date: "25 Jan 2026",         avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",  termine: false,},
  { id: 3, nom: "Réunion équipe RH",                  description: "Discussion sur les nouveaux processus internes",   priorite: "Terminée",           couleurPriorite: "vert",       date: "19 Jan 2026",         avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",  termine: true,},
  { id: 4, nom: "Mise à jour base de données",        description: "Actualiser les informations des employés",         priorite: "En retard",          couleurPriorite: "rouge",      date: "18 Jan 2026",         avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",  termine: false,},
];

/* ===================== FILTRES ===================== */
const filtres = ["Toutes", "En cours", "Terminées"];

/* ===================== COULEURS ===================== */
const couleursBadge = {
  orange: "bg-orange-100 text-orange-700",
  bleu: "bg-blue-100 text-blue-700",
  vert: "bg-green-100 text-green-700",
  rouge: "bg-red-100 text-red-700",
};

const couleursStat = {
  bleu: { fond: "bg-blue-100", texte: "text-blue-600" },
  vert: { fond: "bg-green-100", texte: "text-green-600" },
  orange: { fond: "bg-orange-100", texte: "text-orange-600" },
  rouge: { fond: "bg-red-100", texte: "text-red-600" },
};

export default function TableauDeBord({
  compteurTaches = 0,
  compteurNotifications = 0,
}) {
  const [etatTaches, setEtatTaches] = useState(
    Object.fromEntries(taches.map((t) => [t.id, t.termine]))
  );
   
  const [sectionActive, setSectionActive] = useState("Tâches");
  const [titreHeader, setTitreHeader] = useState(
    "Gérez vos tâches quotidiennes"
  );

  const changerSection = (item) => {
    setSectionActive(item.nom);
    setTitreHeader(item.titreHeader);
  };

  const toggleTache = (id) => {
    setEtatTaches((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ===================== SIDEBAR ===================== */}

{/* SIDEBAR */}
      {/* SIDEBAR */}
      <aside className="hidden md:flex w-72 h-screen bg-white border-r border-gray-200 flex-col">

        {/* HEADER */}
        <div className="flex items-center space-x-3 p-6 border-b border-gray-200">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon icon={faBriefcase} className="text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold">WorkFlow</h1>
            <p className="text-xs text-gray-500">Gestion RH</p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => (
            <div
              key={item.nom}
              onClick={() => changerSection(item)}
              className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition ${
                sectionActive === item.nom
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon icon={item.icone} className="w-5" />
              <span className="ml-3">{item.nom}</span>

              {item.compteur === "tache" && (
                <span className="ml-auto bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {compteurTaches}
                </span>
              )}

              {item.compteur === "notification" && (
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {compteurNotifications}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* FOOTER PROFIL */}
        <div className="mt-auto p-3 border-t border-gray-200">
          <div className="flex items-center space-x-3 px-3 py-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
              className="w-10 h-10 rounded-full"
              alt="profil"
            />

            <div className="flex-1">
              <p className="text-sm font-semibold">Jean Dupont</p>
              <p className="text-xs text-gray-500">Responsable RH</p>
            </div>

            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
          </div>
        </div>

      </aside>

      {/* ===================== CONTENU ===================== */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* HEADER */}
        <header className="bg-white px-4 py-5 sticky top-0 z-10 border-b border-gray-200">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div>
              <h2 className="text-2xl font-bold">{sectionActive}</h2>
              <p className="text-sm text-gray-500">{titreHeader}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center px-3 py-2 bg-gray-100 rounded-lg">
                <FontAwesomeIcon icon={faSearch} />
                <input
                  className="ml-2 bg-transparent outline-none w-36"
                  placeholder="Rechercher"
                />
              </div>

              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Nouvelle tâche
              </button>
            </div>
          </div>
        </header>

        {/* ZONE SCROLL */}
        <div className="flex-1 overflow-y-auto">

          {/* STATISTIQUES */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {statistiques.map((s) => {
              const style = couleursStat[s.couleur];
              return (
                <div key={s.nom} className="bg-white rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className={`w-12 h-12 ${style.fond} rounded-lg flex items-center justify-center`}>
                      <FontAwesomeIcon icon={s.icone} className={`${style.texte} text-xl`} />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${couleursBadge[s.couleurBadge]}`}>
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-sm text-gray-500">{s.nom}</h3>
                  <p className="text-3xl font-boldr">{s.valeur}</p>
                </div>
              );
            })}
          </div>

          {/* FILTRES */}
          <div className="px-6 py-4 bg-white flex justify-between items-center border-b border-gray-200
          ">
            <h3 className="font-bold">Tâches récentes</h3>

            <div className="flex space-x-2">
              {filtres.map((f) => (
                <button key={f} className="px-3 py-1 text-sm hover:bg-gray-100 rounded-lg">
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* TÂCHES */}
          <div className="bg-white divide-y mb-6 border-t border-gray-200">
            {taches.map((t) => (
              <div key={t.id} className="p-6 hover:bg-gray-50">
                <div className="flex gap-4">

                  <input
                    type="checkbox"
                    checked={etatTaches[t.id]}
                    onChange={() => toggleTache(t.id)}
                  />

                  <div className={`flex-1 ${etatTaches[t.id] ? "opacity-60" : ""}`}>
                    <h4 className={`font-semibold ${etatTaches[t.id] && "line-through"}`}>
                      {t.nom}
                    </h4>

                    <p className="text-sm text-gray-500">{t.description}</p>

                    <div className="flex gap-3 mt-2 items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${couleursBadge[t.couleurPriorite]}`}>
                        {t.priorite}
                      </span>
                      <span className="text-xs text-gray-500">{t.date}</span>
                      <img src={t.avatar} className="w-6 h-6 rounded-full" />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
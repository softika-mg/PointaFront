import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleCheck,
  faTriangleExclamation,
  faSpinner,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const employes = [
  {
    id: 1,
    nom: "Marc Dubois",
    poste: "Développeur Frontend",
    avatar: "MD",
    couleur: "bg-blue-100 text-blue-700",
    taches: [
      { id: 1, titre: "Créer dashboard", statut: "En cours", priorite: "Haute", deadline: "17 Avril 2026" },
      { id: 2, titre: "Graphiques UI", statut: "En cours", priorite: "Moyenne", deadline: "20 Avril 2026" },
      { id: 3, titre: "Bugs UI", statut: "Termine", priorite: "Basse", deadline: "10 Avril 2026" },
    ],
  },
  {
    id: 2,
    nom: "Sophie Martin",
    poste: "Backend Developer",
    avatar: "SM",
    couleur: "bg-purple-100 text-purple-700",
    taches: [
      { id: 1, titre: "API login", statut: "Termine", priorite: "Haute", deadline: "12 Avril 2026" },
      { id: 2, titre: "Base de données", statut: "En cours", priorite: "Haute", deadline: "18 Avril 2026" },
    ],
  },
];


const statut = {
  "En cours": { icon: faSpinner, classe: "bg-blue-50 text-blue-600 border border-blue-200", point: "bg-blue-500" },
  "Termine": { icon: faCircleCheck, classe: "bg-green-50 text-green-600 border border-green-200", point: "bg-green-500" },
  "En retard": { icon: faTriangleExclamation, classe: "bg-red-50 text-red-600 border border-red-200", point: "bg-red-500" },
};


const priorite = {
  Haute: { classe: "bg-red-50 text-red-600 border border-red-200", icone: "▲" },
  Moyenne: { classe: "bg-orange-50 text-orange-600 border border-orange-200", icone: "●" },
  Basse: { classe: "bg-gray-50 text-gray-600 border border-gray-200", icone: "▼" },
};

export default function Pointa() {
  const [employeActif, setEmployeActif] = useState(employes[0]);
  const [tacheSelectionnee, setTacheSelectionnee] = useState(null);
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">

      <aside className="hidden md:flex w-72 bg-white border-r border-gray-200 flex-col">
        <div className="p-6 border-b border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon icon={faBriefcase} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold">WorkFlow</h1>
            <p className="text-xs text-gray-500">Gestion RH</p>
          </div>
        </div>

        <div className="p-4 text-sm text-gray-500">
          Staff developpeurs
        </div>

        <div className="p-4 space-y-2">
          {employes.map((e) => (
            <div
              key={e.id}
              onClick={() => setEmployeActif(e)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
                employeActif.id === e.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${e.couleur}`}>
                {e.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold">{e.nom}</p>
                <p className="text-xs opacity-70">{e.poste}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">

    
        <header className="bg-white px-4 py-5 border-b border-gray-200 sticky top-0 z-10">
          <h2 className="text-2xl font-bold">{employeActif.nom}</h2>
          <p className="text-sm text-gray-500">
            {employeActif.poste} — {employeActif.taches.length} tâches
          </p>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-3">

          {employeActif.taches.map((t) => {
            const st = statut[t.statut];
            const pr = priorite[t.priorite];
            const selected = tacheSelectionnee === t.id;

            return (
              <div
                key={t.id}
                onClick={() => setTacheSelectionnee(selected ? null : t.id)}
                className={`bg-white border border-gray-200 rounded-xl cursor-pointer transition ${
                  selected ? "border-blue-400 shadow-md" : "hover:shadow-sm"
                }`}
              >
                <div className="flex">

                  <div className={`w-1 rounded-l-xl ${st.point}`} />

                  <div className="p-5 flex-1">

                    <h3 className="font-semibold mb-2">{t.titre}</h3>

                    <div className="flex flex-wrap gap-2 items-center">

                      <span className={`text-xs px-2 py-1 rounded-full ${st.classe}`}>
                        <FontAwesomeIcon icon={st.icon} /> {t.statut}
                      </span>

                      <span className={`text-xs px-2 py-1 rounded-full ${pr.classe}`}>
                        {pr.icone} {t.priorite}
                      </span>

                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FontAwesomeIcon icon={faCalendar} />
                        {t.deadline}
                      </span>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </main>
    </div>
  );
}
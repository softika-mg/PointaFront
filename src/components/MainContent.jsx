import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUmbrellaBeach, 
  faClock, 
  faBell, 
  faGear,
  faListCheck,
  faBriefcase,
  faSearch,
  faPlus, 
  faCircleCheck,
  faTriangleExclamation,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Pointa({ 
  active, 
  setActive, 
  tacheCount = 0, 
  notificationCount = 0 
  
}) {

  const [checked, setChecked] = useState(false);
  const [activeSection, setActiveSection] = useState("Tâches");
  const [headerText, setHeaderText] = useState("Gérez vos tâches quotidiennes");
  return (
    
    <div className="flex min-h-screen bg-gray-100">

      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">

        <div className="flex items-center space-x-3 p-6 border-b border-gray-200">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon icon={faBriefcase} className="text-white text-lg"/>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">WorkFlow</h1>
            <p className="text-xs text-gray-500">Gestion RH</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
              activeSection === "Tâches" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveSection("Tâches");
              setHeaderText("Gérez vos tâches quotidiennes");
            }}
          >
            <FontAwesomeIcon icon={faListCheck} className="text-lg w-5"/>
            <span className="font-medium">Tâches</span>
            <span className="ml-auto bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {tacheCount}
            </span>
          </a>

          <a
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
              activeSection === "Congés" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveSection("Congés");
              setHeaderText("Gérez les demandes de congés");
            }}
          >
            <FontAwesomeIcon icon={faUmbrellaBeach} className="text-lg w-5"/>
            <span className="font-medium">Congés</span>
          </a>

          <a
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
              activeSection === "Permissions" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveSection("Permissions");
              setHeaderText("Gérez les permissions et autorisations");
            }}
          >
            <FontAwesomeIcon icon={faClock} className="text-lg w-5"/>
            <span className="font-medium">Permissions</span>
          </a>

          <a
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
              activeSection === "Notifications" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveSection("Notifications");
              setHeaderText("Consultez vos notifications");
            }}
          >
            <FontAwesomeIcon icon={faBell} className="text-lg w-5"/>
            <span className="font-medium">Notifications</span>
            <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {notificationCount}
            </span>
          </a>

          <a
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer ${
              activeSection === "Paramètres" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveSection("Paramètres");
              setHeaderText("Configurez votre application");
            }}
          >
            <FontAwesomeIcon icon={faGear} className="text-lg w-5"/>
            <span className="font-medium">Paramètres</span>
          </a>
          
        </nav>
        
        <div id="sidebar-profile" className="mt-auto p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-all">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Marc Dubois</p>
                <p className="text-xs text-gray-500">Responsable RH</p>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-sm"/>
            </div>
          </div>

      </aside>

      <main className="flex-1 overflow-y-auto h-screen">
        <header className="flex flex-col bg-white border-b border-gray-200 px-4 py-5 w-full fixed top-0">
          <div className="flex items-center justify-between max-w-2xl">

            <div className="flex flex-col whitespace-nowrap">
              <h2 className="text-2xl font-bold text-gray-900">{activeSection}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {headerText}
              </p>
            </div>

            <div className="fixed flex items-center space-x-3 ml-163">
              <div className="flex items-center px-3 py-2 rounded-lg bg-white focus-within:ring-1 focus-within:ring-blue-600">
                <FontAwesomeIcon icon={faSearch} className="text-black" />
                <input
                  type="text"
                  placeholder="Rechercher"
                  className="ml-2 bg-transparent outline-none text-base w-36"
                />
              </div>

              <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium whitespace-nowrap">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Nouvelle tâche
              </button>
            </div>

          </div>
        </header>

        <div className="flex flex-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200 w-60 mt-31 ml-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faListCheck} className="text-blue-600 text-xl" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Total Tâches</h3>
              <p className="text-3xl font-bold text-gray-900">48</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 w-60 mt-31 ml-4.5">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-green-600 text-xl" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+8%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Complétées</h3>
              <p className="text-3xl font-bold text-gray-900">32</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 w-60 mt-31 ml-4.5">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock} className="text-orange-600 text-xl" />
                </div>
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Urgent</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">En cours</h3>
              <p className="text-3xl font-bold text-gray-900">12</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 w-60 mt-31 ml-4.5">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 text-xl" />
                </div>
                <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">-5%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">En retard</h3>
              <p className="text-3xl font-bold text-gray-900">4</p>
            </div>
          </div>

          <div className="p-6 border-b bg-white border-gray-200 mt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Tâches récentes</h3>

              <div className="flex items-center space-x-1">
                <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                  Toutes
                </button>

                <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                  En cours
                </button>

                <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                  Terminées
                </button>
              </div>
            </div>
          </div>

         
          <div className="divide-y divide-gray-200 bg-white">

            <div className="p-6 rounded-lg transition">
              <div className="flex items-start space-x-4">

                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  className="w-5 h-5 rounded border-black bg-white checked:bg-blue-600 checked:border-blue-600"
                />

                <div className="flex-1">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">
                    Valider les demandes de congés
                  </h4>

                  <p className="text-sm text-gray-500 mb-3">
                    Examiner et approuver les demandes en attente
                  </p>

                  <div className="flex items-center space-x-4">
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                      Priorité haute
                    </span>

                    <span className="text-xs text-gray-500">
                      <i className="fa-regular fa-calendar mr-1"></i>
                      Aujourd'hui 15:00
                    </span>

                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                      alt="User"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 hover:bg-gray-50 transition-all cursor-pointer">
              <div className="flex items-start space-x-4">

                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-primary mt-1"
                />

                <div className="flex-1">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">
                    Préparer rapport mensuel
                  </h4>

                  <p className="text-sm text-gray-500 mb-3">
                    Compilation des statistiques RH du mois
                  </p>

                  <div className="flex items-center space-x-4">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                      Normal
                    </span>

                    <span className="text-xs text-gray-500">
                      <i className="fa-regular fa-calendar mr-1"></i>
                      25 Jan 2026
                    </span>

                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                      alt="User"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 hover:bg-gray-50 transition-all cursor-pointer">
              <div className="flex items-start space-x-4">

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded border-gray-300 text-primary mt-1"
                />

                <div className="flex-1 opacity-60">
                  <h4 className="text-base font-semibold text-gray-900 mb-1 line-through">
                    Réunion équipe RH
                  </h4>

                  <p className="text-sm text-gray-500 mb-3">
                    Discussion sur les nouveaux processus
                  </p>

                  <div className="flex items-center space-x-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      Terminée
                    </span>

                    <span className="text-xs text-gray-500">
                      <i className="fa-regular fa-calendar mr-1"></i>
                      19 Jan 2026
                    </span>

                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                      alt="User"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 hover:bg-gray-50 transition-all cursor-pointer">
              <div className="flex items-start space-x-4">

                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-primary mt-1"
                />

                <div className="flex-1">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">
                    Mise à jour base de données
                  </h4> 

                  <p className="text-sm text-gray-500 mb-3">
                    Actualiser les informations employés
                  </p>

                  <div className="flex items-center space-x-4">
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                      En retard
                    </span>

                    <span className="text-xs text-gray-500">
                      <i className="fa-regular fa-calendar mr-1"></i>
                      18 Jan 2026
                    </span>

                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                      alt="User"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

             <div className="p-6 hover:bg-gray-50 transition-all cursor-pointer">
              <div className="flex items-start space-x-4">

                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-primary mt-1"
                />

                <div className="flex-1">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">
                    Formation nouveaux employés

                  </h4>

                  <p className="text-sm text-gray-500 mb-3">
                    Organiser session d'intégration
                  </p>

                  <div className="flex items-center space-x-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      Normal
                    </span>

                    <span className="text-xs text-gray-500">
                      <i className="fa-regular fa-calendar mr-1"></i>
                      28 Jan 2026
                    </span>

                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                      alt="User"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

      </main>
    </div>
  );
}
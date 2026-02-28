'use client';

import { useEffect } from 'react';
import { useAuth } from './lib/auth';

export default function Page() {
  const { userEmail, logout, isLoading } = useAuth();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isLoading && !userEmail) {
      window.location.href = '/auth/login';
    }
  }, [isLoading, userEmail]);

  useEffect(() => {
    // Charger le script après que le composant soit monté
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  if (isLoading || !userEmail) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: '#fff',
        fontSize: '18px',
      }}>
        ⏳ Chargement...
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header Premium ESISA */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <h1>ESISA</h1>
            <p>Portail Académique - 5 Ans d&apos;Études</p>
          </div>
          <div className="header-actions">
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number" id="totalStudents">0</span>
                <span className="stat-label">Étudiants</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" id="totalModules">0</span>
                <span className="stat-label">Modules</span>
              </div>
            </div>
            <div className="user-info">
              <span className="user-email">👤 {userEmail}</span>
              <button className="logout-btn" onClick={logout} title="Se déconnecter">
                🚪 Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="tab-navigation">
        <button className="tab-btn active" data-tab="dashboard">📊 Tableau de Bord</button>
        <button className="tab-btn" data-tab="students">👥 Étudiants</button>
        <button className="tab-btn" data-tab="modules">📚 Modules</button>
        <button className="tab-btn" data-tab="grades">📈 Notes</button>
        <button className="tab-btn" data-tab="addstudent">➕ Ajouter Étudiant</button>
      </nav>

      {/* Dashboard Tab */}
      <section id="dashboard" className="tab-content active">
        <div className="dashboard-grid">
          <div className="dashboard-card enrollment">
            <div className="card-header">
              <h3>👥 Inscriptions Active</h3>
              <span className="refresh-icon">🔄</span>
            </div>
            <p className="card-value" id="dashStudents">0</p>
            <div className="card-chart" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
          </div>

          <div className="dashboard-card modules">
            <div className="card-header">
              <h3>📚 Modules Disponibles</h3>
              <span className="refresh-icon">🔄</span>
            </div>
            <p className="card-value" id="dashModules">35</p>
            <div className="card-chart" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
          </div>

          <div className="dashboard-card years">
            <div className="card-header">
              <h3>📅 Années d&apos;Études</h3>
              <span className="refresh-icon">🔄</span>
            </div>
            <p className="card-value" id="dashYears">5</p>
            <div className="card-chart" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
          </div>

          <div className="dashboard-card recent">
            <div className="card-header">
              <h3>⏱️ Derniers Inscrits</h3>
              <span className="refresh-icon">🔄</span>
            </div>
            <div className="recent-list" id="recentList">
              <p style={{color: '#999'}}>Aucun nouvel étudiant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Students Tab */}
      <section id="students" className="tab-content">
        <div className="students-header">
          <h2>👥 Gestion des Étudiants</h2>
          <div className="search-bar">
            <input type="text" id="searchInput" placeholder="🔍 Rechercher un étudiant..." />
          </div>
        </div>
        <div className="students-container" id="studentsContainer">
          <div className="empty-state">
            <span style={{fontSize: '3rem'}}>👤</span>
            <p>Aucun étudiant trouvé. Commencez par en ajouter un !</p>
          </div>
        </div>
      </section>

      {/* Modules Tab */}
      <section id="modules" className="tab-content">
        <div className="modules-header">
          <h2>📚 Catalogue des Modules</h2>
          <div className="search-bar">
            <input type="text" id="moduleSearchInput" placeholder="🔍 Rechercher un module..." />
          </div>
        </div>
        <div className="modules-container" id="modulesContainer">
          <div className="empty-state">
            <span style={{fontSize: '3rem'}}>📚</span>
            <p>Aucun module disponible.</p>
          </div>
        </div>
      </section>

      {/* Grades Tab */}
      <section id="grades" className="tab-content">
        <div className="grades-header">
          <h2>📈 Gestion des Notes</h2>
          <div className="search-bar">
            <input type="text" id="gradeSearchInput" placeholder="🔍 Rechercher..." />
          </div>
        </div>
        <div className="grades-container" id="gradesContainer">
          <div className="empty-state">
            <span style={{fontSize: '3rem'}}>📊</span>
            <p>Aucune note enregistrée.</p>
          </div>
        </div>
      </section>

      {/* Add Student Tab */}
      <section id="addstudent" className="tab-content">
        <div className="form-container">
          <h2>➕ Ajouter un Nouvel Étudiant</h2>
          <form id="studentForm" className="student-form">
            <div className="form-grid">
              {/* Informations de l'Étudiant */}
              <div className="form-section">
                <h3>📋 Informations Personnelles</h3>
                <div className="form-group">
                  <label htmlFor="studentFirstName">Prénom *</label>
                  <input type="text" id="studentFirstName" required placeholder="Ex: Jean" />
                </div>
                <div className="form-group">
                  <label htmlFor="studentLastName">Nom de Famille *</label>
                  <input type="text" id="studentLastName" required placeholder="Ex: Dupont" />
                </div>
                <div className="form-group">
                  <label htmlFor="studentNumber">Numéro d&apos;Étudiant *</label>
                  <input type="text" id="studentNumber" required placeholder="Ex: STD-001-2024" />
                </div>
                <div className="form-group">
                  <label htmlFor="studentEmail">Email *</label>
                  <input type="email" id="studentEmail" required placeholder="jean.dupont@esisa.fr" />
                </div>
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label htmlFor="studentPhone">Téléphone</label>
                    <input type="tel" id="studentPhone" placeholder="+33 6 XX XX XX XX" />
                  </div>
                  <div className="form-group flex-1">
                    <label htmlFor="studentDateBirth">Date de Naissance</label>
                    <input type="date" id="studentDateBirth" />
                  </div>
                </div>
              </div>

              {/* Informations Académiques */}
              <div className="form-section">
                <h3>🎓 Informations Académiques</h3>
                <div className="form-group">
                  <label htmlFor="studentYear">Année d&apos;Études *</label>
                  <select id="studentYear" required>
                    <option value="">Sélectionner une année</option>
                    <option value="1">Première Année (L1)</option>
                    <option value="2">Deuxième Année (L2)</option>
                    <option value="3">Troisième Année (L3)</option>
                    <option value="4">Quatrième Année (M1)</option>
                    <option value="5">Cinquième Année (M2)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="studentMajor">Spécialité *</label>
                  <select id="studentMajor" required>
                    <option value="">Sélectionner une spécialité</option>
                    <option value="Informatique">Informatique</option>
                    <option value="Génie Civil">Génie Civil</option>
                    <option value="Mécanique">Mécanique</option>
                    <option value="Électronique">Électronique</option>
                    <option value="Gestion">Gestion/Business</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="enrollmentDate">Date d&apos;Inscription *</label>
                  <input type="date" id="enrollmentDate" required />
                </div>
                <div className="form-group">
                  <label htmlFor="studentStatus">Statut *</label>
                  <select id="studentStatus" required>
                    <option value="active">Actif</option>
                    <option value="inactive">Inactif</option>
                    <option value="suspended">Suspendu</option>
                    <option value="graduated">Diplômé</option>
                  </select>
                </div>
              </div>

              {/* Informations Contact */}
              <div className="form-section">
                <h3>📞 Coordonnées</h3>
                <div className="form-group">
                  <label htmlFor="studentAddress">Adresse</label>
                  <input type="text" id="studentAddress" placeholder="123 Rue de la Paix" />
                </div>
                <div className="form-row">
                  <div className="form-group flex-1">
                    <label htmlFor="studentCity">Ville</label>
                    <input type="text" id="studentCity" placeholder="Paris" />
                  </div>
                  <div className="form-group flex-1">
                    <label htmlFor="studentCountry">Pays</label>
                    <input type="text" id="studentCountry" placeholder="France" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="studentEmergencyContact">Contact d&apos;Urgence</label>
                  <input type="text" id="studentEmergencyContact" placeholder="Nom et téléphone" />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="reset" className="btn btn-secondary">🔄 Réinitialiser</button>
              <button type="submit" className="btn btn-primary">➕ Ajouter l&apos;Étudiant</button>
            </div>
          </form>
        </div>
      </section>

      {/* Modal pour voir les détails */}
      <div id="modal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div id="modalBody"></div>
        </div>
      </div>
    </div>
  );
}

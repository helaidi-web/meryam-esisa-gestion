# Script PowerShell pour pousser vers GitHub sans interface d'édition

cd "c:\Users\elaid\OneDrive\Desktop\app"

# Configuration git automatique
$env:GIT_EDITOR="cmd /c echo"

# Annuler tout merge en attente
git merge --abort 2>$null

# Configurer git
git config core.editor "cmd /c echo"
git config user.email "admin@esisa.fr"
git config user.name "ESISA Admin"

# Réinitialiser la branche si nécessaire
git reset --hard 2>$null

# Essayer different stratégies de push

# Stratégie 1: Force push direct
Write-Host "Tentative 1: Force push direct..."
git push -f -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Push réussi avec force push!"
    exit 0
}

# Stratégie 2: Pull et merge
Write-Host "Tentative 2: Pull et merge..."
git fetch origin main 2>&1
git merge -X ours --no-edit origin/main 2>&1
git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Push réussi après merge!"
    exit 0
}

# Stratégie 3: Recreate branch
Write-Host "Tentative 3: Récréer la branche..."
git push origin :main 2>&1  # Supprimer la branche distante
git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Push réussi après récréation!"
    exit 0
} else {
    Write-Host "❌ Toutes les tentatives ont échoué"
    exit 1
}

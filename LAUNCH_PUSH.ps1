# PowerShell Script - Run in new window without vim interference

$scriptContent = @'
# ESISA GitHub Push Script
$ErrorActionPreference = "SilentlyContinue"

Set-Location "c:\Users\elaid\OneDrive\Desktop\app"

Write-Host "================================" -ForegroundColor Cyan
Write-Host "ESISA - Push vers GitHub" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Configuration d'environnement
$env:GIT_EDITOR = "true"
$env:GIT_PAGER = "cat"
$env:GIT_TERMINAL_PROMPT = "0"

# Test 1: Force Push
Write-Host "[1] Tentative: Force push direct..." -ForegroundColor Yellow
$output = & git push -f origin main 2>&1
$exitCode = $LASTEXITCODE

if ($exitCode -eq 0) {
    Write-Host "✅ SUCCÈS! Le code a été pushé vers GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Dépôt: https://github.com/helaidi-web/ESISA-Meryem-gestion" -ForegroundColor Cyan
    Write-Host ""
    $output | Write-Host
    Read-Host "Appuyez sur Entrée pour fermer"
    exit 0
}

Write-Host "Résultat:" -ForegroundColor Gray
$output | Write-Host

# Test 2: Avec merge
Write-Host ""
Write-Host "[2] Tentative: Avec merge..." -ForegroundColor Yellow

& git fetch origin main 2>&1 | Out-Null
& git merge -X ours --no-edit origin/main 2>&1 | Out-Null
$output = & git push origin main 2>&1
$exitCode = $LASTEXITCODE

if ($exitCode -eq 0) {
    Write-Host "✅ SUCCÈS! Le code a été pushé vers GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Dépôt: https://github.com/helaidi-web/ESISA-Meryem-gestion" -ForegroundColor Cyan
    Write-Host ""
    Read-Host "Appuyez sur Entrée pour fermer"
    exit 0
}

Write-Host "❌ Impossible de pousser" -ForegroundColor Red
Write-Host ""
Write-Host "Vérifiez:" -ForegroundColor Yellow
Write-Host "- Votre connexion internet" 
Write-Host "- Votre authentification GitHub (token/SSH)"
Write-Host "- Vos droits d'accès au dépôt"
Write-Host ""
Write-Host "Dépôt: https://github.com/helaidi-web/ESISA-Meryem-gestion" -ForegroundColor Cyan
Write-Host ""
Read-Host "Appuyez sur Entrée pour fermer"
'@

# Créer un fichier temporaire
$tempFile = [System.IO.Path]::GetTempFileName() -Replace '\.tmp$', '.ps1'
$scriptContent | Out-File -FilePath $tempFile -Encoding UTF8

# Lancer dans une nouvelle fenêtre PowerShell
$process = Start-Process PowerShell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$tempFile`"" -PassThru

# Attendre que le processus se termine avant de nettoyer
$process.WaitForExit()

# Nettoyer
Remove-Item $tempFile -Force -ErrorAction SilentlyContinue

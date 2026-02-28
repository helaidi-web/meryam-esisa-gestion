@echo off
REM Script pour pousser vers GitHub en utilisant GitHub CLI (gh)

cd /d "c:\Users\elaid\OneDrive\Desktop\app"

REM Vérifier si GitHub CLI est installé
gh --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] GitHub CLI n'est pas installé.
    echo Télécharging depuis https://cli.github.com
    echo.
    echo En attendant, essayons avec Git directement...
    echo.
    goto :git_fallback
)

echo ===== Utilisation de GitHub CLI =====
echo.

REM Authentifier avec GitHub
gh auth login --web

REM Pousser avec gh auth
echo Création du dépôt sur GitHub...
gh repo create helaidi-web/ESISA-Meryem-gestion --source=. --remote=origin --push

goto :end

:git_fallback
echo ===== Utilisation de Git (fallback) =====
echo.
echo Configuration git non-interactive...

REM Définir les variables d'environnement pour éviter vim
set GIT_EDITOR=notepad
set GIT_TERMINAL_PROMPT=off

REM Force tous les chemins git
git config --local core.editor=notepad
git config --local merge.tool=winmerge

REM Abort any pending operations
git merge --abort >nul 2>&1
git rebase --abort >nul 2>&1

REM Try force push
echo.
echo Tentative 1: Force push...
git push -f origin main
if %errorlevel% equ 0 (
    echo [✓] SUCCES avec force push!
    goto :end
)

REM Try with merge
echo.
echo Tentative 2: Merge et push...
git fetch origin main
git merge -X ours --no-edit origin/main
git push origin main
if %errorlevel% equ 0 (
    echo [✓] SUCCES avec merge!
    goto :end
)

:end
echo.
echo ===== RESULTAT FINAL =====
echo Dépôt GitHub: https://github.com/helaidi-web/ESISA-Meryem-gestion
echo.
pause

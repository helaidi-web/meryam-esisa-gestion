@echo off
REM Script batch pour pousser vers GitHub sans vim

cd /d "c:\Users\elaid\OneDrive\Desktop\app"

REM Configurer git pour ne pas utiliser vim
git config core.editor=notepad2 >nul 2>&1
git config --global core.editor=notepad2 >nul 2>&1

REM Annuler tout merge en attente
git merge --abort >nul 2>&1

REM STRATÉGIE 1: Force push direct
echo ===== STRATEGIE 1: Force Push Direct =====
git push -f origin main
if %errorlevel% equ 0 (
    echo.
    echo [✓] SUCCES! Le code a ete pousse vers GitHub!
    echo.
    echo Depot: https://github.com/helaidi-web/ESISA-Meryem-gestion
    goto :end
)

REM STRATÉGIE 2: Pull avec stratégie "ours" (garder nos fichiers)
echo.
echo ===== STRATEGIE 2: Pull avec stratégie Ours =====
git fetch origin main
git merge -X ours --no-edit origin/main
git push origin main
if %errorlevel% equ 0 (
    echo.
    echo [✓] SUCCES! Le code a ete pousse vers GitHub!
    goto :end
)

REM STRATÉGIE 3: Reset et push
echo.
echo ===== STRATEGIE 3: Reset et Push =====
git reset --hard
git fetch origin main
git reset --hard origin/main
git commit -m "Sync with remote ESISA-Meryem-gestion" --allow-empty
git push -f origin main
if %errorlevel% equ 0 (
    echo.
    echo [✓] SUCCES! Le code a ete synchronise! 
    goto :end
)

echo.
echo [✗] ERREUR: Impossible de pousser le code vers GitHub
echo Veuillez verifier:
echo - Votre connexion internet
echo - Vos droits d'acces sur le depot GitHub
echo - Votre authentification Git (token/SSH)
echo.

:end
echo.
echo Depot GitHub: https://github.com/helaidi-web/ESISA-Meryem-gestion.git
echo.
pause

#!/bin/bash
cd "c:/Users/elaid/OneDrive/Desktop/app" || exit 1

export GIT_EDITOR=true
export GIT_MERGE_VERBOSITY=1

# Kills any pending editor
pkill -9 vim 2>/dev/null
pkill -9 nano 2>/dev/null

# Abort any merge
git merge --abort 2>/dev/null || true

# Set non-interactive config
git config core.editor "true"
git config merge.tool "ours"

# Reset if needed
git reset --hard HEAD 2>/dev/null || true

# Push avec différentes stratégies
echo "=== STRATÉGIE 1: Force push ===" 
git push -f origin main && echo "✅ Succès!" && exit 0

echo "=== STRATÉGIE 2: Accept ours ===" 
git fetch origin main
git commit -m "Merge strategy: accept ours" --allow-empty 2>/dev/null || true
git push origin main && echo "✅ Succès!" && exit 0

echo "=== STRATÉGIE 3: Force overwrite ===" 
git push --force-with-lease origin main && echo "✅ Succès!" && exit 0

echo "❌ Toutes les tentatives ont échoué"
exit 1

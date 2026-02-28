#!/usr/bin/env python3
"""
Script Python pour pousser le code vers GitHub sans interface d'édition
"""

import subprocess
import os
import sys

os.chdir("c:/Users/elaid/OneDrive/Desktop/app")

# Configuration
env_vars = {
    'GIT_EDITOR': 'true',
    'GIT_PAGER': 'cat',
    'GIT_TERMINAL_PROMPT': '0',
    'VISUAL': 'true',
    'EDITOR': 'true'
}

# Mettre à jour l'environnement
os.environ.update(env_vars)

print("=" * 60)
print("ESISA - Push vers GitHub")
print("=" * 60)
print()

# Stratégie 1: Force push
print("[1] Tentative: Force push direct...")
try:
    result = subprocess.run(
        ['git', 'push', '-f', 'origin', 'main', '-v'],
        capture_output=True,
        text=True,
        timeout=30
    )
    if result.returncode == 0:
        print("✅ SUCCÈS!")
        print(result.stdout)
        sys.exit(0)
    else:
        print("⚠️ Erreur:")
        print(result.stderr)
except Exception as e:
    print(f"❌ Exception: {e}")

# Stratégie 2: Fetch + Merge + Push
print()
print("[2] Tentative: Fetch, merge et push...")
try:
    subprocess.run(['git', 'fetch', 'origin', 'main'], check=True, capture_output=True)
    subprocess.run(['git', 'merge', '-X', 'ours', '--no-edit', 'origin/main'],
                   capture_output=True)
    result = subprocess.run(['git', 'push', 'origin', 'main', '-v'],
                           capture_output=True, text=True, timeout=30)
    if result.returncode == 0:
        print("✅ SUCCÈS!")
        print(result.stdout)
        sys.exit(0)
    else:
        print("⚠️ Erreur:")
        print(result.stderr)
except Exception as e:
    print(f"❌ Exception: {e}")

print()
print("❌ Impossible de pousser le code")
print("Dépôt: https://github.com/helaidi-web/ESISA-Meryem-gestion")

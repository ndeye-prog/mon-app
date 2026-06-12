# TP DevOps - Automatisation
**UCAD - Département Informatique 2025-2026**

## Structure du projet

    tp-devops/
    ├── auto_deploy.sh
    └── mon-app/
        ├── .github/workflows/ci.yml
        ├── terraform/main.tf
        ├── Dockerfile
        ├── index.js
        ├── index.test.js
        ├── package.json
        └── README.md

## Partie 1 : Script Bash

### Prérequis
- Git, Node.js, npm installés
- Git Bash (Windows)

### Exécution
    chmod +x auto_deploy.sh
    ./auto_deploy.sh https://github.com/ndeye-prog/mon-app.git

### Ce que fait le script
1. Vérifie Git, Node.js et npm
2. Clone ou met à jour le dépôt
3. Installe les dépendances
4. Lance les tests unitaires
5. Démarre l'application en arrière-plan et sauvegarde le PID

### Arrêter l'application
    kill $(cat app.pid)

### Consulter les logs
    cat deploy.log

## Partie 2 : GitHub Actions

### Pipeline CI/CD
Le fichier .github/workflows/ci.yml se déclenche à chaque push sur main.

### Étapes du pipeline
1. Checkout du code
2. Installation de Node.js 18
3. Installation des dépendances
4. Exécution des tests
5. Build de l'application
6. Connexion à Docker Hub
7. Build et push de l'image Docker

### Secrets GitHub à configurer
Settings → Secrets and variables → Actions :
- DOCKER_USERNAME : nom d'utilisateur Docker Hub
- DOCKER_PASSWORD : token d'accès Docker Hub

### Déclencher le pipeline
    git add .
    git commit -m "message"
    git push

## Partie 3 : Terraform

### Objectif
Créer automatiquement une instance AWS EC2 avec Nginx.

### Commandes
    cd terraform/
    terraform init
    terraform plan
    terraform apply -auto-approve
    terraform destroy

### Précautions .tfstate
- Ne jamais committer .tfstate sur GitHub
- Le stocker sur un backend distant comme AWS S3
- Ne jamais le modifier manuellement

## Captures d'écran
Les captures sont dans le dossier Captures/.
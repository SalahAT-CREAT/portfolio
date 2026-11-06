# Portfolio Professionnel — Salah ATMANE ⛩️

> **Élève Ingénieur d'État en Transformation Digitale Industrielle (TDI - Industrie 4.0)**  
> **École Nationale des Sciences Appliquées de Béni Mellal (ENSABM) — USMS**

Ce portfolio a été spécialement conçu pour valoriser votre parcours d'ingénieur en combinant **modernité, rigueur technique et clarté**. Il intègre le thème **Samurai Rouge Moderne & Noir Obsidienne**, un support complet **trilingue (Français, English, العربية)** avec bascule automatique du sens de lecture (**RTL**), un commutateur **Dark / Light mode**, et un lecteur **vidéo popup fluide**.

---

## 📁 Architecture des Fichiers

```
Portfolio/
├── index.html                 # Page principale (HTML5 sémantique, SEO & OpenGraph)
├── style.css                  # Design Samurai Rouge, Responsive, Dark/Light & RTL
├── app.js                     # Moteur interactif (Switch de langues, Thèmes, Popups)
├── README.md                  # Guide d'utilisation et de déploiement
│
├── data/
│   └── portfolio-data.js      # ⭐ TOUTES vos données (textes FR/EN/AR, liens, tags)
│
└── assets/
    ├── docs/
    │   └── cv-salah-atmane.pdf    # <-- Déposez votre CV PDF ici
    └── img/
        ├── profile/               # <-- Déposez votre photo 'profile.jpg' ici
        │   └── avatar-placeholder.svg
        ├── projects/              # <-- Captures de vos projets (OptiStock, TSP, etc.)
        ├── internships/           # <-- Logos ou photos (COSUMAR, Zenithsoft)
        ├── visits/                # <-- Photos OCP Khouribga, Gitex
        └── activities/            # <-- Photos Club Industrie 4.0, MTSPC
```

---

## 🚀 1. Comment tester le site localement sur votre ordinateur ?

C'est immédiat et sans aucune installation complexe :
* Double-cliquez simplement sur le fichier **`index.html`** pour l'ouvrir dans votre navigateur web (Chrome, Edge, Firefox).
* Ou faites un clic droit sur `index.html` > *Ouvrir avec Live Server* dans VS Code si vous l'utilisez.

---

## 🌐 2. Déploiement Gratuit sur GitHub Pages (En 2 Minutes)

Pour mettre votre portfolio en ligne gratuitement avec une adresse du type `https://salahat-creat.github.io/portfolio` :

### Étape A : Créer le dépôt sur GitHub
1. Connectez-vous sur votre compte GitHub : [https://github.com/SalahAT-CREAT](https://github.com/SalahAT-CREAT).
2. Cliquez sur **New Repository** (Nouveau dépôt).
3. Nommez-le par exemple `portfolio` (ou `salahat-creat.github.io` si vous souhaitez que ce soit votre domaine principal).
4. Choisissez **Public** et cliquez sur **Create repository**.

### Étape B : Envoyer vos fichiers
Dans le terminal (PowerShell) ouvert dans ce dossier :
```bash
git init
git add .
git commit -m "Initial commit - Portfolio Salah Atmane"
git branch -M main
git remote add origin https://github.com/SalahAT-CREAT/portfolio.git
git push -u origin main
```

### Étape C : Activer GitHub Pages
1. Dans votre dépôt GitHub, allez dans l'onglet **Settings** (Paramètres).
2. Dans le menu de gauche, cliquez sur **Pages**.
3. Sous **Branch**, sélectionnez la branche `main` et le dossier `/ (root)`, puis cliquez sur **Save**.
4. Patientez 60 secondes : votre portfolio est en ligne dans le monde entier ! 🎉

---

## 📸 3. Comment ajouter vos photos et votre CV ?

### A. Votre photo de profil :
* Déposez votre portrait dans `assets/img/profile/` sous le nom **`profile.jpg`**.
* Le site détectera automatiquement votre photo et remplacera l'avatar temporaire !

### B. Votre CV en PDF :
* Déposez votre fichier dans `assets/docs/` sous le nom **`cv-salah-atmane.pdf`**.
* Le bouton *"Télécharger mon CV"* dans le bandeau d'accueil et dans la page le téléchargera directement.

### C. Captures d'écran de projets :
* Déposez vos captures dans `assets/img/projects/` (ex: `optistock-1.jpg`).
* Dans `data/portfolio-data.js`, ajoutez simplement le chemin dans le tableau `images` :
  ```javascript
  images: ["assets/img/projects/optistock-1.jpg"]
  ```

---

## 🎥 4. Comment ajouter des Vidéos Démo (Popup YouTube) ?

Pour ajouter une vidéo démo (en mode **Non répertoriée / Unlisted** sur YouTube) :
1. Ouvrez `data/portfolio-data.js`.
2. Dans le projet souhaité, ajoutez simplement le lien dans le tableau `videos` :
   ```javascript
   videos: [
     {
       title: { fr: "Démo OptiStock", en: "OptiStock Demo", ar: "عرض المنصة" },
       url: "https://youtu.be/votre_code_video"
     }
   ]
   ```
3. Le bouton **`[ ▶ Démo Vidéo ]`** apparaîtra instantanément sur la carte, et ouvrira le popup propre sans recharger la page !

---

## ✏️ 5. Comment faire évoluer votre portfolio plus tard ?

Dans 6 mois ou 2 ans, lorsque vous commencerez votre PFE ou votre premier emploi :
* **Vous n'avez JAMAIS besoin de toucher au code HTML ou CSS.**
* Ouvrez simplement **`data/portfolio-data.js`**.
* Modifiez votre titre, ajoutez un nouvel emploi ou un nouveau projet en copiant un bloc existant.
* Tout le site (Français, Anglais, Arabe RTL, cartes, compteurs) s'adapte automatiquement !

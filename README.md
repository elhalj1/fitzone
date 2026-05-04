# FitZone 🏋️‍♂️

Une application mobile de fitness et de suivi d'entraînement développée avec React Native et Expo.

## 📱 Description

FitZone est une application mobile moderne conçue pour aider les utilisateurs à suivre leurs séances d'entraînement, monitorer leurs calories et rester connectés avec leur communauté sportive. L'application propose une interface intuitive avec des fonctionnalités essentielles pour la gestion de programmes fitness.

### Fonctionnalités Principales

- **Authentification Utilisateur** : Connexion et inscription sécurisées
- **Feed Personnel** : Suivi des activités et des séances quotidiennes
- **Tableau de Bord** : Visualisation des calories, protéines et séances par semaine
- **Navigation par Tabs** : Interface fluide avec navigation par onglets
- **Design Moderne** : Interface épurée avec composants réutilisables

## 🛠️ Stack Technique

- **Framework** : React Native 0.83.6
- **Plateforme** : Expo SDK 55
- **Navigation** : Expo Router (file-based routing)
- **Langage** : TypeScript
- **UI** : Composants natifs React Native
- **Build** : EAS Build pour les déploiements

## 📁 Structure du Projet

```
fitzone/
├── src/
│   ├── app/                    # Routes Expo Router (fichiers de redirection)
│   │   ├── (tabs)/            # Groupe des onglets principaux
│   │   │   ├── _layout.tsx    # Redirection vers TabLayout
│   │   │   ├── index.tsx      # Redirection vers HomeScreen
│   │   │   └── feed.tsx       # Redirection vers FeedScreen
│   │   ├── _layout.tsx        # Layout racine de l'application
│   │   ├── connexion.tsx      # Redirection vers ConnexionScreen
│   │   ├── inscription.tsx    # Redirection vers InscriptionScreen
│   │   └── forgotPassword.tsx # Redirection vers ForgotPasswordScreen
│   ├── components/            # Composants réutilisables organisés
│   │   ├── ui/                # Composants UI de base
│   │   │   ├── ActionButton.tsx
│   │   │   ├── BackButton.tsx
│   │   │   ├── BackIcon.tsx
│   │   │   ├── LinkButton.tsx
│   │   │   └── Separator.tsx
│   │   ├── forms/             # Composants de formulaire
│   │   │   ├── InputField.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   └── PasswordRequirements.tsx
│   │   └── layout/            # Composants de mise en page
│   │       └── ScreenLayout.tsx
│   ├── screens/               # Écrans de l'application
│   │   ├── auth/              # Écrans d'authentification
│   │   │   ├── ConnexionScreen.tsx
│   │   │   ├── InscriptionScreen.tsx
│   │   │   └── ForgotPasswordScreen.tsx
│   │   └── tabs/              # Écrans des onglets principaux
│   │       ├── HomeScreen.tsx
│   │       └── FeedScreen.tsx
│   ├── navigation/            # Configuration de navigation
│   │   └── TabLayout.tsx      # Layout des onglets principaux
│   ├── constants/             # Constantes de l'application
│   │   └── index.ts           # Couleurs, tailles, espacements
│   ├── types/                 # Définitions TypeScript
│   │   └── index.ts           # Types User, AuthState, etc.
│   ├── utils/                 # Fonctions utilitaires
│   │   └── index.ts           # Validation, formatage
│   ├── hooks/                 # Hooks personnalisés (prêts)
│   └── services/              # Services API (prêts)
├── assets/                    # Images et ressources statiques
├── .eas/                     # Configuration EAS Build
├── app.json                  # Configuration Expo
├── eas.json                  # Profils de build EAS
└── package.json              # Dépendances du projet
```

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Émulateur iOS (Xcode) ou Android (Android Studio)

### Installation

1. **Cloner le repository**

    ```bash
    git clone <repository-url>
    cd fitzone
    ```

2. **Installer les dépendances**

    ```bash
    npm install
    ```

3. **Démarrer le serveur de développement**

    ```bash
    npm start
    # ou
    npx expo start
    ```

4. **Lancer sur une plateforme**

    ```bash
    # iOS
    npm run ios

    # Android
    npm run android

    # Web
    npm run web
    ```

### Options de Lancement

Après avoir lancé `npm start`, vous pouvez :

- **Scanner le QR code** avec l'app Expo Go sur votre mobile
- **Appuyer sur `a`** pour lancer l'émulateur Android
- **Appuyer sur `i`** pour lancer le simulateur iOS
- **Appuyer sur `w`** pour ouvrir dans le navigateur web

## 🔧 Configuration

### Variables d'Environnement

Le projet utilise les configurations par défaut d'Expo. Pour la production, configurez vos variables dans `app.json` :

- **Bundle Identifier** : `com.elhalj.fitzone`
- **Project ID EAS** : `41077301-8ace-464a-b32a-8763d6d0ced1`

### Build de Développement

Pour créer des builds de développement rapides :

```bash
npx eas-cli@latest workflow:run dev-build.yml
```

## 📦 Scripts Disponibles

- `npm start` - Démarre le serveur de développement Expo
- `npm run android` - Lance sur Android
- `npm run ios` - Lance sur iOS
- `npm run web` - Lance sur le web
- `npm run lint` - Exécute ESLint
- `npm run reset-project` - Réinitialise le projet

## 🏗️ Architecture

### Navigation

L'application utilise **Expo Router** avec une structure de fichiers basée sur les routes :

- **Stack Navigation** : Pour les écrans d'authentification (connexion, inscription, mot de passe oublié)
- **Tab Navigation** : Pour les sections principales (Accueil, Feed) avec configuration dans `navigation/TabLayout.tsx`
- **Fichiers de redirection** : Les fichiers dans `src/app/` redirigent vers les écrans correspondants dans `src/screens/`

### Organisation des Composants

Les composants sont organisés par responsabilité dans `src/components/` :

- **ui/** : Composants UI réutilisables (ActionButton, BackButton, LinkButton, Separator, BackIcon)
- **forms/** : Composants spécifiques aux formulaires (InputField, Dropdown, PasswordRequirements)
- **layout/** : Composants de mise en page (ScreenLayout)

### Structure des Écrans

Les écrans sont séparés par fonctionnalité dans `src/screens/` :

- **auth/** : Écrans d'authentification (ConnexionScreen, InscriptionScreen, ForgotPasswordScreen)
- **tabs/** : Écrans des onglets principaux (HomeScreen, FeedScreen)

### Configuration Centralisée

- **constants/** : Constantes partagées (couleurs, tailles, espacements, bordures)
- **types/** : Définitions TypeScript (User, AuthState, NavigationProps)
- **utils/** : Fonctions utilitaires (validateEmail, validatePassword, formatCalories, formatDate)
- **navigation/** : Configuration des layouts de navigation
- **hooks/** : Hooks personnalisés (prêt à l'emploi)
- **services/** : Services API (prêt à l'emploi)

### Styles

L'application utilise **StyleSheet** de React Native avec une approche centralisée :

- Constantes de couleurs et tailles dans `constants/index.ts`
- Styles cohérents avec SafeAreaView pour le responsive
- Composants stylisés de manière modulaire et réutilisable

## � Bonnes Pratiques de Développement

### Ajout d'un Nouvel Écran

1. **Créer le fichier d'écran** dans le dossier approprié (`src/screens/auth/` ou `src/screens/tabs/`)
2. **Créer le fichier de route** dans `src/app/` qui redirige vers l'écran
3. **Utiliser les composants existants** de `src/components/`
4. **Importer les constantes** depuis `src/constants/`

### Ajout d'un Nouveau Composant

1. **UI Component** : Ajouter dans `src/components/ui/`
2. **Form Component** : Ajouter dans `src/components/forms/`
3. **Layout Component** : Ajouter dans `src/components/layout/`
4. **Exporter depuis un index.ts** si nécessaire

### Utilisation des Constantes

```typescript
import { COLORS, SIZES, SPACING } from "@/constants";

// Utilisation dans les styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        padding: SPACING.md,
        borderRadius: BORDER_RADIUS.md,
    },
    title: {
        fontSize: SIZES.large,
        color: COLORS.text,
    },
});
```

### Validation des Données

```typescript
import { validateEmail, validatePassword } from "@/utils";

// Validation email
if (!validateEmail(email)) {
    // Gérer l'erreur
}

// Validation mot de passe
const passwordValidation = validatePassword(password);
if (!passwordValidation.isValid) {
    // Afficher les erreurs
}
```

## �🔐 Build et Déploiement

### Développement

```bash
# Build développement avec client Expo Go
npx eas build --profile development --platform android
npx eas build --profile development --platform ios
```

### Production

```bash
# Build production pour les stores
npx eas build --profile production --platform all
```

### Workflows EAS

Le projet inclut des workflows prédéfinis dans `.eas/workflows/` :

- `dev-build.yml` - Builds de développement rapides
- `development.yml` - CI/CD complet avec tests
- `create-production-builds.yml` - Builds de production

## 🧪 Tests et Qualité

### Linting

```bash
npm run lint
```

### TypeScript

Le projet utilise TypeScript avec configuration stricte dans `tsconfig.json`.

## 🤝 Contribuer

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence privée.

## 📞 Support

Pour toute question ou support technique, contactez l'équipe de développement.

---

**Développé avec ❤️ pour la communauté fitness**

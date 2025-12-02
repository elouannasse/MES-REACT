# MES - React Avancé

Cette liste contient 10 exercices pratiques (MES) couvrant les concepts avancés de React, incluant React Router, React Query, les Hooks avancés, Redux Toolkit et React Hook Form.

---

## 📋 Structure Formelle des Exercices

### Configuration du Projet

Chaque exercice doit respecter la configuration suivante :

#### Stack Technique Requise09

- **React** : Version 18+ avec TypeScript
- **Build Tool** : Vite
- **Package Manager** : npm, yarn ou pnpm
- **Node.js** : Version 18+ LTS
- **TypeScript** : Version 5+

#### Initialisation du Projet

```bash
# Avec Vite (recommandé)
npm create vite@latest project-name -- --template react-ts

```

#### Structure de Dossiers Obligatoire

```
project-name/
├── src/
│   ├── components/        # Composants réutilisables
│   ├── pages/            # Pages/vues de l'application
│   ├── hooks/            # Custom hooks
│   ├── context/          # Context providers
│   ├── services/         # Services API
│   ├── types/            # Types TypeScript
│   ├── utils/            # Fonctions utilitaires
│   ├── styles/           # Fichiers CSS/SCSS
│   ├── App.tsx           # Composant principal
│   └── main.tsx          # Point d'entrée
├── public/               # Assets statiques
├── tests/                # Tests unitaires et d'intégration
├── README.md             # Documentation du projet
├── package.json
└── tsconfig.json
```

---

### 🔍 Outils de Vérification

Avant de soumettre votre travail, utilisez ces outils :

```bash
# Linting
npm run lint

# Tests
npm run test
npm run test:coverage

# Build de production
npm run build

# Analyse du bundle
npm run build -- --analyze

# Lighthouse (dans Chrome DevTools)
# Performance, Accessibility, Best Practices, SEO
```

## MES 1 : React Router - Navigation et Routes Dynamiques

**Objectifs :**

- Configurer React Router v6 dans une application
- Créer des routes imbriquées et des layouts partagés
- Implémenter des routes dynamiques avec paramètres
- Utiliser les hooks `useNavigate`, `useParams` et `useLocation`

**Exercice :**
Créer une application de blog avec :

- Page d'accueil listant les articles
- Page de détail d'article (route dynamique `/article/:id`)
- Page "À propos" et "Contact"
- Navigation avec menu actif (NavLink)
- Route 404 pour les pages non trouvées

**Concepts clés :** Routes, Outlet, NavLink, useParams, useNavigate, Navigate

---

## MES 2 : React Router - Routes Protégées et Authentification

**Objectifs :**

- Implémenter un système d'authentification simulé
- Créer des routes protégées nécessitant une connexion
- Rediriger les utilisateurs non authentifiés
- Gérer l'état d'authentification global

**Exercice :**
Étendre l'application précédente avec :

- Page de connexion/déconnexion
- Routes protégées pour créer/éditer des articles
- Composant ProtectedRoute réutilisable
- Redirection après connexion vers la page d'origine
- Persistance de l'authentification (localStorage)

**Concepts clés :** Context API, ProtectedRoute, Navigate, location.state

---

## MES 3 : React Hooks Avancés - useReducer et useContext

**Objectifs :**

- Maîtriser `useReducer` pour la gestion d'état complexe
- Combiner `useReducer` avec `useContext` pour un état global
- Créer des actions et reducers typés (TypeScript)
- Comprendre quand utiliser useReducer vs useState

**Exercice :**
Créer un panier d'achat avec :

- Ajout/suppression/modification de quantité d'articles
- Calcul automatique du total
- Gestion de l'état avec useReducer
- Partage de l'état via Context
- Actions : ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART

**Concepts clés :** useReducer, useContext, reducer pattern, actions

---

## MES 4 : React Hooks Avancés - useCallback, useMemo et Performance

**Objectifs :**

- Optimiser les performances avec `useMemo` et `useCallback`
- Comprendre le re-rendering et la mémoïsation
- Utiliser React DevTools Profiler
- Éviter les optimisations prématurées

**Exercice :**
Créer une application de filtrage de données avec :

- Liste de 1000+ éléments
- Filtres multiples (recherche, catégorie, prix)
- Tri personnalisable
- Optimisation avec useMemo pour les calculs coûteux
- useCallback pour les fonctions passées aux composants enfants
- Mesure des performances avant/après optimisation

**Concepts clés :** useMemo, useCallback, React.memo, performance optimization

---

## MES 5 : React Hooks Avancés - useRef, useImperativeHandle et Custom Hooks

**Objectifs :**

- Maîtriser `useRef` pour les références DOM et valeurs mutables
- Utiliser `useImperativeHandle` avec `forwardRef`
- Créer des custom hooks réutilisables
- Comprendre les cas d'usage de useRef vs useState

**Exercice :**
Créer une bibliothèque de composants avec :

- Input avec focus automatique (useRef)
- Modal avec gestion du focus trap
- Hook personnalisé `useLocalStorage`
- Hook personnalisé `useDebounce`
- Hook personnalisé `useOnClickOutside`
- Composant exposant des méthodes via useImperativeHandle

**Concepts clés :** useRef, forwardRef, useImperativeHandle, custom hooks

---

## MES 6 : React Query - Fetching et Cache de Données

**Objectifs :**

- Configurer React Query (TanStack Query)
- Effectuer des requêtes GET avec `useQuery`
- Gérer le loading, error et success states
- Comprendre le système de cache et stale time
- Utiliser les DevTools React Query

**Exercice :**
Créer une application de galerie d'images avec API :

- Récupération de photos depuis une API (ex: JSONPlaceholder, Unsplash)
- Affichage avec états de chargement et erreur
- Pagination ou infinite scroll
- Configuration du cache (staleTime, cacheTime)
- Préchargement (prefetching) au survol
- Retry automatique en cas d'erreur

**Concepts clés :** useQuery, QueryClient, caching, staleTime, refetchOnWindowFocus

---

## MES 7 : React Query - Mutations et Invalidation du Cache

**Objectifs :**

- Effectuer des mutations (POST, PUT, DELETE) avec `useMutation`
- Invalider et mettre à jour le cache après mutation
- Gérer l'optimistic update
- Synchroniser l'UI avec le serveur

**Exercice :**
Créer une application TODO avancée avec API :

- CRUD complet (Create, Read, Update, Delete)
- useMutation pour POST/PUT/DELETE
- Invalidation du cache après mutation
- Optimistic updates pour une UX fluide
- Gestion des erreurs avec rollback
- Toast notifications pour les succès/erreurs

**Concepts clés :** useMutation, queryClient.invalidateQueries, optimistic updates, onSuccess/onError

---

## MES 8 : Redux Toolkit - Configuration et Slices

**Objectifs :**

- Configurer Redux Toolkit dans une application React
- Créer des slices avec `createSlice`
- Utiliser `configureStore`
- Connecter React avec `useSelector` et `useDispatch`
- Comprendre les avantages de Redux Toolkit vs Redux classique

**Exercice :**
Créer une application de gestion de tâches multi-projets :

- Store Redux avec plusieurs slices (projects, tasks, user)
- Actions et reducers avec createSlice
- Sélecteurs pour récupérer les données
- Dispatch d'actions depuis les composants
- Redux DevTools pour le debugging
- Gestion de l'état complexe (projets contenant des tâches)

**Concepts clés :** createSlice, configureStore, useSelector, useDispatch, Redux DevTools

---

## MES 9 : Redux Toolkit - Async Thunks et RTK Query

**Objectifs :**

- Gérer les appels API asynchrones avec `createAsyncThunk`
- Utiliser RTK Query pour le data fetching
- Configurer les endpoints API
- Gérer le cache avec RTK Query
- Comparer RTK Query vs React Query

**Exercice :**
Créer une application e-commerce avec :

- RTK Query pour les appels API (produits, catégories)
- createAsyncThunk pour les actions complexes (checkout)
- Gestion du panier avec Redux Toolkit
- Endpoints : getProducts, getProductById, getCategories
- Cache automatique et invalidation
- Loading states et error handling

**Concepts clés :** createAsyncThunk, createApi, RTK Query, endpoints, cache tags

---

## MES 10 : React Hook Form - Formulaires Complexes et Validation

**Objectifs :**

- Configurer React Hook Form
- Créer des formulaires performants et non contrôlés
- Implémenter la validation avec Zod ou Yup
- Gérer les formulaires multi-étapes
- Intégrer avec des bibliothèques UI (MUI, shadcn/ui)

**Exercice :**
Créer un formulaire d'inscription multi-étapes :

- Étape 1 : Informations personnelles (nom, email, mot de passe)
- Étape 2 : Adresse (rue, ville, code postal, pays)
- Étape 3 : Préférences (newsletter, notifications)
- Validation avec Zod schema
- Messages d'erreur personnalisés
- Sauvegarde de la progression (localStorage)
- Soumission finale avec récapitulatif
- Gestion des champs conditionnels
- Intégration avec des composants UI personnalisés

**Concepts clés :** useForm, register, handleSubmit, formState, validation schema, Controller, watch

---

## Projet Final Intégré (Bonus)

**Objectif :** Combiner tous les concepts dans une application complète

**Exercice :**
Créer une application de gestion de projets (type Trello/Asana simplifié) :

- **React Router** : Navigation entre projets, tableaux, paramètres
- **Redux Toolkit** : État global (projets, tâches, utilisateur)
- **RTK Query** : Synchronisation avec API backend
- **React Hook Form** : Création/édition de projets et tâches
- **Custom Hooks** : useLocalStorage, useDebounce, useOnClickOutside
- **Performance** : Optimisation avec useMemo/useCallback
- **Authentification** : Routes protégées

**Fonctionnalités :**

- Authentification utilisateur
- CRUD projets et tâches
- Drag & drop (react-beautiful-dnd)
- Filtres et recherche
- Thème clair/sombre
- Responsive design

---

## Ressources Complémentaires

- [React Router Documentation](https://reactrouter.com/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## Progression Recommandée

1. Commencer par les MES 1-2 (React Router)
2. Approfondir les hooks avec MES 3-5
3. Maîtriser le data fetching avec MES 6-7 (React Query)
4. Explorer Redux avec MES 8-9
5. Finaliser avec les formulaires MES 10
6. Projet final intégré pour consolider

**Bonne pratique !** 🚀

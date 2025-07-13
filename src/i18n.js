import { createI18n } from 'vue-i18n'

// Messages pour chaque langue
const messages = {
  fr: {
    appName: "DÉVELOPPEUR WEB",
    home: "Accueil",
    articles: "Articles",
    contact: "Contact",
    heroTitle: "DÉVELOPPEUR WEB",
    heroText: "Je partage mes connaissances en Développement et montre comment je crée des applications robustes, performantes et maintenables. Mon portfolio démontre mon expertise technique et ma passion pour le développement.",
    seeArticles: "Voir les articles",
    aboutMe: "À PROPOS DE MOI",
    aboutText: "Développeur web Spécialiste en architecture logicielle, optimisation des performances et bonnes pratiques de développement.",
    popularArticles: "ARTICLES POPULAIRES",
    categories: "CATÉGORIES",
    newsletter: "NEWSLETTER",
    newsletterText: "Recevez les derniers articles et ressources .NET et Spring Boot directement dans votre boîte mail.",
    name: "Votre nom",
    email: "Votre email",
    subscribe: "S'ABONNER",
    footerAbout: "À PROPOS",
    footerCategories: "CATÉGORIES",
    footerFollow: "SUIVEZ-MOI",
    myJourney: "Mon parcours",
    myProjects: "Mes projets",
    myArticles: "Mes articles",
    copyright: "© 2023 DÉVELOPPEUR WEB - Tous droits réservés | Conçu avec passion par Adda Issa Abdoul Razak",
    backToArticles: "Retour aux articles",
    featuredArticle: "ARTICLE VEDETTE",
    security: "Sécurité",
    performance: "Performance",
    architecture: "Architecture",
     // ... (clés existantes)
    blogTitle: ".NET EXPERT",
    blogDescription: "Le blog de référence pour les développeurs .NET / Spring Boot qui souhaitent améliorer leurs compétences et adopter les meilleures pratiques.",
    keySkills: "COMPÉTENCES CLÉS",
    recentProjects: "PROJETS RÉCENTS",
    contactTitle: "CONTACT",
    advancedCSharp: "C# Avancé",
    aspNetCore: "ASP.NET Core",
    microservices: "Architecture Microservices",
    entityFramework: "Entity Framework",
    azureCloud: "Cloud Azure",
    paymentSystem: "Système de paiement",
    ecommercePlatform: "Plateforme e-commerce",
    contentApi: "API de gestion de contenu",
    managementApp: "Application de gestion",
    dataAnalysis: "Outil d'analyse de données"
  },
  en: {
    appName: "WEB DEVELOPER",
    home: "Home",
    articles: "Articles",
    contact: "Contact",
    heroTitle: "WEB DEVELOPER",
    heroText: "I share my development knowledge and show how I create robust, performant and maintainable applications. My portfolio demonstrates my technical expertise and passion for development.",
    seeArticles: "See articles",
    aboutMe: "ABOUT ME",
    aboutText: "Web Developer specializing in software architecture, performance optimization and development best practices.",
    popularArticles: "POPULAR ARTICLES",
    categories: "CATEGORIES",
    newsletter: "NEWSLETTER",
    newsletterText: "Receive the latest .NET and Spring Boot articles and resources directly in your inbox.",
    name: "Your name",
    email: "Your email",
    subscribe: "SUBSCRIBE",
    footerAbout: "ABOUT",
    footerCategories: "CATEGORIES",
    footerFollow: "FOLLOW ME",
    myJourney: "My journey",
    myProjects: "My projects",
    myArticles: "My articles",
    copyright: "© 2023 WEB DEVELOPER - All rights reserved | Designed with passion by Adda Issa Abdoul Razak",
    backToArticles: "Back to articles",
    featuredArticle: "FEATURED ARTICLE",
    security: "Security",
    performance: "Performance",
    architecture: "Architecture",
      // ... (clés existantes)
    blogTitle: ".NET EXPERT",
    blogDescription: "The reference blog for .NET/Spring Boot developers looking to improve their skills and adopt best practices.",
    keySkills: "KEY SKILLS",
    recentProjects: "RECENT PROJECTS",
    contactTitle: "CONTACT",
    advancedCSharp: "Advanced C#",
    aspNetCore: "ASP.NET Core",
    microservices: "Microservices Architecture",
    entityFramework: "Entity Framework",
    azureCloud: "Azure Cloud",
    paymentSystem: "Payment system",
    ecommercePlatform: "E-commerce platform",
    contentApi: "Content Management API",
    managementApp: "Management application",
    dataAnalysis: "Data analysis tool"
  }
}

// Créer l'instance i18n
const i18n = createI18n({
  legacy: false, // pour utiliser la Composition API
  locale: 'fr', // langue par défaut
  fallbackLocale: 'en', // langue de repli
  messages
})

export default i18n

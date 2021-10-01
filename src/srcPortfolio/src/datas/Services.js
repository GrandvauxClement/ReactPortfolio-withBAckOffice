import webDesign from '../assets/image/services/web-design.png'
import logoWebDesign from '../assets/image/services/web-design-logo.png'
import cms from '../assets/image/services/developpeur-site-wordpress.jpg'
import logoCms from '../assets/image/services/logo_cms.png'
import maintenance from '../assets/image/services/maintenance.jpg'
import logoMaintenance from '../assets/image/services/logo-maintenance.png'
import agile from '../assets/image/services/fond-metod-agile.jpg'
import logoAgile from '../assets/image/services/mettod-agile.png'
import siteFramework from '../assets/image/services/developpeur-site-framework.jpg'
import logoSiteFramework from '../assets/image/services/symfony.svg'
import referencement from '../assets/image/services/referencement.jpg'
import logoReferencement from '../assets/image/services/icone-SEO.png'
export const dataServices = [
    {
        id: 'service1',
        title: 'Création et intégration de maquettes graphique',
        subtitle: null,
        logo: logoWebDesign,
        image: webDesign,
        textUn: 'Je travail en colaboration avec un designer qui s\'occupe de la réalisation de vos maquettes en suivant vos envies.',
        textDeux: 'J\'effectue ensuite l\'intégration responsive (rendu adapté au portable/tablette) de vos maquettes en utilisant les technologies modernes.'
    },
    {
        id: 'service2',
        title: 'Développement CMS',
        subtitle: 'Principalement Wordpress et Prestashop',
        logo: logoCms,
        image: cms,
        textUn: 'Je prends en charge le développement de votre site web en m\'assurant qu\'il soit lisible sur tablette et mobile',
        textDeux: 'Nous échangeons en direct pendant la phase de développement et un site de pré-production est mis en ligne pour vous permettre de suivre les avancées.'
    },
    {
        id: 'service3',
        title: 'Développement de site et d\'application sur mesure',
        subtitle: 'Symfony, Angular, ect ..',
        logo: logoSiteFramework,
        image: siteFramework,
        textUn: 'Des applications mobile aux applications ERP métier, je travaille avec vous sur un cahier des charges pour définir vos besoin et m\'occuper ensuite du développement de votre produit.',
        textDeux: 'J\'assure ensuite les mises à jour de celui-ci en fonction de vos besoins.'
    },
    {
        id: 'service4',
        title: 'Référencement naturel (SEO)',
        subtitle: 'Techniques qui consistent à positionner un site sur les premiers résultats des moteur de recherche',
        logo: logoReferencement,
        image: referencement,
        textUn: 'Nous réfléchissons ensemble à une stratégie SEO pour votre site, la mettons ensuite en application en suivant les 3 axes classiques du référencement :',
        textDeux: 'Développement d\'une structure interne optimisée, Rédation de contenus pertinents et Création de liens-retour solides.'
    },
    {
        id: 'service5',
        title: 'Refonte et maintenance de site et application web ',
        subtitle: null,
        logo: logoMaintenance,
        image: maintenance,
        textUn: 'Vous voulez améliorer l\'ergonomie de votre site ? Son design ? Ou moderniser ses technologies ?',
        textDeux: 'J\'éffectue en collaboration avec un designer un état des lieux de l\'existant puis procédons à remanier votre site en fonction de vos besoins et des objectifs établis.'
    },
    {
        id: 'service6',
        title: 'Méthodologie de travail et Gestion de projet',
        subtitle: null,
        logo: logoAgile,
        image: agile,
        textUn: 'Je gère mes projets de façon Agile, c\'est à dire que vous pourrez suivre l\'avancement du projet pas à pas et donnez votre avis sur l\'orientation actuelle et futur du projet.',
        textDeux: null
    },
]
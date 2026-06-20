// Données des articles AfriPolitique — utilisées par article.html
// Chaque entrée : id, catégorie (classe CSS + libellé), image, titre, chapeau,
// auteur, date, temps de lecture, et corps (tableau de paragraphes en HTML simple).

const ARTICLES = {

  "afrique-data-centers-ia-souverainete": {
    cat: "cat-economie", catLabel: "Afrique — Économie & Tech",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80&auto=format&fit=crop",
    title: "Course mondiale à l'IA : avec 0,6 % des centres de données, l'Afrique joue sa souveraineté numérique",
    excerpt: "Alors que VivaTech referme ses portes à Paris en plaçant la tech africaine sous les projecteurs, un chiffre rappelle l'ampleur du défi : le continent n'abrite que 0,6 % des capacités mondiales de centres de données. Face à un marché planétaire de 3 000 milliards de dollars, l'Afrique tente de bâtir l'infrastructure de sa propre intelligence artificielle.",
    author: "Rédaction AfriPolitique", date: "20 juin 2026", read: "5 min",
    body: [
      "<p>Le contraste est saisissant. Tandis que le salon VivaTech, qui referme ce 20 juin ses portes au Parc des expositions de Paris, célèbre dix ans d'innovation et braque ses projecteurs sur les pépites africaines à travers les AfricaTech Awards, un chiffre résume à lui seul le défi qui attend le continent : l'Afrique n'héberge aujourd'hui que <strong>0,6 % des capacités mondiales de centres de données</strong>. Moins de 1 % de l'infrastructure physique qui fait tourner l'économie numérique mondiale, pour un continent qui rassemble près d'un cinquième de l'humanité.</p>",
      "<p>L'enjeu n'est plus seulement technologique : il est devenu éminemment politique. Les centres de données sont les usines de l'intelligence artificielle. Sans eux, pas d'IA souveraine, pas de traitement local des données des citoyens, pas de valeur ajoutée captée sur place. La question qui se pose aux États africains est limpide : le continent va-t-il abriter ses propres serveurs, ou continuer à louer ceux des autres ?</p>",
      "<h3>Un retard structurel, un marché colossal</h3>",
      "<p>Les ordres de grandeur donnent la mesure du fossé. À l'échelle mondiale, les investissements dans les centres de données devraient atteindre <strong>3 000 milliards de dollars</strong> sur les cinq prochaines années, portés par la déferlante de l'IA générative. Les seuls États-Unis concentrent environ <strong>45 %</strong> des centres de données de la planète. L'Afrique, elle, doit composer avec un réseau électrique défaillant, un coût du capital élevé et une connectivité encore inégale.</p>",
      "<p>Pourtant, la dynamique s'inverse. Selon le rapport <em>Data Centres in Africa 2026</em>, la capacité installée sur le continent devrait <strong>tripler pour atteindre environ 1,2 gigawatt</strong> de charge informatique d'ici 2030. Le cabinet McKinsey anticipe une demande qui, au minimum, triplera sur la même période. À la clé, un potentiel de revenus estimé entre <strong>20 et 30 milliards de dollars</strong> par an d'ici la fin de la décennie sur l'ensemble de la chaîne de valeur.</p>",
      "<h3>Les capitaux affluent, le politique suit</h3>",
      "<p>Le signal le plus fort est venu en 2025 avec la <strong>Déclaration africaine sur l'intelligence artificielle</strong>, qui a permis de sécuriser <strong>60 milliards de dollars</strong> d'engagements pour bâtir les capacités d'IA du continent. Depuis, les annonces se succèdent. Microsoft et le groupe émirati G42 ont engagé <strong>1 milliard de dollars</strong> au Kenya, dont un centre de données « vert » destiné à la région cloud d'Afrique de l'Est d'Azure.</p>",
      "<p>Le Nigeria, locomotive démographique du continent, illustre cette accélération. En mai 2026, Kasi Cloud a mis en service à Lekki, dans la périphérie de Lagos, le centre de données <strong>LOS1</strong> — présenté comme la première installation <em>hyperscale</em> conçue dès l'origine pour l'intelligence artificielle en Afrique de l'Ouest. Le marché nigérian des centres de données, évalué à environ 1,4 milliard de dollars en 2025, pourrait atteindre 2,7 milliards en 2035. Plusieurs projets, soutenus par près d'un milliard de dollars d'investissements cumulés, visent à faire du pays un hub régional.</p>",
      "<h3>Le talon d'Achille : l'énergie</h3>",
      "<p>Mais l'élan se heurte à un obstacle têtu : l'électricité. Un centre de données <em>hyperscale</em> consomme autant qu'une ville moyenne, et l'IA pousse cette facture vers des sommets. Or le Nigeria, comme une grande partie de l'Afrique subsaharienne, peine encore à fournir un courant stable à ses propres habitants. C'est désormais le gaz naturel — abondant sur le continent — qui est appelé à la rescousse pour alimenter ces infrastructures, faisant de la politique énergétique un volet central de la stratégie numérique.</p>",
      "<p>Trois pays se détachent dans cette course : le <strong>Nigeria</strong>, le <strong>Kenya</strong> et l'<strong>Afrique du Sud</strong>, qui captent l'essentiel des investissements internationaux. Pour les autres, le risque est réel de voir se creuser une nouvelle fracture, non plus seulement d'accès à Internet, mais d'accès à la puissance de calcul.</p>",
      "<h3>Une bataille de souveraineté</h3>",
      "<p>Derrière les mégawatts et les milliards se joue une question de pouvoir. Héberger localement les données, c'est garder la main sur des informations sensibles — santé, état civil, finances — et réduire la dépendance vis-à-vis des grandes plateformes étrangères. Plusieurs gouvernements africains ont déjà adopté des lois de localisation des données, obligeant les acteurs du numérique à stocker sur place les informations de leurs ressortissants.</p>",
      "<p>La fenêtre est étroite mais réelle. En misant sur ses ressources énergétiques, sa démographie et l'appétit des investisseurs, l'Afrique a l'occasion de ne pas répéter l'histoire des révolutions industrielles passées, où elle est restée fournisseuse de matières premières. La vitrine de VivaTech le rappelle : le talent est là. Reste à construire, en dur, l'infrastructure qui transformera l'ambition en souveraineté.</p>"
    ]
  },

  "mobile-money-ia-credit": {
    cat: "cat-economie", catLabel: "Afrique — Économie & Tech",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80&auto=format&fit=crop",
    title: "Argent mobile : l'Afrique franchit 1 400 milliards de dollars, et l'IA veut bancariser les invisibles",
    excerpt: "En 2025, 1 400 milliards de dollars ont transité par l'argent mobile en Afrique subsaharienne — les deux tiers du total mondial. Prochaine frontière : l'intelligence artificielle, qui transforme l'historique des paiements en accès au crédit pour 57 % d'adultes encore non bancarisés.",
    author: "Rédaction AfriPolitique", date: "19 juin 2026", read: "5 min",
    body: [
      "<p>Le chiffre a la force d'un symbole. En 2025, plus de <strong>1 400 milliards de dollars</strong> ont transité par les portefeuilles d'argent mobile en Afrique subsaharienne, selon le rapport <em>State of the Industry on Mobile Money 2026</em> de la GSMA. À elle seule, la région a concentré environ <strong>66 % de la valeur mondiale</strong> des transactions d'argent mobile, estimée à 2 100 milliards de dollars. L'Afrique n'est plus un terrain d'expérimentation de la finance numérique : elle en est le cœur battant.</p>",
      "<p>La trajectoire donne le vertige. Il a fallu vingt ans au secteur pour franchir la barre des 1 000 milliards de dollars de transactions annuelles dans le monde — puis seulement quatre ans, entre 2021 et 2025, pour doubler ce montant. Le nombre de comptes actifs sur trente jours a bondi de 15 % en un an pour atteindre 593 millions à l'échelle mondiale, et l'Afrique subsaharienne comptait à elle seule 173 services d'argent mobile en activité.</p>",
      "<h3>Une révolution née de l'exclusion</h3>",
      "<p>Cette domination n'est pas un hasard : elle est née d'un manque. Près de <strong>57 % des adultes africains</strong> restent aujourd'hui sans compte bancaire classique. Là où les agences bancaires n'ont jamais pénétré, le téléphone portable a tout emporté. Au Kenya, berceau de M-Pesa, les transactions d'argent mobile représentent désormais près de <strong>60 % du PIB</strong> — un niveau sans équivalent sur la planète.</p>",
      "<p>Portée par une démographie jeune, l'explosion du smartphone et des politiques publiques d'inclusion financière au Nigeria, au Kenya, en Tanzanie ou au Ghana, cette infrastructure est devenue le système nerveux de l'économie réelle : salaires, factures, commerce de détail, transferts de la diaspora. Tout passe désormais par le mobile.</p>",
      "<h3>L'IA, nouveau banquier des invisibles</h3>",
      "<p>Mais la prochaine bataille ne se joue plus sur le paiement — elle se joue sur le <strong>crédit</strong>. La GSMA et plusieurs études sectorielles estiment à <strong>330 milliards de dollars</strong> la demande de crédit non satisfaite sur le continent. C'est là qu'entre en scène l'intelligence artificielle.</p>",
      "<p>Faute d'historique bancaire, des millions d'Africains étaient jusqu'ici « invisibles » pour les prêteurs. Les nouveaux modèles d'IA contournent l'obstacle en analysant des données alternatives : la fréquence des transactions d'argent mobile, les habitudes de recharge de crédit téléphonique, l'activité de commerce numérique, jusqu'à l'heure des opérations. À partir de centaines de points de données, un algorithme évalue en quelques secondes la solvabilité d'un commerçant ou d'un agriculteur qu'aucune banque n'aurait reçu.</p>",
      "<p>Les résultats sont tangibles : dans les pays dotés d'un cadre réglementaire favorable au prêt mobile responsable, le taux d'inclusion financière a progressé de près de 20 % en cinq ans. Sur cette dynamique, les revenus de la fintech africaine pourraient être multipliés par treize d'ici 2030, pour approcher 65 milliards de dollars.</p>",
      "<h3>Les zones d'ombre d'un miracle annoncé</h3>",
      "<p>Le tableau n'est pourtant pas sans ombres. La GSMA elle-même relève qu'une large part des comptes ouverts restent inactifs : la possession d'un portefeuille ne vaut pas usage, ni inclusion réelle. Le crédit instantané dopé à l'IA soulève par ailleurs des risques bien identifiés — surendettement des ménages les plus fragiles, opacité des algorithmes, biais de notation, et protection encore balbutiante des données personnelles.</p>",
      "<p>Surtout, une question politique affleure : qui contrôle les modèles et les données ? Tant que l'architecture de la notation de crédit dépendra de technologies et de serveurs étrangers, l'Afrique restera dépendante pour un levier devenu stratégique de son développement. D'où l'appel croissant à bâtir des modèles entraînés sur des données africaines et gouvernés par des régulateurs africains.</p>",
      "<p>Les 1 400 milliards de dollars de 2025 ne sont donc pas un aboutissement, mais une base de départ. Le défi des prochaines années sera de transformer ces flux massifs en crédit utile, inclusif et souverain — pour que la révolution de l'argent mobile cesse d'être une prouesse statistique et devienne un véritable moteur d'émancipation économique.</p>"
    ]
  },


  "france-tchad-retour": {
    cat: "cat-politique", catLabel: "Afrique — Géopolitique",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Op%C3%A9ration_Barkhane_passage_en_revue_des_hommes_par_g%C3%A9n%C3%A9ral_fran%C3%A7ais_%C3%A0_N%27Djamena_en_2014.jpg/1920px-Op%C3%A9ration_Barkhane_passage_en_revue_des_hommes_par_g%C3%A9n%C3%A9ral_fran%C3%A7ais_%C3%A0_N%27Djamena_en_2014.jpg",
    title: "France-Tchad : un an plus tard, le Tchad retombe dans la main de la France",
    excerpt: "Le Tchad a chassé l'armée française en janvier 2025. Treize mois plus tard, Mahamat Déby était à l'Élysée pour demander son retour. Retour sur soixante ans d'une dépendance jamais rompue — et sur ce qu'elle coûte aux Tchadiens et aux États de l'AES.",
    author: "Rédaction AfriPolitique", date: "12 juin 2026", read: "12 min",
    body: [
      "Le 29 janvier 2026 à Paris, Emmanuel Macron recevait Mahamat Idriss Déby à l'Élysée, un an jour pour jour après le départ du dernier soldat français du sol tchadien. Face aux journalistes de RFI, France 24 et TV5 Monde, le président français n'avait pas mâché ses mots : « Demandez à monsieur Déby. Il nous a demandé de rebâtir une relation de défense. »",
      "La formule est courte. Elle dit l'essentiel. Après les sommets de bravade souverainiste, le Tchad revient vers la France — et la France, visiblement, l'attendait. Ce retournement ne peut se comprendre sans remonter à la longue histoire qui lie Paris à N'Djaména depuis l'indépendance : une relation bâtie sur la dépendance militaire, nourrie par l'ingérence, et dont les populations tchadiennes ont payé le prix le plus lourd.",
      "<strong style=\"display:block;font-family:inherit;font-size:1.25rem;margin:1.6rem 0 .3rem;border-left:4px solid #c00;padding-left:10px;line-height:1.3;\">Soixante ans de tutelle militaire : la genèse d'une dépendance</strong>",
      "<strong style=\"display:block;font-size:1.05rem;margin:1.1rem 0 .2rem;\">1960-1975 : Les premières interventions et la tentation de l'autonomie</strong>",
      "Le 11 août 1960, le Tchad accède à l'indépendance. Mais dans les faits, la souveraineté reste partielle. Dès cette même année, des accords de défense sont signés entre Paris et N'Djaména, autorisant la France à maintenir des forces permanentes sur le territoire tchadien et à intervenir militairement à la demande du gouvernement. Le premier président, François Ngarta Tombalbaye, en hérite sans vraiment en discuter les termes.",
      "La première mise à l'épreuve de ces accords survient dès 1969. Le Front de libération nationale du Tchad (FROLINAT) tient alors de larges pans du Nord et du Centre du pays. Incapable de contenir la rébellion, Tombalbaye sollicite Paris. Le 18 mars 1969, la France déclenche l'opération Limousin : plusieurs milliers de soldats sont déployés, les combats durent plus de trois ans. En août 1972, les derniers éléments français se retirent, ayant stabilisé le régime sans résoudre aucun problème de fond.",
      "Mais Tombalbaye commence à se méfier de son tuteur. À partir de 1973, il lance la « Tchaditude » — un mouvement d'authenticité culturelle qui vise aussi à réduire l'emprise française dans les rouages de l'État. Il chasse des conseillers militaires français jugés trop envahissants. La rupture reste incomplète. Le 13 avril 1975, il est renversé et tué lors d'un coup d'État militaire. La France ne lève pas le petit doigt.",
      "<strong style=\"display:block;font-size:1.05rem;margin:1.1rem 0 .2rem;\">1975-1990 : De Malloum à Habré, l'engrenage des interventions</strong>",
      "Sous le général Félix Malloum (1975-1979), puis dans le chaos de la guerre civile qui oppose Hissein Habré à Goukouni Oueddei pour le contrôle du pays, la France accentue son empreinte militaire. L'opération Tacaud (1978-1980) déploie environ 2 500 soldats français pour soutenir le gouvernement de Malloum face aux offensives du FROLINAT. En vain : la coalition gouvernementale implose et Goukouni prend le pouvoir en 1979.",
      "Goukouni fait alors le choix qui alarme Paris : il invite les troupes libyennes. En novembre 1980, environ 15 000 soldats de Kadhafi entrent au Tchad. La France ne peut tolérer une Libye aux portes de son pré carré sahélien. Elle change de camp et soutient désormais Hissein Habré, le rival de Goukouni. Habré prend N'Djaména en juin 1982.",
      "L'aventure franco-tchadienne entre alors dans une nouvelle phase. En août 1983, les forces libyennes et les troupes de Goukouni franchissent à nouveau la frontière. Le 11 août 1983, la France déclenche l'opération Manta : 3 500 soldats sont déployés, une « ligne rouge » est tracée au quinzième parallèle pour bloquer l'avancée libyenne. L'opération prend fin le 7 novembre 1984 dans le cadre d'un accord de retrait mutuel franco-libyen, jamais réellement respecté par Kadhafi.",
      "Lorsque la Libye franchit une nouvelle ligne rouge en février 1986, Paris réplique par l'opération Épervier. Lancée le 14 février 1986, elle ne sera jamais officiellement terminée : elle restera en place pendant près de quarante ans, changeant de nom en 2014 pour rejoindre l'opération Barkhane, mais maintenant une présence permanente à N'Djaména. Pendant ce temps, les forces d'Habré infligent à la Libye de sévères défaites lors de la « Guerre des Toyota » (1986-1987), avec un soutien logistique et en renseignement déterminant de la France.",
      "Paris sort pourtant Habré par la petite porte. En décembre 1990, lorsque le général Idriss Déby Itno lance son offensive depuis le Soudan, la France choisit de ne pas intervenir pour défendre son allié. Habré fuit. Déby entre dans N'Djaména le 1er décembre 1990. La France a changé de protégé.",
      "<strong style=\"display:block;font-size:1.05rem;margin:1.1rem 0 .2rem;\">1990-2024 : Trente ans d'impunité garantie sous Idriss Déby</strong>",
      "La présidence d'Idriss Déby Itno est la démonstration la plus longue et la plus documentée de ce que la protection militaire française permet en termes d'impunité politique. Déby dirige le Tchad d'une main de fer pendant trente et un ans — avec l'accord tacite, et souvent actif, de Paris.",
      "Deux interventions illustrent la réalité de cette dépendance. En avril 2006, les rebelles du Front uni pour le changement (FUC) entrent dans N'Djaména et menacent sérieusement le palais présidentiel. L'opération Épervier effectue des tirs de semonce. Les rebelles reculent. Déby survit.",
      "Plus spectaculaire encore : les 2 et 3 février 2008, les colonnes de l'Union des forces pour la démocratie et le développement (UFDD) et du Rassemblement des forces pour le changement (RFC) encerclent le palais présidentiel. N'Djaména est sous les balles. C'est la nuit de tous les dangers pour Déby. La France intervient : fourniture de renseignements sur les mouvements des colonnes rebelles, appui logistique, coordination des opérations. Après la défaite des rebelles à Massaguet, Déby doit sa survie politique — et probablement physique — au soutien de Paris. L'accord de défense de 1976, révisé et renforcé le 5 septembre 2019, est le cadre juridique de cette protection permanente.",
      "<strong style=\"display:block;font-family:inherit;font-size:1.25rem;margin:1.6rem 0 .3rem;border-left:4px solid #c00;padding-left:10px;line-height:1.3;\">Avril 2021 : la succession dynastique, ou l'ingérence à visage découvert</strong>",
      "Il existe un moment dans l'histoire franco-tchadienne qui résume, à lui seul, trente ans de pratique de l'ingérence. Ce moment, c'est le 20 avril 2021.",
      "Dans la nuit du 18 au 19 avril, Idriss Déby est blessé par balle sur le front de Tibesti alors qu'il rend visite à ses troupes engagées contre les rebelles du FACT (Front pour l'alternance et la concorde au Tchad). Le 20 avril, sa mort est annoncée. La veille, il venait de remporter la présidentielle avec 79,3 % des voix.",
      "Ce qui se passe dans les heures qui suivent est constitutionnellement illégal. La Constitution tchadienne prévoit qu'en cas de vacance du pouvoir, c'est le président de l'Assemblée nationale qui assume l'intérim. Au lieu de cela, un Conseil militaire de transition (CMT) se constitue immédiatement, composé d'officiers proches de la famille Déby. À sa tête : le général Mahamat Idriss Déby, 38 ans, fils du président défunt. Une succession dynastique déguisée en transition militaire.",
      "L'opposition et la société civile tchadiennes crient à la confiscation du pouvoir. L'Union africaine suspend le Tchad de ses instances — conformément à sa charte sur les changements anticonstitutionnels de gouvernement. Logiquement, la communauté internationale devrait condamner.",
      "C'est alors qu'Emmanuel Macron fait le choix qui dit tout. Le 23 avril 2021, il est le seul chef d'État occidental à faire le déplacement à N'Djaména pour les funérailles d'Idriss Déby. Assis aux côtés de Mahamat Déby, il prononce un éloge appuyé du défunt — « un ami courageux » — avant d'avoir des entretiens privés avec son successeur autoproclamé. Le Quai d'Orsay valide la transition. Sous pression française, et dans un contexte où les puissances occidentales craignent de perdre leur principal appui militaire au Sahel, l'Union africaine revient sur sa suspension.",
      "La mécanique est claire. La France avait besoin du Tchad comme base arrière pour l'opération Barkhane. La pérennité de cette base exigeait une continuité politique. Mahamat Déby offrait cette continuité. La légitimité constitutionnelle était un détail. En cautionnant ouvertement ce coup de force dynastique, Paris a envoyé un signal sans ambiguïté : en matière de gouvernance tchadienne, les règles ne s'appliquent que lorsqu'elles servent les intérêts français.",
      "<strong style=\"display:block;font-family:inherit;font-size:1.25rem;margin:1.6rem 0 .3rem;border-left:4px solid #c00;padding-left:10px;line-height:1.3;\">L'ingérence comme moteur du sous-développement</strong>",
      "Le lien entre la protection militaire française, la captation du pouvoir par un clan, et le sous-développement persistant du Tchad n'est pas une coïncidence. C'est une mécanique.",
      "Le Tchad est l'un des pays les plus riches en ressources naturelles d'Afrique centrale : pétrole, uranium, or, coton. Et l'un des plus pauvres du monde. En 2022, le Programme des Nations Unies pour le développement le classe 190e sur 191 pays à l'Indice de développement humain. Environ 80 % de la population vit de l'agriculture de subsistance. L'espérance de vie ne dépasse pas 54 ans.",
      "Le secteur pétrolier illustre ce paradoxe. Lorsque le pipeline Tchad-Cameroun — 1 100 kilomètres, 3,7 milliards de dollars d'investissement — entre en service en 2003 et que les revenus pétroliers commencent à affluer en 2004, l'espoir est immense. La Banque mondiale avait conditionné son soutien à un mécanisme de gestion des revenus censé prioriser la lutte contre la pauvreté.",
      "Déby contourne le mécanisme dès 2005. Les revenus pétroliers sont réorientés vers les dépenses militaires et sécuritaires. Le consortium Esso-Chevron-Petronas capte 71,3 % des bénéfices au titre des coûts opérationnels, laissant au Tchad 28,7 %. Les contrats restent confidentiels, rendant tout contrôle citoyen impossible. En 2015, l'indice Mo Ibrahim classait le Tchad dernier (51e sur 51) en matière de gouvernance africaine.",
      "Ce système fonctionne parce qu'il est protégé. La garantie militaire française permet au clan au pouvoir de gouverner sans avoir à rendre de comptes à sa population. Sans la menace crédible d'un renversement — écartée par Paris en 2006 et en 2008 —, le régime Déby n'a aucune pression à construire des institutions, à investir dans l'éducation ou la santé, à lutter contre la corruption qui gangrène chaque niveau de l'administration. La protection française est, en ce sens, l'assurance vie d'un système prédateur.",
      "Le clan Zaghawa contrôle les postes clés de l'armée, des services de renseignement, des douanes et de la présidence depuis 1990. Cette mainmise sur l'appareil d'État se traduit directement par une capture des rentes économiques : pétrole, coton, téléphonie, commerce transfrontalier. Les entreprises étrangères, françaises en tête, savent que pour opérer au Tchad il faut traiter avec ce réseau. Elles le font. Le cercle est fermé.",
      "<strong style=\"display:block;font-family:inherit;font-size:1.25rem;margin:1.6rem 0 .3rem;border-left:4px solid #c00;padding-left:10px;line-height:1.3;\">La France de retour en 2026 : le même scénario, un nouveau décor ?</strong>",
      "C'est dans ce contexte structurel qu'il faut lire le retour progressif des forces françaises au Tchad depuis le sommet de Nairobi des 11 et 12 mai 2026.",
      "Le paradoxe est frappant. Le 28 novembre 2024, le Tchad avait unilatéralement dénoncé l'accord de défense de 1976 révisé en 2019. Une décision qui avait irrité Paris. S'en était suivi un retrait échelonné : départ d'un premier contingent le 11 décembre 2024, rétrocession de la base de Faya-Largeau le 26 décembre 2024, d'Abéché le 11 janvier 2025, et finalement de la base aérienne Sergent-chef Adji Kosseï — ancienne base 172 de Fort-Lamy — le 30 janvier 2025. Environ 1 000 soldats français quittaient ainsi le pays.",
      "Mahamat Déby avait alors affiché un discours souverainiste : la Russie, la Turquie, les Émirats arabes unis étaient désormais ses nouveaux partenaires. Le Tchad semblait vouloir rejoindre, au moins symboliquement, la vague de reconfiguration géopolitique qui emportait le Mali, le Burkina Faso et le Niger vers d'autres horizons.",
      "Treize mois plus tard, le président tchadien était à l'Élysée.",
      "Ce revirement s'explique en grande partie par la réalité sécuritaire du pays. Le FACT reste actif dans le nord. Les groupes djihadistes multiplient les attaques dans la région du lac Tchad. Le conflit soudanais — dans lequel N'Djaména est impliqué aux côtés des Forces de soutien rapide (FSR) depuis 2023 — déborde sur le territoire tchadien. Face à ces menaces cumulées, Mahamat Déby a jugé que la protection française valait mieux que le discours souverainiste.",
      "Ce choix a un coût géopolitique lourd. Le Tchad est désormais soupçonné de servir de relais à un dispositif de renseignement visant les États de l'AES — Niger, Mali, Burkina Faso. Les informations concordantes sur un soutien discret tchadien à certains groupes armés opposés aux autorités nigériennes alimentent cette conviction à Niamey, Bamako et Ouagadougou. Le fossé entre N'Djaména et ses voisins sahéliens, déjà profond, se creuse davantage. Toute perspective d'intégration régionale dans le cadre de l'AES s'éloigne.",
      "<strong style=\"display:block;font-family:inherit;font-size:1.25rem;margin:1.6rem 0 .3rem;border-left:4px solid #c00;padding-left:10px;line-height:1.3;\">Ce que la France ne change pas</strong>",
      "Le problème central de ce retour français au Tchad n'est pas son existence. C'est sa nature. La France se repositionne en Afrique centrale en proposant les mêmes solutions que celles qui ont échoué au Sahel : la sécurité, la lutte contre le terrorisme, et implicitement, la garantie de la stabilité du régime en place.",
      "Les dirigeants français répètent, depuis les discours de Ouagadougou (2017) et de Montpellier (2021), que la relation franco-africaine a changé. Sur le terrain tchadien, rien ne corrobore cette promesse. La France cautionne toujours un régime arrivé au pouvoir par la force, maintenu au pouvoir par une protection militaire, et incapable de gouverner autrement qu'en s'appuyant sur des soutiens extérieurs.",
      "Pour que quelque chose change réellement, le nouveau partenariat franco-tchadien devrait s'articuler autour d'axes radicalement différents : formation professionnelle, transfert de technologies, coopération judiciaire contre la corruption, investissements conditionnés à des indicateurs de gouvernance. Pas autour du maintien au pouvoir d'une famille qui confond l'État avec un patrimoine personnel.",
      "La France en est-elle capable ? Les signaux de 2026 ne l'indiquent pas. En s'obstinant dans l'héritage sécuritaire de la Françafrique, Paris recule partout où il s'entête — et revient, paradoxalement, là où les régimes qu'il a lui-même façonnés le rappellent au chevet de leur survie.",
      "Ce n'est pas une nouvelle politique africaine. C'est la même, avec un nouveau costume."
    ]
  },

  "union-africaine-sahel": {
    cat: "cat-politique", catLabel: "Afrique — Politique",
    img: "https://images.unsplash.com/photo-1626695436755-3e288720849c?w=1400&q=80&auto=format&fit=crop",
    title: "Union Africaine : vers une armée continentale face aux crises du Sahel",
    excerpt: "Les dirigeants africains réunis à Addis-Abeba examinent la création d'une force militaire commune, en réponse aux coups d'État répétés au Mali, au Burkina Faso et au Niger.",
    author: "Rédaction AfriPolitique", date: "4 juin 2026", read: "8 min",
    body: [
      "Réunis en sommet extraordinaire au siège de l'Union africaine à Addis-Abeba, les chefs d'État et de gouvernement du continent examinent depuis mardi un projet inédit : la création d'une force militaire continentale permanente, capable d'intervenir rapidement dans les zones de crise sans attendre l'aval de coalitions ad hoc.",
      "Le projet, porté conjointement par l'Afrique du Sud, le Kenya et le Nigeria, prévoit la mise en place d'un contingent de 15 000 hommes mobilisables sous 72 heures, financé par un mécanisme de contribution obligatoire des États membres et soutenu logistiquement par des partenaires extérieurs encore non désignés officiellement.",
      "« Nous ne pouvons plus nous permettre d'attendre que chaque crise s'aggrave avant de réagir collectivement », a déclaré un porte-parole de la Commission de l'UA en marge des travaux, évoquant la succession de coups d'État survenus ces dernières années au Mali, au Burkina Faso et au Niger, ainsi que la dégradation sécuritaire dans le bassin du lac Tchad.",
      "Le projet ne fait toutefois pas l'unanimité. Plusieurs délégations d'Afrique australe et d'Afrique de l'Est ont exprimé des réserves sur le financement et sur la chaîne de commandement, redoutant qu'une force continentale ne devienne un instrument au service des puissances régionales les plus influentes plutôt qu'un outil de stabilisation neutre.",
      "Les discussions doivent se poursuivre jusqu'à vendredi, avec un vote prévu sur une feuille de route définissant les contours juridiques, financiers et opérationnels du projet. Les observateurs s'attendent à un compromis a minima : la création d'un groupe de travail chargé d'affiner la proposition d'ici le prochain sommet ordinaire de l'UA, en janvier 2027.",
      "Pour de nombreux analystes, l'enjeu dépasse la seule question militaire : il s'agit de savoir si l'Union africaine est capable de transformer ses ambitions de souveraineté collective en une architecture de sécurité réellement opérationnelle, après des décennies de déclarations d'intention restées lettre morte."
    ]
  },

  "senegal-legislatives": {
    cat: "cat-election", catLabel: "Élections",
    img: "https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?w=1400&q=80&auto=format&fit=crop",
    title: "Sénégal : la coalition Pastef remporte les législatives avec une majorité renforcée",
    excerpt: "Participation record de 68 % dans les grandes villes lors de ce scrutin historique.",
    author: "Rédaction AfriPolitique", date: "3 juin 2026", read: "6 min",
    body: [
      "La coalition au pouvoir sort largement renforcée des élections législatives organisées dimanche au Sénégal, selon les résultats provisoires communiqués lundi matin par la Commission électorale nationale autonome (CENA). Elle obtiendrait une majorité absolue confortable à l'Assemblée nationale, loin devant une opposition fragmentée.",
      "Le scrutin a été marqué par une participation exceptionnelle : 68 % des inscrits se sont rendus aux urnes dans les grandes agglomérations de Dakar, Thiès et Saint-Louis, un niveau inédit depuis le retour au pluralisme dans les années 2000. Dans les zones rurales, la mobilisation a également progressé par rapport aux précédentes échéances.",
      "Pour les analystes, ce résultat traduit une adhésion continue d'une partie importante de l'électorat aux réformes engagées depuis l'arrivée au pouvoir de la nouvelle majorité, notamment en matière de gestion des ressources naturelles et de lutte contre la vie chère, deux thèmes qui ont dominé la campagne.",
      "L'opposition, elle, dénonce déjà des « irrégularités localisées » dans plusieurs bureaux de vote de la région de Kaolack et annonce le dépôt de recours devant le Conseil constitutionnel. La CENA assure de son côté que le déroulement du scrutin a été conforme aux standards internationaux, et que des observateurs de la CEDEAO et de l'Union africaine ont validé l'essentiel des opérations.",
      "Cette nouvelle majorité parlementaire devrait permettre au gouvernement de poursuivre, sans blocage institutionnel majeur, l'agenda de réformes constitutionnelles annoncé en début d'année — un agenda suivi de près par les partenaires économiques et les agences de notation, dans un contexte de renégociation des accords avec les institutions financières internationales."
    ]
  },

  "kenya-fronde-interne": {
    cat: "cat-politique", catLabel: "Politique",
    img: "https://images.unsplash.com/photo-1633116937591-f312921e99b9?w=1400&q=80&auto=format&fit=crop",
    title: "Kenya : le président Ruto affronte une fronde interne après le limogeage de son vice-président",
    excerpt: "Des alliés parlementaires menacent de voter des motions de censure.",
    author: "Rédaction AfriPolitique", date: "31 mai 2026", read: "7 min",
    body: [
      "Le limogeage surprise du vice-président kényan, annoncé en fin de semaine dernière, continue de provoquer des remous au sein de la majorité présidentielle. Plusieurs députés issus de la coalition au pouvoir ont laissé entendre qu'ils pourraient soutenir une motion de censure contre certains membres du gouvernement, dans les prochaines semaines.",
      "Selon plusieurs sources parlementaires, la rupture trouverait son origine dans des désaccords profonds sur la gestion de la dette publique et sur la répartition des postes ministériels entre les différentes composantes de la coalition, des tensions qui couvaient depuis plusieurs mois en coulisses.",
      "Dans un communiqué, la présidence a réaffirmé sa volonté de « maintenir la cohésion gouvernementale » et a appelé les parlementaires frondeurs à « privilégier le dialogue interne plutôt que l'esclandre médiatique ». Un remaniement ministériel partiel est évoqué dans les prochains jours pour apaiser les tensions.",
      "Sur le plan économique, cette instabilité politique intervient à un moment sensible : le pays négocie actuellement un nouveau programme d'appui budgétaire avec le Fonds monétaire international, et les bailleurs surveillent de près la capacité du gouvernement à maintenir un cap cohérent sur les réformes fiscales engagées depuis deux ans.",
      "Les prochains jours seront décisifs : si la fronde venait à se structurer en bloc parlementaire organisé, elle pourrait fragiliser durablement la majorité et ouvrir une période d'incertitude inédite depuis l'investiture du président, il y a un peu plus de trois ans."
    ]
  },

  "nigeria-parlement": {
    cat: "cat-politique", catLabel: "Politique",
    img: "https://images.unsplash.com/photo-1554457606-ed16c39db884?w=1400&q=80&auto=format&fit=crop",
    title: "Nigeria : le Parlement rejette la réforme constitutionnelle sur la décentralisation fiscale",
    excerpt: "Les gouverneurs du delta du Niger dénoncent un \"hold-up institutionnel\" après le vote qui maintient le contrôle fédéral sur les ressources pétrolières.",
    author: "Rédaction AfriPolitique", date: "3 juin 2026", read: "6 min",
    body: [
      "Le projet de réforme constitutionnelle visant à transférer une partie de la gestion des revenus pétroliers aux États producteurs a été rejeté mardi par l'Assemblée nationale nigériane, à l'issue d'un vote serré qui a ravivé les tensions entre Abuja et les régions du delta du Niger.",
      "Porté par une coalition de gouverneurs du Sud, le texte prévoyait une révision de la formule de répartition des recettes pétrolières, actuellement très favorable au pouvoir fédéral. Son rejet est perçu par ses partisans comme une occasion manquée de désamorcer des décennies de frustrations économiques dans les zones d'extraction.",
      "« C'est un hold-up institutionnel », a réagi un porte-parole du Forum des gouverneurs du Sud-Sud, dénonçant un vote « dicté par des intérêts politiques de court terme plutôt que par une vision de justice territoriale ». Plusieurs organisations de la société civile du delta ont annoncé des mobilisations dans les prochains jours.",
      "Du côté du gouvernement fédéral, on assure que la réforme aurait fragilisé l'équilibre budgétaire national et créé un précédent dangereux pour la cohésion de la fédération, dans un pays qui compte déjà plusieurs foyers de tensions communautaires et religieuses.",
      "Cet épisode relance le débat, récurrent au Nigeria, sur le degré de décentralisation que peut absorber la première économie du continent sans remettre en cause son unité — un débat dont l'issue continuera de peser sur le climat des affaires et sur l'attractivité du secteur énergétique nigérian auprès des investisseurs internationaux."
    ]
  },

  "maroc-algerie": {
    cat: "cat-diplo", catLabel: "Diplomatie",
    img: "https://images.unsplash.com/photo-1649299313612-48cc3493f62e?w=1400&q=80&auto=format&fit=crop",
    title: "Maroc–Algérie : reprise discrète des contacts via un canal qatarien",
    excerpt: "Premiers échanges indirects entre Rabat et Alger depuis la rupture des relations en 2021.",
    author: "Rédaction AfriPolitique", date: "2 juin 2026", read: "5 min",
    body: [
      "Selon plusieurs sources diplomatiques concordantes, des échanges indirects auraient eu lieu ces dernières semaines entre représentants marocains et algériens, par l'intermédiaire d'un canal de médiation qatarien. Il s'agirait des premiers contacts documentés entre les deux pays depuis la rupture des relations diplomatiques en 2021.",
      "Ni Rabat ni Alger n'ont confirmé officiellement la tenue de ces échanges, restés extrêmement discrets. Plusieurs diplomates en poste dans la région estiment toutefois qu'ils traduisent une volonté commune, quoique prudente, d'explorer les conditions d'un dégel — sans pour autant annoncer de calendrier de normalisation à court terme.",
      "Les sujets abordés porteraient notamment sur la réouverture des espaces aériens, fermés depuis plusieurs années, ainsi que sur des questions économiques régionales liées aux corridors commerciaux transsahariens, un dossier suivi de près par plusieurs partenaires économiques internationaux.",
      "Pour les chancelleries occidentales, qui appellent depuis longtemps à un apaisement entre les deux puissances du Maghreb, ces signaux — même ténus — sont accueillis comme une évolution positive dans une région où les tensions bilatérales ont longtemps freiné les projets d'intégration régionale, notamment au sein de l'Union du Maghreb arabe.",
      "Les analystes restent toutefois prudents : les contentieux de fond — au premier rang desquels le dossier du Sahara occidental — demeurent entiers, et plusieurs tentatives de rapprochement engagées par le passé n'ont jamais dépassé le stade de l'exploration informelle."
    ]
  },

  "burkina-securite": {
    cat: "cat-securite", catLabel: "Sécurité",
    img: "https://images.unsplash.com/photo-1776013700766-64ed864bf36a?w=1400&q=80&auto=format&fit=crop",
    title: "Burkina Faso : la junte annonce une \"victoire décisive\" contre les groupes armés dans le Nord",
    excerpt: "L'état-major revendique la reprise de trois localités stratégiques, mais des ONG locales font état d'un bilan civil lourd.",
    author: "Rédaction AfriPolitique", date: "1 juin 2026", read: "6 min",
    body: [
      "L'état-major des armées burkinabè a annoncé samedi la reprise de trois localités du Nord du pays, jusqu'ici sous le contrôle de groupes armés non étatiques, au terme d'une offensive militaire d'envergure menée depuis plusieurs semaines dans la région du Sahel burkinabè.",
      "Dans un communiqué lu à la télévision nationale, le porte-parole du gouvernement de transition a salué une « victoire décisive qui marque un tournant dans la reconquête du territoire national », tout en appelant les populations déplacées à préparer leur retour dans les zones sécurisées.",
      "Des organisations humanitaires présentes sur le terrain livrent toutefois un bilan plus nuancé. Plusieurs ONG font état de pertes civiles importantes lors des opérations, ainsi que de mouvements de population supplémentaires vers des centres urbains déjà saturés, notamment Kaya et Ouagadougou.",
      "« Une reconquête militaire ne suffit pas si elle n'est pas immédiatement suivie d'un dispositif de protection des civils et de reconstruction des services de base », souligne une responsable d'une organisation humanitaire régionale, qui appelle à un accès humanitaire élargi dans les zones reprises.",
      "Cette annonce intervient alors que les autorités de transition cherchent à consolider leur légitimité, un an après la dernière prorogation de la période de transition. Plusieurs partenaires régionaux observent avec attention la capacité du pouvoir en place à transformer ces avancées militaires en stabilisation durable du territoire."
    ]
  },

  "zlecaf": {
    cat: "cat-economie", catLabel: "Économie politique",
    img: "https://images.unsplash.com/photo-1600633349333-eebb43d01e23?w=1400&q=80&auto=format&fit=crop",
    title: "ZLECAF : 12 pays toujours hors du dispositif douanier, cinq ans après le lancement",
    excerpt: "Le secrétariat général dresse un bilan en demi-teinte : obstacles réglementaires et volonté politique en berne dans plusieurs capitales.",
    author: "Rédaction AfriPolitique", date: "2 juin 2026", read: "7 min",
    body: [
      "Cinq ans après l'entrée en vigueur effective de la Zone de libre-échange continentale africaine (ZLECAF), le secrétariat général de l'organisation a présenté à Accra un bilan d'étape contrasté : si les échanges intra-africains progressent, douze pays membres n'ont toujours pas mis en œuvre les mécanismes douaniers prévus par l'accord.",
      "Selon le rapport présenté lors de la réunion ministérielle, les principaux freins sont d'ordre réglementaire — harmonisation incomplète des règles d'origine, lenteur de la numérisation des procédures douanières — mais aussi politique, certains gouvernements hésitant à ouvrir certains secteurs jugés stratégiques à la concurrence continentale.",
      "« Nous avons construit l'architecture juridique la plus ambitieuse de l'histoire du commerce africain, mais une architecture ne vaut que si elle est habitée », a résumé un haut responsable du secrétariat, appelant les États retardataires à accélérer leurs réformes internes avant le prochain cycle de révision tarifaire prévu en 2028.",
      "Du côté des opérateurs économiques, l'impatience grandit. Plusieurs fédérations patronales ouest-africaines et est-africaines réclament un mécanisme de sanctions plus contraignant pour les pays qui ne respecteraient pas le calendrier de mise en œuvre, estimant que les retards actuels privent le secteur privé d'un potentiel de croissance considérable.",
      "Les économistes rappellent toutefois que l'intégration commerciale africaine reste un chantier de très long terme : l'Union européenne, souvent citée en référence, a mis plusieurs décennies à harmoniser ses propres dispositifs douaniers et réglementaires avant d'atteindre le niveau d'intégration qu'elle connaît aujourd'hui."
    ]
  },

  "rdc-paix": {
    cat: "cat-securite", catLabel: "Sécurité",
    img: "https://images.unsplash.com/photo-1633116936671-99ba7425e06c?w=1400&q=80&auto=format&fit=crop",
    title: "RDC : l'accord de paix avec le M23 entre en vigueur — premières réactions des parties prenantes",
    excerpt: "La mise en œuvre du cessez-le-feu suscite espoir et méfiance dans l'est du pays, où la population attend un retour à la normalité.",
    author: "Rédaction AfriPolitique", date: "4 juin 2026", read: "8 min",
    body: [
      "L'accord de paix signé le mois dernier entre le gouvernement de la République démocratique du Congo et le mouvement M23 est officiellement entré en vigueur ce mardi, marquant une étape importante — mais encore fragile — dans la résolution d'un conflit qui ravage l'est du pays depuis plus de trois ans.",
      "Sur le terrain, à Goma et dans plusieurs localités du Nord-Kivu, les habitants oscillent entre soulagement prudent et scepticisme. « On a déjà vu des cessez-le-feu signés et rompus en quelques semaines », confie un commerçant de Goma interrogé par notre correspondant, qui dit vouloir « croire à la paix sans s'y précipiter ».",
      "Le dispositif prévoit le retrait progressif des combattants des zones occupées, supervisé par une mission conjointe de l'Union africaine et de la Communauté de développement d'Afrique australe (SADC), ainsi que la mise en place de couloirs humanitaires pour permettre le retour des centaines de milliers de personnes déplacées par les combats.",
      "Les organisations de défense des droits humains appellent toutefois à la prudence et réclament des garanties claires sur la reddition de comptes pour les exactions commises pendant le conflit, un point qui reste l'une des principales pierres d'achoppement des négociations menées ces derniers mois.",
      "Pour les chancelleries occidentales et les organisations régionales, la réussite de cet accord constituerait un signal fort pour l'ensemble de la région des Grands Lacs, où plusieurs autres foyers de tension demeurent actifs. Mais tous les observateurs s'accordent : la phase la plus difficile commence maintenant, celle de la mise en œuvre concrète, jour après jour, sur un terrain où la confiance reste à reconstruire."
    ]
  },

  "ethiopie-amhara": {
    cat: "cat-politique", catLabel: "Politique",
    img: "https://images.unsplash.com/photo-1633116938154-de2b8637ba21?w=1400&q=80&auto=format&fit=crop",
    title: "Éthiopie : le Premier ministre Abiy affronte une nouvelle crise dans la région Amhara",
    excerpt: "Les tensions entre Addis-Abeba et les forces de la région Amhara s'intensifient malgré les pourparlers de paix en cours.",
    author: "Rédaction AfriPolitique", date: "3 juin 2026", read: "6 min",
    body: [
      "Les tensions entre le gouvernement fédéral éthiopien et les forces régionales amhara connaissent une nouvelle escalade, malgré l'ouverture, il y a plusieurs semaines, d'un cycle de pourparlers censé aboutir à un apaisement durable dans cette région du nord du pays.",
      "Selon des sources locales, des accrochages sporadiques ont été signalés dans plusieurs districts, ravivant les craintes d'un embrasement plus large dans une région déjà marquée par des années de violences intercommunautaires et par d'importants déplacements de population.",
      "Le gouvernement fédéral affirme rester « pleinement engagé dans la voie du dialogue » et a dépêché une délégation de médiation conduite par un envoyé spécial du Premier ministre. Les représentants des forces régionales, eux, dénoncent un manque de garanties concrètes sur l'autonomie locale et sur la sécurité des populations civiles.",
      "Cette nouvelle crise intervient à un moment sensible pour Addis-Abeba, engagée par ailleurs dans la reconstruction post-conflit du Tigré et dans des négociations économiques régionales d'importance, notamment autour du Grand barrage de la Renaissance sur le Nil Bleu.",
      "Les diplomates en poste dans la capitale éthiopienne estiment que la capacité du gouvernement fédéral à éviter une nouvelle confrontation ouverte dans le Nord du pays sera déterminante pour la stabilité de l'ensemble de la Corne de l'Afrique dans les mois à venir."
    ]
  },

  "onu-reforme": {
    cat: "cat-monde", catLabel: "International",
    img: "https://images.unsplash.com/photo-1633116937591-f312921e99b9?w=1400&q=80&auto=format&fit=crop",
    title: "Réforme du Conseil de sécurité de l'ONU : l'Afrique réclame deux sièges permanents avec droit de veto",
    excerpt: "Le groupe africain intensifie sa campagne pour une représentation permanente, soutenu par 35 États membres lors du vote consultatif de mai.",
    author: "Rédaction AfriPolitique", date: "4 juin 2026", read: "6 min",
    body: [
      "Le groupe africain aux Nations unies a relancé, lors d'une session spéciale à New York, sa campagne en faveur d'une réforme structurelle du Conseil de sécurité, réclamant l'attribution d'au moins deux sièges permanents au continent, assortis du droit de veto au même titre que les membres actuels.",
      "Cette revendication, connue sous le nom de « Consensus d'Ezulwini », n'est pas nouvelle, mais elle a recueilli un soutien renouvelé : 35 États membres ont voté en faveur d'une résolution consultative appelant à l'ouverture de négociations formelles sur la composition du Conseil, un score jugé encourageant par les diplomates africains.",
      "« Il est anormal qu'un continent de 1,4 milliard d'habitants, qui représente plus du quart des résolutions examinées par le Conseil, n'y dispose toujours d'aucun siège permanent », a déclaré un représentant du groupe africain, rappelant que cette absence nourrit un sentiment de marginalisation persistant dans les enceintes multilatérales.",
      "Les puissances occidentales se montrent partagées : certaines évoquent une réforme « en principe souhaitable », tout en restant prudentes sur le calendrier et sur le mécanisme d'attribution du droit de veto, qui resterait l'un des points les plus sensibles de toute négociation sur l'architecture du Conseil.",
      "Les capitales africaines, elles, espèrent profiter du momentum actuel — marqué par une recomposition plus large des équilibres géopolitiques mondiaux — pour transformer une revendication de principe, défendue depuis plus de vingt ans, en un processus de négociation concret au sein de l'Assemblée générale."
    ]
  },

  "russie-afrique": {
    cat: "cat-diplo", catLabel: "Diplomatie",
    img: "https://images.unsplash.com/photo-1625646782619-eccd5102cefd?w=1400&q=80&auto=format&fit=crop",
    title: "Russie–Afrique : Moscou propose un nouveau forum économique après la désaffection de plusieurs partenaires",
    excerpt: "Après le retrait de six pays africains des accords de coopération militaire en 2025, la Russie tente de relancer son influence via des investissements agricoles.",
    author: "Rédaction AfriPolitique", date: "3 juin 2026", read: "5 min",
    body: [
      "Confrontée au retrait, l'an dernier, de six pays africains de ses accords de coopération militaire, la diplomatie russe change de braquet : elle annonce la création d'un nouveau forum économique consacré aux investissements agricoles et énergétiques sur le continent, dont la première édition est attendue à l'automne.",
      "Selon des responsables du ministère russe des Affaires étrangères, l'initiative vise à « rééquilibrer » une relation jugée trop centrée sur les questions sécuritaires, en mettant l'accent sur des secteurs porteurs pour les économies africaines : agro-industrie, engrais, infrastructures énergétiques et formation technique.",
      "Plusieurs gouvernements africains, notamment en Afrique de l'Ouest et en Afrique centrale, se disent intéressés par la proposition, tout en rappelant qu'ils entendent diversifier leurs partenariats plutôt que de privilégier un acteur extérieur en particulier — une posture de plus en plus revendiquée par les chancelleries du continent.",
      "Les analystes spécialisés dans les relations internationales notent que ce repositionnement russe intervient dans un contexte de concurrence accrue entre puissances extérieures pour l'accès aux ressources stratégiques africaines, des terres rares aux denrées agricoles, alors que plusieurs pays occidentaux et asiatiques multiplient eux aussi les annonces d'investissement.",
      "Reste à savoir si cette nouvelle approche, plus économique que militaire, parviendra à convaincre des opinions publiques africaines de plus en plus attentives aux retombées concrètes — emplois, transferts de compétences, infrastructures — de ce type de partenariats internationaux."
    ]
  },

  "chine-afrique": {
    cat: "cat-monde", catLabel: "International",
    img: "https://images.unsplash.com/photo-1504975692386-cfacf81e1022?w=1400&q=80&auto=format&fit=crop",
    title: "Chine : l'initiative \"Route de la soie\" africaine entre dans sa phase de renégociation — la dette en question",
    excerpt: "Pékin accepte de rééchelonner la dette de huit pays africains, tout en préservant ses droits d'exploitation minière sur les ressources stratégiques.",
    author: "Rédaction AfriPolitique", date: "2 juin 2026", read: "7 min",
    body: [
      "Pékin a annoncé son accord pour rééchelonner la dette de huit pays africains contractée dans le cadre de projets d'infrastructures liés à l'initiative « Nouvelles routes de la soie », ouvrant une nouvelle phase de négociations financières entre la Chine et plusieurs gouvernements du continent.",
      "Selon des documents consultés par notre rédaction, les nouveaux accords prévoient un allongement des échéances de remboursement et, dans certains cas, une réduction temporaire des taux d'intérêt — mais maintiennent, voire renforcent, les droits d'exploitation accordés aux entreprises chinoises sur certains gisements miniers stratégiques, notamment de cobalt et de lithium.",
      "Cette approche suscite des réactions contrastées. Certains gouvernements y voient un geste de bonne volonté bienvenu dans un contexte de tensions budgétaires généralisées ; des organisations de la société civile, elles, dénoncent un mécanisme qui « échange un allègement de court terme contre une dépendance de long terme » sur des ressources jugées vitales pour l'avenir industriel du continent.",
      "Les économistes rappellent que la dette africaine envers la Chine représente aujourd'hui une part significative de l'endettement extérieur de plusieurs pays, et que la manière dont ces renégociations seront conduites pourrait servir de modèle — ou de repoussoir — pour les discussions à venir avec d'autres créanciers internationaux.",
      "Pour de nombreux observateurs, cet épisode illustre une tendance de fond : la capacité des pays africains à transformer leur poids démographique et leurs ressources naturelles en véritable levier de négociation face aux grandes puissances créancières, plutôt qu'à subir des conditions dictées de l'extérieur."
    ]
  },

  "usa-afrique": {
    cat: "cat-monde", catLabel: "International",
    img: "https://images.unsplash.com/photo-1647558165776-8b4ab9ac8c6f?w=1400&q=80&auto=format&fit=crop",
    title: "États-Unis : la nouvelle stratégie africaine de Washington cible la coopération climatique et les terres rares",
    excerpt: "L'administration américaine annonce un plan de 8 milliards de dollars pour contrer l'influence chinoise sur les ressources stratégiques du continent.",
    author: "Rédaction AfriPolitique", date: "1 juin 2026", read: "5 min",
    body: [
      "L'administration américaine a dévoilé un plan d'investissement de 8 milliards de dollars destiné à renforcer sa coopération avec les pays africains dans deux domaines jugés prioritaires : la transition climatique et l'accès aux minerais stratégiques, dont les terres rares indispensables aux technologies vertes et numériques.",
      "Présenté comme un « partenariat de nouvelle génération », le plan prévoit le financement de projets d'énergies renouvelables, la formation de techniciens spécialisés dans l'exploitation minière responsable, ainsi que des garanties d'investissement destinées à encourager les entreprises américaines à s'implanter durablement sur le continent.",
      "Plusieurs responsables africains saluent une initiative bienvenue, tout en appelant Washington à se montrer plus attentif aux retombées locales qu'aux seuls intérêts géostratégiques. « Nous voulons des partenariats qui transforment nos économies, pas seulement des accords qui sécurisent l'approvisionnement d'autres pays », résume un haut fonctionnaire ouest-africain.",
      "Cette annonce s'inscrit dans un contexte de compétition de plus en plus ouverte entre grandes puissances pour l'accès aux ressources critiques du continent, la Chine et la Russie ayant elles aussi multiplié, ces derniers mois, les initiatives similaires en direction des gouvernements africains.",
      "Les analystes estiment que cette concurrence accrue, si elle est bien négociée par les capitales africaines, pourrait constituer une opportunité historique pour obtenir de meilleures conditions économiques et un transfert de compétences plus substantiel — à condition que les pays du continent parviennent à coordonner davantage leurs positions de négociation."
    ]
  },

  "g7-dette-covid": {
    cat: "cat-monde", catLabel: "International",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80&auto=format&fit=crop",
    title: "G7 : l'Afrique demande l'annulation de sa dette post-COVID",
    excerpt: "Une coalition de pays africains porte, lors du sommet du G7, une demande commune d'annulation des dettes contractées pendant la pandémie.",
    author: "Rédaction AfriPolitique", date: "3 juin 2026", read: "5 min",
    body: [
      "À l'occasion du sommet du G7, une coalition de pays africains a porté une demande commune d'annulation pure et simple des dettes contractées pendant la pandémie de COVID-19, estimant que ce fardeau financier continue de peser lourdement sur leurs capacités d'investissement dans la santé, l'éducation et les infrastructures.",
      "Selon les chiffres présentés par les délégations africaines, le service de la dette absorbe aujourd'hui, dans plusieurs pays du continent, une part plus importante des budgets nationaux que les dépenses de santé publique réunies — une situation jugée « intenable » par les ministres des Finances présents au sommet.",
      "« On ne peut pas demander aux pays africains de financer leur avenir tout en remboursant les conséquences d'une crise sanitaire mondiale dont ils ne sont pas responsables », a plaidé un ministre des Finances ouest-africain devant ses homologues du G7, suscitant des réactions globalement compréhensives mais prudentes.",
      "Les pays du G7 se sont engagés à « étudier sérieusement » la proposition et à explorer des mécanismes d'allègement ciblés, sans toutefois s'engager sur une annulation générale, redoutant un précédent qui pourrait fragiliser les équilibres du système financier international.",
      "Pour les organisations de la société civile spécialisées dans les questions de dette, ce sommet marque néanmoins une étape : la question de la dette africaine post-pandémie s'impose désormais durablement à l'agenda des grandes puissances, et ne pourra plus être traitée comme un sujet secondaire dans les prochaines négociations multilatérales."
    ]
  },

  "tunisie-judiciaire": {
    cat: "cat-politique", catLabel: "Afrique du Nord",
    img: "https://images.unsplash.com/photo-1591767632343-4f04a82a99dd?w=1400&q=80&auto=format&fit=crop",
    title: "Tunisie : Saïed renforce son emprise sur le judiciaire",
    excerpt: "Une série de nominations et de réformes consolide le contrôle de l'exécutif sur l'appareil judiciaire, suscitant l'inquiétude des organisations de défense des droits.",
    author: "Rédaction AfriPolitique", date: "2 juin 2026", read: "6 min",
    body: [
      "Une série de nominations à la tête de plusieurs juridictions tunisiennes a ravivé les inquiétudes sur l'indépendance de la justice dans le pays, plusieurs organisations de défense des droits humains dénonçant un mouvement de fond visant à renforcer le contrôle de l'exécutif sur l'appareil judiciaire.",
      "Les nouvelles nominations, validées par décret présidentiel, concernent notamment des postes clés au sein des juridictions chargées des affaires économiques et des dossiers liés à la liberté d'expression — deux domaines particulièrement scrutés depuis les réformes constitutionnelles engagées ces dernières années.",
      "Le gouvernement justifie ces décisions par la nécessité de « moderniser » et de « rationaliser » le fonctionnement de la justice, affirmant qu'elles s'inscrivent dans la continuité d'un processus de réforme institutionnelle entamé depuis plusieurs années et soumis, selon lui, aux mécanismes de contrôle prévus par la Constitution.",
      "Plusieurs organisations internationales de défense des droits humains et des associations locales de magistrats expriment toutefois leur inquiétude, estimant que ces évolutions fragilisent un peu plus la séparation des pouvoirs et compliquent le travail des avocats et journalistes engagés sur des dossiers sensibles.",
      "Cette situation est suivie de près par les partenaires économiques et institutionnels de la Tunisie, dans un contexte où plusieurs négociations financières internationales restent suspendues à l'évolution du climat politique et institutionnel du pays."
    ]
  },

  "angola-corruption": {
    cat: "cat-securite", catLabel: "Justice",
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1400&q=80&auto=format&fit=crop",
    title: "Angola : scandale de corruption — procès en cours",
    excerpt: "Un vaste procès pour corruption et détournement de fonds publics dans le secteur pétrolier s'ouvre à Luanda, impliquant plusieurs anciens responsables.",
    author: "Rédaction AfriPolitique", date: "1 juin 2026", read: "6 min",
    body: [
      "Le procès de plusieurs anciens hauts responsables du secteur pétrolier angolais s'est ouvert cette semaine à Luanda, dans ce qui est présenté comme l'un des dossiers de corruption les plus importants jugés dans le pays depuis une décennie. Les prévenus sont accusés de détournement de fonds publics et d'enrichissement illicite portant sur plusieurs centaines de millions de dollars.",
      "L'enquête, menée par le Parquet général sur plus de deux ans, met en cause un système présumé de surfacturation de contrats publics liés à l'exploitation et au transport des hydrocarbures, ainsi que des transferts financiers vers des sociétés écrans basées à l'étranger.",
      "« Ce procès est un test pour la crédibilité de nos institutions judiciaires », a déclaré un responsable du ministère public, soulignant que l'affaire est suivie de près par les partenaires internationaux de l'Angola, notamment dans le cadre de programmes de coopération en matière de transparence financière.",
      "Les avocats de la défense contestent fermement les accusations, dénonçant un dossier à connotation politique et annonçant qu'ils apporteront, au fil des audiences, des éléments de nature à « rétablir la vérité » sur le rôle exact de leurs clients dans la gestion des contrats incriminés.",
      "Pour les organisations de la société civile angolaise, ce procès représente une occasion importante de mesurer la capacité du pays à s'attaquer concrètement à la corruption dans un secteur pétrolier qui reste, plus de vingt ans après la fin de la guerre civile, le principal moteur — et l'un des principaux points de fragilité — de l'économie nationale."
    ]
  }

};

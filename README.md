# Thiop    

Bienvenue dans l'application cliente de gestion de commandes de restaurants. Cette dernière a été développée avec ionic. Elle comporte actuellement les fonctionnalités suivantes:    
* Gestion des restaurants (ajout, modification et suppression)
* Gestion des plats (ajout, modification et suppression)
* Gestion du menu
* Affichage sur une carte Google Maps des restaurants et de votre position géographique.

Mais avant de goûter à cela. Nous allons d'abord configurer notre serveur backend. Alors nous allons d'abord aller consulter le repository https://github.com/MT98/thiopstrapi. 

Aprés avoir réussi l'intégration du serveur backend. Nous pouvons maintenant commencer à intégrer notre application cliente.

### 1. Téléchargement et décompression    
Téléchargez le repository courant dans votre local. Puis décompressez-le.    

### 2. Intégration
Placez-vous dans le repertoire racine du dossier décompressé. Puis exécutez la **commande suivante afin d'installer les dépendances** du projet. 
```npm install```    
    
### 3. Scénario de Test
Lancer le serveur ionic avec la commande suivante:    
```ionic serve```    
    
Votre navigateur devrait s'ouvrir sinon aller à l'adresse http://localhost:8100/tabs/restaurant.    
 
###### a. Ajout des restaurants    
Cliquez sur l'**icone "restos"** en bas. Puis appuyez sur le bouton circulaire "+" **en bas à droite** pour **ajouter un restaurant**. 
**Les fixtures** ou données de test suivantes peuvent être utilisées pour ajouter rapidement des restaurants.    

Nom  |  Latitude  |  Longitude
---  |  -------   |  ---------
KFC | 14.68708 | -17.469281
Tacos de Lyon By Cesar Dakar | 14.692871 | -17.474256
Yogurtlandia | 14.688398 | -17.471799
Best Food | 14.730904 | -17.493542
Evalito | 14.727815 | -17.486641
Le poulailler | 14.731975 | -17.483004
Boulangerie Patisserie Chez Adja | 14.725189 | -17.494473    
    
    
Résultat:    
![ajout d'un resto](https://drive.google.com/uc?id=1vMVRxsgZblhJCm-gFmt0Wj8KsPIskqzU)   ![liste des restos](https://drive.google.com/uc?id=1fsppPIGKFEpduQeFcxZMxlMMAmfPGDro)    
    
###### b. Voir carte GoogleMaps
![aperçu de la carte](https://drive.google.com/uc?id=1zALzHuGZviFg9gwa7LC00nhSZThLQ6Ff)    
    
###### c. Ajout de plats
Maintenant nous allons pouvoir commencer à ajouter les succulents plats que nous ferons déguster à nos clients.    
Et pour chacun, on indiquera le restaurant fournisseur.    
**Les données suivantes** peuvent être utilisées pour les renseigner rapidement:    
    
Nom  |  Prix  |  Description
---- | ------ | ------------
Domoda  |  500  |  L'un des plats préférés des femmes sénégalaises.
Maffé  |  600  |  Plat d'origine bambara composé de riz blanc et d'une sauce au kandia.
Soupou kandia  |  700  |  Riz blanc à la sauce kandia.
Thiébou dienou diagua  |  700  |  Du thiébou diene de base avec de la sauce et des boulettes de poissons.
Thiébou diene  |  600  |  Plat préféré des sénégalais.
Maxalou saloum  |  750  |  Riz d'origine du bassin arachidier.    
    
Résultat:    
![ajout d'un plat](https://drive.google.com/uc?id=1SNZ38E45JYXy6-oIpHgq1OzMmP1cCV_G)   ![liste des plats](https://drive.google.com/uc?id=1WPVF5V_FT5nTQ_RZq8qIkkWA28z6mVL-)    


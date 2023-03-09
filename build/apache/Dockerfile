# Utiliser une image officielle d'Apache comme base
FROM httpd:latest

# Copier le fichier de configuration personnalisé dans le conteneur
#COPY my-website.conf /usr/local/apache2/conf/httpd.conf

# Copier les fichiers HTML dans le répertoire de document root d'Apache
COPY ../../website /usr/local/apache2/htdocs/

# Exposer le port 80 pour qu'Apache soit accessible depuis l'extérieur
EXPOSE 80

COMPOSER INSTALL :

	$ composer install


VHOST : 

	$ sudo nano /etc/apache2/sites-available/kilix-v2.loc.com



        <VirtualHost *:80>
                ServerAdmin webmaster@localhost
                ServerName kilix-v2.loc.com
                ServerAlias www.kilix-v2.loc.com

                DocumentRoot /var/www/kilix-v2/web
                <Directory /var/www/kilix-v2/web>
                        Options Indexes FollowSymLinks MultiViews
                        AllowOverride All
                        Order allow,deny
                        allow from all
                </Directory>

                ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/

                ErrorLog ${APACHE_LOG_DIR}/error.log

                # Possible values include: debug, info, notice, warn, error, crit,
                # alert, emerg.
                LogLevel warn

                CustomLog ${APACHE_LOG_DIR}/access.log combined
        </VirtualHost>

___

	$ sudo a2ensite kilix-v2.loc.com
	$ sudo service apache2 reload



Host à rajouter (Windows ou Mac) :

        127.0.0.1       kilix-v2.loc.comi

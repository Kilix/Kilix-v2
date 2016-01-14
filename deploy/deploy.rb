set :application, 'kilix-v2'

set :scm, :git
set :repo_url, "git@gitlab.kilix.net:kilix/#{fetch(:application)}.git"

set :deploy_to, "/var/www/#{fetch(:application)}"
set :keep_releases, 10

set :log_level, :info
set :format, :pretty
set :pty, true

set :linked_dirs, %w{vendor}

# Dirs that need to be writable by the HTTP Server (i.e. cache, log dirs)
# set :file_permissions_paths,         [fetch(:log_path), fetch(:cache_path)]

# user to add with setfacl
# set :file_permissions_users, ["www-data"]

# Name used by the Web Server (i.e. www-data for Apache)
# set :webserver_user,        "www-data"

# Method used to set permissions (:chmod, :acl, or :chown)
# set :permission_method,     "acl"

# Execute set permissions
# set :use_set_permissions,   true

# Default composer flags
#set :composer_install_flags, '--no-dev --no-interaction --quiet --optimize-autoloader'
set :composer_install_flags, '--no-dev --no-interaction --optimize-autoloader'
SSHKit.config.command_map[:composer] = "php #{shared_path.join("composer.phar")}"

# version file output format and file extension
set :gitinfos_format, "json"

# relative path to version file from release_path and without file extension
set :gitinfos_file, "app/config/version"

namespace :deploy do

  # desc 'Overwrite deploy:restart (useless)'
  # task :restart do
  #   on roles(:app) do
  #   end
  # end
  #
  # after :finishing, 'composer:install', 'deploy:cleanup'

  after :starting, 'composer:install_executable'
end

set :application, 'kilix-v2'

set :scm, :git
set :repo_url, "git@gitlab.kilix.net:kilix/#{fetch(:application)}.git"

set :deploy_to, "/var/www/#{fetch(:application)}"
set :keep_releases, 10

set :log_level, :info
set :format, :pretty
set :pty, true

set :linked_dirs, %w{vendor}

namespace :deploy do

  desc 'Overwrite deploy:restart (useless)'
  task :restart do
    on roles(:app) do
    end
  end

  after :finishing, 'composer:install', 'deploy:cleanup'
end

namespace :composer do

  desc 'Composer install vendors'
  task :install do
    on roles(:app) do
      within release_path do
        info execute(:composer, '-n', 'install')
      end
    end
  end

  desc 'Composer update vendors'
  task :update do
    on roles(:app) do
      within release_path do
        info execute(:composer, '-n', 'update')
      end
    end
  end

end


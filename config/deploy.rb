set :application, 'kilix-v2'

set :scm, :git
set :repo_url, "git@gitlab.kilix.net:kilix/#{fetch(:application)}.git"

set :deploy_to, "/var/www/#{fetch(:application)}"
set :keep_releases, 10

set :log_level, :info
set :format, :pretty
set :pty, true

namespace :deploy do

  desc 'Overwrite deploy:restart (useless)'
  task :restart do
    on roles(:app) do
    end
  end

  after :finishing, 'deploy:cleanup'
end


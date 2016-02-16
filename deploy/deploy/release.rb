require 'net/ssh/proxy/command'

set :stage, :release

set :deploy_to, "/home/deploy/www/kilix-v2"

role :app, %w{deploy@10.240.0.3}

SSHKit.config.command_map[:composer] = "php #{shared_path.join("composer.phar")}"

set :ssh_options, proxy: Net::SSH::Proxy::Command.new('ssh deploy@bastion1-sites.kilix.net -W %h:%p')

set :branch, ENV['REVISION'] || `git branch -r | grep -oE release/+[0-9].?+[0-9] | tr -d "\n"`

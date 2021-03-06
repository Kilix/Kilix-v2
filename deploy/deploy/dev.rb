require 'net/ssh/proxy/command'

set :stage, :dev

role :app, %w{deploy@dev.kilix-v2.kilix.net}

SSHKit.config.command_map[:composer] = "php #{shared_path.join("composer.phar")}"

set :ssh_options, proxy: Net::SSH::Proxy::Command.new('ssh deploy@dev.bastion.kilix.net -W %h:%p')

set :branch, ENV['REVISION'] || 'develop'

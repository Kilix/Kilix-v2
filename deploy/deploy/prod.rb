require 'net/ssh/proxy/command'

set :stage, :pro

role :app, %w{deploy@kilix.net}

SSHKit.config.command_map[:composer] = "php #{shared_path.join("composer.phar")}"

# set :ssh_options, proxy: Net::SSH::Proxy::Command.new('ssh deploy@reverse.prod.kilix.net -W %h:%p')

set :branch, ENV['REVISION'] || 'master'

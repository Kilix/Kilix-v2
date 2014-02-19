require 'net/ssh/proxy/command'

set :stage, :pro

role :app, %w{deploy@kilix-v2.kilix.net}

set :ssh_options, proxy: Net::SSH::Proxy::Command.new('ssh deploy@reverse.prod.kilix.net -W %h:%p')

set :branch, ENV['REVISION'] || 'master'

set :stage, :pro

role :app, %w{deploy@kilix-v2.kilix.net}

set :branch, ENV['REVISION'] || 'master'


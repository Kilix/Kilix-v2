set :stage, :dev

role :app, %w{deploy@dev.kilix-v2.kilix.net}

set :branch, ENV['REVISION'] || 'develop'

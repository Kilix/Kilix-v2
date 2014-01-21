set :stage, :release

role :app, %w{deploy@release.kilix-v2.kilix.net}

set :branch, ENV['REVISION'] || `git branch -r | grep -oE release/+[0-9].?+[0-9] | tr -d "\n"`

# change default capistrano config path
set :deploy_config_path, 'deploy/deploy.rb'
set :stage_config_path, 'deploy/deploy'

# Load DSL and Setup Up Stages
require 'capistrano/setup'

# Includes default deployment tasks
require 'capistrano/deploy'

require 'capistrano/composer'
require 'capistrano/file-permissions'
# require 'capistrano/npm'
require 'capistrano/gitinfos'

# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.
Dir.glob('lib/capistrano/tasks/*.cap').each { |r| import r }

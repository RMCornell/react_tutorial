class Skill < ActiveRecord::Base
  enum level: [:crap, :mildcrap, :highlevelcrap]
end

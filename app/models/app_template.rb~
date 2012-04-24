class AppTemplate < ActiveRecord::Base
  attr_accessible :builder, :uuid
  before_validation proc { |t| t.uuid = SecureRandom.uuid }
  validates :uuid, :builder, presence: true
end

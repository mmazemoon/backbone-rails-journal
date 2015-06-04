class Post < ActiveRecord::Base
  validates :body, :title, presense: true

end

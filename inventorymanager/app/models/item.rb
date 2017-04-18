class Item < ApplicationRecord
    
    mount_uploaders :images, ImageUploader
    serialize :images, JSON
    
    enum quality: ["New", "Like New", "Very Good", "Acceptable", "Poor"]
    enum category: ["Furniture", "Electronics", "Appliances", "Clothes", "Other"]
    
    validates :name, presence: true
    validates :description, presence: true
    validates :location, presence: true
    validates :price, presence: true
    validates :images, presence: true
end

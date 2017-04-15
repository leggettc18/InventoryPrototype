class Item < ApplicationRecord
    
    mount_uploaders :images, ImageUploader
    serialize :images, JSON
    
    enum quality: ["New", "Like New", "Very Good", "Acceptable", "Poor"]
    enum category: ["Furniture", "Electronics", "Appliances", "Clothes", "Other"]
end

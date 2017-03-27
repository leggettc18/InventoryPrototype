class Item < ApplicationRecord
    enum quality: ["New", "Like New", "Very Good", "Acceptable", "Poor"]
    enum category: ["Furniture", "Electronics", "Appliances", "Clothes", "Other"]
end

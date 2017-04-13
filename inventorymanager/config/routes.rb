Rails.application.routes.draw do
  root 'default#index'
  
  get 'default/index'

  get 'default/about'

  resources :items
  devise_for :employees
  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

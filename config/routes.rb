Rails.application.routes.draw do
  resources :tweets
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  devise_for :users
  root 'home#index'
end

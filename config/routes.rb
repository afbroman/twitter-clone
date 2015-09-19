Rails.application.routes.draw do
  resources :followers do |r|
    collection do
      get 'random'
    end
  end
  resources :tweets
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  devise_for :users
  root 'home#index'
end

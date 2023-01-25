Rails.application.routes.draw do
  
  resources :collections, only: [:index, :show, :create]
  
  
  
  resources :decks, only: [:index, :show, :create, :update]
  
  
  
  resources :cards, only: [:index, :create]
  
  
  
  resources :users, only: [:index, :create, :show, :update]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
 
  # Custome Route
  post "/login", to:"sessions#create"

  get "/userInSession", to:"sessions#get_logged_in_user"
  
  delete "/logout", to:"sessions#destroy"
  
  get    "/users/:id", to:"sessions#get_logged_in_user" 
  
  delete '/logout/:id', to: 'sessions#logout'
  
  get "/cookie-click", to: "sessions#click"

end

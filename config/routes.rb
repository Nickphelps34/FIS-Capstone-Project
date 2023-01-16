Rails.application.routes.draw do
  resources :collections
  resources :decks
  resources :cards
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  # Custome Route
  post "/login", to: "sessions#create"
  delete '/sessions', to: "sessions#destroy"
  get    "/users/:id", to:"sessions#get_logged_in_user" 
  delete '/logout/:id', to: 'sessions#logout'
  
  get "/cookie-click", to: "sessions#click"

end

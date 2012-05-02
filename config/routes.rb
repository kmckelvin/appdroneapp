Appdroneapp::Application.routes.draw do
  #root to: 'app_template#about'
  root to: redirect('/new')
  get :new, to: 'ember#new'
  post :build, to: 'app_template#build'
  get '/:uuid(.:format)', to: 'app_template#show', as: :app_template
end

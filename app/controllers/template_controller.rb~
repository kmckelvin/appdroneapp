class AppTemplateController < ApplicationController
  def build
    t = AppDrone::Template.new
    drones = params[:drones].symbolize_keys
    drones.each do |index,drone|
      # classify the string drone name
      drone_klass = drone[:name].to_sym.to_app_drone_class

      # make sure there is a symbolized hash of params available
      drone_params = drone[:params] || {}
      drone_params = drone_params.symbolize_keys

      # convert 'true' and 'false' param values to their boolean counterparts
      drone_params.each { |key,value|
        drone_params[key] = (value == 'true') if %w{true false}.include?(value)
      }
   
      t.add drone_klass, drone_params
    end

    builder = t.render_with_wrapper

    @app_template = AppTemplate.create({ builder: builder })
    redirect_to app_template_path(uuid: @app_template.uuid)
  end

  def new
  end

  def show
    @app_template = AppTemplate.find_by_uuid(params[:uuid])
    render text: @app_template.builder and return if params[:format] == 'rb'
  end
end

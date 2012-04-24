class CreateAppTemplates < ActiveRecord::Migration
  def change
    create_table :app_templates do |t|
      t.string :uuid
      t.text :builder

      t.timestamps
    end
  end
end

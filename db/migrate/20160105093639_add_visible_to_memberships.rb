class AddVisibleToMemberships < ActiveRecord::Migration[5.0]
  def change
    add_column :memberships, :visible, :boolean
  end
end

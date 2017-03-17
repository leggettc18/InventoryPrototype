class AddUsernameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column(:admins, :username, :string)
    add_column(:employees, :username, :string)
  end
end

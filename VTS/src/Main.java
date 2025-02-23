import java.sql.*;

public class Main {
    public static void main(String[] args) {

        Connection connect = null;
        Statement st = null;
        String url = "jdbc:postgresql://localhost/dvdrental?user=postgres&password=postgres";
        String sql = "SELECT * FROM actor";
        try {
            connect = DriverManager.getConnection(url);
            st = connect.createStatement();
            ResultSet data = st.executeQuery(sql); // actordeki veriler Resultset icersine aktarıldı.

            String insertSql = "INSERT INTO actor(actor_id,first_name,last_name,last_update) VALUES (201, 'Fırat', 'A.',0 )"; // değer eklemek için kullanılır.
            String prSql = "INSERT INTO actor(actor_id,first_name,last_name,last_update) VALUES (?,?,?,?)";//kullanıcıdan veri eklemek ıcın kullanılır

            PreparedStatement prSt = connect.prepareStatement(prSql);
            prSt.setInt(1,202);
            prSt.setString(2,"Atakan");
            prSt.setString(3,"Haho");
            prSt.close();


            while(data.next()) {
                System.out.println("ID: " + data.getInt("actor_id"));
                System.out.println("First Name: " + data.getString("first_name"));
                System.out.println("Last Name: " + data.getString("last_name"));
                System.out.println("^^^^^^^^^^^^^^^^^^^^^^");
            }
        }catch(SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
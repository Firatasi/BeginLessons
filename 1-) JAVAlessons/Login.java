import java.util.Scanner ; 

public class Login {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		String k_adi,parola ;
		System.out.print("Kullanıcı adını giriniz : ");
		k_adi = scan.nextLine();
		System.out.print("parola giriniz : ");
		parola = scan.nextLine();
		
		if (k_adi.equals("java") && parola.equals("123") ) {
			System.out.println("Başarılı bir şekilde giriş yaptınız ! ");
		}else {
			System.out.println("Kullanıcı adınız veya parolanız hatalı ! ");
		}
		 
	}

}

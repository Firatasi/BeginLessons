import java.util.Scanner;

public class SwitchCase {

	public static void main(String[] args) {
 
		Scanner scan = new Scanner(System.in);
		System.out.println("Sayı Giriniz : ");
		int sayi = scan.nextInt();
		switch(sayi) {
		case 1:
			System.out.println("Sayi 1'e eşittir");
			break;//koşul doğruysa diğerlerini yazmaz durdurur
		case 2:
			System.out.println("Sayi 2'ye eşittir");
			break;
		case 3:
			System.out.println("Sayi 3'e eşittir");
		break;
		default:
			System.out.println("Geçersiz sayı");
		}
		
	}

}

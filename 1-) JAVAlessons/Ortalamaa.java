import java.util.Scanner;

public class Ortalamaa {

	public static void main(String[] args) {

			int[] notlar = new int [7];
			double sonuc =0;
			int toplam = 0;
			
			Scanner scan = new Scanner(System.in);
			System.out.println("Hoşgeldiniz ! Lütfen notlarınızı giriniz : ");
			
			System.out.print("Edebiyat : ");
			notlar[0] = scan.nextInt();
			
			System.out.print("Matematik 1 :" );
			notlar[1] = scan.nextInt();
			
			System.out.print("Mat 2 : ");
			notlar[2] = scan.nextInt();
			
			System.out.print("Geometri : ");
			notlar[3] = scan.nextInt();
			
			System.out.print("Fizik : ");
			notlar[4] = scan.nextInt();
			
			System.out.print("Kimya : ");
			notlar[5] = scan.nextInt();
			
			System.out.print("Biyoloji : ");
			notlar[6] = scan.nextInt();
			
			for(int not :notlar ) {
				
				toplam += not;
			}
			System.out.println("Ortalamanız : " + (toplam/notlar.length) );
			
	}

}

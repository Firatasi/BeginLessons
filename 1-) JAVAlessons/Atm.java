import java.util.Scanner;

public class Atm {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int bakiye = 1000,input,miktar;
		System.out.println("FıratBank'a Hoşgeldiniz.");
		System.out.println("Güncel Bakiyeniz: " + bakiye + "TL");
		
		while(bakiye>0) {
			System.out.println();
			System.out.println("1-) Para Yatır");
			System.out.println("2-) Para Çek");
			System.out.println("3-) Bakiye Sorgula");
			System.out.println("4-) Çıkış Yap");
			System.out.print("Yapmak İstediğiniz İşlemi Seçiniz: ");
			
			input = scan.nextInt();
			
			if(input == 1) {
				System.out.print("Yatırmak İstediğiniz Miktar: ");
				miktar = scan.nextInt();
				bakiye += miktar ;
			}else if(input == 2) {
				System.out.print("Çekmek İstediğiniz Miktar: ");
				miktar = scan.nextInt();
			if(miktar > bakiye) {
				System.out.println("Bakiye Yetersiz! ");
			}else {
				bakiye -= miktar ;}
			}else if(input == 3) {
				System.out.print("Bakiyeniz: " + bakiye);
			}else if(input == 4) {
				System.out.println("Çıkış Yapılıyor! ");
				break;
			}else {
				System.out.println("Geçersiz İşlem! ");
			
			}
		}
		
		
		System.out.println("İyi Günler.");
		}
	}




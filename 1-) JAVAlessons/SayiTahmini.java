import java.util.Scanner;
import java.util.Random;
public class SayiTahmini {

	public static void main(String[] args) {
		
		int tahmin,can = 5;
		Random rand = new Random();
		
		Scanner scan = new Scanner(System.in);
		int sayi = rand.nextInt(100);   //0 ile 100 arasında rastgele bir sayı verir
		
		
		boolean oyunDrumu = false;
		System.out.println(sayi);
		
		System.out.println("0 ile 99 arasında bir sayı tutunuz.");
		
		while(can > 0) {
			System.out.print("Tahmininiz : ");
			
			tahmin = scan.nextInt();
			 if(tahmin < 0 || tahmin > 99) {
				 System.out.println("Lütfen belirtilen aralıkta sayı giriniz!");
				 continue;
				 
			 }
		if(tahmin == sayi) {
			 oyunDrumu = true;
			 break;
			
			}else {
				System.out.println("Tekrar deneyiniz! kalan can ->" + --can);
				
			}
		}
		if(oyunDrumu) {
			System.out.print("Doğru!");
			
		}else {
			System.out.print("Oyun bitti!");
		}
		
			
		
			}

}

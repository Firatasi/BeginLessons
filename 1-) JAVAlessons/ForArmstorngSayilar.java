
public class ForArmstorngSayilar {

	public static void main(String[] args) {

		//153=(1*1*1) + (5*5*5) + (3*3*3)
		//371=(3*3*3) + (7*7*7) + (1*1*1)
		//Armstorng sayılarını bulan program
		
		int sayi,birler,onlar,yuzler,toplam;
		for(int i=100 ; i<=999 ; i++ ) {
			sayi=i;
			
			birler = sayi % 10;
			sayi /= 10;
			
			onlar = sayi % 10;
			sayi /= 10;
			
			yuzler = sayi % 10;
			sayi /= 10;
			
			toplam = (birler * birler * birler) + (onlar*onlar*onlar) + (yuzler*yuzler*yuzler);
		
		if(toplam == i) {
			System.out.println(i + "Armstrong Sayıdır! ");
		}
		}
	}

}

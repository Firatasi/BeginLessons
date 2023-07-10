import java.util.Scanner;

public class KdvHesaplamaP2 {

	public static void main(String[] args) {
		double tutar , kdvliFiyat , kdv = 0.18 ;
		
		Scanner input = new Scanner(System.in) ;
		System.out.println("ürünün tutarı : ") ;
		
		tutar = input.nextDouble() ;
		kdvliFiyat = tutar + (tutar*kdv) ;
		System.out.println("kdvliFiyat : " + kdvliFiyat );
		
		
	}

}

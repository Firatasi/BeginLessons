import java.util.Scanner;

public class ForAsalSayi {

	public static void main(String[] args) {
       Scanner scan = new Scanner(System.in);
       int sayi;
       boolean	asal = true ;	
     
       do {
    	   System.out.print("Lütfen Pozitif Sayı Giriniz : ");
    	   sayi = scan.nextInt();
       }while(sayi < 2);
       
       for(int i = 2 ; i < sayi ; i++) {
    	   
    	   if (sayi%i == 0) {
    		   asal = false ;
    		   break;
    		   
    	   }
       }
       if(asal) {
    	   System.out.print("Girilen Sayı Asal Sayıdır ! ");
       }else {
    	   System.out.println("Girilen Sayı Asal Değildir! ");
       }
	}

}

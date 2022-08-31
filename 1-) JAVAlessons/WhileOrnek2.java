import java.util.Scanner;

public class WhileOrnek2 {

	public static void main(String[] args) {

		//Negatif bir sayı girilene kadar kullanıcıdan verileri kabul eden ve girilen değerlerden tek sayıları toplayan program 
	
	    Scanner scan = new Scanner(System.in);
	    int toplam=0;
        int input;
        while(true) {//sonsuz döngü yapmak için kullanılır
        	System.out.print("Lütfen Sayı Giriniz : ");
        	input = scan.nextInt();
        	if(input<0) {
        		System.out.println("Program bitti. Negatif sayı girdiniz!");
        		System.out.println("Girilen tek sayıların toplamı : " + toplam);
        	break;
        	}
        	if(input%2==0) {
        			toplam += input;	
        	}
        }
	}

}

import java.util.Scanner;

public class WhileOrncek3 {

	public static void main(String[] args) {
     //Faktöriyel Hesaplama
		
		Scanner scan = new Scanner(System.in);	
		System.out.print("Faktöriyel Sayı Giriniz : ");
		int f = scan.nextInt();
		int sonuc=1;
		if(f>=0) {
		while(f>0) {
			sonuc*=f;
			f--;
		}
		System.out.println(sonuc);					
		
		    
		    }else if(f<0)
		System.out.println("Negatif Sayılarda Faktöriyel Hesaplanmaz!");
		    
	    }
	
}
	


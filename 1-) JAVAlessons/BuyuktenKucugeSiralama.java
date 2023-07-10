import java.util.Scanner;
public class BuyuktenKucugeSiralama {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		int a,b,c;
		System.out.print("A Sayıyısını Giriniz : ");
		a = scan.nextInt();
		
		System.out.print("B Sayıyısını Giriniz : ");
		b = scan.nextInt();
		
		System.out.print("C Sayıyısını Giriniz : ");
		c = scan.nextInt();
		
		if(a>b && a>c && b>c ) {
			System.out.println("A>B>C");	
			
		}else if(a>b && a>c && c>b) {
			System.out.println("A>C>B");
		
		}else if(a==b && b==c && c==b && a==c) {
		System.out.println("A=B=C");
		
		}else if(b>a && b>c && a>c) {
			System.out.println("B>A>C");
		
		}else if(b>a && b>c && c>a) {
			System.out.println("B>C>A");
		
		}else if(c>a && c>b && a>b) {
			System.out.println("C>A>B");
		
		}else if(c>a && c>b && b>a) {
			System.out.println("C>B>A");
		
		}else if(a==b && b>c) {
			System.out.println("A=B>C");
		
		}else if(a==c && c>b) {
			System.out.println("A=C>B");
		
		}else if(b==c && c>a) {
			System.out.println("B=C>A");
		
		}else if(a==b && c>b) {
			System.out.println("C>B=A");
		
		}else if(a==c && b>c) {
			System.out.println("B>C=A");
		
		}else if(b==c && a>c) {
			System.out.println("A>B=C");
		}else {
			
		}
		
	}

}

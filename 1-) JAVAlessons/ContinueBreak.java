import java.util.Scanner;	
public class ContinueBreak {

	public static void main(String[] args) {
      //break => döngüyü durdurur
	  //continue=>dögüyü durdurmaz ama bir sonraki döngüye gider
		Scanner scan = new Scanner(System.in);
		/*
		int sayi;
		while(true) {
			System.out.print("Bir sayı giriniz : ");
			sayi = scan.nextInt();	
			if (sayi == 0) {
				System.out.println("Döngü bitti!");
		break;	
	
			
			}
				
		}*/
		
		
		for(int i=1 ; i<=10 ; i++) {
			if(i==4 || i==9) {
				System.out.println("Atladı=" + i);
					continue;
			}
			System.out.println("i=" +	i)		;
		}
		
			
	}

}

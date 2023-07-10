import java.util.Scanner;
public class SinifAtlama {

	public static void main(String[] args) {

		int turkce,matematik,fenBilgisi,sosyalBilgisi,bedenEgitimi;    
	    double ortalama=0;	
		Scanner scan = new Scanner(System.in);
	
		
	System.out.print("Türkçe Notunu Giriniz : ");
    turkce = scan.nextInt();
    
    System.out.print("Matematik Notunu Giriniz : ");
    matematik = scan.nextInt();
    
    System.out.print("Fen Bilgisi Notunu Giriniz : ");
    fenBilgisi = scan.nextInt();
    
    System.out.print("Sosyal Bilgisi Notunu Giriniz : ");
    sosyalBilgisi = scan.nextInt();
    
    System.out.print("Beden Eğitimi Notunu Giriniz : ");
    bedenEgitimi = scan.nextInt();
	
    ortalama = ( (turkce + matematik + fenBilgisi + sosyalBilgisi + bedenEgitimi) / 5 );		
	if(ortalama < 50) {
		System.out.println("Sınıfta Kaldınız ! ");
	}else {
		System.out.println("Sınıfı Geçtiniz ! ");
	}
	System.out.println("Ortalamanız : " + ortalama);
	}

}

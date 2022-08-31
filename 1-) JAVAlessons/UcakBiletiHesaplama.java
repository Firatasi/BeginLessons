import java.util.Scanner;

public class UcakBiletiHesaplama {

	public static void main(String[] args) {
       //km birim fiyatı 0.10$
	   //12 yaşından küçük ise toplam fiyata %50 indirim
	   //12 ve 24 yaş arası %10 indirim
	   //65 yaş üstü %30 indirim
	   //Gidiş geliş alırsa %20 indirim
	   //Bu koşulları sağlayan uçak bileti hesaplayan program
		
		Scanner scan = new Scanner(System.in);
		int km,yas,tip ;
		
		System.out.print("Mesafeyi Giriniz : ");
		km = scan.nextInt();
		
		System.out.print("Yaşınızı Giriniz : ");
		yas = scan.nextInt();
		
		System.out.print("Yolculuk Tipini Seçiniz (1 = Tek Gidiş , 2 = Gidiş/Dönüş) : ");
		tip = scan.nextInt();
		
		double normalFiyat,yasIndirimi,tipIndirimi;
		if(km > 0 && yas > 0 && (tip==1 || tip==2)) {
           normalFiyat = km * 0.10;
           if(yas<12) {
        	   yasIndirimi = normalFiyat * 0.55; //indirim oranı hesaplanır.
        	   normalFiyat = normalFiyat - yasIndirimi;//Fiyattan indirim payını çıkarıyoruz .net fiyat.
           }else if(yas >= 12 && yas <= 24 ) {
        		   yasIndirimi = normalFiyat * 0.10;
        		   normalFiyat = normalFiyat - yasIndirimi;
        	   }else if(yas >= 65) {
        		  yasIndirimi = normalFiyat * 0.30;
        		  normalFiyat -= yasIndirimi;//net fiyat hesabıyla aynı anlama geliyor.		  
        	   }else {
        		   yasIndirimi = 0;
        	   }
          if(tip == 2) {
        	 tipIndirimi = normalFiyat * 0.20; 
        	 normalFiyat = normalFiyat - tipIndirimi;
          }
          System.out.println("Bilet Tutarı :" + normalFiyat + "$");
		
		}else {
          System.out.println("Girdiğiniz değeler eksik veya hatalı ! ");
		}
		
		
	}

}

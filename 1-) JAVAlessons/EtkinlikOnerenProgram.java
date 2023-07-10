import java.util.Scanner;
public class EtkinlikOnerenProgram {

	public static void main(String[] args) {
//Hava sıcaklığını yaz
//Sıcaklık 30 ve üstü ise yüzme etkinliğini öner
//5 ve 30 arasında ise sinema etkinliğini öner
//4 ve daha az ise kayak etkinliği öner
		
		Scanner scan = new Scanner(System.in);
	
		
		int havaSicakligi ;
	    System.out.print("Hava Sıcaklığını Giriniz : ");
	    havaSicakligi = scan.nextInt();
	    
	    
	    	
	    if (havaSicakligi > 30 && havaSicakligi <=100) {
	    	System.out.println("Yüzme Etkinliği ! ");
	    	
	    }else if (havaSicakligi >=5 && havaSicakligi <=30) {
	    	System.out.println("Sinema Etkinliği ! ");
	   
	    }else if (havaSicakligi <=4 ) {
	    	System.out.println("Kayak Etkinliği ! ");
	    
	    
	    }else {
	    	System.out.println("Girilen Sıcaklık Değeri İçin Herhangi Bir Etkinlik Önerilmiyor ! ");
	    }
	    
		
	}

}

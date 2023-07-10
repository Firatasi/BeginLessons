
public class Akademisyen extends Calisan{private static String eposta;
/*extends calisan calisanın alt sınıfı oldugunu belırtmek ıcın kullanılır*/
	String bolum,gorevler;
	String[]ders;
	
	
	
	public Akademisyen(String bolum, String gorevler, String[] ders) {
		super(asSoyad,eposta,telefon);
		this.bolum = bolum;
		this.gorevler = gorevler;
		this.ders = ders;
	}



	public void derseGir() {
		System.out.println("Derse girildi.");
	}
}

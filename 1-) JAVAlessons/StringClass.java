
public class StringClass {

	public static void main(String[] args) {
		
		
		String metin = "Firat";
		String metin2 = " " + "kodlama";
		System.out.println(metin.length()); // Girilen karakterin sayısını döndürür
		System.out.println(metin.concat(metin2)); //metin ile metin2 yi birleştirir
		System.out.println(metin.indexOf('F')); //karakterin konumunu verir
		System.out.println(metin.charAt(0)); // Konumu verilen karakteri okur
		System.out.println(metin.contains("rat"));// belirtilen konumda yazılan karakterin olup olmadığını döndürür
		
		
	}

}

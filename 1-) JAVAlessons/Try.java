
public class Try {

	public static void main(String[] args) {
		int x = 0;
		int y = 5;

		try {
			System.out.println("Bölme işlemi: ");
			System.out.println(y/x);
			System.out.println("Bölme işlemi bitti: ");
		}catch (Exception e) {
			System.out.println("Hata yakalandı! ");
		}
		System.out.println("program bitti! ");

	}
}

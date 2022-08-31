
public class MantiksalOperatorler {

	public static void main(String[] args) {
		int a = 10;
		int b = 20;
		int c = 5;
		int d = 50;
		boolean kosul1 = (a<b);
		boolean kosul2 = (c<d);
		boolean sonuc = (kosul1 && kosul2);
		boolean sonuc2 = (a<b) && c<d;
		System.out.println(sonuc);
		System.out.println(sonuc2);

	}

}

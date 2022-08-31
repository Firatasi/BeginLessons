
public class WhileOrnek {

	public static void main(String[] args) {

		int i = 1;
		System.out.println("Düngü Başladı");
	/*	while (i <= 5) {
	     System.out.print(i + ",");
	     i++;//döngü i yi sürekli +1 bir arttırır
		}*/   //yukardaki döngü bitmeden aşağıdaki satırı çalıştırmaz
		
		do {
			System.out.print(i + ",");
			i++;
		}while (i<=5);
		System.out.println("\nDöngü Bitti");
	}

}

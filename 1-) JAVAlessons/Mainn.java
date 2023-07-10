
public class Mainn {

	public static void main(String[] args) {
		
		
		Book b1 = new Book("Hobbit1", 400, "Hobbit2", "Fırat");
       b1.degistirPageSize(500);
		System.out.println(b1.getnumberOfPage());
	}

}


public class Book {

	public String name, author, publisher;
	private int numberOfPage;

	Book(String name, int numberOfPage, String author, String publisher) {
		this.name = name;
		this.author = author;
		this.publisher = publisher;

		if (numberOfPage < 1) {
			this.numberOfPage = 10;

		} else {
			this.numberOfPage = numberOfPage;
		}

	}

	public int getnumberOfPage() {
		return this.numberOfPage;
	}/*private değişkeni başka bir sınıfta çağırmak için get kullanılır*/

	
	public void setNumberOfPage(int size) {
		this.numberOfPage = size;
	}/*Değeri değiştirmek için kullanılır, vo*/

	public void degistirPageSize(int i) {
		// TODO Auto-generated method stub
		
	}
}

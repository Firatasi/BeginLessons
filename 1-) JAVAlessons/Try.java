
public class Try {

	public static void main(String[] args) {
		int a = 0;
		try {
			a = 2/0;
		}catch(ArithmeticException e) {
			System.out.println(e.getMessage());
			
		}
		
		System.out.println(a);
		System.out.println("Programs start! ");
	}
}


public class IfveElseBloklari {

	public static void main(String[] args) {

		int a = 50;
		int b = 20;
		int c = 30;
		if(a==b) {
			System.out.println("a ve b sayıları birbirine eşittir ");
			// koşul sağlandığında küme parantezi olan yani kod bloğuna geçiş sağlanır  if=eğer anlamına gelir
		}
		else {
			//koşul sağlanmazsa else kod bloğuna geçiş sağlanır
			System.out.println("a ve b sayıları birbirine eşit değil ");
		}
		
		
		
		if(b==c) {
			System.out.println("B ve C eşittir");
		}
		else if(a > c) {
			System.out.println("A büyüktür C'den ");
		} 
		else {
			System.out.println("B ve C eşit değildir");
			
		}
		//hangi bloktaki bilgi doğru ise onu yazar diğerlerini yazmaz
		
		
	}

}

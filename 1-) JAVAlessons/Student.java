
public class Student {

	public String name;
	public int id;
	private static int counter=0;
	
	Student(String name, int id){
		this.name = name;
		this.id = id;
		Student.counter++;
	}
	
	public void exit() {
		Student.counter--;	
	}
	
	public static int howStudent( ) {
		return Student.counter;
	}
	
}

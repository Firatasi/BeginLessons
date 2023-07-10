
public class AccesModifiers {

	// Erişim Belirleyiciler
	
	private int ball,game; /*private erişimi gizler ve her yerde erişilmesini engeller sadece yazıldığı kod bloğu arasında kullanılır.*/
	
	public int gamers; /*public olduğunda farklı sayfalardan ulaşım sağlanabilir(projelerde)*/
	
	protected int castle; /*protected sadece bu pojede sayfada veya sınıfların alt dallarında kullanılabilir*/
	
	AccesModifiers(){
		
		this.ball = 2;
		this.gamers = 22;
		this.castle = 2;
	
	
	}
	
	
}

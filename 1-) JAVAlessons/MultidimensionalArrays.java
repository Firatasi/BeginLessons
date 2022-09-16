
public class MultidimensionalArrays {

	public static void main(String[] args) {
		//Çok boyutlu diziler.
		//int[]tek boyutlu dizi	
		//int[]Çok boyutlu dizi	
		
		int[][] tablo = new int[][] {
			{1,75,10},
			{2,87,13},
			{3,95,15},
			{4,103,17},
			{5,110,19}
		};
		
		int[][] tablo2 = new int[5][3];// 5e 3 lük bir liste oluşturur
			tablo2[0][0] = 1;
			tablo2[0][1] = 75;
			tablo2[0][2] = 10;
	
			for(int i=0 ; i < tablo.length ; i++) {
				
				for(int j=0 ; j < tablo[0].length ; j++) {        	
					System.out.print(tablo[i][j] + " ");	//Listeyi yazar  | " "    listeyi boşluklu yazar |	
				}
				System.out.println();
			}
	}

}
//örnek bir tablonun erilerini olduğu gibi aktarmak için kullanılır.

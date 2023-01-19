package adventure;

import java.util.Scanner;

public class Game {

	Player player;
	Location location;
	Scanner scan = new Scanner(System.in);
	
	public void login() {
		Scanner scan = new Scanner(System.in);
		System.out.println("Welcome to the game! ");
		System.out.println("Name: a");
		//String.playerName = scan.nextLine();
		player = new Player("a");
		player.selectCha();
		start();
				
	}
	
	public void start() {
		System.out.println();
		System.out.println("-----------------------");
		System.out.println();
		System.out.println("Please choose");
		System.out.println("1- Security Home");
		System.out.println("2- Cave");
		System.out.println("3- River");
		System.out.println("4- Shop");
	
		int selLoc = scan.nextInt();
		while(selLoc < 0 || selLoc > 5 ) {
			System.out.println("Please true choose: ");
			selLoc = scan.nextInt();
		}
	}
}

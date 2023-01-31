package adventure;

import java.util.Scanner;

public class Player {
	private int damage, healthy, money, rHealthy;
	private String name, cName;
	Scanner scan = new Scanner(System.in);
	private Inventory inv;
	
	
	public Player(String name) {
		this.name = name;
		this.inv = new Inventory();
	}
	public int getTotalDamage() {
	return this.getDamage() + this.getInv().getDamage();
	
	}
	
	public void selectCha() {
		switch(charMenu()) {
	
		//Samuray
		case 1:
			setcName("Samuray");
			setDamage(5);
			setHealthy(21);
			setMoney(15);
			break;
		
		//Archer
		case 2:
			setcName("Archer");
			setDamage(7);
			setHealthy(18);
			setMoney(20);
			break;

		//Knight
		case 3:
			setcName("Knight");
			setDamage(8);
			setHealthy(24);
			setMoney(5);
			break;
			
		default:
				setcName("Samuray");
				setDamage(5);
				setHealthy(21);
				setMoney(15);
				break;
		}
		System.out.println("Your character has been created!");
	}

	private int charMenu() {

		return 0;
	}

	public int chaMenu() {
		System.out.println("Please select  character! ");
		System.out.println("Type : Samuray, damage: 5, health: 21, Money: 15");
		System.out.println("Type : Archer, damage: 7, health: 18, Money: 20");
		System.out.println("Type : Knight, damage: 8, health: 24, Money: 5");
		System.out.println("Choose: ");
		int chaID = scan.nextInt();
		
		while(chaID < 1 || chaID > 3) {
			System.out.println("Please enter a valid character: ");
			chaID = scan.nextInt();
		}
		
		return chaID;
	}
	public int getDamage() {
		return damage;
	}
	public void setDamage(int damage) {
		this.damage = damage;
	}
	public int getHealthy() {
		return healthy;
	}
	public void setHealthy(int healthy) {
		this.healthy = healthy;
	}
	public int getMoney() {
		return money;
	}
	public void setMoney(int money) {
		this.money = money;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getcName() {
		return cName;
	}
	public void setcName(String cName) {
		this.cName = cName;
	}
	public Inventory getInv() {
		return inv;
	}
	public void setInv(Inventory inv) {
		this.inv = inv;
	}

	public int getrHealthy() {
		return rHealthy;
	}

	public void setrHealthy(int rHealthy) {
		this.rHealthy = rHealthy;
	}
	
	
}

package adventure;

public abstract class BattleLoc extends Location {
	protected Obstacle obstacle;
	BattleLoc(Player player, String name, Obstacle obstacle) {
		super(player);
		this.obstacle = obstacle;
		this.name = name;
	}
	
	public boolean getLocation() {
		int obsCount = obstacle.count();
		System.out.println("You are here now" + this.getName());
		System.out.println("Be careful! Here" + obsCount + "unit" + obstacle.getName() + "Two vampires live here!");
		System.out.println("<W>ar or <E>scape" );
		String selCase = scan.nextLine();
		selCase = selCase.toUpperCase();
		if(selCase.equals("s")) {
			if (combat(obsCount)) {
				System.out.println("You defeated the enemies!");
				return true;
			}else {
				System.out.println("You died!");
				return false;
			}
		}
		return true;
	}
	
	public boolean combat(int obsCount) {
		for (int i=0; i<obsCount; i++) {
			playerStats();
			enemyStats();
			while(player.getHealthy() > 0 && obstacle.getHealth() > 0) {
				System.out.println("<H>it or <E>scape");
				String selCase = scan.nextLine();
				selCase = selCase.toUpperCase();
				if (selCase.equals("H")) {
					System.out.println("Your hit!");
					obstacle.setHealth(obstacle.getHealth() - player.getTotalDamage());
					afterHit();
					System.out.println("Player health: " + player.getHealthy());
					System.out.println(obstacle.getName() + "Health: " + obstacle.getHealth());
					System.out.println();
					System.out.println("Enemy hit you!");
					player.setHealthy(player.getHealthy() - (obstacle.getDamage() - player.getInv().getArmor()));
					afterHit();
					
				}else {
					break;
				}
			}
		}
		return true;
	
	}
	
	public void playerStats( ) {
		System.out.println("Player values\n--------");
		System.out.println("Health: " + player.getHealthy());
		System.out.println("Damage: " + player.getTotalDamage());
		System.out.println("Money: " + player.getMoney() );
		if (player.getInv().getDamage() > 0 ) {
			System.out.println("Gun: "  + player.getInv().getwName());
		}
		if (player.getInv().getArmor() > 0 ) {
			System.out.println("Armor: "  + player.getInv().getaName());
		}
	}
	
	public void enemyStats() {
		System.out.println(obstacle.getName() + "Values\n----------");
		System.out.println("Health: " + obstacle.getHealth());
		System.out.println("Damage: " + obstacle.getDamage());
		System.out.println("Award: " + obstacle.getAward());
	}
	
}

package adventure;

public class ToolStore extends NormalLoc {

	ToolStore(Player player) {
		super(player, "Shop");
		
	}
	
	public boolean getLocation() {
		System.out.println("Money: " + player.getMoney());
		System.out.println("1- Guns");
		System.out.println("2- Armors");
		System.out.println("3- Exit");
		System.out.println("Your choose: ");
		int selTool = scan.nextInt();
		int selIttemID;
		switch(selTool ) {
		case 1:
			selItemID = weaponMenu();
			buyWeapon(selItemID);
			break;
			
		case 2:
			break;
		
		default:
			break;
		}
		return true;
	}
	
	public void weaponMenu() {
		System.out.println("1- Gun <Money: 25 ** Damage: 2>"); /*21.49*/
	}

}

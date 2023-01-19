package adventure;

public abstract class BattleLoc extends Location {
	Monster mns;
	BattleLoc(Player player, String name,Monster mns) {
		super(player);
		this.mns = mns;
		this.name = name;
	}
	public boolean getLocation() {
		player.setHealthy(player.getrHealthy());
		System.out.println("Renewed Health");
		System.out.println("You are in the safe house now");
		return true;
	}
}

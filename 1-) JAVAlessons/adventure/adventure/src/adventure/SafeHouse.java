package adventure;

public class SafeHouse extends NormalLoc {

		SafeHouse(Player player) {
			super(player, "Safe House");
		}
		public boolean getLocation() {
			player.setHealthy(healthy);
		}
}

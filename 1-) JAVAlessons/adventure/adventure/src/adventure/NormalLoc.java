package adventure;

public abstract class NormalLoc extends Location{
		NormalLoc(Player player) {
			super(player);
			this.name = name;
		}
		
		public boolean getLocation( ) {
			return true;
			
		}
}

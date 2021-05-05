
function Robot(ring, position_bot, power_oulet) { 
    this.ring = ring;
    this.position_bot = position_bot;
    this.battery_level = 100;
    this.drop_battery_level = function (x) {
         this.battery_level = this.battery_level - x;
         console.log(this.battery_level);
      }
    this.run_battery = function() {
        setInterval(this.drop_battery_level.bind(this,5), 3000); //this here is an instance of Robot and not Window
      }
    this.position_power_outlet = power_oulet;
    this.battery_state = function () {
        console.log(this.battery_level);
      }
    //run Robot 
    this.run_battery();
}

Robot.prototype.ring = function() {
    console.log(this.sonnerie);
}

Robot.prototype.charge = function() {
    this.position_bot = this.position_power_outlet;
}

var bot = new Robot("pimpimpooon", {"x": 0, "y":0}, {"x": 100, "y":100});

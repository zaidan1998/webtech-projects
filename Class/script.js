function Course(code, name, hours, venue, seats){
  this.code = code;
  this.name = name;
  this.hours = hours;
  this.venue = venue;
  this.seats = seats;
}

var c1 = new Course('INFO 2302', 'Web technologies', 3, 'Lab 5', 14);
var c2 = new Course(,,,,);
var c3 = new Course(,,,,);

msg = 'Course ' + c1.name + 'has ' + c1.seats + ' seats left';
document.getElementById('message1').textContent = msg;

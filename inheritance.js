var Person = function(name){
  this.name = name;
}
Person.prototype.introduce = function(){
  console.log(this.name+" hosgeldiniz.")
}
var Student = function(name,number){
  Person.call(this,name);
  this.number=number;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study= function () {
  console.log(this.number+" numarali "+this.name+" lütfen ödevlerini tamamla")
};


var Teacher = function (name,branch) {
  Person.call(this,name);
  this.branch=branch;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;

Teacher.prototype.teach = function () {
  console.log("Adim "+this.name+". "+this.branch+" alaninda egitim vermekteyim")
};

var Headmaster = function (name,branch) {
  Teacher.call(this,name,branch);
}
Headmaster.prototype=Object.create(Person.prototype);
Headmaster.prototype=Object.create(Teacher.prototype);
Headmaster.prototype.constructor=Headmaster;

Headmaster.prototype.shareTask = function () {
  console.log("Müdürümüz "+this.name+ " Bey" + " ayni zamanda " +this.branch+ " alaninda egitim vermektedir.");
};

var enes = new Person ('enes');
var etem = new Student('etem','1234');
var büsra = new Teacher('büsra','mathematik');
var kadir = new Headmaster('kadir','informatik');

console.log(enes);
büsra.teach();
kadir.shareTask();
etem.study();
console.log(kadir);

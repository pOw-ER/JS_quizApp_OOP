function Person (name,surname,yearOfBirth,yearOfStudent,studentNo){
  this.name=name;
  this.surname=surname;
  this.yearOfBirth=yearOfBirth;
  this.yearOfStudent=yearOfStudent;
  this.studentNo=studentNo;
}
Person.prototype.calculateAge = function () {
  return 2020-this.yearOfBirth
}
var enes = new Person ('enes','yilmaz',2005,11,1234);
var büsra = new Person('büsra','yilmaz',2006,10,1235);
console.log(enes);
console.log(büsra);
console.log(enes.calculateAge());
console.log(büsra.calculateAge());

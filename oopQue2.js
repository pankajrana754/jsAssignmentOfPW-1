class Student{
    constructor(name ,email){
        this.name=name;
        this.email=email;
        this.courses=[];

    }
    Enrollment(course){
        this.courses.push(course);
        console.log(`${this.name} has Enrolled in ${course}.`);

    }
    showCourse(){
        console.log(`${this.name} Enrolled courses:${this.courses.join(',')}`);
    }
}
class Admission{
    constructor(){
        this.Students=[];
    }
    enrollStudent(student){
        this.Students.push(student);
        console.log(`${student.name} has been enrolled .`);
    }
    assignCourse(student,course){
        if(student instanceof Student &&student.email && course){
            student.Enrollment(course);

        }else{
            console.log('invalid student or course information.');
        }
    }
    showEnrolledStudent(){
        console.log('Enrolled student ')
        this.Students.forEach(student=>{
            console.log(`-${student.name} (${student.email})`);
        });
    }
}
const admissionOffice= new Admission();
const student1=new Student('Rohan kumar ','Rohankumar@gmail.com');
const student2=new Student('Mohan kumar ','Mohankumar@gmail.com');
admissionOffice.assignCourse(student1);
admissionOffice.assignCourse(student2);
admissionOffice.assignCourse(student1,'Full stack web Development');

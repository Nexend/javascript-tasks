// Не сокращеная форма записи
// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//     const passedStudents = allStudentsList
//         .filter( name => !studentsForRetake.includes(name));
//     const messages = passedStudents
//         .map( name => 'Good job, ' + name );
    
//     return messages;
// }

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => 
    allStudentsList
        .filter( name => !studentsForRetake.includes(name))
        .map( name => 'Good job, ' + name );


const allStud = ['Ann', 'Tom', 'Bob', 'Kate'];
const retakeStud = ['Tom', 'Bob'];

console.log(getMessagesForBestStudents(allStud, retakeStud));

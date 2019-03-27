// 30 minutes max
//let students = [
//    {name: 'Remy', cohort: 'Jan'},
//    {name: 'Genevieve', cohort: 'March'},
//    {name: 'Chuck', cohort: 'Jan'},
//    {name: 'Osmund', cohort: 'June'},
//    {name: 'Nikki', cohort: 'June'},
//    {name: 'Boris', cohort: 'June'}
//];

//for (let student of students) {
//    console.log('Name: ',student.name,', Cohort: ',student.cohort);
//}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for (let index in users) {
    console.log(index.toUpperCase());
    for (let user in users[index]) {
        console.log((parseInt(user) + 1).toString(),'-',
            users[index][user].last_name.toUpperCase() + ', ',
            users[index][user].first_name.toUpperCase(),'-',
            (users[index][user].last_name.length +
            users[index][user].first_name.length).toString()
            )
    }
}
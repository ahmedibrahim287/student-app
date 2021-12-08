const yargs = require('yargs')
const students = require('./students')
yargs.command({
    //how to add -->node app.js add --id='1' --name='ibrahim' --grades 5 --grades 8 --grades 0  --comment='blabla' 
    command: 'add',
    describe: 'Add student',
    // options 
    builder: {
        id: {
            describe: 'This is title in add command',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'This is body in add command',
            demandOption: true,
            type: 'string'
        },
        grades: {
            describe: 'This is grades off student',
            demandOption: true,
            type: 'array'
        },
        comment: {
            describe: 'This is any comment student',
            type: 'string'
        },
        total: {
            describe: 'This is title in add command',
            type: 'number'
        },
    },
    handler: (argv) => {
        let sum = 0;
        for (let grade of argv.grades) {
            sum += grade
        }
        students.addStudent(argv.id, argv.name, argv.grades, argv.comment, sum)
    }
})

// delete
yargs.command({
    //how to delete --> node app.js delete --id=' '  
    command: 'delete',
    describe: 'Delete student',
    builder: {
        id: {
            describe: 'This is title in delete command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        students.deleteStudent(argv.id)
    }
})

// read 
yargs.command({
    //how to read -->  node app.js read --id=' '  
    command: 'read',
    describe: 'Read students',
    builder: {
        id: {
            describe: 'This is title in read command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        students.readStudent(argv.id)
    }
})


// list
yargs.command({
    //how to read --> just node app.js list ;)  
    command: 'list',
    describe: 'List student',
    handler: () => {
        students.listStudent()
    }
})

// Match all
yargs.command({
    command: '*',
    describe: 'Match all',
    handler: () => {
        console.log('Sorry not a command')
    }
})

yargs.parse()
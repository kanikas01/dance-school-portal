# Dance School Portal

Dance School Portal is a student/teacher/admin portal for - you guessed it - a dance school. Students can see grades, teachers can grade students, and various other administrative actions are possible depending on the user's role.

The app is set up in a Demo mode: you can select any user to view the app as that user.  This allows for easy exploration of the user role functionality that controls data access.

### [Click here to visit the site](https://dance-school-portal.herokuapp.com/portal)

Dance School Portal was built with React, uses a Node and Express web server, and utilizes a MySQL database with a Sequelize ORM.

## Roles

All users have a personal profile tab.

**Student** - Can only access their personal profile and grade info

**Marketing** - Can access the Marketing tab and marketing email list

**Customer Support** - Can see the Users, Products and Orders tabs

**Teacher** - Can see the Students, Grades and Dances tabs. Has the ability to add grades and modify student info.

**Admin** - Has access to all tabs, and can add users of any role.

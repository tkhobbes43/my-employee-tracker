USE employee_db;
INSERT INTO department (name)
VALUES ("Engineering"),
    ("Finance & Accounting"),
    ("Sales & Marketing"),
    ("Operations");

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 90000, 1),
    ("Project Manager", 120000, 1),
    ("Accountant", 145000, 2), 
    ("Finanical Analyst", 150000, 2),
    ("Marketing Coordindator", 80000, 3), 
    ("Sales Lead", 90000, 3),
    ("Operations Manager", 100000, 4),
    ("Operations Supervisor", 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Abed", "Nadir", 2, null),
    ("Britta", "Perry", 1, 1),
    ("Jeff", "Winger", 4, null),
    ("Troy", "Barnes", 3, 3),
    ("Annie", "Edison", 6, null),
    ("Pierce", "Hawthorne", 5, null),
    ("Shirley", "Bennett", 7, null),
    ("Ben", "Chang", 8, null);

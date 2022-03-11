INSERT INTO department (name)
VALUES
    ('Operations'),
    ('HR'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Operations Manager','80000.00',1),
    ('HR Manager','82000.50',2),
    ('Sales Manager','84000.25',3),
    ('Operations Employee', '50030.50',1),
    ('HR Rep', '61000.30',2),
    ('Sales Rep','62050.70',3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 1, NULL),
    ('Virginia', 'Woolf', 2, NULL),
    ('Piers', 'Gaveston', 3, NULL),
    ('Charles', 'LeRoi', 4, 1),
    ('Katherine', 'Mansfield', 4, 1),
    ('Dora', 'Carrington', 4, 1),
    ('Edward', 'Bellamy', 5, 2),
    ('Montague', 'Summers', 5, 2),
    ('Octavia', 'Butler', 6, 3),
    ('Unica', 'Zurn', 6, 3);

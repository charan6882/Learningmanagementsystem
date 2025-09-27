-- Sample Courses
INSERT INTO courses (title, instructor, description) VALUES
('Java Basics', 'John Doe', 'Learn Java from scratch'),
('Spring Boot', 'Jane Smith', 'REST APIs with Spring Boot'),
('React Fundamentals', 'Alice Brown', 'Frontend with React.js');

-- Sample Submissions
INSERT INTO submission (assignment_title, student_name, content, grade) VALUES
('Java Assignment 1', 'Alice', 'My Java code', 'A'),
('Spring Boot Assignment', 'Bob', 'REST API implementation', 'B');

-- Sample Certificates
INSERT INTO certificate (course_name, student_name, issued_on) VALUES
('Java Basics', 'Alice', CURRENT_DATE),
('React Fundamentals', 'Bob', CURRENT_DATE);

-- Sample Enrollments
INSERT INTO enrollment (student_name, course_id) VALUES
('Alice', 1),
('Bob', 2);

-- Sample Discussions
INSERT INTO discussion (student_name, message) VALUES
('Alice', 'I love Java!'),
('Bob', 'Spring Boot is awesome!');

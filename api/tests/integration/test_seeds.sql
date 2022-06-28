TRUNCATE users RESTART IDENTITY;

INSERT INTO users (email, password, first_name, last_name, gender) 
VALUES
('tester1@gmail.com', '99d8c939300ceb17112aad875914c40f', 'Tester1', 'A', 'M'),
('tester2@gmail.com', '88e6b40bbb49de64dffa614724996c34', 'Tester2', 'B', 'M'),
('tester3@gmail.com', 'b4ddd22be1f232eabf85bebb84b07837', 'Tester3', 'C', 'F');
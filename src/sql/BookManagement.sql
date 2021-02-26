USE BookManagement
GO

-- �û���
CREATE TABLE users (
	u_id INT PRIMARY KEY IDENTITY(1, 1),				-- �û�ID
	u_type INT CHECK(u_type IN (0, 1)) DEFAULT 1,		-- �û����� 0:����Ա 1:��ͨ�û�
	u_name NVARCHAR(10) NOT NULL DEFAULT '' UNIQUE,		-- �û���
	u_password NVARCHAR(10) DEFAULT '' NOT NULL,		-- �û�����
	u_workplace NVARCHAR(30) DEFAULT '',				-- ����ѧУ��λ
	u_address NVARCHAR(30) DEFAULT '',					-- ��ͥסַ
	u_tel CHAR(11) NOT NULL								-- ��ϵ�绰
)
GO

INSERT INTO users(u_name, u_type, u_password, u_workplace, u_address, u_tel) VALUES('admin', 0, 'admin', '�Ϻ���','��ɽ��', 13838224667)
GO

-- ͼ���
CREATE TABLE book (
	b_id INT PRIMARY KEY IDENTITY(1, 1),				--ͼ����
	b_type NVARCHAR(10) NOT NULL DEFAULT '�����',		-- ͼ�����
	b_name NVARCHAR(30) NOT NULL DEFAULT '' UNIQUE,		-- ͼ������
	b_number INT NOT NULL DEFAULT 200,					-- �ݲ�����
	b_writer NVARCHAR(10) NOT NULL DEFAULT '',			-- ͼ������
	b_public NVARCHAR(15) NOT NULL DEFAULT '',			-- ������
	b_state NCHAR(3) CHECK(b_state IN ('�ѽ���', 'δ����')) NOT NULL DEFAULT 'δ����',	-- ����״̬
	b_digit INT NOT NULL DEFAULT 0,						-- �������
)
GO

INSERT INTO book(b_name, b_writer, b_public)
VALUES ('Java �������', '��ΰ', '�廪��ѧ������')
GO

-- ���ı�
CREATE TABLE borrow (
	b_id INT NOT NULL										--ͼ���� 
	FOREIGN KEY(b_id) REFERENCES book(b_id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	
	u_id INT NOT NULL										-- �û�ID
	FOREIGN KEY(u_id) REFERENCES users(u_id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
		
	bo_time DATETIME NOT NULL DEFAULT CONVERT(varchar,GETDATE(),120),	-- ����ʱ��
	bo_return_time DATETIME DEFAULT NULL,								-- ����ʱ��
	bo_state NCHAR(2) CHECK(bo_state IN ('�ѻ�', 'δ��')) NOT NULL DEFAULT 'δ��', -- ����״̬
	bo_num INT DEFAULT 1 NOT NULL,										-- ��������
	penalty NUMERIC(5, 2) NOT NULL DEFAULT 0.0,							-- ����
	PRIMARY KEY(b_id, u_id)
)
GO

SELECT CONVERT(varchar,GETDATE(),120) - '2021-02-08 00:00:00' ��ǰʱ��

SELECT DATEDIFF(SECOND, '2021-02-09 18:17:00', CONVERT(varchar,GETDATE(),120))

SELECT * FROM book

DROP TABLE book
GO
SELECT * FROM book
GO

SP_HELP users
GO

CREATE TRIGGER insert_borrow_trigger ON borrow
AFTER INSERT AS
	DECLARE @bId INT
	BEGIN
		SELECT @bId = b_id FROM INSERTED
		IF ((SELECT b_number FROM book WHERE b_id = @bId) <= 0)
			RETURN
		UPDATE book SET b_number -= 1, b_state = '�ѽ���',b_digit += 1 WHERE b_id = @bId
	END
GO


ALTER TRIGGER update_borrow_trigger ON borrow
AFTER UPDATE AS
	DECLARE @boState NCHAR(2), 
	@bId INT, 
	@uId INT,
	@difftime INT,
	@return_time DATETIME,
	@borrow_time DATETIME
	BEGIN
		SELECT @boState = bo_state, @bId = b_id, @uId = u_id FROM INSERTED
		IF (@boState = '�ѻ�')
		BEGIN
			UPDATE book SET b_number += 1, 
			b_digit -=1 WHERE b_id = @bId
			IF ((SELECT b_digit FROM book WHERE b_id = @bId) = 0)
				UPDATE book SET b_state = 'δ����' WHERE b_id = @bId
			UPDATE borrow SET bo_return_time = CONVERT(varchar,GETDATE(),120) WHERE b_id = @bId AND u_id = @uId
			SELECT @borrow_time = bo_time, @return_time = bo_return_time FROM borrow
			SET @difftime = DATEDIFF(DAY, @borrow_time, @return_time)
			IF (@difftime > 30)
			BEGIN
				UPDATE borrow SET penalty = (@difftime - 30)* 0.1 WHERE b_id = @bId AND u_id = @uId
			END
		END
	END
GO

INSERT INTO borrow(b_id, u_id)
		VALUES(1, 1)
		
SELECT * FROM borrow
SELECT * FROM book

UPDATE book SET b_number += 1 WHERE b_id = 1

DELETE FROM borrow

UPDATE borrow SET bo_state = '�ѻ�' WHERE b_id = 6 AND u_id = 1

ALTER TABLE book ADD b_id NCHAR(3) 
CHECK(b_state IN ('�ѽ���', 'δ����')) NOT NULL DEFAULT 'δ����'


ALTER TABLE book ADD u_id INT  NOT NULL DEFAULT 0

ALTER TABLE book ADD b_digit INT NOT NULL DEFAULT 0
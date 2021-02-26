package com.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.BookDao;
import com.entity.Book;
import com.service.BookService;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookDao bookDao;
	
	@Override
	public List<Book> queryBookRange(int start, int offset) {
		List<Book> bookList = bookDao.queryBookRange(start, offset);
		return bookList;
	}

	@Override
	public Integer queryBookCount() {
		Integer bookCount = bookDao.queryBookCount();
		return bookCount;
	}

	@Override
	public Integer insertBook(Book book) {
		Integer affectRows = bookDao.insertBook(book);
		return affectRows;
	}

	@Override
	public Book queryBookBybName(String bName) {
		Book book = bookDao.queryBookBybName(bName);
		return book;
	}

	@Override
	public Integer updateBook(Book book) {
		Integer affectRows = bookDao.updateBook(book);
		return affectRows;
	}

	@Override
	public Integer deleteBookBybId(int bId) {
		Integer affectRows = bookDao.deleteBookBybId(bId);
		return affectRows;
	}

	@Override
	public List<Book> queryBookBybTypeRange(String bType, int start, int offset) {
		
		List<Book> bookList = bookDao.queryBookBybTypeRange(bType, start, offset);
		return bookList;
	}

	@Override
	public List<Book> queryBookBybWriterRange(String bWriter, int start, int offset) {
		List<Book> bookList = bookDao.queryBookBybWriterRange(bWriter, start, offset);
		return bookList;
	}

	@Override
	public List<Book> queryBookBybPublicRange(String bPublic, int start, int offset) {
		List<Book> bookList = bookDao.queryBookBybPublicRange(bPublic, start, offset);
		return bookList;
	}

	@Override
	public List<Book> queryBookBybNameRange(String bName, int start, int offset) {
		List<Book> bookList = bookDao.queryBookBybNameRange(bName, start, offset);
		return bookList;
	}

	@Override
	public Integer queryBookBybTypeCount(String bType) {
		Integer bookCount = bookDao.queryBookBybTypeCount(bType);
		return bookCount;
	}

	@Override
	public Integer queryBookBybNameCount(String bName) {
		Integer bookCount = bookDao.queryBookBybNameCount(bName);
		return bookCount;
	}

	@Override
	public Integer queryBookBybWriterCount(String bWriter) {
		Integer bookCount = bookDao.queryBookBybWriterCount(bWriter);
		return bookCount;
	}

	@Override
	public Integer queryBookBybPublicCount(String bPublic) {
		Integer bookCount = bookDao.queryBookBybPublicCount(bPublic);
		return bookCount;
	}

}

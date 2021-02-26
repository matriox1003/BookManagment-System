package com.web;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.entity.Book;
import com.entity.Users;
import com.service.BookService;
import com.service.BorrowService;

@Controller
public class BookSearchController {
	
	@Autowired
	private BookService bookService;
	
	@Autowired
	private BorrowService borrowService;
	
	@RequestMapping(value = "/bookSearch", method = RequestMethod.GET)
	public ModelAndView searchBook(String type, String keyword, int start, int offset, HttpSession session) {
		
		ModelAndView modelAndView = new ModelAndView();
		List<Book> bookList = null;
		Integer bookCount = 0;

		
		if (type.equals("booktype")) {
			bookList = bookService.queryBookBybTypeRange(keyword, start, offset);
			bookCount = bookService.queryBookBybTypeCount(keyword);
			modelAndView.addObject("type", "图书类型");
		} else if (type.equals("bookname")) {
			bookList = bookService.queryBookBybNameRange(keyword, start, offset);
			bookCount = bookService.queryBookBybNameCount(keyword);
			modelAndView.addObject("type", "图书名称");
		} else if (type.equals("writer")) {
			bookList = bookService.queryBookBybWriterRange(keyword, start, offset);
			bookCount = bookService.queryBookBybWriterCount(keyword);
			modelAndView.addObject("type", "作者");
		} else if (type.equals("public")) {
			bookList = bookService.queryBookBybPublicRange(keyword, start, offset);
			bookCount = bookService.queryBookBybPublicCount(keyword);
			modelAndView.addObject("type", "出版社");
		} else {
			bookList = bookService.queryBookRange(start, offset);
			bookCount = bookService.queryBookCount();
			modelAndView.addObject("type", "全部");
		}
		
		Users user = (Users) session.getAttribute("user");
		if (user == null) {
			modelAndView.setViewName("/login");
			return modelAndView;
		}
		int userId = user.getuId();
		
		List<Integer> bIdList = borrowService.querybIdByuId(userId);
		
		modelAndView.addObject("currentPage", start / offset + 1);
		modelAndView.addObject("bookCount" , bookCount);
		modelAndView.addObject("bookList", bookList);
		modelAndView.addObject("bIdList", bIdList);
		modelAndView.addObject("keyword", keyword);
		modelAndView.setViewName("/WEB-INF/jsp/index");
		return modelAndView;
	}
}

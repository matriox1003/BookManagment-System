package com.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.entity.Book;
import com.service.BookService;

/**
 * 图书管理控制器
 *
 */

@Controller
@RequestMapping("/bookManage")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@ResponseBody
	@RequestMapping(value = "/{start}/{offset}", method = RequestMethod.GET)
	public Map<String, Object> getBokRange(@PathVariable("start") int start, @PathVariable("offset") int offset) {
		Map<String, Object> map = new HashMap<>();
		
		// 先查询图书数量
		Integer bookCount = bookService.queryBookCount();
		
		// 图书列表为空
		if (bookCount == 0) {
			map.put("status", 404);
			return map;
		}
		
		List<Book> bookList = bookService.queryBookRange(start, offset);
		map.put("status", 200);
		map.put("bookCount", bookCount);
		map.put("books", bookList);
		
		return map;
	}
	
	/**
	 * 插入图书
	 * @param book 要插入的图书信息
	 * @return 插入成功返回1 否则返回0
	 */
	@ResponseBody
	@RequestMapping(value = "/post", method = RequestMethod.POST)
	public Map<String, Object> insertBook(@RequestBody Book model) {
		Map<String, Object> map = new HashMap<>();
		
		Book book = bookService.queryBookBybName(model.getbName());
		
		// 该书已存在
		if (book != null) {
			map.put("status", 100);
			return map;
		}
		
		Integer affectRows = bookService.insertBook(model);
		
		if (affectRows != 0) {
			map.put("status", 200);
		}
		
		
		return map;
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/put", method = RequestMethod.PUT)
	public Map<String, Object> putBook(@RequestBody Book moel) {
		Map<String, Object> map = new HashMap<>();
		
		Integer affectRows = bookService.updateBook(moel);
		
		if (affectRows != 0) {
			map.put("status", 200);
		} else {
			map.put("status", 400);
		}
		
		return map;
	}
	
	/**
	 * 删除图书
	 * @param model	要删除的图书
	 * @return 删除成功返回1 否则返回0
	 */
	@ResponseBody
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	public Map<String, Object> deleteBookBybId(@RequestBody Book model) {
		Map<String, Object> map = new HashMap<>();
		
		Integer affectRows = bookService.deleteBookBybId(model.getbId());
		
		if (affectRows != 0) {
			map.put("status", 200);
		} else {
			map.put("status", 400);
		}
		
		return map;
	}
	
}

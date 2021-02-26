package com.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.entity.Users;
import com.service.BorrowService;

@Controller
public class BorrowController {
	
	@Autowired
	private BorrowService borrowService;
	
	@ResponseBody
	@RequestMapping("/borrow/{bId}")
	public Map<String, Object> bookBorrow(@PathVariable int bId, HttpSession session, HttpServletResponse response ) {
		
		Map<String, Object> map = new HashMap<>();
		
		Users user = (Users)session.getAttribute("user");
		if (user == null) {
			try {
				response.sendRedirect("/login");
			} catch (IOException e) {
				e.printStackTrace();
			}
			return null;
		}
		int uId = user.getuId();
		
		Integer affectRows = borrowService.insertBorrow(bId, uId);
		
		if (affectRows != 0) {
			map.put("status", 200);
		} else {
			map.put("status", 400);
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/return/{bId}")
	public Map<String, Object> bookReturn(@PathVariable int bId, HttpSession session) {
		Map<String, Object> map = new HashMap<>();
		
		Users user = (Users)session.getAttribute("user");
		int uId = user.getuId();
		
		Integer affectRows = borrowService.updateBorrow(bId, uId);
		float penalty = borrowService.queryPenaltyById(bId, uId);
		borrowService.deleteBorrow(bId, uId);
		
		if (affectRows != 0) {
			map.put("status", 200);
			map.put("penalty", penalty);
		} else {
			map.put("status", 400);
		}
		return map;
	}
}

package com.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.entity.Book;
import com.entity.Users;
import com.service.BookService;
import com.service.BorrowService;
import com.service.UsersService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

/**
 * 处理页面响应
 *
 */

@Controller
public class UsersController {
	
	@Autowired
	private UsersService usersService;
	
	@Autowired
	private BookService bookService;
	
	@Autowired
	private BorrowService borrowService;
	
	@ResponseBody
	@RequestMapping(value = "/tologin", method = RequestMethod.POST)
	public Map<String, Object> toLogin(@RequestBody Users model, HttpSession session) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		if (session.getAttribute("user") != null) {
			map.put("status", 100);
			return map;
		}
		
		Users user = usersService.queryUser(model.getuName(), model.getuPassword());
		if (user != null) {
			session.setAttribute("user", user);
			map.put("status", 200);
			map.put("user", user);
		} else {
			map.put("status", 404);
		}
		
		return map;
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/toregister", method = RequestMethod.POST)
	public Map<String, Object> toRegister(@RequestBody Users model) {
		Map<String, Object> map = new HashMap<>();
		
		Users user = usersService.queryUserByuName(model.getuName());
		
		if (user != null) {
			map.put("status", 100);
		} else {
			// 插入用户
			Integer affectRows = usersService.insertUser(model);
			if (affectRows != 0) {
				map.put("status", 200);
			}
		}
		
		return map;
	}
	
	
	//========================  页面跳转  ====================================
	
	@RequestMapping("/index")
	public ModelAndView getIndex(ModelAndView modelAndView, HttpSession session) {
		// 如果没有登录  就跳转到登录页面
		if (session.getAttribute("user") == null) {
			modelAndView.setViewName("redirect:/login");
			return modelAndView;
		}
		
		Users user = (Users)session.getAttribute("user");
		if (user == null) {
			modelAndView.setViewName("/login");
			return modelAndView;
		}
		int userId = user.getuId();
		
		List<Book> bookList = bookService.queryBookRange(0, 5);
		Integer bookCount = bookService.queryBookCount();
		List<Integer> bIdList = borrowService.querybIdByuId(userId);
		
		modelAndView.addObject("currentPage", 1);
		modelAndView.addObject("bookCount", bookCount);
		modelAndView.addObject("bookList", bookList);
		modelAndView.addObject("bIdList", bIdList);
		modelAndView.addObject("keyword", "全部");
		modelAndView.addObject("type", "全部");
		
		modelAndView.setViewName("/WEB-INF/jsp/index");
		return modelAndView;
	}
	
	@RequestMapping("/manage")
	public String getMange(HttpSession session) {
		if (session.getAttribute("user") == null) {
			return "/login";
		} else {
			return "/WEB-INF/jsp/manage";
		}
	}
	
	
	@RequestMapping("/login")
	public String Login(HttpSession session) {
		// 如果没有登录  就跳转到登录页面
		if (session != null && session.getAttribute("user") != null) {
			return "redirect:/index";
		}
		return "/login";
	}
	
	@RequestMapping("/logout")
	public String Logout(HttpSession session) {
		session.removeAttribute("user");
		return "redirect:/login";
	}
	
	@RequestMapping("/page/error/404")
	public String get404() {
		return "/WEB-INF/jsp/404";
	}
	
	@RequestMapping("/page/error/500")
	public String get500() {
		return "/WEB-INF/jsp/500";
	}
	
	
	
	/**
	 * 用户管理操作
	 */
	@RequestMapping(value = "/userManage/{start}/{offset}", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> queryUserRange(@PathVariable("start") int start, @PathVariable("offset") int offset) {
		Map<String, Object> res = new HashMap<String, Object>();
		Integer userCount = usersService.queryUserCount();
		
		if (userCount == null) {
			res.put("status", 404);
			return res;
		} else {
			res.put("status", 200);
			res.put("userCount", userCount);
		}
		
		List<Users> userList = usersService.queryUserRange(start, offset);
		res.put("users", userList);
		return res;
	}
	
	/**
	 * 添加用户
	 * @param model	用户信息
	 * @return 添加状态
	 */
	@ResponseBody
	@RequestMapping(value = "/userManage/post", method = RequestMethod.POST)
	public Map<String, Object> addUser(@RequestBody Users model) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		// 先查询数据库中是否存在该用户
		Users user = usersService.queryUserByuName(model.getuName());
		// 该用户已存在 失败
		if (user != null) {
			map.put("status", 100);
		} else {
			// 向数据库中插入用户
			Integer affectRows = usersService.insertUser(model);
			
			if (affectRows != 0) {
				map.put("status", 200);
			}
		}
		
		return map;
	}
	
	
	/**
	 * 通过用户ID 删除用户
	 * @param model	用户
	 * @return 删除状态
	 */
	@ResponseBody
	@RequestMapping(value = "/userManage/delete/", method = RequestMethod.DELETE)
	public Map<String, Object> deleteUserByuId(@RequestBody Users model) {
		Map<String, Object> map = new HashMap<>();
		
		Integer affectRows = usersService.deleteUserByuId(model.getuId());
		
		if (affectRows == 0) {
			map.put("status", 400);
		} else {
			map.put("status", 200);
		}
		
		return map;
	}
	
	/**
	 * 修改用户信息
	 * @param model	用户信息
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/userManage/put", method = RequestMethod.PUT)
	public Map<String, Object> putUser(@RequestBody Users model) {
		Map<String, Object> map = new HashMap<>();
		
		Integer affectRows = usersService.putUser(model);
		
		if (affectRows == 0) {
			map.put("status", 400);
		} else {
			map.put("status", 200);
		}
		
		return map;
	}
	
	@ResponseBody
	@RequestMapping(value = "/userinfo", method = RequestMethod.GET)
	public Map<String, Object> getUserInfo(HttpSession session) {
		
		Map<String, Object> map = new HashMap<>();
		Users curUser = (Users)session.getAttribute("user");
		Users user = usersService.queryUserByuName(curUser.getuName());
		map.put("user", user);
		return map;
	}
	
}
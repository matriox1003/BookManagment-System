package com.serviceImpl;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.UsersDao;
import com.entity.Users;
import com.service.UsersService;

@Service
public class UsersServiceImpl implements UsersService {
	
	@Autowired
	private UsersDao usersDao;
	
	@Override
	public Users queryUser(String uName, String uPassword) {
		Users user = usersDao.queryUser(uName, uPassword);
//		System.out.println(uName + " " + uPassword);
		return user;
	}

	@Override
	public List<Users> queryUserRange(int start, int num) {
		List<Users> userList = usersDao.queryUserRange(start, num);
		return userList;
	}

	@Override
	public Integer queryUserCount() {
		Integer userCount = usersDao.queryUserCount();
		return userCount;
	}

	@Override
	public Users queryUserByuName(String uName) {
		Users user = usersDao.queryUserByuName(uName);
		return user;
	}

	@Override
	public Integer insertUser(Users user) {
		Integer affectRows = usersDao.insertUser(user);
		return affectRows;
	}

	@Override
	public Integer deleteUserByuId(int uId) {
		Integer affectRows = usersDao.deleteUserByuId(uId);
		return affectRows;
	}

	@Override
	public Integer putUser(Users user) {
		Integer affectRows = usersDao.putUser(user);
		return affectRows;
	}
	
	
}

package com.service;

import java.util.List;

import com.entity.Users;

public interface UsersService {
	
	/**
	 * 查询用户
	 * @param uName	用户名
	 * @param uPassword	密码
	 * @return
	 */
	public Users queryUser(String uName, String uPassword);
	
	/**
	 * 查询某个区间所有用户
	 * @param start	查询开始索引
	 * @param num 查询的数目
	 * @return 查询到的用户集合
	 */
	public List<Users> queryUserRange(int start, int num);
	
	/**
	 *  查询用户数量
	 * @return 查询到的用户数量
	 */
	public Integer queryUserCount();
	
	/**
	 * 按照用户名 查找用户
	 * @param uName	用户名
	 * @return 查找到的用户
	 */
	public Users queryUserByuName(String uName);
	
	/**
	 * 插入用户
	 * @param user  要插入用户
	 * @return 插入的自增主键
	 */
	public Integer insertUser(Users user);
	
	/**
	 * 根据用户ID 删除用户
	 * @param uId 用户ID
	 * @return 删除成功返回true 否则返回false
	 */
	public Integer deleteUserByuId(int uId);
	
	/**
	 * 更新用户信息
	 * @param user 用户信息
	 * @return 影响的行数
	 */
	public Integer putUser(Users user);
}

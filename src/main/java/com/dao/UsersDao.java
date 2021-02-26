/**
 * 
 */
package com.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.entity.Users;

/**
 * 用户实体类接口
 *
 */

@Repository
public interface UsersDao {
	
	/**
	 * 通过用户名密码查找用户
	 * @param uName	用户名
	 * @param uPassword 密码
	 * @return 查询到的用户信息
	 */
	public Users queryUser(@Param("uName") String uName, @Param("uPassword") String uPassword);
	
	/**
	 * 查询所有用户
	 * @param start 查询开始索引
	 * @param num 查询的条数
	 * @return
	 */
	public List<Users> queryUserRange(@Param("start") int start, @Param("num") int num);
	
	/**
	 * 查询用户数量
	 * @return 查询的用户数量
	 */
	public Integer queryUserCount();
	
	/**
	 * 通过用户名 查找用户
	 * @param uName 用户名
	 * @return 查找到的用户
	 */
	public Users queryUserByuName(@Param("uName") String uName);
	
	/**
	 * 插入用户
	 * @param user 要插入的用户
	 * @return 影响的行数
	 */
	public Integer insertUser(Users user);
	
	/**
	 * 根据用户ID 删除用户
	 * @param uId 用户ID
	 * @return 删除成功返回true 否则返回false
	 */
	public Integer deleteUserByuId(@Param("uId") int uId);
	
	/**
	 * 更新用户信息
	 * @param user 用户信息
	 * @return 影响的行数
	 */
	public Integer putUser(Users user);
	
}

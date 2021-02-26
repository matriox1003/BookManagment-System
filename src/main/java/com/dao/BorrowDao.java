package com.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.entity.Borrow;

/**
 * 借阅图书接口
 *
 */

public interface BorrowDao {
	
	/**
	 * 通过用户ID进行查询
	 * @param uId 用户ID
	 * @return 借阅信息集合
	 */
	public List<Borrow> queryBorrowByuId(@Param("uId") int uId);
	
	/**
	 * 插入订单记录
	 * @param bid 图书编号
	 * @param uId 用户ID
	 * @return 影响的行数
	 */
	public Integer insertBorrow(@Param("bId") int bId, @Param("uId") int uId);
	
	
	/**
	 * 还书
	 * @param bId 图书编号
	 * @param uId 用户ID
	 * @return 影响的行数
	 */
	public Integer updateBorrow(@Param("bId") int bId, @Param("uId") int uId);
	
	/**
	 * 查询罚款金额
	 * @param bId 图书编号
	 * @param uId 用户Id
	 * @return 罚款金额
	 */
	public float queryPenaltyById(@Param("bId") int bId, @Param("uId") int uId);
	
	/**
	 * 删除借阅信息
	 * @param bId 图书编号 
	 * @param uId 用户编号
	 * @return 影响的行数
	 */
	public Integer deleteBorrow(@Param("bId") int bId, @Param("uId") int uId);

	
	
	/**
	 * 通过用户ID 查询借阅表的图书编号
	 * @param uId 用户ID
	 * @return 图书编号集合
	 */
	public List<Integer> querybIdByuId(@Param("uId") int uId);
}

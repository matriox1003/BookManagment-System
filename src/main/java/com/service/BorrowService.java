package com.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.entity.Borrow;

public interface BorrowService {
	
	/**
	 * 通过用户ID进行查询
	 * @param uId 用户ID
	 * @return 借阅信息集合
	 */
	public List<Borrow> queryBorrowByuId(int uId);
	
	/**
	 * 插入订单记录
	 * @param bId 图书编号
	 * @param uId 用户ID
	 * @return 影响的行数
	 */
	public Integer insertBorrow(int bId, int uId);
	
	
	/**
	 * 还书
	 * @param bId 图书编号
	 * @param uId 用户ID
	 * @return 影响的行数
	 */
	public Integer updateBorrow(int bId, int uId);
	
	/**
	 * 查询罚款金额
	 * @param bId 图书编号
	 * @param uId 用户Id
	 * @return 罚款金额
	 */
	public float queryPenaltyById(int bId, int uId);
	
	/**
	 * 删除借阅信息
	 * @param bId 图书编号 
	 * @param uId 用户编号
	 * @return 影响的行数
	 */
	public Integer deleteBorrow(int bId, int uId);
	
	
	/**
	 * 通过用户ID 查询借阅表的图书编号
	 * @param uId 用户ID
	 * @return 图书编号集合
	 */
	public List<Integer> querybIdByuId(int uId);
}

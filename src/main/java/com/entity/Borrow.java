package com.entity;

import java.util.Date;

/**
 * Borrow 实体类
 *
 */

public class Borrow {
	private int bId;					// 图书编号
	private int uId;					// 用户ID
	private Date boTime;				// 借阅时间
	private Date boReturnTime;			// 还书时间
	private String boState;				// 借阅状态
	private float penalty;				// 罚款金额
	/**
	 * @return the bId
	 */
	public int getbId() {
		return bId;
	}
	/**
	 * @param bId the bId to set
	 */
	public void setbId(int bId) {
		this.bId = bId;
	}
	/**
	 * @return the uId
	 */
	public int getuId() {
		return uId;
	}
	/**
	 * @param uId the uId to set
	 */
	public void setuId(int uId) {
		this.uId = uId;
	}
	/**
	 * @return the boTime
	 */
	public Date getBoTime() {
		return boTime;
	}
	/**
	 * @param boTime the boTime to set
	 */
	public void setBoTime(Date boTime) {
		this.boTime = boTime;
	}
	/**
	 * @return the boReturnTime
	 */
	public Date getBoReturnTime() {
		return boReturnTime;
	}
	/**
	 * @param boReturnTime the boReturnTime to set
	 */
	public void setBoReturnTime(Date boReturnTime) {
		this.boReturnTime = boReturnTime;
	}
	/**
	 * @return the boState
	 */
	public String getBoState() {
		return boState;
	}
	/**
	 * @param boState the boState to set
	 */
	public void setBoState(String boState) {
		this.boState = boState;
	}
	/**
	 * @return the penalty
	 */
	public float getPenalty() {
		return penalty;
	}
	/**
	 * @param penalty the penalty to set
	 */
	public void setPenalty(float penalty) {
		this.penalty = penalty;
	}
	@Override
	public String toString() {
		return "Borrow [bId=" + bId + ", uId=" + uId + ", boTime=" + boTime + ", boReturnTime=" + boReturnTime
				+ ", boState=" + boState + ", penalty=" + penalty + "]";
	}
	
	
}

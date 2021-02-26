package com.entity;

/**
 * Users 实体类
 *
 */

public class Users {
	private int uId;			// 用户ID
	private int uType;			// 用户类型
	private String uName;		// 用户名
	private String uPassword;	// 用户密码
	private String uWorkplace;	// 工作地点
	private String uAddress;	// 家庭住址
	private String uTel;		// 电话
	
	
	public Users() {}
	
	/**
	 * @return the uName
	 */
	public String getuName() {
		return uName;
	}
	/**
	 * @param uName the uName to set
	 */
	public void setuName(String uName) {
		this.uName = uName;
	}
	/**
	 * @return the uPassword
	 */
	public String getuPassword() {
		return uPassword;
	}
	/**
	 * @param uPassword the uPassword to set
	 */
	public void setuPassword(String uPassword) {
		this.uPassword = uPassword;
	}
	/**
	 * @return the uId
	 */
	public int getuId() {
		return uId;
	}
	/**
	 * @return the uType
	 */
	public int getuType() {
		return uType;
	}
	
	
	
	/**
	 * @return the uWorkplace
	 */
	public String getuWorkplace() {
		return uWorkplace;
	}

	/**
	 * @param uWorkplace the uWorkplace to set
	 */
	public void setuWorkplace(String uWorkPlace) {
		this.uWorkplace = uWorkPlace;
	}

	/**
	 * @return the uAddress
	 */
	public String getuAddress() {
		return uAddress;
	}

	/**
	 * @param uAddress the uAddress to set
	 */
	public void setuAddress(String uAddress) {
		this.uAddress = uAddress;
	}

	/**
	 * @return the uTel
	 */
	public String getuTel() {
		return uTel;
	}

	/**
	 * @param uTel the uTel to set
	 */
	public void setuTel(String uTel) {
		this.uTel = uTel;
	}

	/**
	 * @param uId the uId to set
	 */
	public void setuId(int uId) {
		this.uId = uId;
	}

	/**
	 * @param uType the uType to set
	 */
	public void setuType(int uType) {
		this.uType = uType;
	}

	@Override
	public String toString() {
		String str = "";
		str += "用户 ID：" + uId + " ";
		str += "用户类型：" + uType + " ";
		str += "用户名：" + uName + " ";
		str += "用户密码：" + uPassword + " ";
		str += "所在学校或单位：" + uWorkplace + " ";
		str += "家庭住址：" + uAddress + " ";
		str += "联系电话：" + uTel + " ";
		return str;
	}
	
	
}

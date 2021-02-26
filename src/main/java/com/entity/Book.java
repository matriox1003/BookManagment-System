package com.entity;

/**
 * Book 实体类
 *
 */

public class Book {
	private int bId;			// 图书编号
	private String bType;		// 图书类别
	private String bName;		// 图书名称
	private int bNumber;		// 馆藏数量
	private String bWriter;		// 图书作者
	private String bPublic;		// 出版社
	private String bState;		// 借阅状态
	
	
	public Book() {}
	
	/**
	 * @return the bType
	 */
	public String getbType() {
		return bType;
	}
	/**
	 * @param bType the bType to set
	 */
	public void setbType(String bType) {
		this.bType = bType;
	}

	/**
	 * @return the bName
	 */
	public String getbName() {
		return bName;
	}
	/**
	 * @param bName the bName to set
	 */
	public void setbName(String bName) {
		this.bName = bName;
	}
	/**
	 * @return the bNumber
	 */
	
	/**
	 * @return the bWriter
	 */
	public String getbWriter() {
		return bWriter;
	}
	/**
	 * @return the bNumber
	 */
	public int getbNumber() {
		return bNumber;
	}

	/**
	 * @param bNumber the bNumber to set
	 */
	public void setbNumber(int bNumber) {
		this.bNumber = bNumber;
	}

	/**
	 * @param bId the bId to set
	 */
	public void setbId(int bId) {
		this.bId = bId;
	}

	/**
	 * @param bWriter the bWriter to set
	 */
	public void setbWriter(String bWriter) {
		this.bWriter = bWriter;
	}
	/**
	 * @return the bPublic
	 */
	public String getbPublic() {
		return bPublic;
	}
	/**
	 * @param bPublic the bPublic to set
	 */
	public void setbPublic(String bPublic) {
		this.bPublic = bPublic;
	}
	/**
	 * @return the bId
	 */
	public int getbId() {
		return bId;
	}

	/**
	 * @return the bState
	 */
	public String getbState() {
		return bState;
	}

	/**
	 * @param bState the bState to set
	 */
	public void setbState(String bState) {
		this.bState = bState;
	}

	@Override
	public String toString() {
		return "Book [bId=" + bId + ", bType=" + bType + ", bName=" + bName + ", bNumber=" + bNumber + ", bWriter="
				+ bWriter + ", bPublic=" + bPublic + ", bState=" + bState + "]";
	}
	
	
}

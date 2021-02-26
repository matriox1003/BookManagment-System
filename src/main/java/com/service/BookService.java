package com.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.entity.Book;

public interface BookService {
	
	/**
	 * 查询某个区间的所有图书
	 * @param start	开始查询的位置
	 * @param offset 查询的数量
	 * @return 查询到的图书
	 */
	public List<Book> queryBookRange(int start, int offset);
	
	/**
	 * 查询图书总数
	 * @return 图书总数
	 */
	public Integer queryBookCount();
	
	/**
	 * 按照图书类别查询图书区间值
	 * @param bType 图书类别
	 * @Param start 开始查找得索引
	 * @param offset 查询的数量
	 * @return 类别的图书集合
	 */
	 public List<Book> queryBookBybTypeRange(String bType, int start, int offset);
	 
	 /**
	  * 按图书名称查找区间值
	  * @param bName 图书名称
	  * @param start 开始查找的索引
	  * @param offset 查找的数量
	  * @return 查找到的图书
	  */
	 public List<Book> queryBookBybNameRange(String bName, int start, int offset);
	
	/**
	 * 按照作者查询图书区间值
	 * @param bWriter 作者
	 * @param start 开始查找的索引
	 * @param offset 查找的数量
	 * @return bWriter的所有图书集合
	 */
	 public List<Book> queryBookBybWriterRange(String bWriter, int start, int offset);
	
	/**
	 * 按照出版社查询图书区间值
	 * @param bPublic 出版社
	 * @param start 开始查找的索引
	 * @param offset 查找的数量
	 * @return bPublic的所有图书集合
	 */
	public List<Book> queryBookBybPublicRange(String bPublic, int start, int offset);
	
	/**
	 * 按书名查找单个图书
	 * @param bName 书名
	 * @return 查询到的图书
	 */
	 public Book queryBookBybName(String bName);
	
	
	/**
	 * 插入图书
	 * @param book 要插入的图书
	 * @return 插入成功返回1  否则返回0
	 */
	public Integer insertBook(Book book);
	
	/**
	 * 修改图书信息
	 * @param book 要修改的图书
	 * @return 修改成功返回1 修改失败返回0
	 */
	public Integer updateBook(Book book);
	
	/**
	 * 根据图书编号删除图书
	 * @param bId 图书编号
	 * @return 删除成功返回1 否则返回0
	 */
	public Integer deleteBookBybId(int bId);
	
	/**
	 * 按图书类型查找图书数量
	 * @param bType 图书类型
	 * @return 查找到的图书数量
	 */
	public Integer queryBookBybTypeCount(String bType);
	
	/**
	 * 按图书名称查找图书数量
	 * @param bName 图书名称
	 * @return 查找到的图书数量
	 */
	public Integer queryBookBybNameCount(String bName);
	
	/**
	 * 按图书作者查找图书数量
	 * @param bWriter 图书作者
	 * @return 查找到的图书数量
	 */
	public Integer queryBookBybWriterCount(String bWriter);
	
	/**
	 * 按图书出版社查找图书数量
	 * @param bPublic 图书出版社
	 * @return 查找到的图书数量
	 */
	public Integer queryBookBybPublicCount(String bPublic);
}

package com.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.BorrowDao;
import com.entity.Borrow;
import com.service.BorrowService;

@Service
public class BorrowServiceImpl implements BorrowService {

	@Autowired
	private BorrowDao borrowDao;
	
	@Override
	public List<Borrow> queryBorrowByuId(int uId) {
		List<Borrow> borrowList = borrowDao.queryBorrowByuId(uId);
		return borrowList;
	}

	@Override
	public Integer insertBorrow(int bId, int uId) {
		Integer affectRows = borrowDao.insertBorrow(bId, uId);
		return affectRows;
	}

	@Override
	public Integer updateBorrow(int bId, int uId) {
		Integer affectRows = borrowDao.updateBorrow(bId, uId);
		return affectRows;
	}

	@Override
	public Integer deleteBorrow(int bId, int uId) {
		Integer affectRows = borrowDao.deleteBorrow(bId, uId);
		return affectRows;
	}

	@Override
	public float queryPenaltyById(int bId, int uId) {
		float penalty =  borrowDao.queryPenaltyById(bId, uId);
		return penalty;
	}


	@Override
	public List<Integer> querybIdByuId(int uId) {
		List<Integer> bIdList = borrowDao.querybIdByuId(uId);
		return bIdList;
	}

}

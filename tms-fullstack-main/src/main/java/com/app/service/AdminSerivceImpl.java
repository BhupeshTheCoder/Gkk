package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.dao.OrdersRepository;
import com.app.pojos.Admin;
import com.app.pojos.Orders;

@Service
@Transactional
public class AdminSerivceImpl implements IAdminService {

	// dependency : DAO layer i/f
	@Autowired
	private AdminRepository adminRepo;

	@Autowired
	private OrdersRepository orderRepo;

	@Override
	public Admin authenticateAdmin(String email, String password) {
		Optional<Admin> admin = adminRepo.authenticateAdmin(email, password);
		if (admin.isPresent()) {
			System.out.println(admin.get());
			return admin.get();
		} else {
			System.out.println("not present");
			return null;
		}

	}

	@Override
	public List<Orders> getAllOrders() {
		return orderRepo.findAll();
	}
}

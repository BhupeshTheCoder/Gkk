package com.app.service;

import java.util.List;

import com.app.pojos.Admin;
import com.app.pojos.Orders;

public interface IAdminService {
	Admin authenticateAdmin(String email, String password);

	List <Orders> getAllOrders();

}

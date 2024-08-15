package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Integer> {

	public Orders findByOrderId(String orderId);

	@Query("select o from Orders o where o.customerId=:custId")
	public List<Orders> getAllCustomerById(int custId);

	@Query("select o from Orders o where o.homeMakerId=:hmId")
	public List<Orders> getAllHomeMakerById(int hmId);
}

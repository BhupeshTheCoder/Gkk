package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	// add a method to find a customer by it's email n password
	@Query("select c from Customer c  where c.email=:email and c.password = :password")
	Optional<Customer> authenticateCustomer(@Param("email") String email, @Param("password") String password);

	Customer findByEmail(String email);

	Customer findByHomeMakerId(int hmId);
}
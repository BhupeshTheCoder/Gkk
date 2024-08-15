package com.app.service;

import java.util.List;

import com.app.dto.CustomerDTO;
import com.app.pojos.Customer;
import com.app.pojos.HomeMaker;

public interface ICustomerService {
	Customer authenticateCustomer(String email, String password);

	CustomerDTO signUpCustomer(Customer customer);

	Customer addMyHomeMaker(int hmId, int custId);

	HomeMaker getMyHomeMaker(int custId);

	String removeMyHomeMaker(int custId);

	Customer updateUserDetails(CustomerDTO customerDTO);
	
	Customer updatePackage(String planType, String pack, Customer customer);
	
	List<CustomerDTO> getAllCustomers();

	String deleteUserDetails(int custId);

}
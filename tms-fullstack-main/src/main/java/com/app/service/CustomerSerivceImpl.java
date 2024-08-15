package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.CustomerHandlingException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CustomerRepository;
import com.app.dao.HomeMakerRepository;
import com.app.dto.CustomerDTO;
import com.app.pojos.Customer;
import com.app.pojos.HomeMaker;
import com.app.pojos.PlanPackage;
import com.app.pojos.PlanType;

@Service
@Transactional // OPtional BUT reco.
public class CustomerSerivceImpl implements ICustomerService {

	// dependency : DAO layer i/f
	@Autowired
	private CustomerRepository customerRepo;

	@Autowired
	private HomeMakerRepository homeMakerRepo;

	@Override
	public Customer authenticateCustomer(String email, String password) {
		Optional<Customer> customer = customerRepo.authenticateCustomer(email, password);
		if (customer.isPresent()) {
			System.out.println(customer.get());
			return customer.get();
		} else {
			System.out.println("not present");
			return null;
		}

	}

	@Override
	public CustomerDTO signUpCustomer(Customer customer) {
		
		if (customerRepo.findByEmail(customer.getEmail()) != null) {
			//"Customer Exist with this email"
			return null;
		}

		// invoke dao's method for persistence
		Customer persistentCustomer = customerRepo.save(customer);
		// for sending response copy persistent user details ---> user dto(so that you
		// can control what all to share with the front end)
		CustomerDTO dto = new CustomerDTO();
		BeanUtils.copyProperties(persistentCustomer, dto);
		return dto;
	}

	@Override
	public Customer addMyHomeMaker(int hmId, int custId) {
		System.out.println("in addHomeMaker");
		System.out.println(hmId + " " + custId);
		try {
			HomeMaker hm = homeMakerRepo.findById(hmId).get();
			Customer customer = customerRepo.findById(custId).get();
			System.out.println("after finds hm " + hm);
			System.out.println("after finds cus " + customer);

			customer.setHomeMaker(hm);
			customerRepo.save(customer);
			return customer;
		} catch (RuntimeException e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public HomeMaker getMyHomeMaker(int custId) {

		System.out.println("in getMyHomeMaker:ServiceLayer");

		try {
			Customer customer = customerRepo.findById(custId).get();
			HomeMaker hm = customer.getHomeMaker();
			System.out.println("After hm " + hm);
			return hm;
		} catch (RuntimeException e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public String removeMyHomeMaker(int custId) {
		Customer customer = customerRepo.findById(custId).get();
		customer.setHomeMaker(null);
		customerRepo.save(customer);
		return "Home maker removed Successfully !!!";
	}

	@Override
	public Customer updatePackage(String planType, String pack, Customer customer) {
		int custId = customer.getId();
		Customer persistentCustomer = customerRepo.findById(custId).get();
		persistentCustomer.setPlanType(PlanType.valueOf(planType));
		persistentCustomer.setPlanPackage(PlanPackage.valueOf(pack));
		customerRepo.save(persistentCustomer);
		System.out.println(persistentCustomer);
		return persistentCustomer;
	}

	@Override
	public Customer updateUserDetails(CustomerDTO customerDTO) {
		System.out.println("in service :  " + customerDTO);

		// fetch exsiting details from the db
		Customer persistentCustomer = customerRepo.findByEmail(customerDTO.getEmail());

		System.out.println("user dtls from db " + persistentCustomer);

		// copy updated user details coming from request payload ---> User details
		BeanUtils.copyProperties(customerDTO, persistentCustomer);

		System.out.println("updated user dtls" + persistentCustomer);

		return persistentCustomer;
		// here returning customer instead of DTO because DTO doesn't has plan and all
		// but customer does
	}

	@Override
	public List<CustomerDTO> getAllCustomers() {

		List<CustomerDTO> dtoList = new ArrayList<>();
		customerRepo.findAll().forEach(h -> {
			CustomerDTO dto = new CustomerDTO();
			BeanUtils.copyProperties(h, dto);
			dtoList.add(dto);
		});
		return dtoList;
	}

	@Override
	public String deleteUserDetails(int custId) {
		// below method rets persistent user of exists or throws exc
		Customer customer = customerRepo.findById(custId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID"));
		// setting the customer home maker : foreign key constraint
		customer.setHomeMaker(null);
		customerRepo.deleteById(custId);
		return "Customer  Deleted : " + custId;
	}

}

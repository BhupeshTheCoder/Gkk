package com.app.controller;

import java.security.Principal;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.OrdersRepository;
import com.app.dto.CustomerDTO;
import com.app.dto.ResponseDTO;
import com.app.pojos.Customer;
import com.app.pojos.Orders;
import com.app.service.ICustomerService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@CrossOrigin
@RestController // Mandatory class level annotation
//@RestController => @Controller on the cls level + @ResponseBody on the ret types of 
//all req handling methods, annotated with @RequestMapping / @GetMapping.....
@RequestMapping("/customer") // optional : Resource
public class CustomerController {
	// dependency
	@Autowired // autowire=byType}
	private ICustomerService customerService;

	@Autowired // used in razorpay(payment method)
	private OrdersRepository ordersRepository;

	public CustomerController() {
		super();
		//test
		System.out.println("in ctor of " + getClass().getName() + " " + customerService);
	}

	@PostConstruct
	public void anyInit() {
		System.out.println("in init of  " + getClass().getName() + " " + customerService);
	}

	// add REST clnt request handling method : for authenticating customer
	@GetMapping("/login/{email}/{password}")
	public ResponseEntity<?> authenticateCustomer(@PathVariable String email, @PathVariable String password) {
		System.out.println("in authenticate customer " + email + " " + password);
		Customer customer = customerService.authenticateCustomer(email, password);
		if (customer == null)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return ResponseEntity.ok(customer);
	}

	// add REST clnt request handling method : for signing up customer
	@PostMapping("/signup")
	public ResponseEntity<?> signUpCustomer(@RequestBody Customer customer) {
		System.out.println("In customer signup" + customer);
			CustomerDTO dto = customerService.signUpCustomer(customer);
			if(dto == null) {
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
			return ResponseEntity.ok(new ResponseDTO<>(dto));
	}

	@PutMapping("/select-homeMaker/{hmId}/{custId}")
	public ResponseEntity<?> addMyHomeMaker(@PathVariable String hmId, @PathVariable String custId) {
		System.out.println("In addHomeMaker" + " " + hmId + " " + custId);
		return ResponseEntity.ok(
				new ResponseDTO<>(customerService.addMyHomeMaker(Integer.parseInt(hmId), Integer.parseInt(custId))));
	}

	// add req handing method for getting selected homeMaker
	@GetMapping("/getMyHomeMaker/{custId}")
	public ResponseEntity<?> getMyHomeMaker(@PathVariable String custId) {

		System.out.println("in getMyHomeMaker " + custId);
		return ResponseEntity.ok(new ResponseDTO<>(customerService.getMyHomeMaker(Integer.parseInt(custId))));

	}

	@DeleteMapping("/removeMyHomeMaker/{custId}")
	public ResponseEntity<?> removeMyHomeMaker(@PathVariable String custId) {
		System.out.println("in removeMyHomeMaker " + custId);
		return ResponseEntity.ok(customerService.removeMyHomeMaker(Integer.parseInt(custId)));
	}

	// add req handing method for updating Plans
	@PutMapping("/updatePackage/{planType}/{pack}")
	public ResponseEntity<?> updatePackage(@PathVariable String planType, @PathVariable String pack,
			@RequestBody Customer customer) {
		return ResponseEntity.ok(new ResponseDTO<>(customerService.updatePackage(planType, pack, customer)));
	}

	// Add REST request handling method to update user details
	@PutMapping("/updateUserDetails")
	public ResponseEntity<?> updateUserDetails(@RequestBody CustomerDTO customerDTO) {
		System.out.println("in  : update details " + customerDTO);
		return ResponseEntity.ok(new ResponseDTO<>(customerService.updateUserDetails(customerDTO)));
	}

	// add Rest clnt request handling method : for getting all Customers
	@GetMapping("/getAllCustomers")
	public ResponseEntity<?> getAllCustomers() {
		System.out.println("in get All Customers");
		return ResponseEntity.ok(new ResponseDTO<>(customerService.getAllCustomers()));
	}

	// REST request handling method to delete user details
	@DeleteMapping("/deleteCustomer/{custId}")
	public ResponseEntity<?> deleteUserDetails(@PathVariable int custId) {
		System.out.println("in del user dtls " + custId);
		return ResponseEntity.ok(new ResponseDTO<>(customerService.deleteUserDetails(custId)));
	}
	
	// add Rest clnt request handling method : for getting all Orders of the Customer By ID
		@GetMapping("/getAllOrders/{custId}")
		public ResponseEntity<?> getAllOrders(@PathVariable String custId) {
			System.out.println("in get All Orders");
			return ResponseEntity.ok(new ResponseDTO<>(ordersRepository.getAllCustomerById(Integer.parseInt(custId))));
		}
}
package com.app.controller;

import javax.annotation.PostConstruct;

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
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.OrdersRepository;
import com.app.dto.HomeMakerDTO;
import com.app.dto.ResponseDTO;
import com.app.pojos.HomeMaker;
import com.app.service.IHomeMakerService;

@CrossOrigin
@RestController // Mandatory class level annotation
//@RestController => @Controller on the cls level + @ResponseBody on the ret types of 
//all req handling methods, annotated with @RequestMapping / @GetMapping.....
@RequestMapping("/homeMaker") // optional : Resource
public class HomeMakerController {
	// dependency
	@Autowired // autowire=byType}
	private IHomeMakerService homeMakerService;
	
	@Autowired
	private OrdersRepository ordersRepository;

	public HomeMakerController() {
		super();
		System.out.println("in ctor of " + getClass().getName() + " " + homeMakerService);
	}

	@PostConstruct
	public void anyInit() {
		System.out.println("in init of  " + getClass().getName() + " " + homeMakerService);
	}

	// add REST clnt request handling method : for authenticating customer
	@GetMapping("/login/{email}/{password}")
	public ResponseEntity<?> authenticateCustomer(@PathVariable String email, @PathVariable String password) {
		System.out.println("in authenticate HomeMaker " + email + " " + password);
		HomeMaker homeMaker = homeMakerService.authenticateHomeMaker(email, password);
		if (homeMaker == null)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return ResponseEntity.ok(homeMaker);
	}

	// add REST clnt request handling method : for signing up home maker
	@PostMapping("/signup")
	public ResponseEntity<?> signUpHomeMaker(@RequestBody HomeMaker homeMaker) {
		System.out.println("In homemaker signup" + homeMaker);
		HomeMakerDTO dto = homeMakerService.signUpHomeMaker(homeMaker);
		if (dto == null) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		return ResponseEntity.ok(new ResponseDTO<>(dto));
	}

	// add REST clnt request handling method : for getting all home maker
	@GetMapping("/get-all-home-makers")
	public ResponseEntity<?> getAllHomeMakers() {
		System.out.println("In get all home makers");
		return ResponseEntity.ok(new ResponseDTO<>(homeMakerService.getAllHomeMakers()));
	}

	// add Rest clnt request handling method : for getting particular homeMaker
	@GetMapping("/getHomeMaker/{hId}")
	public ResponseEntity<?> getHomeMaker(@PathVariable String hId) {
		System.out.println("in getHomeMaker");
		return ResponseEntity.ok(new ResponseDTO<>(homeMakerService.getHomeMakerById(Integer.parseInt(hId))));
	}

	// REST request handling method to delete user details
	@DeleteMapping("/deleteHomeMaker/{hmId}")
	public ResponseEntity<?> deleteUserDetails(@PathVariable int hmId) {
		System.out.println("in del user dtls " + hmId);
		return ResponseEntity.ok(new ResponseDTO<>(homeMakerService.deleteUserDetails(hmId)));
	}

	// Add REST request handling method to update user details
	@PutMapping("/updateUserDetails")
	public ResponseEntity<?> updateUserDetails(@RequestBody HomeMakerDTO homeMakerDTO) {
		System.out.println("in  : update details " + homeMakerDTO);
		return ResponseEntity.ok(new ResponseDTO<>(homeMakerService.updateUserDetails(homeMakerDTO)));
	}

	// add Rest clnt request handling method : for getting particular My Customer
	@GetMapping("/getMyCustomers/{hId}")
	public ResponseEntity<?> getMyCustomers(@PathVariable String hId) {
		System.out.println("in getMyCustomers " + hId);
		return ResponseEntity.ok(new ResponseDTO<>(homeMakerService.getMyCustomers(Integer.parseInt(hId))));
	}

	
	// add Rest clnt request handling method : for getting all the cities in which HomeMakers are available
	
	@GetMapping("/cities")
	public ResponseEntity<?> cities() {
		System.out.println("In cities");
		return ResponseEntity.ok(new ResponseDTO<>(homeMakerService.getAllCities()));

	}
	
	// add Rest clnt request handling method : for showing HomeMaker by City
	@GetMapping("/homeMakersByCity/{city}")
	public ResponseEntity<?> homeMakersByCity(@PathVariable String city) {

		System.out.println("In homeMakerByCity");
		return ResponseEntity.ok(new ResponseDTO<>(homeMakerService.homeMakersByCity(city)));

	}
	
	// add Rest clnt request handling method : for getting all Orders of the Customer By ID
	@GetMapping("/getAllOrders/{hmId}")
	public ResponseEntity<?> getAllOrders(@PathVariable String hmId) {
		System.out.println("in get All Orders");
		return ResponseEntity.ok(new ResponseDTO<>(ordersRepository.getAllHomeMakerById(Integer.parseInt(hmId))));
	}
}
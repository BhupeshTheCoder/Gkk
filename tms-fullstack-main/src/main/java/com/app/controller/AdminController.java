package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Admin;
import com.app.service.IAdminService;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private IAdminService adminService;

	public AdminController() {
		super();
		System.out.println("in ctor of " + getClass().getName() + " " + adminService);
	}

	// add REST clnt request handling method : for authenticating Admin
	@GetMapping("/login/{email}/{password}")
	public ResponseEntity<?> authenticateAdmin(@PathVariable String email, @PathVariable String password) {
		System.out.println("in authenticate admin " + email + " " + password);
		Admin admin = adminService.authenticateAdmin(email, password);
		if (admin == null)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return ResponseEntity.ok(admin);
	}
	
	@GetMapping("/getAllOrders")
	public ResponseEntity<?> getAllOrders(){
		adminService.getAllOrders().forEach(System.out::println);
		return  ResponseEntity.ok(adminService.getAllOrders());
	}

}
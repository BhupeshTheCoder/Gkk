package com.app.service;

import java.util.List;

import com.app.dto.CustomerDTO;
import com.app.dto.HomeMakerDTO;
import com.app.pojos.HomeMaker;

public interface IHomeMakerService {
	HomeMaker authenticateHomeMaker(String emailId, String pswd);

	HomeMakerDTO signUpHomeMaker(HomeMaker homeMaker);
	
	List<HomeMakerDTO> getAllHomeMakers();

	HomeMaker getHomeMakerById(int hId);

	String deleteUserDetails(int hmId);
	
	HomeMaker updateUserDetails(HomeMakerDTO homeMakerDto);

	List<CustomerDTO> getMyCustomers(int hId);

	List<HomeMakerDTO> homeMakersByCity(String city);

	List<String> getAllCities();
}

package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.HomeMakerRepository;
import com.app.dto.CustomerDTO;
import com.app.dto.HomeMakerDTO;
import com.app.pojos.HomeMaker;

@Service
@Transactional // OPtional BUT reco.
public class HomeMakerSerivceImpl implements IHomeMakerService {

	// dependency : DAO layer i/f
	@Autowired
	private HomeMakerRepository homeMakerRepo;

	@Override
	public HomeMaker authenticateHomeMaker(String emailId, String pswd) {
		Optional<HomeMaker> homeMaker = homeMakerRepo.authenticateHomeMaker(emailId, pswd);
		if (homeMaker.isPresent()) {
			System.out.println(homeMaker.get());
			return homeMaker.get();
		} else {
			System.out.println("not present");
			return null;
		}
	}

	@Override
	public HomeMakerDTO signUpHomeMaker(HomeMaker homeMaker) {

		if (homeMakerRepo.findByEmail(homeMaker.getEmail()) != null) {
			// "Home Maker Exist with this email"
			return null;
		}
		// invoke dao's method for persistence
		HomeMaker persistentHomeMaker = homeMakerRepo.save(homeMaker);
		// for sending response copy persistent user details ---> user dto(so that you
		// can control what all to share with the front end)
		HomeMakerDTO dto = new HomeMakerDTO();
		BeanUtils.copyProperties(persistentHomeMaker, dto);
		return dto;
	}

	@Override
	public List<HomeMakerDTO> getAllHomeMakers() {
		List<HomeMakerDTO> dtoList = new ArrayList<>();
		homeMakerRepo.findAll().forEach(h -> {
			HomeMakerDTO dto = new HomeMakerDTO();
			BeanUtils.copyProperties(h, dto);
			dtoList.add(dto);
		});
		return dtoList;
	}

	@Override
	public HomeMaker getHomeMakerById(int hId) {
		try {
			HomeMaker hm = homeMakerRepo.findById(hId).get();
			return hm;
		} catch (RuntimeException e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public String deleteUserDetails(int hmId) {
		// below method rets persistent user of exists or throws exc
		HomeMaker homeMaker = homeMakerRepo.findById(hmId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID"));
		// setting the customer home maker : foreign key constraint
		// customer.setHomeMaker(null);
		homeMakerRepo.deleteById(hmId);
		return "HomeMaker  Deleted : " + hmId;
	}

	@Override
	public HomeMaker updateUserDetails(HomeMakerDTO homeMakerDTO) {
		System.out.println("in service :  " + homeMakerDTO);

		// fetch exsiting details from the db
		HomeMaker persistentHomeMaker = homeMakerRepo.findByEmail(homeMakerDTO.getEmail());

		System.out.println("user dtls from db " + persistentHomeMaker);

		// copy updated user details coming from request payload ---> User details
		BeanUtils.copyProperties(homeMakerDTO, persistentHomeMaker);

		System.out.println("updated user dtls" + persistentHomeMaker);

		return persistentHomeMaker;
		// here returning customer instead of DTO because DTO doesn't has plan and all
		// but customer does
	}

	@Override
	public List<CustomerDTO> getMyCustomers(int hId) {
		try {
			HomeMaker hm = homeMakerRepo.findById(hId).get();

			List<CustomerDTO> dtoList = new ArrayList<>();

			hm.getCustomers().forEach(c -> {
				CustomerDTO dto = new CustomerDTO();
				BeanUtils.copyProperties(c, dto);
				dtoList.add(dto);
			});

			return dtoList;

		} catch (RuntimeException e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	// Service Method
	@Override
	public List<HomeMakerDTO> homeMakersByCity(String city) {

		System.out.println("In HomeMaker Service");
		List<HomeMakerDTO> dtoList = new ArrayList<>();
		homeMakerRepo.findByCity(city).forEach(h -> {
			HomeMakerDTO dto = new HomeMakerDTO();
			BeanUtils.copyProperties(h, dto);
			dtoList.add(dto);
		});

		System.out.println("After retriving");
		return dtoList;
	}

	@Override
	public List<String> getAllCities() {
		List<String> cities = new ArrayList<>();
		homeMakerRepo.getAllCities().forEach(c -> {
			cities.add(c);
		});
		cities.forEach(System.out::println);
		return cities;
	}
}

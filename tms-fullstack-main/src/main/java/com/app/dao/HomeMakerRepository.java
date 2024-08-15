package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.dto.HomeMakerDTO;
import com.app.pojos.HomeMaker;

public interface HomeMakerRepository extends JpaRepository<HomeMaker, Integer> {
	@Query("select h from HomeMaker h  where h.email=:email and h.password = :password")
	Optional<HomeMaker> authenticateHomeMaker(@Param("email") String email, @Param("password") String password);

	HomeMaker findByEmail(String email);

	List<HomeMaker> findByCity(String city);

	@Query("select distinct city from HomeMaker")
	List<String> getAllCities();

}
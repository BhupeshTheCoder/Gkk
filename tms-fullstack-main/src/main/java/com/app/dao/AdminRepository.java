package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	// add a method to find a admin by it's email n password
	@Query("select a from Admin a  where a.email=:email and a.password = :password")
	Optional<Admin> authenticateAdmin(@Param("email") String email, @Param("password") String password);
}
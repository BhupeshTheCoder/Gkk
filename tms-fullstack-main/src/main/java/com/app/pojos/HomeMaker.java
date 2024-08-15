package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "home_maker")
public class HomeMaker extends BaseEntity {

	@Column(length = 50, unique = true)
	private String email;
	@Column(length = 50, nullable = false)
	private String password;

	@Column(length = 50)
	private String name;

	@Column(length = 15)
	private String phoneNo;

	@Column(name = "primary_address")
	private String primaryAddress;

	@Column(length = 50)
	private String city;

	@Column(length = 50)
	private String state;

	@Column(length = 50)
	private String country;

	@Column(length = 10)
	private Integer pincode;

	@OneToMany(mappedBy = "homeMaker", fetch = FetchType.LAZY, orphanRemoval = true)
	@JsonIgnoreProperties("homeMaker")
	@JsonIgnore
	private List<Customer> customers = new ArrayList<>();

	public HomeMaker() {
		super();
		// TODO Auto-generated constructor stub
	}

	public HomeMaker(String email, String password, String name, String phoneNo, String primaryAddress, String city,
			String state, String country, Integer pincode) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.phoneNo = phoneNo;
		this.primaryAddress = primaryAddress;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "HomeMaker [email=" + email + ", password=" + password + ", name=" + name + ", phoneNo=" + phoneNo
				+ ", primaryAddress=" + primaryAddress + ", city=" + city + ", state=" + state + ", country=" + country
				+ ", pincode=" + pincode + "]";
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getPrimaryAddress() {
		return primaryAddress;
	}

	public void setPrimaryAddress(String primaryAddress) {
		this.primaryAddress = primaryAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public List<Customer> getCustomers() {
		return customers;
	}

	public void setCustomers(List<Customer> customers) {
		this.customers = customers;
	}

	// helper Method
	public void addCustomer(Customer c) {
		customers.add(c);
		c.setHomeMaker(this);
	}

	public void removeCustomer(Customer c) {
		customers.remove(c);
		c.setHomeMaker(null);
	}

}

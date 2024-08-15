package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// these are changes
@Entity
@Table(name = "customer")
public class Customer extends BaseEntity {

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

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "h_id", nullable = true)
	@JsonIgnoreProperties("customers")
	@JsonIgnore
	private HomeMaker homeMaker;

	@Enumerated(EnumType.STRING)
	private PlanType planType;

	@Enumerated(EnumType.STRING)
	private PlanPackage planPackage;

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(String email, String password, String name, String phoneNo, String primaryAddress, String city,
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
		return "Customer [email=" + email + ", password=" + password + ", name=" + name + ", phoneNo=" + phoneNo
				+ ", primaryAddress=" + primaryAddress + ", city=" + city + ", state=" + state + ", country=" + country
				+ ", pincode=" + pincode + ", planType=" + planType + ", planPackage=" + planPackage + "]";
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

	public HomeMaker getHomeMaker() {
		return homeMaker;
	}

	public void setHomeMaker(HomeMaker homeMaker) {
		this.homeMaker = homeMaker;
	}

	public PlanType getPlanType() {
		return planType;
	}

	public void setPlanType(PlanType planType) {
		this.planType = planType;
	}

	public PlanPackage getPlanPackage() {
		return planPackage;
	}

	public void setPlanPackage(PlanPackage planPackage) {
		this.planPackage = planPackage;
	}

}

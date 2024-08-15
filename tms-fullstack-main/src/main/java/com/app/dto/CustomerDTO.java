package com.app.dto;

import com.app.pojos.PlanPackage;
import com.app.pojos.PlanType;

public class CustomerDTO {

	private int id;
	private String email;
	private String name;
	private String phoneNo;
	private String primaryAddress;
	private String city;
	private String state;
	private String country;
	private Integer pincode;
	private PlanType planType;
	private PlanPackage planPackage;

	public CustomerDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "CustomerDTO [id=" + id + ", email=" + email + ", name=" + name + ", phoneNo=" + phoneNo
				+ ", primaryAddress=" + primaryAddress + ", city=" + city + ", state=" + state + ", country=" + country
				+ ", pincode=" + pincode + ", planType=" + planType + ", planPackage=" + planPackage + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

package com.app.dto;

public class HomeMakerDTO {

	private int id;
	private String email;
	private String name;
	private String phoneNo;
	private String primaryAddress;
	private String city;
	private String state;
	private String country;
	private Integer pincode;

	public HomeMakerDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public HomeMakerDTO(int id, String email, String name, String phoneNo, String primaryAddress, String city,
			String state, String country, Integer pincode) {
		super();
		this.id = id;
		this.email = email;
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
		return "HomeMakerDTO [id=" + id + ", email=" + email + ", name=" + name + ", phoneNo=" + phoneNo
				+ ", primaryAddress=" + primaryAddress + ", city=" + city + ", state=" + state + ", country=" + country
				+ ", pincode=" + pincode + "]";
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

}

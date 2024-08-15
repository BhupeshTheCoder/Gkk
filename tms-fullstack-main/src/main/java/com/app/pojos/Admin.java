package com.app.pojos;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin extends BaseEntity {

	@Column(length = 50, unique = true)
	private String email;

	@Column(length = 50, nullable = false)
	private String password;

	@Column(length = 50)
	private String name;

	@Column(length = 10)
	private String phoneNo;

	@Column(length = 10, unique = true)
	private String alternateNo;

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(String email, String password, String name, String phoneNo, String alternateNo) {
		super();

		this.email = email;
		this.password = password;
		this.name = name;
		this.phoneNo = phoneNo;
		this.alternateNo = alternateNo;
	}

	@Override
	public String toString() {
		return "Admin, email=" + email + ", password=" + password + ", name=" + name + ", phoneNo=" + phoneNo
				+ ", alternateNo=" + alternateNo + "]";
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

	public String getAlternateNo() {
		return alternateNo;
	}

	public void setAlternateNo(String alternateNo) {
		this.alternateNo = alternateNo;
	}
}

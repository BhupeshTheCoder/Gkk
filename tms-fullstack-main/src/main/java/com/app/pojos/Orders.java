package com.app.pojos;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Orders extends BaseEntity {

	@Column(name = "order_amount_paise")
	private String amount; // amount

	@Column(name = "order_id")
	private String orderId;

	@Column(name = "payment_id")
	private String paymentId;

	private String receipt;

	private String status;

	@Column(name="date_time")
	private LocalDateTime dateTime;

	private int customerId;

	private int homeMakerId;

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getReceipt() {
		return receipt;
	}

	public void setReceipt(String receipt) {
		this.receipt = receipt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDateTime getDateTime() {
		return dateTime;
	}

	public void setDateTime() {
		this.dateTime = LocalDateTime.now();
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getHomeMakerId() {
		return homeMakerId;
	}

	public void setHomeMakerId(int homeMakerId) {
		this.homeMakerId = homeMakerId;
	}

	@Override
	public String toString() {
		return "Orders [amount=" + amount + ", orderId=" + orderId + ", paymentId=" + paymentId + ", receipt=" + receipt
				+ ", status=" + status + ", dateTime=" + dateTime + ", customerId=" + customerId + ", homeMakerId="
				+ homeMakerId + "]";
	}

}

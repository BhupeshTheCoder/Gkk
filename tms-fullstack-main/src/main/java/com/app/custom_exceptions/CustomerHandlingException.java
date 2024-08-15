package com.app.custom_exceptions;

@SuppressWarnings("serial")
public class CustomerHandlingException extends RuntimeException {
	public CustomerHandlingException(String mesg) {
		super(mesg);
	}
}

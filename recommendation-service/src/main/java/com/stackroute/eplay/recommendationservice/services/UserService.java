package com.stackroute.eplay.recommendationservice.services;

import com.stackroute.eplay.recommendationservice.domain.City;
import com.stackroute.eplay.recommendationservice.domain.User;

public interface UserService {
	public User saveUser(User user);
	public City getCityOfUser(String userName);
	// public User getAllFollowers(String name);
}

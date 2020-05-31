package airbean.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import airbean.model.User;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User getUser(int id) {
		return userRepository.findById(id).orElse(null);
	}

	public User addOrGetUser(String name, String email) {
		User user = userRepository.findByNameAndEmail(name, email).orElse(null);
		if (user == null) {
			user = new User(name, email);
			return addAndGetUser(user);
		} else {
			return user;
		}
	}

	public User addAndGetUser(User user) {
		User addedUser = userRepository.save(user);
		return addedUser;

	}

	public void updateUser(User user) {
		userRepository.save(user);
	}

}

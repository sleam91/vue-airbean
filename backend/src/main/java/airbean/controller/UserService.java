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

	public User getUser(String name, String email) {
		User user = userRepository.findByNameAndEmail(name, email).orElse(null);
		if (user != null)
			System.out.println(user.getId() + " " + user.getEmail() + " " + user.getName());
		if (user == null) {
			user = new User(name, email);
			return addAndGetUser(user);
		} else {
			return user;
		}
	}

	public User addAndGetUser(User user) {
		User addedUser = userRepository.save(user);
		System.out.println("old user "+user.getId());
		System.out.println("user from DB "+addedUser.getId());
		return addedUser;

	}

	public void updateUser(User user) {
		userRepository.save(user);
	}

}

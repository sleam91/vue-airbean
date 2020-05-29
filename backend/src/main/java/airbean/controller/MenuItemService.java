package airbean.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import airbean.model.MenuItem;

@Service
public class MenuItemService {

	@Autowired
	private MenuItemRepository menuItemRepository;

	public List<MenuItem> getAllItems() {
		return menuItemRepository.findAll();
	}

	public void addItem(MenuItem menuItem) {
		menuItemRepository.save(menuItem);

	}


}

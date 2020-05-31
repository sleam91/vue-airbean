package airbean.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import airbean.model.MenuItem;

@RestController
public class MenuItemController {
	
	@Autowired
	private MenuItemService menuItemService;
	
	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping("/api/menuitems")
	public List<MenuItem> getAllItems() {
		return menuItemService.getAllItems();
	}
	
	
	@CrossOrigin(origins = "http://localhost:8080")
	@PostMapping("/api/menuitems")
	public void addItem(@RequestBody MenuItem menuItem) {
		menuItemService.addItem(menuItem);
	}

	
}

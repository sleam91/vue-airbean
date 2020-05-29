package airbean.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MenuItem {

	@Id
	private int id;
	private String title;
	private String desc;
	private int price;

	public MenuItem() {

	}

	public MenuItem(int id, String title, String desc, int price) {
		super();
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

}

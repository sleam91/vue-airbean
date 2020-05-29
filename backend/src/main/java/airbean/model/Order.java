package airbean.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Order {

	@Id
	private String orderNo;
	private String date;
	@OneToMany
	private List<MenuItem> items;
	private String eta;
	private int total;

	public Order() {
	}

	public Order(String orderNo, String date, List<MenuItem> items, String eta, int total) {
		super();
		this.orderNo = orderNo;
		this.date = date;
		this.items = items;
		this.eta = eta;
		this.total = total;
	}

	public String getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public List<MenuItem> getItems() {
		return items;
	}

	public void setItems(List<MenuItem> items) {
		this.items = items;
	}

	public String getEta() {
		return eta;
	}

	public void setEta(String eta) {
		this.eta = eta;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

}

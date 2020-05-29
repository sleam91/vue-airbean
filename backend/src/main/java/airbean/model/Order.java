package airbean.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

	@Id
	private int orderNo;
	private String date;
	@ManyToMany
	@JoinTable(joinColumns=@JoinColumn(name = "order_No", referencedColumnName = "orderNo"),
			inverseJoinColumns = @JoinColumn(name = "item_id", referencedColumnName = "id"))
	private List<MenuItem> items;
	private String eta;
	private int total;

	public Order() {
	}

	public Order(int orderNo, String date, List<MenuItem> items, String eta, int total) {
		super();
		this.orderNo = orderNo;
		this.date = date;
		this.items = items;
		this.eta = eta;
		this.total = total;
	}

	public int getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(int orderNo) {
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

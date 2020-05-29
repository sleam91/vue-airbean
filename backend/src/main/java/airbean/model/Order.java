package airbean.model;

//import java.util.List;

//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

	@Id
	private int orderNo;
	private String date;
//	@ManyToMany(cascade = CascadeType.PERSIST)
//	@JoinTable(joinColumns=@JoinColumn(name = "orderNo", referencedColumnName = "orderNo"),
//			inverseJoinColumns = @JoinColumn(name = "menuItemId", referencedColumnName = "id"))
//	private List<MenuItem> menuItems;
	private String eta;
	private int total;

	public Order() {
	}

	public Order(int orderNo, String date, String eta, int total) {
		super();
		this.orderNo = orderNo;
		this.date = date;
//		this.menuItems = menuItems;
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

//	public List<MenuItem> getMenuItems() {
//		return menuItems;
//	}
//
//	public void setItems(List<MenuItem> menuItems) {
//		this.menuItems = menuItems;
//	}

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

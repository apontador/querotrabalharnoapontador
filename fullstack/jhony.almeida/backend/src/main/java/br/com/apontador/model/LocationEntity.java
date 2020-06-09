package br.com.apontador.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "location")

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LocationEntity extends PanacheEntityBase implements Location {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String address;
	private String phone;

	public static LocationEntity ofLocation(Location location) {
		return new LocationEntity(null, location.getName(), location.getAddress(), location.getPhone());
	}
}

package br.com.apontador.controller;

import br.com.apontador.model.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LocationDTO implements Location {
	private String name;
	private String address;
	private String phone;
}

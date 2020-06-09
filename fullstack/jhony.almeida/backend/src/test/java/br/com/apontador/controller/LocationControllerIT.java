package br.com.apontador.controller;

import br.com.apontador.model.Location;

import io.quarkus.test.common.QuarkusTestResource;
import io.quarkus.test.junit.QuarkusTest;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.CoreMatchers.is;

import javax.transaction.Transactional;
import javax.ws.rs.core.MediaType;

@QuarkusTest
@QuarkusTestResource(DatabaseResource.class)
@Transactional
@TestMethodOrder(OrderAnnotation.class)
public class LocationControllerIT {

    @Test
	@Order(1)
    public void testGetEndpoint() {
    	given()
				.when().get("/locations")
				.then()
				.statusCode(200)
				.body("items.size()", is(2),
						"items.id", contains(10001, 10002),
						"items.name", contains("Hot-Dog do Pedro", "Clínica Master"),
						"items.address", contains("Rua Limoeiro, 75, Itajaí - SC", "Rua Laranjeiras, 120, Balneário Camboriú - SC"),
						"items.phone", contains("(47)98837-2134", "(47)99231-8889"));
    }

	@Test
	@Order(2)
	public void testGetFilterByNameEndpoint() {
		given()
				.when().get("/locations?name=pedro")
				.then()
				.statusCode(200)
				.body("items.size()", is(1),
						"items.name", contains("Hot-Dog do Pedro"),
						"items.address", contains("Rua Limoeiro, 75, Itajaí - SC"));
	}

	@Test
	@Order(3)
	public void testPostEndpoint() {
    	final Location newLocation = new LocationDTO(
    			"Farmácia Beta",
				"Rua Beta, 123, São Paulo - SP",
				"(11)99933-4455");

    	given()
				.header("Content-type", MediaType.APPLICATION_JSON)
				.body(newLocation)
				.when().post("/locations")
				.then()
				.statusCode(200);

		var expectedNames = new String[] { "Farmácia Beta", "Hot-Dog do Pedro", "Clínica Master" };
		var expectedPhones = new String[] { "(11)99933-4455", "(47)98837-2134", "(47)99231-8889" };
		var expectedAddresses = new String[] {
				"Rua Beta, 123, São Paulo - SP",
				"Rua Limoeiro, 75, Itajaí - SC",
				"Rua Laranjeiras, 120, Balneário Camboriú - SC" };

		given()
				.when().get("/locations")
				.then()
				.statusCode(200)
				.body("items.size()", is(3),
						"items.name", contains(expectedNames),
						"items.address", contains(expectedAddresses),
						"items.phone", contains(expectedPhones));
	}

}
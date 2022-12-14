package Begin.rentACar.webApi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Begin.rentACar.business.abstracts.BrandService;


@RestController //annotation olarak adlandırılır
@RequestMapping("/api/brands")

public class BrandsController {
	private BrandService brandService;
	
	@Autowired
	public BrandsController(BrandService brandService) {
		this.brandService = brandService;
	}
	
	@GetMapping("/getAll")
	public List<Brand> getAll(){
		return brandService.getAll();
	}
	
}

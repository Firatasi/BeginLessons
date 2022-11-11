package Begin.rentACar.dataAccess.abstracts;

import java.util.List;

import org.springframework.stereotype.Repository;

import Begin.rentACar.entities.concretes.Brand;

public interface BrandRepository {
	List<Brand> getAll();
	
}

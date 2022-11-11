package Begin.rentACar.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Begin.rentACar.business.abstracts.BrandService;
import Begin.rentACar.dataAccess.abstracts.BrandRepository;
import Begin.rentACar.entities.concretes.Brand;


	@Service
public class BrandManager implements BrandService {
	private BrandRepository brandRepository;
	
	
	@Autowired
	public BrandManager(BrandRepository brandRepository) {
		this.brandRepository = brandRepository;
	}



	@Override
	public List<Brand> getAll() {
		// Work Rules --> İş Kuralları
		return brandRepository.getAll();
	}

}

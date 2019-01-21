package backend.archive.controllers;


import backend.archive.entities.Cd;
import backend.archive.repositories.CdRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController

public class CdController {
    private static final String ENTITY_NAME = "cd";
    private final Logger log = LoggerFactory.getLogger(CdController.class);
    @Autowired
    private CdRepository cdRepository;

    @GetMapping("/cd")
    public List<Cd> getallcd() {
        return cdRepository.findAll();
    }

    @PostMapping("/cd")
    public void addcd(@RequestBody Cd cd) {
        cdRepository.save(cd);
    }

    @GetMapping("/cd/{id}")
    public Optional<Cd> getcd(@PathVariable (value = "id") Long id){
        return cdRepository.findById(id);
    }

    @PutMapping("/cd")
    public void update(@RequestBody Cd cd) {
        cdRepository.save(cd);
    }

    @DeleteMapping("/cd/{id}")
    public void delete(@PathVariable Long id ){
        cdRepository.deleteById(id);
    }
}


package storeServer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class Controller {

    @Autowired
    AppRepository repo;

    @PostMapping("/store")
    public void store(TicketArrays ticketArrays) {
        repo.insert(ticketArrays);
    }

    @GetMapping("/retrieve")
    public ArrayList<TicketArrays> retrieve() {
        return repo.retrieve();
    }

    @DeleteMapping("/delete")
    public void delete() {
        repo.deleteAll();
    }
}

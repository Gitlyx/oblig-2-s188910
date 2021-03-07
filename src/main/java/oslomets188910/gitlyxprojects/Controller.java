package oslomets188910.gitlyxprojects;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


@RestController
public class Controller {

    private final ArrayList<TicketObject> ticketList = new ArrayList<>();

    @PostMapping("/post")
    public void store(TicketObject tickets) {
        ticketList.add(tickets);
    }

    @GetMapping("/get")
    public ArrayList<TicketObject> get() {
        return ticketList;
    }

    @DeleteMapping("/delete")
    public void delete() {
        ticketList.clear();
    }
}

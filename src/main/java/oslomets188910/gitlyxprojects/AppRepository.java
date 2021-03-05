package oslomets188910.gitlyxprojects;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class AppRepository {
    private final ArrayList<TicketBank> ticketList = new ArrayList<>();

    public void insert(TicketBank ticket) {
        ticketList.add(ticket);
    }

    public ArrayList<TicketBank> retrieve() {
        return ticketList;
    }

    public void deleteAll() {
        ticketList.clear();
    }

}

package storeServer;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class AppRepository {
    private static final ArrayList<TicketArrays> ticketList = new ArrayList<>();

    public void insert(TicketArrays ticket) {
        ticketList.add(ticket);
    }
    public ArrayList<TicketArrays> retrieve() {
        return ticketList;
    }
    public void deleteAll() {
        ticketList.clear();
    }

}

package com.stackroute.eplay.ticketservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.eplay.ticketservice.domain.TicketedEvent;
import com.stackroute.eplay.ticketservice.exception.TicketedEventAlreadyExistException;
import com.stackroute.eplay.ticketservice.repositories.TicketedEventRepository;

@Service
public class TicketedEventServiceImpl implements TicketedEventService{
	TicketedEventRepository ticketedEventRepository;
	
	@Autowired
	public TicketedEventServiceImpl(TicketedEventRepository ticketedEventRepository) {
		this.ticketedEventRepository = ticketedEventRepository;
	}

	@Override
	public TicketedEvent saveTicketedEvent(TicketedEvent ticketedEvent) throws TicketedEventAlreadyExistException {
		TicketedEvent te = getTicketedEventById(ticketedEvent.getId());
		if(te== null) {
			te = ticketedEventRepository.save(ticketedEvent);
			return te;	
		}
		throw new TicketedEventAlreadyExistException("This event already exists");
		}

	@Override
	public List<TicketedEvent> getAllTicketedEvent() {
		return ticketedEventRepository.findAll();
	}

	@Override
	public TicketedEvent getTicketedEventById(int ticketedEventId) {
	TicketedEvent ticketedEvent = ticketedEventRepository.getTicketedEventById(ticketedEventId);
	return ticketedEvent;
	}
}
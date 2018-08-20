package com.stackroute.eplay.recommendationservice.domain;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class MovieKafka {
    
    @Id
    private int id;
    private String name;
    private String poster;
    private String genre;
    private String language;
    private String reviews;
    private String cast;
    private String description;
    private int rating;
    private int duration;
    private Date releaseDate;
}
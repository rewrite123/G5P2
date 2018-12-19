drop database if exists goalsdb;
create database goalsdb;

use goalsdb;

create table users (
	id int auto_increment unique primary key not null,
    username varchar(255) unique not null,
    password varchar(255) not null
);

create table goals(
	id int auto_increment unique primary key not null,
    title varchar(25) not null,
    category varchar(25) not null default "personal",
    descript varchar(255) not null,
    completion int not null default 0,
    start_date date not null,
    end_date date not null,
    last_completed date,
    completed_instances int default 0,
    owner int not null, foreign key(owner) references users(id),
    conspirator int default null, foreign key(conspirator) references users(id)
);

create view links as (
	select goals.owner as goal_owner, goals.conspirator as goal_conspirator, goals.id as goal_id
    from goals, users
	where goals.owner = users.id
);